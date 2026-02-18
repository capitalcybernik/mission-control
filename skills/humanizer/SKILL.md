# AI Writing Humanizer Skill

Strips AI writing patterns from text before sending to users.

## Overview

This skill automatically detects and removes telltale signs of AI-generated text, making output sound more natural and human. It runs automatically on longer user-facing prose.

## When to Use

- Automatically applied to any message >100 words going to users
- User-facing documentation, emails, blog posts
- Any text where "sounding human" matters

## When NOT to Use

- Code blocks (preserved as-is)
- Technical specifications
- Internal notes/JSON/YAML
- Already reviewed/edited content marked with `--no-humanize`

## Detection Patterns

### 1. AI Vocabulary (Overused Words)
Words that spiked in usage after 2023:
- Additionally, crucial, delve, emphasize, enduring, enhance
- Foster, garner, highlight, interplay, intricate, key
- Landscape, pivotal, showcase, tapestry, testament
- Underscore, valuable, vibrant, serves as, stands as
- Furthermore, moreover, consequently, notably, significantly

### 2. Structural Patterns
- **Em dashes** — Replace with commas or periods
- **Rule of three** — "X, Y, and Z" lists → vary or simplify
- **Stock phrases** — "At the end of the day", "It's worth noting"
- **Performed authenticity** — "Let's dive in", "Here's the deal"

### 3. Grammar Tells
- **Avoided copulatives** — "serves as" → "is", "boasts" → "has"
- **Negative parallelisms** — "Not just X, but Y" → simplify
- **False ranges** — "From X to Y" where no scale exists
- **Title case in headings** — Convert to sentence case

### 4. Content Patterns
- **Undue emphasis** — "crucial", "pivotal", "significant" without justification
- **Superficial analysis** — "highlighting", "underscoring" + vague attributions
- **Promotional puffery** — "vibrant", "rich tapestry", "nestled in"
- **Outline conclusions** — "Despite challenges..." formulaic endings

## Usage

```bash
# Humanize a file
humanize input.txt > output.txt

# Humanize with verbose logging
humanize --verbose input.txt

# Check what would change (dry run)
humanize --dry-run input.txt

# Humanize stdin
echo "Additionally, this is crucial..." | humanize
```

## Programmatic Usage

```javascript
const { humanize } = require('./humanizer');

const aiText = "Furthermore, it's worth noting that...";
const humanText = humanize(aiText);
```

## Regression Tests

Run tests to catch patterns that keep returning:

```bash
npm test
```

Tests check:
- Known AI phrases are stripped
- Em dashes converted
- Word overuse detected
- No false positives on legitimate text

## Configuration

Edit `humanizer-config.json` to adjust:
- Sensitivity thresholds
- Word replacement dictionaries
- Pattern severity levels
- Auto-run word count threshold

## Output Markers

Humanized text may include markers:
- `[humanized]` — Text was processed
- `[flag: ai-pattern]` — Pattern detected and removed

## References

Based on Wikipedia's "Signs of AI writing" guide and research on LLM textual patterns (2023-2025).

---

**Last updated:** 2026-02-18  
**Pattern database version:** 1.0
