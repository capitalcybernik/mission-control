#!/bin/bash
# Platform Health Council — Data Collector
# Analyzes 9 areas of AI system health
set -e
export PATH="/usr/local/bin:/usr/bin:$PATH"
OUT="/root/.openclaw/workspace/scripts/platform-health/health-data.md"
DATE=$(TZ='America/New_York' date +"%Y-%m-%d")
WS="/root/.openclaw/workspace"

echo "# Platform Health Data — $DATE" > "$OUT"
echo "Generated: $(date -u +'%Y-%m-%d %H:%M UTC')" >> "$OUT"
echo "" >> "$OUT"

# ─── 1. CRON JOB HEALTH ───
echo "## 1. Cron Job Health" >> "$OUT"
echo "### Active Cron Jobs" >> "$OUT"
echo '```' >> "$OUT"
crontab -l 2>/dev/null >> "$OUT"
echo '```' >> "$OUT"
echo "### Recent Log Output" >> "$OUT"
echo '```' >> "$OUT"
echo "=== Backup Log (last 10) ===" >> "$OUT"
tail -10 /var/log/ares-backup.log 2>/dev/null >> "$OUT" || echo "(no log)" >> "$OUT"
echo "" >> "$OUT"
echo "=== AgentMail Check Log (last 10) ===" >> "$OUT"
tail -10 /var/log/agentmail-check.log 2>/dev/null >> "$OUT" || echo "(no log)" >> "$OUT"
echo "" >> "$OUT"
echo "=== Advisory Council Log (last 10) ===" >> "$OUT"
tail -10 /var/log/advisory-council.log 2>/dev/null >> "$OUT" || echo "(no log)" >> "$OUT"
echo "" >> "$OUT"
echo "=== Security Audit Log (last 10) ===" >> "$OUT"
tail -10 /var/log/security-audit.log 2>/dev/null >> "$OUT" || echo "(no log)" >> "$OUT"
echo "" >> "$OUT"
echo "=== Syslog cron entries (last 20) ===" >> "$OUT"
grep -i cron /var/log/syslog 2>/dev/null | tail -20 >> "$OUT" || journalctl -u cron --since "24 hours ago" 2>/dev/null | tail -20 >> "$OUT" || echo "(no syslog access)" >> "$OUT"
echo '```' >> "$OUT"
echo "" >> "$OUT"

# ─── 2. CODE QUALITY / TECHNICAL DEBT ───
echo "## 2. Code Quality & Technical Debt" >> "$OUT"
echo "### Workspace File Stats" >> "$OUT"
echo '```' >> "$OUT"
echo "Total files: $(find $WS -type f | wc -l)" >> "$OUT"
echo "Markdown files: $(find $WS -name '*.md' | wc -l)" >> "$OUT"
echo "Python scripts: $(find $WS -name '*.py' | wc -l)" >> "$OUT"
echo "Shell scripts: $(find $WS -name '*.sh' | wc -l)" >> "$OUT"
echo "JSON files: $(find $WS -name '*.json' | wc -l)" >> "$OUT"
echo "" >> "$OUT"
echo "=== Files modified in last 7 days ===" >> "$OUT"
find $WS -type f -mtime -7 -not -path '*/.git/*' -not -path '*/node_modules/*' | sort >> "$OUT"
echo "" >> "$OUT"
echo "=== TODO/FIXME/HACK in codebase ===" >> "$OUT"
grep -rn 'TODO\|FIXME\|HACK\|XXX\|WORKAROUND' $WS --include='*.py' --include='*.sh' --include='*.md' --include='*.js' 2>/dev/null | grep -v '.git/' | head -30 >> "$OUT" || echo "(none found)" >> "$OUT"
echo '```' >> "$OUT"
echo "" >> "$OUT"

# ─── 3. PROMPT QUALITY ───
echo "## 3. Prompt Quality Audit" >> "$OUT"
echo "### Core Identity Files" >> "$OUT"
echo '```' >> "$OUT"
for f in SOUL.md IDENTITY.md USER.md AGENTS.md HEARTBEAT.md; do
    if [ -f "$WS/$f" ]; then
        lines=$(wc -l < "$WS/$f")
        words=$(wc -w < "$WS/$f")
        mod=$(stat -c %Y "$WS/$f" 2>/dev/null)
        age=$(( ($(date +%s) - mod) / 86400 ))
        echo "$f: ${lines} lines, ${words} words, last modified ${age} days ago" >> "$OUT"
    fi
done
echo "" >> "$OUT"
echo "=== Skill SKILL.md files ===" >> "$OUT"
for f in $(find $WS/skills -name 'SKILL.md' 2>/dev/null); do
    skill=$(echo $f | sed "s|$WS/skills/||" | sed 's|/SKILL.md||')
    lines=$(wc -l < "$f")
    echo "  $skill: ${lines} lines" >> "$OUT"
done
echo "" >> "$OUT"
echo "=== Cron/council prompts ===" >> "$OUT"
for f in $(find $WS/scripts -name '*.md' 2>/dev/null); do
    lines=$(wc -l < "$f")
    name=$(echo $f | sed "s|$WS/scripts/||")
    echo "  $name: ${lines} lines" >> "$OUT"
done
echo '```' >> "$OUT"
echo "" >> "$OUT"

# ─── 4. DEPENDENCIES ───
echo "## 4. Dependencies & Packages" >> "$OUT"
echo '```' >> "$OUT"
echo "=== Node.js ===" >> "$OUT"
node --version 2>/dev/null >> "$OUT"
echo "=== OpenClaw ===" >> "$OUT"
openclaw --version 2>/dev/null >> "$OUT" || echo "(version unavailable)" >> "$OUT"
echo "=== Python packages (key) ===" >> "$OUT"
pip list 2>/dev/null | grep -iE '(agentmail|git-filter|requests|python-dotenv)' >> "$OUT" || echo "(pip unavailable)" >> "$OUT"
echo "=== npm global packages ===" >> "$OUT"
npm ls -g --depth=0 2>/dev/null | head -20 >> "$OUT"
echo "=== Outdated npm globals ===" >> "$OUT"
npm outdated -g 2>/dev/null | head -10 >> "$OUT" || echo "(none or check failed)" >> "$OUT"
echo '```' >> "$OUT"
echo "" >> "$OUT"

# ─── 5. STORAGE ───
echo "## 5. Storage & Disk Usage" >> "$OUT"
echo '```' >> "$OUT"
echo "=== Disk usage ===" >> "$OUT"
df -h / >> "$OUT"
echo "" >> "$OUT"
echo "=== Workspace size ===" >> "$OUT"
du -sh $WS 2>/dev/null >> "$OUT"
du -sh $WS/*/ 2>/dev/null | sort -rh | head -15 >> "$OUT"
echo "" >> "$OUT"
echo "=== Git repo size ===" >> "$OUT"
du -sh $WS/.git 2>/dev/null >> "$OUT"
echo "" >> "$OUT"
echo "=== Memory files ===" >> "$OUT"
du -sh $WS/memory/ 2>/dev/null >> "$OUT"
ls -la $WS/memory/ 2>/dev/null | tail -20 >> "$OUT"
echo "" >> "$OUT"
echo "=== Log files ===" >> "$OUT"
du -sh /var/log/ares-*.log /var/log/agentmail-*.log /var/log/advisory-*.log /var/log/security-*.log 2>/dev/null >> "$OUT" || echo "(no log files)" >> "$OUT"
echo '```' >> "$OUT"
echo "" >> "$OUT"

# ─── 6. SKILL INTEGRITY ───
echo "## 6. Skill Integrity" >> "$OUT"
echo '```' >> "$OUT"
echo "=== Installed Skills ===" >> "$OUT"
for d in $WS/skills/*/; do
    skill=$(basename "$d")
    has_skill_md="NO"
    [ -f "$d/SKILL.md" ] && has_skill_md="YES"
    has_scripts="NO"
    [ -d "$d/scripts" ] && has_scripts="YES"
    echo "  $skill: SKILL.md=$has_skill_md scripts=$has_scripts" >> "$OUT"
done
echo "" >> "$OUT"
echo "=== ClawHub installed (from .clawhub markers) ===" >> "$OUT"
find $WS/skills -name 'origin.json' -path '*/.clawhub/*' 2>/dev/null | while read f; do
    skill=$(echo $f | sed "s|$WS/skills/||" | sed 's|/.clawhub/origin.json||')
    version=$(python3 -c "import json; print(json.load(open('$f')).get('version','?'))" 2>/dev/null)
    echo "  $skill: v$version" >> "$OUT"
done
echo '```' >> "$OUT"
echo "" >> "$OUT"

# ─── 7. CONFIG CONSISTENCY ───
echo "## 7. Config Consistency" >> "$OUT"
echo '```' >> "$OUT"
echo "=== .gitignore ===" >> "$OUT"
cat $WS/.gitignore 2>/dev/null >> "$OUT"
echo "" >> "$OUT"
echo "=== Environment variables (names only) ===" >> "$OUT"
env | grep -iE '(API_KEY|TOKEN|SECRET|PASSWORD)' | sed 's/=.*/=***REDACTED***/' >> "$OUT"
echo "" >> "$OUT"
echo "=== Git remote ===" >> "$OUT"
cd $WS && git remote -v 2>/dev/null | sed 's/ghp_[^@]*/***REDACTED***/g' >> "$OUT"
echo "" >> "$OUT"
echo "=== OpenClaw config files ===" >> "$OUT"
ls -la /root/.openclaw/*.json /root/.openclaw/*.yaml /root/.openclaw/*.yml 2>/dev/null >> "$OUT" || echo "(none found)" >> "$OUT"
echo '```' >> "$OUT"
echo "" >> "$OUT"

# ─── 8. DATA INTEGRITY ───
echo "## 8. Data Integrity" >> "$OUT"
echo '```' >> "$OUT"
echo "=== MEMORY.md health ===" >> "$OUT"
lines=$(wc -l < "$WS/MEMORY.md" 2>/dev/null || echo 0)
words=$(wc -w < "$WS/MEMORY.md" 2>/dev/null || echo 0)
echo "MEMORY.md: $lines lines, $words words" >> "$OUT"
echo "" >> "$OUT"
echo "=== Memory file dates ===" >> "$OUT"
ls -1 $WS/memory/*.md 2>/dev/null | while read f; do
    echo "  $(basename $f): $(wc -l < $f) lines" >> "$OUT"
done
echo "" >> "$OUT"
echo "=== AgentMail state ===" >> "$OUT"
cat $WS/memory/agentmail-state.json 2>/dev/null >> "$OUT" || echo "(no state)" >> "$OUT"
echo "" >> "$OUT"
echo "=== Git status (uncommitted changes) ===" >> "$OUT"
cd $WS && git status --short 2>/dev/null >> "$OUT"
echo '```' >> "$OUT"
echo "" >> "$OUT"

# ─── 9. SECURITY POSTURE ───
echo "## 9. Security Posture" >> "$OUT"
echo '```' >> "$OUT"
echo "=== Listening ports ===" >> "$OUT"
ss -tlnp 2>/dev/null | head -15 >> "$OUT" || netstat -tlnp 2>/dev/null | head -15 >> "$OUT"
echo "" >> "$OUT"
echo "=== Failed SSH attempts (last 24h) ===" >> "$OUT"
grep -c "Failed password" /var/log/auth.log 2>/dev/null >> "$OUT" || journalctl -u ssh --since "24 hours ago" 2>/dev/null | grep -c "Failed" >> "$OUT" || echo "(unavailable)" >> "$OUT"
echo "" >> "$OUT"
echo "=== Credentials in git check ===" >> "$OUT"
cd $WS && git log --all -p 2>/dev/null | grep -cE '(ghp_|GOCSPX|sk-[a-zA-Z0-9]{20,})' >> "$OUT" || echo "0" >> "$OUT"
echo "" >> "$OUT"
echo "=== TOOLS.md in git? ===" >> "$OUT"
cd $WS && git ls-files TOOLS.md 2>/dev/null | wc -l >> "$OUT"
echo '```' >> "$OUT"

echo "Health data collection complete: $OUT"
