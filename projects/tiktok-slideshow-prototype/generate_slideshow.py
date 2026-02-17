#!/usr/bin/env python3
"""
TikTok Slideshow Generator for CMMC/Cybersecurity Content
Uses OpenAI DALL-E 3 to generate images with Pillow text overlays
"""

import os
import requests
from PIL import Image, ImageDraw, ImageFont
import textwrap
import json
import sys

# OpenAI API Configuration
OPENAI_API_KEY = "[OPENAI_KEY_REMOVED]"

# Color Palette
COLORS = {
    "deep_green": "#1B4332",
    "cream": "#FAF3E0", 
    "burnt_orange": "#CC5500",
    "charcoal": "#2D2D2D"
}

# Image dimensions (portrait - using OpenAI supported size)
WIDTH = 1024
HEIGHT = 1792

# Font sizing and positioning
FONT_SIZE = int(HEIGHT * 0.065)  # 6.5% of height
TEXT_Y_POSITION = int(HEIGHT * 0.30)  # 30% from top

class SlideshowGenerator:
    def __init__(self, output_dir="output"):
        self.output_dir = output_dir
        os.makedirs(output_dir, exist_ok=True)
        
    def generate_image_with_dalle(self, prompt, style="realistic"):
        """Generate image using DALL-E 3"""
        url = "https://api.openai.com/v1/images/generations"
        
        headers = {
            "Authorization": f"Bearer {OPENAI_API_KEY}",
            "Content-Type": "application/json"
        }
        
        data = {
            "model": "dall-e-3",
            "prompt": prompt,
            "size": "1024x1792",
            "quality": "standard",
            "n": 1
        }
        
        response = requests.post(url, headers=headers, json=data)
        
        if response.status_code != 200:
            print(f"Error generating image: {response.text}")
            return None
            
        result = response.json()
        image_url = result["data"][0]["url"]
        
        # Download the generated image
        img_response = requests.get(image_url)
        if img_response.status_code == 200:
            return Image.open(requests.get(image_url, stream=True).raw)
        return None
    
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
        
        # Main text
        text_color = COLORS["cream"] if slide_number in [1, 6] else COLORS["deep_green"]
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
        
        # Base scene description (locked across all slides)
        base_scene = f"Professional cybersecurity themed background related to {topic}"
        
        generated_images = []
        
        for i, slide in enumerate(slides, 1):
            print(f"Generating slide {i}: {slide['title']}")
            
            # Style variations while keeping base scene
            style_prompts = {
                "dark_dramatic": f"{base_scene}, dark moody lighting, deep colors, dramatic atmosphere",
                "office_serious": f"{base_scene}, modern office environment, professional lighting, business setting", 
                "government_official": f"{base_scene}, government building backdrop, official documents, formal atmosphere",
                "business_growth": f"{base_scene}, upward trending graphs, growth imagery, optimistic lighting",
                "success_celebration": f"{base_scene}, achievement imagery, bright professional lighting, success themes",
                "call_to_action": f"{base_scene}, clean modern design, bright inviting colors, professional website theme"
            }
            
            prompt = style_prompts[slide["style"]]
            
            # Generate base image
            base_image = self.generate_image_with_dalle(prompt)
            
            if base_image is None:
                print(f"Failed to generate image for slide {i}")
                continue
            
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
        print("Usage: python generate_slideshow.py '<topic/hook>'")
        print("Example: python generate_slideshow.py 'CMMC Phase 2 starts November 2026'")
        sys.exit(1)
    
    topic = sys.argv[1]
    hook = f"The Pentagon just\nchanged the rules.\n\n{topic}."
    
    generator = SlideshowGenerator()
    images = generator.create_slideshow(topic, hook)
    
    print(f"\nSlideshow complete! Generated {len(images)} images.")
    print("Upload these to TikTok in order for your slideshow.")

if __name__ == "__main__":
    main()