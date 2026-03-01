#!/usr/bin/env python3
"""
Simplified TikTok Slideshow Generator with gradient backgrounds
For testing the workflow without waiting for DALL-E API calls
"""

import os
from PIL import Image, ImageDraw, ImageFont
import sys

# Color Palette
COLORS = {
    "deep_green": "#1B4332",
    "cream": "#FAF3E0", 
    "burnt_orange": "#CC5500",
    "charcoal": "#2D2D2D"
}

# Image dimensions (portrait)
WIDTH = 1024
HEIGHT = 1792

# Font sizing and positioning
FONT_SIZE = int(HEIGHT * 0.065)  # 6.5% of height
TEXT_Y_POSITION = int(HEIGHT * 0.30)  # 30% from top

class SimpleSlideshowGenerator:
    def __init__(self, output_dir="output"):
        self.output_dir = output_dir
        os.makedirs(output_dir, exist_ok=True)
        
    def create_background(self, style):
        """Create different background styles using gradients"""
        img = Image.new('RGB', (WIDTH, HEIGHT), COLORS["deep_green"])
        draw = ImageDraw.Draw(img)
        
        if style == "dark_dramatic":
            # Dark gradient
            base_color = COLORS["charcoal"]
            for y in range(HEIGHT):
                alpha = y / HEIGHT
                if y % 3 == 0:
                    color = COLORS["deep_green"] if alpha < 0.7 else base_color
                    draw.line([(0, y), (WIDTH, y)], fill=color)
                    
        elif style == "office_serious":
            # Professional blue-green gradient
            base_color = COLORS["deep_green"]
            img = Image.new('RGB', (WIDTH, HEIGHT), base_color)
            
        elif style == "government_official":
            # Navy/charcoal professional
            for y in range(HEIGHT):
                if y % 5 == 0:
                    draw.line([(0, y), (WIDTH, y)], fill=COLORS["charcoal"])
                    
        elif style == "business_growth":
            # Lighter, optimistic gradient
            for y in range(HEIGHT):
                alpha = y / HEIGHT
                if y % 2 == 0 and alpha > 0.3:
                    color = COLORS["deep_green"] if alpha < 0.8 else COLORS["burnt_orange"]
                    draw.line([(0, y), (WIDTH, y)], fill=color)
                    
        elif style == "success_celebration":
            # Warm accent colors
            for y in range(HEIGHT):
                alpha = y / HEIGHT
                if y % 4 == 0:
                    color = COLORS["burnt_orange"] if alpha < 0.6 else COLORS["deep_green"]
                    draw.line([(0, y), (WIDTH, y)], fill=color)
                    
        elif style == "call_to_action":
            # Clean, bright background
            img = Image.new('RGB', (WIDTH, HEIGHT), COLORS["cream"])
            
        return img
    
    def add_text_overlay(self, image, text, slide_number):
        """Add text overlay to image with proper formatting"""
        draw = ImageDraw.Draw(image)
        
        # Try to load a nice font, fallback to default
        try:
            font = ImageFont.truetype("/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf", FONT_SIZE)
        except:
            font = ImageFont.load_default()
        
        # Manual line breaks every 4-6 words
        words = text.split()
        lines = []
        current_line = []
        
        for word in words:
            current_line.append(word)
            if len(current_line) >= 5:  # Avg 5 words per line
                lines.append(" ".join(current_line))
                current_line = []
        
        if current_line:
            lines.append(" ".join(current_line))
        
        formatted_text = "\n".join(lines)
        
        # Get text bounding box
        bbox = draw.multiline_textbbox((0, 0), formatted_text, font=font)
        text_width = bbox[2] - bbox[0]
        text_height = bbox[3] - bbox[1]
        
        # Center text horizontally
        x = (WIDTH - text_width) // 2
        y = TEXT_Y_POSITION
        
        # Add text shadow for better readability
        shadow_offset = 3
        draw.multiline_text((x + shadow_offset, y + shadow_offset), formatted_text, 
                          fill=COLORS["charcoal"], font=font, align="center")
        
        # Main text color based on slide
        if slide_number == 6:  # CTA slide with light background
            text_color = COLORS["deep_green"]
        else:
            text_color = COLORS["cream"]
            
        draw.multiline_text((x, y), formatted_text, fill=text_color, font=font, align="center")
        
        return image
    
    def create_slideshow(self, topic, hook):
        """Create complete 6-slide slideshow"""
        
        # Define slide structure based on viral pattern
        slides = [
            {
                "title": "Hook",
                "text": hook,
                "style": "dark_dramatic"
            },
            {
                "title": "Problem", 
                "text": f"Most contractors think\nCMMC is optional.\n\nThey're about to lose\neverything.",
                "style": "office_serious"
            },
            {
                "title": "Discovery",
                "text": f"Defense contractors\nmust be CMMC certified\nby November 2026.\n\nNo certification =\nNo contracts.",
                "style": "government_official"
            },
            {
                "title": "Transformation 1",
                "text": f"Companies that start\nnow get first pick\nof contracts.\n\nThe prepared win.",
                "style": "business_growth"
            },
            {
                "title": "Transformation 2", 
                "text": f"We've certified\n127 contractors.\n\n100% contract\nretention rate.",
                "style": "success_celebration"
            },
            {
                "title": "CTA",
                "text": f"Get your free\nCMMC gap assessment.\n\ncapital-cyber.com",
                "style": "call_to_action"
            }
        ]
        
        generated_images = []
        
        for i, slide in enumerate(slides, 1):
            print(f"Generating slide {i}: {slide['title']}")
            
            # Create background
            base_image = self.create_background(slide["style"])
            
            # Add text overlay
            final_image = self.add_text_overlay(base_image, slide["text"], i)
            
            # Save image
            output_path = os.path.join(self.output_dir, f"slide_{i:02d}_{slide['title'].lower()}.png")
            final_image.save(output_path, "PNG", quality=95)
            generated_images.append(output_path)
            
            print(f"Saved: {output_path}")
        
        print(f"\nGenerated {len(generated_images)} slides in {self.output_dir}/")
        return generated_images

def main():
    if len(sys.argv) < 2:
        print("Usage: python generate_slideshow_simple.py '<topic/hook>'")
        print("Example: python generate_slideshow_simple.py 'CMMC Phase 2 starts November 2026'")
        sys.exit(1)
    
    topic = sys.argv[1]
    hook = f"The Pentagon just\nchanged the rules.\n\n{topic}."
    
    generator = SimpleSlideshowGenerator()
    images = generator.create_slideshow(topic, hook)
    
    print(f"\nSlideshow complete! Generated {len(images)} images.")
    print("Upload these to TikTok in order for your slideshow.")
    print("\nNext step: python post_to_tiktok.py output/ 'CMMC Phase 2' 'The Pentagon just changed the rules'")

if __name__ == "__main__":
    main()