# Ares Migration Guide
## Moving OpenClaw to a New Server

### What You Need
- New Linux server (Ubuntu 22.04+ recommended)
- Root/sudo access
- Node.js 22+ (LTS)
- At least 2GB RAM, 10GB disk

### Step 1: Backup Current State

```bash
# On current server, create backup
mkdir -p /tmp/ares-backup
cd /root/.openclaw/workspace

# Archive everything
rsync -av --exclude=node_modules \
  --exclude=.git \
  /root/.openclaw/workspace/ \
  /tmp/ares-backup/workspace/

# Include configs
cp -r /root/.openclaw /tmp/ares-backup/

# Create tarball
cd /tmp/ares-backup
tar czf /tmp/ares-migration-$(date +%Y%m%d).tar.gz .
```

### Step 2: Transfer to New Server

```bash
# From new server, pull the backup
scp user@old-server:/tmp/ares-migration-*.tar.gz /tmp/

# Or use rsync
rsync -avz --progress user@old-server:/tmp/ares-migration-*.tar.gz /tmp/
```

### Step 3: Install OpenClaw on New Server

```bash
# Install Node.js 22
curl -fsSL https://deb.nodesource.com/setup_22.x | sudo -E bash -
sudo apt-get install -y nodejs

# Install OpenClaw globally
sudo npm install -g openclaw@latest

# Verify
openclaw --version
```

### Step 4: Restore Workspace

```bash
# Create directory structure
mkdir -p /root/.openclaw/workspace
cd /root/.openclaw/workspace

# Extract backup
tar xzf /tmp/ares-migration-*.tar.gz

# Move workspace contents
cp -r workspace/* /root/.openclaw/workspace/
cp -r .openclaw/* /root/.openclaw/ 2>/dev/null || true

# Set permissions
chmod 700 /root/.openclaw
chmod 600 /root/.openclaw/.dart-config 2>/dev/null || true
```

### Step 5: Reinstall Dependencies

```bash
cd /root/.openclaw/workspace

# Reinstall any skill dependencies
for skill in skills/*/; do
  if [ -f "$skill/package.json" ]; then
    echo "Installing $skill..."
    cd "$skill" && npm install && cd /root/.openclaw/workspace
  fi
done
```

### Step 6: Configure OpenClaw

```bash
# Set up config (if needed)
openclaw config edit

# Add your providers and channels
# - Telegram bot token
# - Model provider (OpenAI, Anthropic, etc.)
# - Any API keys
```

### Step 7: Test Migration

```bash
# Start OpenClaw
openclaw daemon

# In another terminal, check status
openclaw status
openclaw sessions list

# Send test message via configured channel
```

### Critical Files to Preserve

| Path | Contents | Importance |
|------|----------|------------|
| /root/.openclaw/workspace/ | All skills, scripts, data | CRITICAL |
| /root/.openclaw/workspace/MEMORY.md | Long-term memory | CRITICAL |
| /root/.openclaw/workspace/memory/*.md | Daily logs | HIGH |
| /root/.openclaw/.dart-config | Dart AI token | HIGH |
| /root/.openclaw/workspace/TOOLS.md | Credentials, configs | CRITICAL |
| /root/.openclaw/config.json | OpenClaw config | HIGH |
| Cron jobs | Scheduled tasks | MEDIUM |

### Step 8: Migrate Cron Jobs

On old server:
```bash
openclaw cron list > /tmp/cron-backup.json
cat /tmp/cron-backup.json
```

On new server:
```bash
# Recreate each cron job manually
# (There's no bulk import yet)
```

### Verification Checklist

- [ ] OpenClaw daemon starts without errors
- [ ] Can receive messages on configured channel(s)
- [ ] Can reply to messages
- [ ] Skills load properly
- [ ] Dart AI connection works
- [ ] Memory files are accessible
- [ ] Cron jobs recreated and running

### Rollback Plan

If migration fails:
1. Keep old server running until new one is verified
2. Stop OpenClaw on new server
3. Restart on old server if needed
4. DNS/redirects pointed at old server as fallback

### Support

OpenClaw docs: https://docs.openclaw.ai
GitHub: https://github.com/openclaw/openclaw
Discord: https://discord.com/invite/clawd
