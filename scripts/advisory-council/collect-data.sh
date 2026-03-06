#!/bin/bash
# Business Advisory Council — Data Collector
# Pulls data from all available sources into a single briefing file
# Run before the advisory council analysis

set -e
export PATH="/usr/local/bin:/usr/bin:$PATH"
OUT="/root/.openclaw/workspace/scripts/advisory-council/daily-briefing-data.md"
DATE=$(date -u +"%Y-%m-%d")
EST_DATE=$(TZ='America/New_York' date +"%Y-%m-%d")

echo "# Daily Business Data Briefing — $EST_DATE" > "$OUT"
echo "Generated: $(date -u +'%Y-%m-%d %H:%M UTC')" >> "$OUT"
echo "" >> "$OUT"

# ─── 1. DART AI TASKS ───
echo "## Dart AI Tasks" >> "$OUT"
dart task-create --help >/dev/null 2>&1 && {
    echo '```' >> "$OUT"
    # List recent tasks if dart is logged in
    timeout 15 dart task-list 2>&1 | head -60 >> "$OUT" || echo "(Dart not logged in)" >> "$OUT"
    echo '```' >> "$OUT"
} || echo "(Dart CLI unavailable)" >> "$OUT"
echo "" >> "$OUT"

# ─── 2. GHL DEALS (GoHighLevel) ───
echo "## GoHighLevel CRM" >> "$OUT"
GHL_TOKEN=$(grep -A1 'GoHighLevel' /root/.openclaw/.local/credentials.md 2>/dev/null | grep -oP '(?<=Token:\*\* ).*' | head -1)
if [ -n "$GHL_TOKEN" ]; then
    echo "### Pipeline Deals" >> "$OUT"
    echo '```json' >> "$OUT"
    curl -s -H "Authorization: Bearer $GHL_TOKEN" -H "Version: 2021-07-28" \
        "https://services.leadconnectorhq.com/opportunities/search" \
        --data-raw '{"location_id":"","pipeline_id":"","limit":20}' 2>/dev/null | python3 -m json.tool 2>/dev/null | head -100 >> "$OUT" || echo "(GHL API error)" >> "$OUT"
    echo '```' >> "$OUT"
else
    echo "(GHL token not found)" >> "$OUT"
fi
echo "" >> "$OUT"

# ─── 3. AGENTMAIL INBOX ───
echo "## AgentMail — Recent Emails" >> "$OUT"
export AGENTMAIL_API_KEY="am_us_71d9f7eba9e97dd2755318abb91c7dcbb17967c0b1d613d9fb3fa799d6cc3cb6"
python3 -c "
from agentmail import AgentMail
client = AgentMail(api_key='$AGENTMAIL_API_KEY')
msgs = client.inboxes.messages.list(inbox_id='aresmastercontrol2026@agentmail.to', limit=10)
for m in msgs.messages:
    sender = getattr(m, 'from_', 'unknown')
    subj = getattr(m, 'subject', '(none)')
    text = (getattr(m, 'text', '') or '')[:300]
    print(f'**From:** {sender}')
    print(f'**Subject:** {subj}')
    print(f'{text}')
    print('---')
if not msgs.messages:
    print('(No recent emails)')
" >> "$OUT" 2>/dev/null || echo "(AgentMail error)" >> "$OUT"
echo "" >> "$OUT"

# ─── 4. CRON JOB RELIABILITY ───
echo "## Cron Job Status" >> "$OUT"
echo '```' >> "$OUT"
crontab -l 2>/dev/null >> "$OUT"
echo "" >> "$OUT"
echo "Recent cron log activity:" >> "$OUT"
grep -c "Backup complete" /var/log/ares-backup.log 2>/dev/null | xargs -I{} echo "Daily backups completed: {}" >> "$OUT"
tail -5 /var/log/agentmail-check.log 2>/dev/null >> "$OUT" || echo "(no agentmail log)" >> "$OUT"
echo '```' >> "$OUT"
echo "" >> "$OUT"

# ─── 5. DISCORD RECENT ACTIVITY ───
echo "## Discord Activity (last 24h)" >> "$OUT"
echo "(Collected via OpenClaw message tool during analysis phase)" >> "$OUT"
echo "" >> "$OUT"

# ─── 6. MEMORY / MEETING NOTES ───
echo "## Recent Memory & Meeting Notes" >> "$OUT"
for f in /root/.openclaw/workspace/memory/202*.md; do
    mod_time=$(stat -c %Y "$f" 2>/dev/null || echo 0)
    now=$(date +%s)
    age=$(( (now - mod_time) / 86400 ))
    if [ "$age" -lt 3 ]; then
        echo "### $(basename $f)" >> "$OUT"
        head -50 "$f" >> "$OUT"
        echo "" >> "$OUT"
    fi
done
echo "" >> "$OUT"

# ─── 7. GIT ACTIVITY ───
echo "## Git Activity (last 7 days)" >> "$OUT"
echo '```' >> "$OUT"
cd /root/.openclaw/workspace && git log --oneline --since="7 days ago" 2>/dev/null | head -20 >> "$OUT"
echo '```' >> "$OUT"
echo "" >> "$OUT"

# ─── 8. WEBSITE STATUS (quick check) ───
echo "## Website Status" >> "$OUT"
for site in capital-cyber.com cybergrantsalliance.org cmmcreadynow.com telcounited.com getnextlevelmarketing.com; do
    code=$(curl -s -o /dev/null -w "%{http_code}" --max-time 10 "https://$site" 2>/dev/null)
    echo "- **$site**: HTTP $code" >> "$OUT"
done
echo "" >> "$OUT"

echo "Data collection complete: $OUT"
