#!/bin/bash
# Obsidian Vault Backup Script
# Runs daily via Task Scheduler (Windows) or cron/launchd (Mac/Linux)
# Commits and pushes all vault changes to private GitHub repo

VAULT_PATH="$HOME/ObsidianVault"  # <-- Change this to your vault location

cd "$VAULT_PATH" || { echo "Vault not found at $VAULT_PATH"; exit 1; }

# Initialize git if not already
if [ ! -d ".git" ]; then
    git init
    git remote add origin https://github.com/capitalcybernik/obsidian-vault-backup.git
    echo "Initialized git repo. Run this script again to make first backup."
    exit 0
fi

# Stage all changes
git add -A

# Check if there are changes to commit
if git diff --cached --quiet; then
    echo "No changes to backup."
    exit 0
fi

# Commit with timestamp
TIMESTAMP=$(date +"%Y-%m-%d %H:%M")
git commit -m "vault backup: $TIMESTAMP"

# Push to GitHub
git push -u origin main 2>/dev/null || git push -u origin master

echo "Backup complete: $TIMESTAMP"
