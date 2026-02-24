#!/usr/bin/env python3
"""Check all links from Industries page for 200 status"""

import requests
import time

links = [
"https://cybergrantsalliance.org/cybersecurity-grants-for-accounting-firms/",
"https://cybergrantsalliance.org/cybersecurity-grants-for-advocacy-groups/",
"https://cybergrantsalliance.org/cybersecurity-grants-for-architecture-and-engineering-firms/",
"https://cybergrantsalliance.org/cybersecurity-grants-for-banks-and-credit-unions/",
"https://cybergrantsalliance.org/cybersecurity-grants-for-behavioral-health-practices/",
"https://cybergrantsalliance.org/cybersecurity-grants-for-charitable-organizations/",
"https://cybergrantsalliance.org/cybersecurity-grants-for-chiropractors/",
"https://cybergrantsalliance.org/cybersecurity-grants-for-colleges-and-universities/",
"https://cybergrantsalliance.org/cybersecurity-grants-for-construction-companies/",
"https://cybergrantsalliance.org/cybersecurity-grants-for-consulting-firms/",
"https://cybergrantsalliance.org/cybersecurity-grants-for-court-systems/",
"https://cybergrantsalliance.org/cybersecurity-grants-for-dental-practices/",
"https://cybergrantsalliance.org/cybersecurity-grants-for-digital-media-firms/",
"https://cybergrantsalliance.org/cybersecurity-grants-for-distribution-and-logistics-firms/",
"https://cybergrantsalliance.org/cybersecurity-grants-for-e-commerce-businesses/",
"https://cybergrantsalliance.org/cybersecurity-grants-for-educational-technology-providers/",
"https://cybergrantsalliance.org/cybersecurity-grants-for-event-planning-companies/",
"https://cybergrantsalliance.org/cybersecurity-grants-for-foundations-and-grant-making-organizations/",
"https://cybergrantsalliance.org/cybersecurity-grants-for-game-development-studios/",
"https://cybergrantsalliance.org/cybersecurity-grants-for-home-healthcare-services/",
"https://cybergrantsalliance.org/cybersecurity-grants-for-hospitals-and-clinics/",
"https://cybergrantsalliance.org/cybersecurity-grants-for-hotels-and-resorts/",
"https://cybergrantsalliance.org/cybersecurity-grants-for-insurance-agencies/",
"https://cybergrantsalliance.org/cybersecurity-grants-for-k-12-schools/",
"https://cybergrantsalliance.org/cybersecurity-grants-for-law-firms/",
"https://cybergrantsalliance.org/cybersecurity-grants-for-logistics-service-providers/",
"https://cybergrantsalliance.org/cybersecurity-grants-for-long-term-care-and-assisted-living-facilities/",
"https://cybergrantsalliance.org/cybersecurity-grants-for-marketing-and-advertising-agencies/",
"https://cybergrantsalliance.org/cybersecurity-grants-for-mediation-and-arbitration-services/",
"https://cybergrantsalliance.org/cybersecurity-grants-for-mortgage-and-loan-companies/",
"https://cybergrantsalliance.org/cybersecurity-grants-for-municipalities-and-local-governments/",
"https://cybergrantsalliance.org/cybersecurity-grants-for-oil-and-gas-companies/",
"https://cybergrantsalliance.org/cybersecurity-grants-for-pharmacies/",
"https://cybergrantsalliance.org/cybersecurity-grants-for-police-and-fire-departments/",
"https://cybergrantsalliance.org/cybersecurity-grants-for-pr-and-communications-agencies/",
"https://cybergrantsalliance.org/cybersecurity-grants-for-private-tutoring-centers/",
"https://cybergrantsalliance.org/cybersecurity-grants-for-production-companies-film-tv-and-music/",
"https://cybergrantsalliance.org/cybersecurity-grants-for-property-management-firms/",
"https://cybergrantsalliance.org/cybersecurity-grants-for-public-libraries/",
"https://cybergrantsalliance.org/cybersecurity-grants-for-public-utilities/",
"https://cybergrantsalliance.org/cybersecurity-grants-for-real-estate-agencies/",
"https://cybergrantsalliance.org/cybersecurity-grants-for-real-estate-developers/",
"https://cybergrantsalliance.org/cybersecurity-grants-for-religious-institutions/",
"https://cybergrantsalliance.org/cybersecurity-grants-for-renewable-energy-firms/",
"https://cybergrantsalliance.org/cybersecurity-grants-for-restaurants-and-catering-services/",
"https://cybergrantsalliance.org/cybersecurity-grants-for-retail-product-suppliers/",
"https://cybergrantsalliance.org/cybersecurity-grants-for-retail-stores/",
"https://cybergrantsalliance.org/cybersecurity-grants-for-saas-providers/",
"https://cybergrantsalliance.org/cybersecurity-grants-for-small-to-mid-sized-manufacturing-companies/",
"https://cybergrantsalliance.org/cybersecurity-grants-for-software-development-companies/",
"https://cybergrantsalliance.org/cybersecurity-grants-for-solar-energy-providers/",
"https://cybergrantsalliance.org/cybersecurity-grants-for-tech-startups/",
"https://cybergrantsalliance.org/cybersecurity-grants-for-title-and-escrow-companies/",
"https://cybergrantsalliance.org/cybersecurity-grants-for-trucking-and-freight-companies/",
"https://cybergrantsalliance.org/cybersecurity-grants-for-utility-services-water-electricity/",
"https://cybergrantsalliance.org/cybersecurity-grants-for-vehicle-fleet-management-firms/",
"https://cybergrantsalliance.org/cybersecurity-grants-for-warehousing-services/",
"https://cybergrantsalliance.org/cybersecurity-grants-for-wealth-management-and-financial-advisory-firms/",
]

# Also check the target 8 pages
target_pages = [
    ("Dental", "https://cybergrantsalliance.org/cybersecurity-grants-for-dental-practices/"),
    ("Nonprofit", "https://cybergrantsalliance.org/cybersecurity-grants-for-nonprofits/"),
    ("GovCon", "https://cybergrantsalliance.org/cybersecurity-grants-for-government-contractors/"),
    ("CPA", "https://cybergrantsalliance.org/cybersecurity-grants-for-cpa-accounting-firms/"),
    ("Manufacturing", "https://cybergrantsalliance.org/cybersecurity-grants-for-manufacturers/"),
    ("Colleges", "https://cybergrantsalliance.org/cybersecurity-grants-for-colleges/"),
    ("Private Schools", "https://cybergrantsalliance.org/cybersecurity-grants-for-private-schools/"),
    ("Catholic Schools", "https://cybergrantsalliance.org/cybersecurity-grants-for-catholic-schools/"),
]

print("Checking Industries Page Links (62 links)...")
print("="*60)

broken = []
working = []

for url in links:
    try:
        r = requests.head(url, timeout=10, allow_redirects=True)
        if r.status_code != 200:
            broken.append((url, r.status_code))
            print(f"BROKEN ({r.status_code}): {url}")
        else:
            working.append(url)
    except Exception as e:
        broken.append((url, str(e)))
        print(f"ERROR: {url} - {e}")
    time.sleep(0.5)

print(f"\n\nSummary:")
print(f"Working: {len(working)}")
print(f"Broken: {len(broken)}")

if broken:
    print("\n\nBroken Links:")
    for url, status in broken:
        print(f"  {status}: {url}")
