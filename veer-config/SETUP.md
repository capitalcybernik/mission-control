# Veer - Setup Instructions

## Prerequisites
- Linux server (Ubuntu 22.04+ recommended)
- Node.js 22+
- OpenClaw installed (`npm install -g openclaw@latest`)

## Step 1: Install OpenClaw

```bash
curl -fsSL https://deb.nodesource.com/setup_22.x | sudo -E bash -
sudo apt-get install -y nodejs
npm install -g openclaw@latest
```

## Step 2: Initialize

```bash
openclaw onboard
# Follow the wizard:
# - Provider: Anthropic
# - API Key: (your Anthropic key)
# - Channel: Telegram (create a new bot via @BotFather, name it "Veer")
# - Model: anthropic/claude-sonnet-4-20250514 (or claude-opus-4-6)
```

## Step 3: Copy Config Files

Copy all files from this directory into `/root/.openclaw/workspace/`:

```bash
# From wherever you downloaded/transferred veer-config:
cp IDENTITY.md /root/.openclaw/workspace/
cp SOUL.md /root/.openclaw/workspace/
cp AGENTS.md /root/.openclaw/workspace/
cp USER.md /root/.openclaw/workspace/
cp MEMORY.md /root/.openclaw/workspace/
cp TOOLS.md /root/.openclaw/workspace/
cp HEARTBEAT.md /root/.openclaw/workspace/
mkdir -p /root/.openclaw/workspace/memory
```

## Step 4: Configure Model

Edit config to set the default model:

```bash
openclaw config edit
```

Key settings:
```json
{
  "agents": {
    "defaults": {
      "model": {
        "primary": "anthropic/claude-sonnet-4-20250514",
        "fallbacks": ["anthropic/claude-3-haiku-20240307"]
      }
    }
  }
}
```

Note: Veer can run on Sonnet 4 to save costs. Opus is reserved for Ares (strategy work). Upgrade Veer to Opus if needed for complex tasks.

## Step 5: Create Telegram Bot

1. Open Telegram, search @BotFather
2. Send `/newbot`
3. Name: `Veer` (or `Veer Operations`)
4. Username: `veer_ops_bot` (or similar available name)
5. Copy the bot token
6. Add to OpenClaw config under `channels.telegram.botToken`

## Step 6: Start

```bash
openclaw gateway start
```

## Step 7: First Message

Send Veer a message on Telegram:

> "Read your SOUL.md and IDENTITY.md. Tell me who you are."

He should respond in character. If he does, he's live.

## Step 8: Connect Ares and Veer

For Ares to send tasks to Veer:
- Both need to be on Telegram
- Ares can message Veer's Telegram bot directly
- Or use Dart AI as the shared task board
- Future: direct OpenClaw-to-OpenClaw communication via API

## Recommended Cron Jobs for Veer

```json
{
  "name": "Morning Ops Check",
  "schedule": { "kind": "cron", "expr": "0 8 * * 1-5", "tz": "America/New_York" },
  "sessionTarget": "isolated",
  "payload": {
    "kind": "agentTurn",
    "message": "Morning operations check. Review:\n1. Open client tickets\n2. Overdue tasks in Dart AI\n3. Pending invoices\n4. Client check-ins due today\n5. Any escalations\n\nReport status to Nikhil via Telegram.",
    "model": "anthropic/claude-sonnet-4-20250514",
    "timeoutSeconds": 120
  },
  "delivery": { "mode": "announce" },
  "enabled": true
}
```

```json
{
  "name": "EOD Ops Report",
  "schedule": { "kind": "cron", "expr": "0 17 * * 1-5", "tz": "America/New_York" },
  "sessionTarget": "isolated",
  "payload": {
    "kind": "agentTurn",
    "message": "End of day operations report. Compile:\n1. Tasks completed today\n2. Tasks still open (with reasons)\n3. Client interactions logged\n4. Tomorrow's priorities\n5. Any blockers for Nikhil/Ares\n\nReport to Nikhil via Telegram.",
    "model": "anthropic/claude-sonnet-4-20250514",
    "timeoutSeconds": 120
  },
  "delivery": { "mode": "announce" },
  "enabled": true
}
```
