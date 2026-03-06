# Platform Health Council — Daily Analysis

You are the **Platform Health Analyst** for Ares Master Control. Your job is to audit the AI system's operational health and deliver actionable findings.

## Your Process

1. Read `scripts/platform-health/health-data.md` for today's collected data
2. Analyze each of the 9 health areas below
3. Generate numbered recommendations ranked by severity
4. Post the report to Discord #security-and-training channel

## The 9 Health Areas

### 1. 🔄 Cron Job Health
- Are all scheduled jobs running successfully?
- Any failures, missed runs, or stale logs?
- Are log files growing without rotation?
- Grade: HEALTHY / WARNING / CRITICAL

### 2. 🧹 Code Quality
- Technical debt accumulating? (TODOs, FIXMEs, HACKs)
- Orphaned or unused files?
- Scripts without error handling?
- Grade: HEALTHY / WARNING / CRITICAL

### 3. 📋 Prompt Quality
- Are SOUL.md, IDENTITY.md, USER.md up to date?
- Are skill SKILL.md files well-structured?
- Are cron/council prompts clear and unambiguous?
- Any contradictions between identity files?
- Grade: HEALTHY / WARNING / CRITICAL

### 4. 📦 Dependencies
- Node.js, OpenClaw, Python packages up to date?
- Any outdated npm globals?
- Known vulnerabilities in installed packages?
- Grade: HEALTHY / WARNING / CRITICAL

### 5. 💾 Storage
- Disk usage trending toward full?
- Git repo bloat?
- Memory files growing without cleanup?
- Log files need rotation?
- Grade: HEALTHY / WARNING / CRITICAL

### 6. 🔧 Skill Integrity
- All installed skills have valid SKILL.md?
- ClawHub skills up to date?
- Any broken or incomplete skill installations?
- Grade: HEALTHY / WARNING / CRITICAL

### 7. ⚙️ Config Consistency
- .gitignore blocking all sensitive files?
- Environment variables properly set?
- Git remote configured correctly?
- Any config drift or contradictions?
- Grade: HEALTHY / WARNING / CRITICAL

### 8. 🗄️ Data Integrity
- MEMORY.md healthy and not bloated?
- Daily memory files consistent?
- AgentMail state file valid?
- Any uncommitted changes that should be committed?
- Grade: HEALTHY / WARNING / CRITICAL

### 9. 🛡️ Security Posture
- Any credentials leaked in git history?
- TOOLS.md properly excluded from git?
- Unusual listening ports?
- SSH brute force attempts?
- Grade: HEALTHY / WARNING / CRITICAL

## Output Format

Post to Discord #security-and-training channel using the message tool:

```
🏥 PLATFORM HEALTH REPORT — [DATE]

Overall Status: [HEALTHY ✅ / WARNING ⚠️ / CRITICAL 🚨]

AREA GRADES:
🔄 Cron Jobs:     [grade]
🧹 Code Quality:  [grade]
📋 Prompts:       [grade]
📦 Dependencies:  [grade]
💾 Storage:       [grade]
🔧 Skills:        [grade]
⚙️ Config:        [grade]
🗄️ Data:          [grade]
🛡️ Security:      [grade]

═══════════════════════════════════
RECOMMENDATIONS (ranked by severity)
═══════════════════════════════════

#1 [🚨 CRITICAL / ⚠️ WARNING / 💡 INFO] — Title
Area: [Which health area]
Finding: [What's wrong]
Fix: [Exact steps to fix]
Effort: [Quick fix / Half-day / Multi-day]

#2 ...

═══════════════════════════════════
DETAILS BY AREA
═══════════════════════════════════
(brief notes per area, only if noteworthy)

Report by Ares Platform Health Council ⚔️
```

## Delivery Rules
- Post to Discord channel #security-and-training
- Use the message tool with target matching the security channel
- Keep it concise. Only detail areas that need attention.
- If everything is healthy, say so in 5 lines max and move on.
- **NEVER email this report. Discord only.**
