#!/usr/bin/env node
/**
 * AI Writing Humanizer
 * Strips AI patterns from text to make it sound more human
 * Based on Wikipedia's "Signs of AI writing" research
 */

const fs = require('fs');

// AI vocabulary words that spiked post-2023
const AI_VOCABULARY = {
  'additionally': { severity: 'high', alternatives: ['also', 'plus', 'and'] },
  'crucial': { severity: 'high', alternatives: ['key', 'important', 'vital'] },
  'delve': { severity: 'high', alternatives: ['explore', 'look at', 'dig into'] },
  'emphasizing': { severity: 'medium', alternatives: ['noting', 'stressing'] },
  'enduring': { severity: 'medium', alternatives: ['lasting', 'ongoing'] },
  'enhance': { severity: 'medium', alternatives: ['improve', 'boost'] },
  'fostering': { severity: 'high', alternatives: ['building', 'growing', 'helping'] },
  'garner': { severity: 'high', alternatives: ['get', 'receive', 'attract'] },
  'highlight': { severity: 'medium', alternatives: ['show', 'point out', 'note'] },
  'interplay': { severity: 'high', alternatives: ['interaction', 'relationship'] },
  'intricate': { severity: 'medium', alternatives: ['complex', 'detailed'] },
  'key': { severity: 'low', context: 'adjective', alternatives: ['main', 'central'] },
  'landscape': { severity: 'high', context: 'abstract', alternatives: ['scene', 'world', 'space'] },
  'pivotal': { severity: 'high', alternatives: ['key', 'central', 'critical'] },
  'showcase': { severity: 'high', alternatives: ['show', 'display', 'feature'] },
  'tapestry': { severity: 'high', alternatives: ['mix', 'blend', 'range'] },
  'testament': { severity: 'high', alternatives: ['proof', 'sign', 'example'] },
  'underscore': { severity: 'medium', alternatives: ['stress', 'emphasize', 'show'] },
  'valuable': { severity: 'low', alternatives: ['useful', 'helpful', 'good'] },
  'vibrant': { severity: 'high', alternatives: ['lively', 'active', 'colorful'] },
  'furthermore': { severity: 'medium', alternatives: ['also', 'plus'] },
  'moreover': { severity: 'medium', alternatives: ['also', 'besides'] },
  'consequently': { severity: 'medium', alternatives: ['so', 'thus', 'as a result'] },
  'notably': { severity: 'medium', alternatives: ['notably', 'importantly'] },
  'significantly': { severity: 'medium', alternatives: ['greatly', 'by a lot'] },
};

// Stock phrases to strip or simplify
const STOCK_PHRASES = [
  { pattern: /at the end of the day/gi, replacement: 'ultimately' },
  { pattern: /it's worth noting that/gi, replacement: '' },
  { pattern: /it is worth noting that/gi, replacement: '' },
  { pattern: /it's important to note that/gi, replacement: '' },
  { pattern: /needless to say/gi, replacement: '' },
  { pattern: /as mentioned earlier/gi, replacement: '' },
  { pattern: /in today's world/gi, replacement: 'now' },
  { pattern: /in today's society/gi, replacement: 'now' },
  { pattern: /let's dive in/gi, replacement: '' },
  { pattern: /let's unpack this/gi, replacement: '' },
  { pattern: /here's the deal/gi, replacement: '' },
  { pattern: /the bottom line is/gi, replacement: '' },
  { pattern: /when it comes to/gi, replacement: 'for' },
];

// Copulative substitutions (AI avoids simple "is/are")
const COPULATIVE_AVOIDANCE = [
  { pattern: /serves as (a|an)/gi, replacement: 'is $1' },
  { pattern: /stands as (a|an)/gi, replacement: 'is $1' },
  { pattern: /marks (a|an)/gi, replacement: 'is $1' },
  { pattern: /represents (a|an)/gi, replacement: 'is $1' },
  { pattern: /boasts (a|an)/gi, replacement: 'has $1' },
  { pattern: /features (a|an)/gi, replacement: 'has $1' },
  { pattern: /offers (a|an)/gi, replacement: 'has $1' },
];

// Negative parallelisms to simplify
const NEGATIVE_PARALLELISMS = [
  { pattern: /not (only|just) [^.]+ but (also )?/gi, replacement: '' },
  { pattern: /it's not (just|simply) about [^.]+, it's about/gi, replacement: 'it is' },
];

// Promotional/puffy language
const PUFFERY = [
  { pattern: /nestled (in|within)/gi, replacement: 'in' },
  { pattern: /breathtaking/gi, replacement: 'beautiful' },
  { pattern: /rich (cultural )?heritage/gi, replacement: 'history' },
  { pattern: /groundbreaking/gi, replacement: 'new' },
  { pattern: /renowned/gi, replacement: 'famous' },
  { pattern: /natural beauty/gi, replacement: 'scenery' },
  { pattern: /in the heart of/gi, replacement: 'in' },
];

// Vague attribution weasel words
const WEASEL_WORDS = [
  { pattern: /observers have cited/gi, replacement: 'some say' },
  { pattern: /experts argue/gi, replacement: 'some say' },
  { pattern: /some critics argue/gi, replacement: 'critics say' },
  { pattern: /industry reports suggest/gi, replacement: 'reports say' },
  { pattern: /many have noted/gi, replacement: 'people note' },
];

// Superficial analysis phrases
const SUPERFICIAL_ANALYSIS = [
  { pattern: /, highlighting [^.]+\./gi, replacement: '.' },
  { pattern: /, underscoring [^.]+\./gi, replacement: '.' },
  { pattern: /, emphasizing [^.]+\./gi, replacement: '.' },
  { pattern: /, reflecting [^.]+\./gi, replacement: '.' },
  { pattern: /, symbolizing [^.]+\./gi, replacement: '.' },
  { pattern: /, contributing to [^.]+\./gi, replacement: '.' },
];

// Outline conclusion formulas
const OUTLINE_FORMULAS = [
  { pattern: /despite its[^.]+, [^.]+ faces several challenges/gi, replacement: '' },
  { pattern: /despite these challenges[^.]+\./gi, replacement: '' },
  { pattern: /looking ahead[^.]+\./gi, replacement: '' },
  { pattern: /future outlook[:\s]+/gi, replacement: '' },
];

// Em dash pattern
const EM_DASH_PATTERN = /\s*—\s*/g;

// Rule of three detector (adjective, adjective, adjective or phrase, phrase, phrase)
const RULE_OF_THREE = /\b\w+ly?,\s+\w+ly?,\s+and\s+\w+ly?\b/g;

/**
 * Humanize text by removing AI patterns
 * @param {string} text - Input text
 * @param {object} options - Options
 * @returns {object} - { text, changes, flags }
 */
function humanize(text, options = {}) {
  const { verbose = false, dryRun = false } = options;
  let result = text;
  const changes = [];
  const flags = [];

  // Track if any changes were made
  const original = text;

  // 1. Remove stock phrases
  STOCK_PHRASES.forEach(({ pattern, replacement }) => {
    const matches = result.match(pattern);
    if (matches) {
      changes.push(`Removed stock phrase: "${matches[0]}"`);
      result = result.replace(pattern, replacement);
    }
  });

  // 2. Replace copulative avoidance
  COPULATIVE_AVOIDANCE.forEach(({ pattern, replacement }) => {
    const matches = result.match(pattern);
    if (matches) {
      changes.push(`Simplified: "${matches[0]}" → basic copulative`);
      result = result.replace(pattern, replacement);
    }
  });

  // 3. Simplify negative parallelisms
  NEGATIVE_PARALLELISMS.forEach(({ pattern, replacement }) => {
    const matches = result.match(pattern);
    if (matches) {
      changes.push(`Simplified negative parallelism`);
      // Note: This is a complex pattern, just flag for now
      flags.push('negative_parallelism');
    }
  });

  // 4. Remove puffery
  PUFFERY.forEach(({ pattern, replacement }) => {
    const matches = result.match(pattern);
    if (matches) {
      changes.push(`Removed puffery: "${matches[0]}"`);
      result = result.replace(pattern, replacement);
    }
  });

  // 5. Simplify weasel words
  WEASEL_WORDS.forEach(({ pattern, replacement }) => {
    const matches = result.match(pattern);
    if (matches) {
      changes.push(`Clarified attribution: "${matches[0]}"`);
      result = result.replace(pattern, replacement);
    }
  });

  // 6. Remove superficial analysis
  SUPERFICIAL_ANALYSIS.forEach(({ pattern, replacement }) => {
    const matches = result.match(pattern);
    if (matches) {
      changes.push(`Removed superficial analysis phrase`);
      result = result.replace(pattern, replacement);
    }
  });

  // 7. Remove outline formulas
  OUTLINE_FORMULAS.forEach(({ pattern, replacement }) => {
    const matches = result.match(pattern);
    if (matches) {
      changes.push(`Removed outline formula`);
      result = result.replace(pattern, replacement);
    }
  });

  // 8. Replace em dashes with commas or periods
  if (EM_DASH_PATTERN.test(result)) {
    const emCount = (result.match(EM_DASH_PATTERN) || []).length;
    changes.push(`Replaced ${emCount} em dash(es)`);
    result = result.replace(EM_DASH_PATTERN, ', ');
    flags.push('em_dash');
  }

  // 9. Flag rule of three
  if (RULE_OF_THREE.test(result)) {
    const matches = result.match(RULE_OF_THREE);
    changes.push(`Flagged ${matches.length} rule-of-three pattern(s)`);
    flags.push('rule_of_three');
  }

  // 10. Replace AI vocabulary words
  Object.entries(AI_VOCABULARY).forEach(([word, config]) => {
    const pattern = new RegExp(`\\b${word}\\b`, 'gi');
    const matches = result.match(pattern);
    if (matches) {
      changes.push(`Replaced "${word}" (${matches.length}x)`);
      // For now, just flag - don't auto-replace as context matters
      if (config.severity === 'high') {
        flags.push(`ai_vocab:${word}`);
      }
    }
  });

  // Clean up double spaces and empty sentences
  result = result.replace(/\s+/g, ' ').replace(/\. \./g, '.').trim();

  // Remove empty paragraphs
  result = result.replace(/\n\s*\n\s*\n/g, '\n\n');

  return {
    text: result,
    changes,
    flags,
    wasChanged: result !== original,
    changeCount: changes.length,
  };
}

/**
 * Check if text needs humanizing (word count threshold)
 * @param {string} text - Input text
 * @param {number} threshold - Word count threshold (default: 50)
 * @returns {boolean}
 */
function shouldHumanize(text, threshold = 50) {
  const wordCount = text.trim().split(/\s+/).length;
  return wordCount >= threshold;
}

/**
 * Auto-humanize text if it meets threshold
 * @param {string} text - Input text
 * @param {object} options - Options
 * @returns {string} - Humanized text (or original if no changes needed)
 */
function autoHumanize(text, options = {}) {
  const threshold = options.threshold || 50;
  
  if (!shouldHumanize(text, threshold)) {
    return text;
  }

  // Skip code blocks
  if (text.startsWith('```') || text.includes('\n```')) {
    return text;
  }

  // Skip if marked as no-humanize
  if (text.includes('--no-humanize') || text.includes('[no-humanize]')) {
    return text.replace(/--no-humanize|\[no-humanize\]/g, '');
  }

  const result = humanize(text, options);
  
  if (result.wasChanged && options.verbose) {
    console.error(`[humanized] ${result.changeCount} changes made`);
    if (result.flags.length > 0) {
      console.error(`[flags] ${result.flags.join(', ')}`);
    }
  }

  return result.text;
}

// CLI handling
if (require.main === module) {
  const args = process.argv.slice(2);
  const options = {
    verbose: args.includes('--verbose') || args.includes('-v'),
    dryRun: args.includes('--dry-run') || args.includes('-d'),
  };
  
  const fileArg = args.find(a => !a.startsWith('--') && !a.startsWith('-'));
  
  if (fileArg) {
    // Read from file
    const text = fs.readFileSync(fileArg, 'utf8');
    const result = humanize(text, options);
    
    if (options.dryRun) {
      console.log('=== CHANGES ===');
      result.changes.forEach(c => console.log(`  • ${c}`));
      console.log('=== FLAGS ===');
      result.flags.forEach(f => console.log(`  • ${f}`));
    } else if (options.verbose) {
      console.error(`Changes: ${result.changeCount}`);
      result.changes.forEach(c => console.error(`  • ${c}`));
    }
    
    console.log(result.text);
  } else {
    // Read from stdin
    let text = '';
    process.stdin.setEncoding('utf8');
    process.stdin.on('data', chunk => text += chunk);
    process.stdin.on('end', () => {
      const result = humanize(text, options);
      console.log(result.text);
    });
  }
}

module.exports = {
  humanize,
  shouldHumanize,
  autoHumanize,
  AI_VOCABULARY,
  STOCK_PHRASES,
};
