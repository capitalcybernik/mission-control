# ⚔️ Capital Cyber Social Media Domination Plan

**Created:** 2026-02-19
**Goal:** Daily automated social presence across LinkedIn, Facebook, and X (Twitter)

---

## 📍 Platform Strategy

### LinkedIn (Nikhil's Personal Profile)
**Why:** #1 platform for B2B cybersecurity. Decision makers live here.
**Content mix:**
- Thought leadership (ransomware war stories, CMMC insights, password cracking stats)
- Client wins / case studies (anonymized)
- Industry news + hot takes
- "Did you know" security tips
- CGA grant announcements

**Frequency:** 1 post/day, Mon through Fri
**API:** LinkedIn Marketing API (Share on LinkedIn product)

### Facebook Business Page (Capital Cyber)
**Why:** Local trust, community visibility, Google ranking signal
**Content mix:**
- Same core content adapted for Facebook tone (warmer, more casual)
- Team/culture posts
- Local business shoutouts (Leesburg/Ashburn area)
- Client testimonials
- CGA grant success stories
- Cybersecurity tips (digestible, shareable)

**Frequency:** 1 post/day, Mon through Fri
**API:** Meta Graph API (Page Access Token)

### X / Twitter
**Why:** Cybersecurity community is massive on X. Hashtag reach, industry networking.
**Content mix:**
- Sharp, punchy takes on breaches and cyber news
- Thread breakdowns of attacks/compliance topics
- Engagement with #cybersecurity #CMMC #infosec community
- Retweet/quote relevant industry voices
- Link back to Capital Cyber blog posts

**Frequency:** 1 to 2 tweets/day
**API:** X API Basic tier ($100/month) — free tier is read-only, can't post

---

## 🔧 What I Need From You

### LinkedIn
1. Go to https://www.linkedin.com/developers/
2. Create an App → grab **Client ID** and **Client Secret**
3. Request "Share on LinkedIn" product access
4. Send me the credentials

### Facebook
1. Go to https://developers.facebook.com/
2. Create an App (type: Business)
3. Add "Facebook Login" and "Pages API" products
4. Generate a **Page Access Token** for the Capital Cyber page
5. Send me the App ID, App Secret, and Page Access Token

### X (Twitter)
1. Go to https://developer.x.com/
2. Sign up for **Basic tier** ($100/month) — free tier can't post
3. Create a Project + App
4. Generate **API Key, API Secret, Access Token, Access Token Secret**
5. Send me all four credentials

**Alternative for X:** If $100/month feels steep to start, I can draft tweets and you copy/paste until we see ROI. Your call.

---

## 📅 Daily Automation Workflow

**Every morning (automated via cron):**

1. **Ares generates 3 posts** (one per platform, tailored to each audience)
2. Posts are saved to `drafts/social/YYYY-MM-DD/` for review
3. **Auto-publish** once you approve the first week's cadence (or I post automatically after trust is built)
4. **Engagement tracking** — I pull metrics weekly (likes, comments, shares, reach)

**Content calendar approach:**
- **Monday:** Industry news / hot take
- **Tuesday:** Tip / "Did you know" security fact
- **Wednesday:** Thought leadership / opinion piece
- **Thursday:** CGA / grant spotlight / case study
- **Friday:** Fun / culture / behind the scenes / meme

---

## ✅ To-Do List (Prioritized)

### This Week
- [ ] **LinkedIn API setup** — Nikhil creates dev app, sends creds
- [ ] **Facebook API setup** — Nikhil creates Meta dev app, sends creds
- [ ] **X/Twitter decision** — Basic tier ($100/mo) or manual posting?
- [ ] **Draft first 5 LinkedIn posts** — Ares writes, Nikhil approves
- [ ] **Draft first 5 Facebook posts** — adapted from LinkedIn content
- [ ] **Draft first 5 tweets** — punchy versions of same themes
- [ ] **Build posting automation script** — Node.js, runs on cron

### Next Week
- [ ] **Go live with auto-posting** (after approval of Week 1 drafts)
- [ ] **Set up engagement monitoring** — track what's working
- [ ] **Create content bank** — 30 days of evergreen posts ready to go
- [ ] **Hashtag strategy per platform**

### Ongoing
- [ ] **Weekly metrics review** — what's getting traction?
- [ ] **Monthly content refresh** — new topics, trends, seasonal
- [ ] **A/B test post formats** — text vs image vs video vs carousel

---

## 💰 Costs

| Item | Cost | Notes |
|------|------|-------|
| LinkedIn API | Free | Official Marketing API |
| Facebook Graph API | Free | Page Access Token |
| X Basic Tier | $100/month | Required for posting via API |
| **Total** | **$100/month** | Just X. Everything else is free. |

---

_This plan is alive. We iterate weekly based on what works._
