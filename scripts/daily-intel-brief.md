# Daily Intel Brief — Cron Task

Runs at 6:00 AM EST daily. Searches for:
1. CMMC news and updates
2. Cybersecurity industry trends
3. Competitor activity (MSPs, MSSPs in Virginia/DC area)
4. Grant and opportunity announcements

Results are compiled and:
1. Posted to Discord #daily-intel channel
2. Saved to `intel/YYYY-MM-DD.md` in the ares-master-control repo
3. Appended to `docs/data/intel.json` so they appear on Mission Control (https://capitalcybernik.github.io/mission-control/)
4. Committed and pushed to GitHub

## Intel JSON Format

Each item in `docs/data/intel.json` follows this structure:

```json
{
  "id": "unique-id-string",
  "title": "Headline",
  "summary": "Brief summary of the intel item",
  "source": "https://source-url.com",
  "category": "CMMC News | Industry Trends | Competitor Watch | Opportunities",
  "importance": "hot | notable | reference",
  "date": "2026-02-25T10:00:00.000Z"
}
```
