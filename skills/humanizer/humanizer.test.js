/**
 * Regression Tests for AI Writing Humanizer
 * Ensures patterns that keep returning are caught
 */

const { humanize } = require('./humanizer');

// Test cases for known AI patterns
const testCases = [
  {
    name: 'Stock phrase: at the end of the day',
    input: 'At the end of the day, we need to decide.',
    expectChanged: true,
    expectFlags: [],
    notExpect: /at the end of the day/i,
  },
  {
    name: 'Stock phrase: it\'s worth noting',
    input: "It's worth noting that this is important.",
    expectChanged: true,
    notExpect: /it's worth noting/i,
  },
  {
    name: 'Em dash conversion',
    input: 'This is important — really important — for us.',
    expectChanged: true,
    expectFlags: ['em_dash'],
  },
  {
    name: 'Copulative avoidance: serves as',
    input: 'He serves as a manager.',
    expectChanged: true,
    notExpect: /serves as/i,
  },
  {
    name: 'Copulative avoidance: boasts',
    input: 'The company boasts a strong team.',
    expectChanged: true,
    notExpect: /boasts/i,
  },
  {
    name: 'Puffery: nestled in',
    input: 'The town is nestled in the mountains.',
    expectChanged: true,
    notExpect: /nestled/i,
  },
  {
    name: 'Weasel words: experts argue',
    input: 'Experts argue that this is true.',
    expectChanged: true,
    notExpect: /experts argue/i,
  },
  {
    name: 'Superficial analysis: highlighting',
    input: 'The report was published, highlighting key issues.',
    expectChanged: true,
  },
  {
    name: 'AI vocabulary: crucial',
    input: 'This is crucial for success.',
    expectFlags: ['ai_vocab:crucial'],
  },
  {
    name: 'AI vocabulary: additionally',
    input: 'Additionally, we need to consider this.',
    expectFlags: ['ai_vocab:additionally'],
  },
  {
    name: 'Rule of three detection',
    input: 'It was fast, easy, and simple.',
    expectFlags: ['rule_of_three'],
  },
  {
    name: 'No false positives on legitimate text',
    input: 'The cat sat on the mat.',
    expectChanged: false,
    changeCount: 0,
  },
  {
    name: 'Preserves code blocks',
    input: '```\nconst x = 1;\n```',
    expectChanged: false,
    changeCount: 0,
  },
  {
    name: 'Multiple AI patterns',
    input: 'Furthermore, it is worth noting that this crucial, intricate system serves as a testament to our commitment.',
    expectChanged: true,
    expectFlags: ['ai_vocab:additionally', 'ai_vocab:crucial', 'ai_vocab:intricate', 'ai_vocab:testament'],
    minChanges: 3,
  },
];

// Run tests
function runTests() {
  console.log('Running Humanizer Regression Tests...\n');
  
  let passed = 0;
  let failed = 0;
  
  testCases.forEach((test, idx) => {
    const result = humanize(test.input);
    const errors = [];
    
    // Check if changed (when expected)
    if (test.expectChanged !== undefined) {
      if (test.expectChanged && !result.wasChanged) {
        errors.push('Expected changes but none made');
      }
      if (!test.expectChanged && result.wasChanged) {
        errors.push('Expected no changes but changes were made');
      }
    }
    
    // Check for expected flags
    if (test.expectFlags) {
      test.expectFlags.forEach(flag => {
        if (!result.flags.includes(flag)) {
          errors.push(`Expected flag "${flag}" not found`);
        }
      });
    }
    
    // Check for patterns that should NOT be present
    if (test.notExpect) {
      if (test.notExpect.test(result.text)) {
        errors.push(`Forbidden pattern still present: ${test.notExpect}`);
      }
    }
    
    // Check minimum change count
    if (test.minChanges && result.changeCount < test.minChanges) {
      errors.push(`Expected at least ${test.minChanges} changes, got ${result.changeCount}`);
    }
    
    // Check exact change count
    if (test.changeCount !== undefined && result.changeCount !== test.changeCount) {
      errors.push(`Expected ${test.changeCount} changes, got ${result.changeCount}`);
    }
    
    // Report result
    if (errors.length === 0) {
      console.log(`✓ ${test.name}`);
      passed++;
    } else {
      console.log(`✗ ${test.name}`);
      errors.forEach(e => console.log(`    • ${e}`));
      failed++;
    }
  });
  
  console.log(`\n${'='.repeat(40)}`);
  console.log(`Results: ${passed} passed, ${failed} failed`);
  console.log(`${'='.repeat(40)}`);
  
  return failed === 0;
}

// Pattern frequency tracker
function trackPatternFrequency() {
  // This would track how often patterns appear over time
  // For now, just a placeholder for future implementation
  console.log('\nPattern frequency tracking not yet implemented.');
  console.log('Future: Track AI pattern recurrence across sessions');
}

// Run if called directly
if (require.main === module) {
  const success = runTests();
  trackPatternFrequency();
  process.exit(success ? 0 : 1);
}

module.exports = { runTests, testCases };
