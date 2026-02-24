# CyberGrantsAlliance.org SEO & Rankings Report
## Prepared by Ares | February 17, 2026

---

# THE SHORT VERSION

Your site is barely visible on Google. Only **3 pages are indexed**. There's no blog, no sitemap working, no keyword strategy, and the homepage doesn't even explain what CGA is in plain English. The good news: these are all fixable, and most of them are quick WordPress changes.

---

# WHAT'S WORKING

| ✅ Good | Detail |
|---------|--------|
| SSL/HTTPS | Active, Cloudflare managed |
| Rank Math SEO plugin | Installed (great plugin) |
| Schema markup | Organization schema is present |
| Press release indexed | US Healthcare Journal article shows up |
| WordPress + Elementor | Flexible, easy to update |
| Cloudflare CDN | Fast load times, security |
| WP Optimize caching | Installed |

---

# WHAT'S BROKEN

## 🔴 Problem 1: Almost Nothing Is Indexed

Google only knows about **3 pages** on your entire site:
1. Homepage
2. Cybersecurity Training Grant page
3. Press release (Capital Cyber $2.5M sponsorship)

**Why this matters:** If Google doesn't know a page exists, nobody finds it through search. You could have 50 pages and it wouldn't matter if they're not indexed.

**The fix:** Your sitemap is broken. `sitemap_index.xml` returns a 404 (Page Not Found). This is the file that tells Google what pages exist on your site.

**How to fix it (2 minutes):**
1. Go to WordPress Admin → Rank Math → Sitemap Settings
2. Make sure sitemap is enabled
3. Click "Save Changes"
4. Visit `cybergrantsalliance.org/sitemap_index.xml` to confirm it works
5. Go to Google Search Console → Sitemaps → Submit `https://cybergrantsalliance.org/sitemap_index.xml`

---

## 🔴 Problem 2: Homepage Doesn't Explain What CGA Is

A visitor lands on your homepage and sees descriptions of services (pen testing, CMMC tracking, training) but **never sees a clear statement of who you are or what you do.**

**What's missing from the homepage:**
- No headline saying "We provide cybersecurity grants to small businesses"
- No "About" section explaining CGA's mission
- No "How it works" in simple steps (1. Apply, 2. Get approved, 3. Receive grant)
- No statistics ($2.5M in grants, 100 grants/year, etc.)
- No trust signals (board members, press mentions, partner logos)

**What a visitor should understand in 5 seconds:**
"CGA gives free cybersecurity grants to small businesses. Apply in 2 minutes."

**How to fix it:** Add a hero section with a clear headline and a 3-step "How It Works" section. I can write the copy.

---

## 🔴 Problem 3: No Blog or Content

You have **zero blog posts**. No educational content. No articles targeting keywords people actually search for.

**Keywords you should be ranking for but aren't:**
- "cybersecurity grants for small business" (high search volume)
- "free cybersecurity assessment for small business"
- "FTC Safeguards Rule CPA firms"
- "CMMC compliance grants"
- "cybersecurity grants for nonprofits"
- "cybersecurity grants for healthcare"
- "free penetration testing for small business"

**The fix:** Start publishing 2 blog posts per month. Each post targets a specific keyword. I can write all of them.

**Starter blog topics:**
1. "How to Get a Free Cybersecurity Grant for Your Small Business in 2026"
2. "5 Cybersecurity Grants Every CPA Firm Should Know About"
3. "FTC Safeguards Rule: What It Means for Your Accounting Firm"
4. "Free Pen Testing for Small Businesses: How CGA's Grant Program Works"
5. "CMMC Compliance on a Budget: Grant Programs for Defense Contractors"
6. "Why Cybersecurity Insurance Companies Want You to Get a Pen Test"
7. "Operation Winter SHIELD: The FBI's 10 Steps Every Business Should Take"
8. "Cybersecurity Grants for Healthcare Providers: What's Available in 2026"

---

## 🟡 Problem 4: No Google Search Console Connected

Without Search Console, you can't:
- See what keywords bring traffic
- Find indexing errors
- Submit your sitemap
- Monitor click-through rates

**How to fix it (5 minutes):**
1. Go to https://search.google.com/search-console
2. Add property: `https://cybergrantsalliance.org`
3. Verify via DNS (add a TXT record through Cloudflare) or HTML tag (Rank Math can do this)
4. Submit your sitemap

---

## 🟡 Problem 5: Page Titles and Meta Descriptions Need Work

**Current homepage title:** "Cyber Grants Alliance - Providing Cybersecurity Grants to Protect Businesses"

**Better:** "Free Cybersecurity Grants for Small Businesses | Cyber Grants Alliance"

**Why:** People search for "free cybersecurity grants" and "cybersecurity grants for small businesses." Having those exact phrases in your title helps you rank.

**How to fix it:**
1. WordPress Admin → Rank Math → Edit each page's SEO title and description
2. Or I can do it with WordPress access

---

## 🟡 Problem 6: robots.txt Is Blocking AI Crawlers (Not a Problem, Just Noting)

Your Cloudflare setup blocks ClaudeBot, GPTBot, Google Extended, etc. This is fine for AI training protection but means your content won't appear in AI search summaries (Google AI Overview, Bing Chat, etc.). This is a trade-off worth discussing.

---

## 🟡 Problem 7: No Internal Linking Strategy

The pages that exist don't link to each other. The homepage should link to each grant page. Each grant page should link back to the application page. Blog posts (once created) should link to relevant grant pages.

**Why it matters:** Internal links help Google understand your site structure and pass authority between pages.

---

## 🟡 Problem 8: No Backlinks Strategy

Your site has very few external links pointing to it. The press release on US Healthcare Journal is one. You need more.

**Quick backlink opportunities:**
- Get listed on GrantWatch.com (you have a page about this partnership already)
- Submit to nonprofit directories (GuideStar/Candid, GreatNonprofits)
- Get listed on SBA's partner resources
- Ask APEX Accelerators to link to you (from the partnership outreach)
- Press releases on PR Newswire or similar

---

## 🟢 Problem 9: Missing "Apply Now" Page Optimization

The application flow should be a standalone page optimized for "apply for cybersecurity grant" with:
- Clear eligibility criteria
- What you get (specific dollar value, services included)
- How long it takes
- FAQ section
- Trust signals (press mentions, number of grants awarded)

---

# PRIORITY ACTION PLAN

| Priority | Task | Time | Can Ares Do It? |
|----------|------|------|-----------------|
| 🔴 P1 | Fix sitemap (Rank Math settings) | 2 min | ✅ With WP access |
| 🔴 P1 | Set up Google Search Console | 5 min | ✅ With DNS/WP access |
| 🔴 P1 | Rewrite homepage hero and add "How It Works" | 30 min | ✅ With WP access |
| 🔴 P1 | Add "About CGA" section to homepage | 15 min | ✅ With WP access |
| 🟡 P2 | Optimize page titles and meta descriptions | 20 min | ✅ With WP access |
| 🟡 P2 | Write first 4 blog posts | 2 hours | ✅ I'll write them |
| 🟡 P2 | Add internal links across all pages | 15 min | ✅ With WP access |
| 🟡 P2 | Create dedicated "Apply Now" landing page | 30 min | ✅ With WP access |
| 🟢 P3 | Submit to nonprofit directories | 1 hour | ✅ I can do this |
| 🟢 P3 | Write 4 more blog posts | 2 hours | ✅ I'll write them |
| 🟢 P3 | Set up Google Business Profile for CGA | 10 min | Nikhil (needs verification) |

---

# EXPECTED RESULTS

**Month 1 (after fixes):**
- Sitemap submitted, all pages indexed
- Homepage clearly communicates value
- 4 blog posts live targeting key search terms

**Month 3:**
- Ranking for "cybersecurity grants for small business" (page 2 to 3)
- 8+ blog posts driving organic traffic
- 200 to 500 organic visitors/month

**Month 6:**
- Page 1 rankings for "cybersecurity grants" related terms
- 1,000+ organic visitors/month
- Grant applications increasing from organic search

---

# CAN ARES FIX IT WITH WORDPRESS ACCESS?

**Yes.** If you give me WordPress admin credentials, I can:

1. ✅ Fix the sitemap
2. ✅ Optimize all page titles and meta descriptions via Rank Math
3. ✅ Rewrite homepage copy (through Elementor)
4. ✅ Add internal links
5. ✅ Create and publish blog posts
6. ✅ Set up redirects if needed
7. ✅ Add schema markup for grants/programs
8. ✅ Create new landing pages

**What I'd need:**
- WordPress admin URL (usually `cybergrantsalliance.org/wp-admin`)
- Username and password
- Or: install the "WP REST API" authentication plugin and give me an application password

**What I can NOT do without you:**
- DNS changes (Cloudflare access needed for Search Console verification)
- Google Search Console setup (needs your Google account)
- Google Business Profile (needs address verification)

---

*Give me WordPress access and I'll start fixing these today.*
