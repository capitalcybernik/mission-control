# TikTok Slideshow Content Prototype

Complete workflow for creating viral CMMC/cybersecurity slideshow content for TikTok.

## Overview

This prototype automates the creation of 6-slide TikTok slideshows using:
- Viral LinkedIn post patterns adapted for visual slides
- Capital Cyber brand voice and messaging
- OpenAI DALL-E 3 for image generation
- Pillow for text overlays
- Upload-Post API for TikTok publishing

## Color Palette

- **Deep Forest Green**: `#1B4332` (primary brand color)
- **Warm Cream**: `#FAF3E0` (text on dark slides)
- **Burnt Orange**: `#CC5500` (accent color)
- **Charcoal**: `#2D2D2D` (shadows, dark text)

## 6-Slide Structure

Based on the viral LinkedIn pattern:

1. **Hook** - Bold, confrontational, stops the scroll
2. **Problem** - Elaborate on the pain point/consequences
3. **Discovery** - Reveal key insight or data point
4. **Transformation 1** - First benefit or solution element
5. **Transformation 2** - Social proof, case study, or second benefit
6. **CTA** - Clear call to action driving to capital-cyber.com

## Files

### `generate_slideshow.py`
Main slideshow generation script using OpenAI DALL-E 3.

**Usage:**
```bash
python generate_slideshow.py "CMMC Phase 2 starts November 2026"
```

**What it does:**
- Takes topic/hook as command line argument
- Generates 6 portrait images (1024x1792) using OpenAI DALL-E 3
- Adds text overlays with proper formatting (6.5% font size, 30% from top)
- Uses locked scene description with style variations per slide
- Outputs numbered images in `output/` directory

### `generate_slideshow_simple.py`
Fast slideshow generation script using gradient backgrounds (for testing/speed).

**Usage:**
```bash
python generate_slideshow_simple.py "CMMC Phase 2 starts November 2026"
```

**What it does:**
- Same as above but uses gradient backgrounds instead of DALL-E
- Much faster generation (seconds vs. minutes)
- Good for testing workflow and rapid prototyping
- Still produces professional-looking slides

**Requirements:**
```bash
pip install pillow requests
```

### `hooks.md`
Library of 20 pre-written hooks targeting manufacturing and construction contractors.

**Categories:**
- Fear/Urgency (CMMC deadlines, contract loss)
- Educational (explaining compliance requirements)
- Insider Knowledge (DOD timelines, audit insights)
- Success/Transformation (case studies, results)

**Example hooks:**
- "The Pentagon just changed the rules."
- "Your GSA contract has a new requirement you don't know about."
- "November 2026 is closer than you think."

### `post_to_tiktok.py`
Automated posting script using Upload-Post API.

**Usage:**
```bash
python post_to_tiktok.py output/ "CMMC Phase 2" "The Pentagon just changed the rules"
```

**What it does:**
- Uploads slideshow images to TikTok as drafts
- Auto-generates engaging captions
- Adds relevant hashtags (#CMMC, #cybersecurity, etc.)
- Posts to Capital-Cyber profile
- Saves as draft for review before publishing

## Quick Start Workflow

1. **Generate slideshow:**
   ```bash
   cd /root/.openclaw/workspace/projects/tiktok-slideshow-prototype
   python generate_slideshow.py "Your hook topic here"
   ```

2. **Review generated images:**
   ```bash
   ls output/
   # slide_01_hook.png, slide_02_problem.png, etc.
   ```

3. **Post to TikTok (as draft):**
   ```bash
   python post_to_tiktok.py output/ "Your Topic" "Your Hook Line"
   ```

4. **Review and publish:**
   - Login to TikTok
   - Review draft slideshow
   - Add any final touches
   - Publish when ready

## Content Guidelines

### Text Formatting
- **Manual line breaks every 4-6 words**
- **No dashes in text content** (use periods or commas)
- **No AI jargon or corporate speak**
- **Conversational tone like texting a friend**

### Visual Style
- **Portrait format only** (1024x1536)
- **Text positioned 30% from top**
- **Drop shadows for readability**
- **Color scheme follows brand palette**

### Messaging Strategy
- **Start with fear/urgency** (CMMC deadlines)
- **Provide educational value** (what CMMC actually means)
- **Include social proof** (client results, statistics)
- **End with clear CTA** (free gap assessment)

## API Keys & Configuration

### OpenAI API
- **Key**: Stored in script (sk-proj-...)
- **Model**: DALL-E 3
- **Size**: 1024x1536 (portrait)
- **Quality**: Standard

### Upload-Post API
- **Base URL**: https://api.upload-post.com/api
- **Profile**: Capital-Cyber
- **Key**: Stored in script (eyJhbGci...)

## Testing

A test slideshow was generated for "CMMC Phase 2 starts November 2026":

```bash
python generate_slideshow.py "CMMC Phase 2 starts November 2026"
```

Expected output:
- 6 PNG files in `output/` directory
- Each with proper text overlay
- Ready for TikTok upload

## Troubleshooting

### Common Issues

**"No images generated"**
- Check OpenAI API key
- Verify internet connection
- Check API quota/billing

**"Text not visible"**
- Font may not be available
- Check font path in script
- Fallback to default font

**"Upload failed"**
- Check Upload-Post API key
- Verify Capital-Cyber profile is active
- Check image file sizes

### File Locations
- **Generated images**: `output/slide_*.png`
- **Logs**: Check console output for errors
- **API responses**: Printed to console for debugging

## Best Practices

### Hook Selection
- Rotate hooks to avoid audience fatigue
- Test different fear vs. educational angles
- Track which hooks perform best
- Update hooks based on current events

### Content Calendar
- Post 2-3 slideshows per week
- Mix educational and urgency content
- Align with industry events and deadlines
- Batch create content in advance

### Performance Tracking
- Monitor TikTok analytics for each slideshow
- A/B test different hooks and CTAs
- Track website traffic from TikTok
- Measure lead generation from social content

## Future Enhancements

- **Automated hook rotation** from hooks.md
- **Performance analytics integration**
- **Batch processing multiple topics**
- **Custom font and styling options**
- **Instagram Reels adaptation**
- **LinkedIn carousel integration**

---

Built for Capital Cyber's cybersecurity marketing campaigns targeting CMMC compliance for manufacturing and defense contractors.