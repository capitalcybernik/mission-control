#!/bin/bash
# Ares Daily Self-Backup
# Commits and pushes entire workspace to ares-master-control
# Runs daily via cron

WORKSPACE="/root/.openclaw/workspace"
cd "$WORKSPACE" || exit 1

# Stage everything
git add -A

# Skip if nothing changed
if git diff --cached --quiet; then
    echo "$(date): No changes to backup."
    exit 0
fi

# Commit with timestamp
TIMESTAMP=$(date +"%Y-%m-%d %H:%M UTC")
git commit -m "auto-backup: $TIMESTAMP"

# Push
git push origin main 2>&1

echo "$(date): Backup complete."
