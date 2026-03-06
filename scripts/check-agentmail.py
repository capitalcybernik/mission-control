#!/usr/bin/env python3
"""Check AgentMail inbox for new messages and save summaries."""
import os
import json
import sys
from datetime import datetime, timezone, timedelta
from agentmail import AgentMail

API_KEY = os.environ.get("AGENTMAIL_API_KEY", "")
INBOX_ID = "aresmastercontrol2026@agentmail.to"
STATE_FILE = "/root/.openclaw/workspace/memory/agentmail-state.json"
SUMMARY_DIR = "/root/.openclaw/workspace/memory"

def load_state():
    try:
        with open(STATE_FILE) as f:
            return json.load(f)
    except:
        return {"last_checked": None, "last_message_id": None}

def save_state(state):
    os.makedirs(os.path.dirname(STATE_FILE), exist_ok=True)
    with open(STATE_FILE, "w") as f:
        json.dump(state, f, indent=2)

def main():
    if not API_KEY:
        print("No AGENTMAIL_API_KEY set")
        sys.exit(1)

    client = AgentMail(api_key=API_KEY)
    state = load_state()

    messages = client.inboxes.messages.list(inbox_id=INBOX_ID, limit=20)

    if not messages.messages:
        print(f"{datetime.now(timezone.utc).isoformat()}: No messages")
        state["last_checked"] = datetime.now(timezone.utc).isoformat()
        save_state(state)
        return

    last_id = state.get("last_message_id")
    new_msgs = []

    for msg in messages.messages:
        if msg.message_id == last_id:
            break
        new_msgs.append(msg)

    if not new_msgs:
        print(f"{datetime.now(timezone.utc).isoformat()}: No new messages")
        state["last_checked"] = datetime.now(timezone.utc).isoformat()
        save_state(state)
        return

    # Log new messages
    today = datetime.now(timezone.utc).strftime("%Y-%m-%d")
    log_file = os.path.join(SUMMARY_DIR, f"agentmail-{today}.md")

    with open(log_file, "a") as f:
        for msg in reversed(new_msgs):
            sender = getattr(msg, 'from_', 'unknown')
            subject = getattr(msg, 'subject', '(no subject)')
            text = getattr(msg, 'text', '') or ''
            preview = text[:500].replace('\n', ' ').strip()

            f.write(f"\n## [{datetime.now(timezone.utc).strftime('%H:%M UTC')}] From: {sender}\n")
            f.write(f"**Subject:** {subject}\n\n")
            f.write(f"{preview}\n\n---\n")

            print(f"NEW: From={sender} Subject={subject}")

    # Update state
    state["last_checked"] = datetime.now(timezone.utc).isoformat()
    state["last_message_id"] = messages.messages[0].message_id
    state["new_count"] = len(new_msgs)
    save_state(state)

    print(f"{datetime.now(timezone.utc).isoformat()}: {len(new_msgs)} new message(s)")

if __name__ == "__main__":
    main()
