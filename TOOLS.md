# TOOLS.md - Local Notes

Skills define _how_ tools work. This file is for _your_ specifics — the stuff that's unique to your setup.

## What Goes Here

Things like:

- Camera names and locations
- SSH hosts and aliases
- Preferred voices for TTS
- Speaker/room names
- Device nicknames
- Anything environment-specific

## Examples

```markdown
### Cameras

- living-room → Main area, 180° wide angle
- front-door → Entrance, motion-triggered

### SSH

- home-server → 192.168.1.100, user: admin

### TTS

- Preferred voice: "Nova" (warm, slightly British)
- Default speaker: Kitchen HomePod
```

## Why Separate?

Skills are shared. Your setup is yours. Keeping them apart means you can update skills without losing your notes, and share skills without leaking your infrastructure.

---

Add whatever helps you do your job. This is your cheat sheet.

## Credentials

**⚠️ SENSITIVE CREDENTIALS MOVED TO LOCAL-ONLY FILE**

All API keys, passwords, and tokens have been moved to:
```
/root/.openclaw/.local/credentials.md
```

This file is gitignored and stored only on this local machine.

### Credential Categories (reference only):

| Service | Use | Location |
|---------|-----|----------|
| OpenAI API | Whisper transcription, other services | Local file |
| Microsoft 365 (Company Email) | Outreach, newsletters | Local file |
| WordPress (capital-cyber.com) | Website management | Local file |
| Upload-Post API | Social media posting | Local file |
| SMTP2GO | Email notifications | Local file |
| Vercel | Web app deployment | Local file |
| GoHighLevel CRM | Lead management | Local file |
| GitHub | Repo operations | Local file |
| Action1 RMM | Remote monitoring | Local file |

---

_This file is safe to commit. Actual credentials never leave this machine._
