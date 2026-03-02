#!/bin/bash
# /root/.openclaw/workspace/scripts/backup-workspace.sh
# Ares Workspace Backup Script — Runs 3x daily (7AM, 12PM, 7PM EST)

set -e

WORKSPACE="/root/.openclaw/workspace"
REPO="mission-control"
BRANCH="main"
TIMESTAMP=$(date +"%Y-%m-%d %H:%M:%S")
DATE=$(date +"%Y-%m-%d")
TIME=$(date +"%H:%M")
RUN_ID=$(date +"%s")

# Status file for Mission Control
STATUS_FILE="$WORKSPACE/data/backup-status.json"
LOG_FILE="$WORKSPACE/data/backup-log.jsonl"

# Ensure data directory exists
mkdir -p "$WORKSPACE/data"

cd "$WORKSPACE"

# Start backup record
echo "{\"runId\":$RUN_ID,\"timestamp\":\"$TIMESTAMP\",\"status\":\"running\",\"commits\":0,\"files\":0,\"error\":null}" > "$STATUS_FILE"

# Check git status
git status --porcelain > /tmp/git-status.txt
FILE_COUNT=$(wc -l < /tmp/git-status.txt | tr -d ' ')

if [ "$FILE_COUNT" -eq 0 ]; then
    # No changes to commit
    echo "{\"runId\":$RUN_ID,\"timestamp\":\"$TIMESTAMP\",\"status\":\"success\",\"commits\":0,\"files\":0,\"message\":\"No changes to backup\",\"branch\":\"$BRANCH\"}" > "$STATUS_FILE"
    echo "{\"time\":\"$TIMESTAMP\",\"status\":\"success\",\"commits\":0,\"files\":0,\"message\":\"No changes\"}" >> "$LOG_FILE"
    echo "✓ Backup complete — no changes to commit"
    exit 0
fi

# Add all changes
git add -A 2>&1

# Commit with descriptive message
git commit -m "Auto backup [$TIME]: $FILE_COUNT files changed" 2>&1 || true

# Push to GitHub
git push "$REPO" "$BRANCH:$BRANCH" 2>&1

# Get commit hash
COMMIT_HASH=$(git rev-parse --short HEAD)

# Update status
echo "{\"runId\":$RUN_ID,\"timestamp\":\"$TIMESTAMP\",\"status\":\"success\",\"commits\":1,\"files\":$FILE_COUNT,\"commitHash\":\"$COMMIT_HASH\",\"branch\":\"$BRANCH\",\"message\":\"Backed up $FILE_COUNT files\"}" > "$STATUS_FILE"

# Append to log
echo "{\"time\":\"$TIMESTAMP\",\"status\":\"success\",\"commits\":1,\"files\":$FILE_COUNT,\"hash\":\"$COMMIT_HASH\"}" >> "$LOG_FILE"

# Keep only last 100 log entries
tail -100 "$LOG_FILE" > /tmp/backup-log-temp.jsonl && mv /tmp/backup-log-temp.jsonl "$LOG_FILE"

echo "✓ Backup complete: $FILE_COUNT files → commit $COMMIT_HASH"