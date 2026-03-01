#!/usr/bin/env python3
"""
TikTok Slideshow Poster using Upload-Post API
Posts generated slideshows as drafts to TikTok for Capital-Cyber profile
"""

import os
import requests
import json
import sys
import glob

# Upload-Post API Configuration
API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im5pa2hpbEB2bmlrcy5jb20iLCJleHAiOjQ5MjU2NTI0MzUsImp0aSI6ImEzMTkyMjVmLTdiMTEtNGRjNS1iODEwLWRiYmI0MTU5MDU1MyJ9.tnFZyAXruSeXQ7H6czU-4gDpvSO-W6U179MpMpGGMLs"
BASE_URL = "https://api.upload-post.com/api"
PROFILE = "Capital-Cyber"

class TikTokPoster:
    def __init__(self):
        self.headers = {
            "Authorization": f"Bearer {API_KEY}",
            "Content-Type": "application/json"
        }
    
    def upload_slideshow(self, image_paths, caption, hashtags=None):
        """
        Upload slideshow images to TikTok as draft
        
        Args:
            image_paths: List of paths to slideshow images (in order)
            caption: Video caption/description
            hashtags: List of hashtags (optional)
        """
        
        if not image_paths:
            print("Error: No images provided")
            return False
        
        # Default hashtags if none provided
        if not hashtags:
            hashtags = [
                "CMMC", "cybersecurity", "govcon", "manufacturing", 
                "defenseindustry", "compliance", "smallbusiness"
            ]
        
        # Format caption with hashtags
        formatted_caption = caption
        if hashtags:
            hashtag_string = " ".join([f"#{tag}" for tag in hashtags])
            formatted_caption = f"{caption}\n\n{hashtag_string}"
        
        # Prepare request payload
        payload = {
            "profile": PROFILE,
            "platform": "tiktok",
            "media_type": "slideshow",
            "images": [],
            "caption": formatted_caption,
            "draft": True,  # Save as draft for review
            "auto_schedule": False
        }
        
        # Upload each image
        for i, image_path in enumerate(image_paths):
            if not os.path.exists(image_path):
                print(f"Warning: Image not found: {image_path}")
                continue
                
            # Read image file
            try:
                with open(image_path, 'rb') as img_file:
                    # Convert to base64 for API
                    import base64
                    img_data = base64.b64encode(img_file.read()).decode('utf-8')
                    
                    payload["images"].append({
                        "order": i + 1,
                        "data": img_data,
                        "filename": os.path.basename(image_path)
                    })
                    
                print(f"Added image {i+1}: {os.path.basename(image_path)}")
                
            except Exception as e:
                print(f"Error reading image {image_path}: {e}")
                continue
        
        if not payload["images"]:
            print("Error: No valid images to upload")
            return False
        
        print(f"Uploading slideshow with {len(payload['images'])} images...")
        
        # Make API request
        try:
            response = requests.post(
                f"{BASE_URL}/posts",
                headers=self.headers,
                json=payload,
                timeout=120  # Slideshow uploads can take time
            )
            
            if response.status_code == 200 or response.status_code == 201:
                result = response.json()
                print(f"✅ Slideshow uploaded successfully!")
                print(f"Post ID: {result.get('id', 'N/A')}")
                print(f"Status: {result.get('status', 'N/A')}")
                print(f"Platform: TikTok (Capital-Cyber)")
                print(f"Saved as draft for review")
                return True
            else:
                print(f"❌ Upload failed: {response.status_code}")
                print(f"Response: {response.text}")
                return False
                
        except Exception as e:
            print(f"❌ Upload error: {e}")
            return False
    
    def get_profile_status(self):
        """Check if Capital-Cyber profile is connected and active"""
        try:
            response = requests.get(
                f"{BASE_URL}/profiles",
                headers=self.headers
            )
            
            if response.status_code == 200:
                profiles = response.json()
                for profile in profiles:
                    if profile.get('name') == PROFILE:
                        return profile.get('status') == 'active'
            return False
            
        except Exception as e:
            print(f"Error checking profile status: {e}")
            return False

def create_caption(topic, hook_line):
    """Generate engaging TikTok caption"""
    caption = f"""{hook_line}

{topic} is changing everything for defense contractors.

Here's what you need to know:

✅ CMMC Phase 2 starts November 2026
✅ No certification = No contracts  
✅ Early adopters get competitive advantage

Don't wait until it's too late.

Get your free CMMC gap assessment → capital-cyber.com"""
    
    return caption

def main():
    if len(sys.argv) < 2:
        print("Usage: python post_to_tiktok.py <images_directory> [topic] [hook_line]")
        print("Example: python post_to_tiktok.py output/ 'CMMC Phase 2' 'The Pentagon just changed the rules'")
        sys.exit(1)
    
    images_dir = sys.argv[1]
    topic = sys.argv[2] if len(sys.argv) > 2 else "CMMC Phase 2"
    hook_line = sys.argv[3] if len(sys.argv) > 3 else "The Pentagon just changed the rules."
    
    # Find slideshow images in order
    image_pattern = os.path.join(images_dir, "slide_*.png")
    image_paths = sorted(glob.glob(image_pattern))
    
    if not image_paths:
        print(f"No slideshow images found in {images_dir}")
        print("Expected files: slide_01_hook.png, slide_02_problem.png, etc.")
        sys.exit(1)
    
    print(f"Found {len(image_paths)} slideshow images:")
    for path in image_paths:
        print(f"  - {os.path.basename(path)}")
    
    # Create TikTok poster
    poster = TikTokPoster()
    
    # Check profile status
    print("\nChecking Capital-Cyber profile status...")
    if not poster.get_profile_status():
        print("Warning: Capital-Cyber profile may not be active")
        print("Proceeding anyway...")
    
    # Generate caption
    caption = create_caption(topic, hook_line)
    
    print(f"\nCaption preview:")
    print(f"{'='*50}")
    print(caption)
    print(f"{'='*50}")
    
    # Upload slideshow
    print(f"\nUploading slideshow to TikTok...")
    success = poster.upload_slideshow(
        image_paths=image_paths,
        caption=caption,
        hashtags=["CMMC", "cybersecurity", "govcon", "manufacturing", "compliance"]
    )
    
    if success:
        print("\n🎉 Slideshow posted successfully as draft!")
        print("Login to TikTok to review and publish.")
    else:
        print("\n❌ Failed to post slideshow")
        sys.exit(1)

if __name__ == "__main__":
    main()