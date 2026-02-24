#!/usr/bin/env python3

import requests
import re
import time
import sys

# Extract all unique URLs from the Industries page content
industries_content = """
Content with links from Industries page here
"""

# Target URLs that should be linked (from our API data)
target_vertical_pages = {
    "Dental": "https://cybergrantsalliance.org/cybersecurity-grants-for-dental-practices/",
    "Nonprofit": "https://cybergrantsalliance.org/cybersecurity-grants-for-nonprofits/", 
    "GovCon": "https://cybergrantsalliance.org/cybersecurity-grants-for-government-contractors/",
    "CPA": "https://cybergrantsalliance.org/cybersecurity-grants-for-cpa-accounting-firms/",
    "Manufacturing": "https://cybergrantsalliance.org/cybersecurity-grants-for-manufacturers/",
    "Colleges": "https://cybergrantsalliance.org/cybersecurity-grants-for-colleges/",
    "Private Schools": "https://cybergrantsalliance.org/cybersecurity-grants-for-private-schools/",
    "Catholic Schools": "https://cybergrantsalliance.org/cybersecurity-grants-for-catholic-schools/"
}

def check_url_status(url):
    """Check if URL returns 200 status"""
    try:
        response = requests.head(url, timeout=10, allow_redirects=True)
        return response.status_code
    except Exception as e:
        return f"Error: {str(e)}"

def extract_urls_from_content(content):
    """Extract all URLs from HTML content"""
    # Find all href attributes
    url_pattern = r'href=[\'"]([^\'"]+)[\'"]'
    urls = re.findall(url_pattern, content)
    
    # Filter for cybergrantsalliance URLs
    cga_urls = [url for url in urls if 'cybergrantsalliance.org' in url]
    return list(set(cga_urls))  # Remove duplicates

if __name__ == "__main__":
    print("CGA Link Checker")
    print("================")
    
    # Test target vertical pages first
    print("\nChecking Target Vertical Pages:")
    print("-" * 40)
    for name, url in target_vertical_pages.items():
        status = check_url_status(url)
        print(f"{name:15}: {status} - {url}")
        time.sleep(1)  # Be nice to server
        
    print("\nDone!")