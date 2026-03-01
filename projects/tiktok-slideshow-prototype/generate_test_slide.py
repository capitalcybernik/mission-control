#!/usr/bin/env python3
"""
Simple test script to generate one slide for testing
"""

import os
import requests
from PIL import Image, ImageDraw, ImageFont

# Image dimensions
WIDTH = 1024
HEIGHT = 1792

# Colors
COLORS = {
    "deep_green": "#1B4332",
    "cream": "#FAF3E0", 
    "burnt_orange": "#CC5500",
    "charcoal": "#2D2D2D"
}

def create_simple_background():
    """Create a simple gradient background instead of using DALL-E for testing"""
    # Create image with gradient background
    img = Image.new('RGB', (WIDTH, HEIGHT), COLORS["deep_green"])
    draw = ImageDraw.Draw(img)
    
    # Simple gradient effect
    for y in range(HEIGHT):
        # Gradient from deep green to slightly lighter
        alpha = y / HEIGHT
        color = "#1B4332" if alpha < 0.5 else "#2D2D2D"
        if y % 4 == 0:  # Every 4th line for gradient effect
            draw.line([(0, y), (WIDTH, y)], fill=color)
    
    return img

def add_text_overlay(image, text):
    """Add text overlay to image"""
    draw = ImageDraw.Draw(image)
    
    # Try to load a nice font, fallback to default
    try:
        font = ImageFont.truetype("/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf", 70)
    except:
        font = ImageFont.load_default()
    
    # Manual line breaks every 4-5 words
    words = text.split()
    lines = []
    current_line = []
    
    for word in words:
        current_line.append(word)
        if len(current_line) >= 4:  # Break every 4 words
            lines.append(" ".join(current_line))
            current_line = []
    
    if current_line:
        lines.append(" ".join(current_line))
    
    formatted_text = "\n".join(lines)
    
    # Get text bounding box
    bbox = draw.multiline_textbbox((0, 0), formatted_text, font=font)
    text_width = bbox[2] - bbox[0]
    
    # Center text horizontally
    x = (WIDTH - text_width) // 2
    y = int(HEIGHT * 0.30)  # 30% from top
    
    # Add text shadow for better readability
    shadow_offset = 3
    draw.multiline_text((x + shadow_offset, y + shadow_offset), formatted_text, 
                      fill=COLORS["charcoal"], font=font, align="center")
    
    # Main text
    draw.multiline_text((x, y), formatted_text, fill=COLORS["cream"], font=font, align="center")
    
    return image

def main():
    print("Generating test slide...")
    
    # Create output directory
    os.makedirs("output", exist_ok=True)
    
    # Test text
    hook_text = "The Pentagon just\nchanged the rules.\n\nCMMC Phase 2 starts\nNovember 2026."
    
    # Create background
    background = create_simple_background()
    
    # Add text
    final_image = add_text_overlay(background, hook_text)
    
    # Save
    output_path = "output/test_slide_01_hook.png"
    final_image.save(output_path, "PNG", quality=95)
    
    print(f"Test slide saved: {output_path}")
    print("If this works, the full slideshow generator should work too.")

if __name__ == "__main__":
    main()