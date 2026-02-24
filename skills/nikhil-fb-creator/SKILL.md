# Nikhil Personal FB Post Creator

Generates authentic, conversational Facebook posts in Nikhil's voice.

## Voice Characteristics

**Tone:** Conversational, vulnerable, action-oriented  
**Style:** Real observations, no corporate speak, wisdom mixed with honesty  
**Length:** Short (100-200 words typical), punchy, skimmable

## Post Patterns

### Pattern 1: The Contrast Lesson
**Structure:** Personal moment → Adult vs Kid thinking → Truth about action

**Example flow:**
1. Open with a specific moment (9-year-old's comment, overheard conversation)
2. Contrast simple/natural approach with overcomplicated adult approach
3. Land on the lesson: momentum beats preparation, action beats optimization
4. End with reflective truth about playing the game vs protecting potential

**Voice markers:**
- Ellipsis for pause (...) and rhythm
- Rhetorical questions
- "It made me realize..."
- Contractions (don't, can't, it's)
- Short punchy sentences mixed with longer reflections

### Pattern 2: The Win List
**Structure:** Specific wins → Pattern/philosophy → Invitation

**Example flow:**
1. Lead with timeframe ("This month...", "Yesterday...", "Today...")
2. List 3-5 concrete wins with specifics (locations, numbers, client types)
3. Tie to broader lesson (consistency, action, showing up)
4. Soft CTA inviting others in

**Voice markers:**
- Bullet points or dashes for wins
- Specifics: "7 locations in VA", "$3,400", "Oral Surgeon in TX"
- Casual asides or humor ("And no, DOGE did not ask me to write this")
- Capitalization for emphasis ("TWO", "PAID")

### Pattern 3: The Day In Life
**Structure:** Today/Yesterday snapshot → Mix of wins and operations → Energy check

**Example flow:**
1. "Today at Capital Cyber" or "Yesterday..."
2. 4-6 items showing range (sales, ops, strategy, personal growth)
3. Optional humor or real moment
4. End on momentum note

**Voice markers:**
- Colons after lead-in
- Mix of business and personal ("Spoke with a friend/mentor, had 2 breakthroughs")
- Shows the full spectrum of founder life
- Sometimes self-deprecating humor

## Writing Rules

### DO:
- Start with a specific moment or concrete list
- Use real numbers and locations
- Show vulnerability (breakthroughs, struggles, realizations)
- Write like you're talking to a friend at coffee
- End with an insight or soft invitation
- Use contrast (kids vs adults, simple vs complex)

### DON'T:
- Corporate speak ("leverage", "synergy", "optimize")
- Generic motivation without specifics
- Over-explaining
- Perfect grammar if it kills the flow
- Humble-bragging without the lesson

## Format Conventions

**Line breaks:** Use them for rhythm. Short paragraphs.  
**Capitalization:** Strategic emphasis on key words  
**Punctuation:** Ellipsis for thought pauses, em dashes for asides (but avoid per style rules), periods for punch  
**Lists:** Use dashes or line breaks, not formal bullets

## Example Templates

### Template: The Contrast Lesson

"[Specific moment].

No [overthinking thing]. No [optimization thing]. No [resistance thing]. Just... [simple action].

It struck me how [simple their approach was]... ...and how [complicated adults make it].

We don't just [do the thing]. We [overcomplication 1]. We [overcomplication 2]. We [overcomplication 3].

[Subject]? They just [simple action]. [Second simple action]. [Third simple action].

It made me realize something interesting...

[The lesson about complexity vs simplicity]. Why? Because [the truth about hiding behind preparation].

[Subject] isn't trying to [protect ego thing]. They're just [playing the game].

And I think somewhere along the way… we forget how to do that."

### Template: The Win List

"[Timeframe] reminded me why [core philosophy].

[Win 1 with specifics]
[Win 2 with specifics]
[Win 3 with specifics]
[Win 4 with specifics]

It's not just [surface reason]. It's [deeper reason 1], [deeper reason 2], and [deeper reason 3].

If you're [relevant situation], [category] is [the truth].

[Soft CTA / invitation]"

### Template: The Day In Life

"[Today/Yesterday] at Capital Cyber:

-[Win/activity 1]
-[Win/activity 2]
-[Win/activity 3]
-[Win/activity 4]
-[Win/activity 5 with personal note]

[Optional humor aside]."

## Usage

```bash
# Generate post from topic
node fb-post-creator.js --pattern=contrast --topic="client conversation about IT"

# Generate from wins list
node fb-post-creator.js --pattern=wins --wins="file.txt"

# Day in life from today's activities
node fb-post-creator.js --pattern=day --activities="activity1,activity2,activity3"
```

## Topic to Post Mapping

| Input | Pattern | Output Style |
|-------|---------|--------------|
| Child observation, simple wisdom | Contrast Lesson | Philosophical, reflective |
| Monthly wins, client signings | Win List | Celebratory, momentum-focused |
| Daily activities, mixed wins | Day In Life | Real, behind-the-scenes |
| Business realization | Contrast Lesson | Insightful, vulnerable |
| Referral partner success | Win List | Grateful, community-focused |

## Quality Checks

Before delivering, verify:
- [ ] Opens with specific moment or concrete list
- [ ] No corporate buzzwords
- [ ] Shows real numbers/locations if applicable
- [ ] Ends with insight or soft invitation
- [ ] Sounds like Nikhil wrote it (read aloud test)
- [ ] Under 200 words ideally
- [ ] Rhythm works (short and long sentences mixed)

---

**Created:** 2026-02-18  
**Based on:** Analysis of 4+ high-performing Nikhil FB posts  
**Purpose:** Generate authentic, conversational content that builds personal brand while driving business results
