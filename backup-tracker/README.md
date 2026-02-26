# Backup Tracker

MSP360 backup event tracker for Capital Cyber clients.

## How It Works
1. Nikhil forwards MSP360 backup notification emails
2. Ares parses the email and logs the event to `backups.json`
3. Dashboard (`dashboard.html`) renders all events with filtering

## Data Schema (backups.json)
```json
{
  "events": [
    {
      "id": "uuid",
      "datetime": "2026-02-26T22:00:00Z",
      "date": "2026-02-26",
      "client": "Client Name",
      "computer": "COMPUTER-NAME",
      "plan": "Daily Backup",
      "result": "SUCCESS|WARNING|FAILURE",
      "size": "12.5 GB",
      "duration": "1h 23m",
      "details": "Any additional details from the email",
      "raw_subject": "Original email subject line"
    }
  ],
  "clients": {
    "Client Name": {
      "computers": ["COMPUTER-NAME"],
      "lastSuccess": "2026-02-26T22:00:00Z",
      "lastFailure": null,
      "consecutiveSuccesses": 5
    }
  }
}
```
