# GoHighLevel (GHL) Skill

## API Access
- **Type:** Location API Key (v1)
- **Location:** Capital Cyber (E1CVhn9B96L77EqrtCc2)
- **Dashboard:** https://app.getnextlevelmarketing.com/
- **Base URL:** https://rest.gohighlevel.com/v1/
- **Auth Header:** `Authorization: Bearer <token>`
- **Token:** stored in TOOLS.md

## Key Endpoints

### Contacts
- `GET /contacts/?limit=20` — list contacts
- `GET /contacts/:id` — get contact
- `POST /contacts/` — create contact
- `PUT /contacts/:id` — update contact
- `DELETE /contacts/:id` — delete contact
- `GET /contacts/lookup?email=x` — lookup by email
- `POST /contacts/:id/tags` — add tags
- `DELETE /contacts/:id/tags` — remove tags

### Opportunities (Pipeline)
- `GET /pipelines/` — list pipelines
- `GET /pipelines/:id` — get pipeline
- `POST /opportunities/` — create opportunity
- `GET /opportunities/:id` — get opportunity
- `PUT /opportunities/:id` — update opportunity

### Conversations
- `GET /conversations/:id` — get conversation
- `POST /conversations/` — create conversation

### Calendars
- `GET /calendars/` — list calendars
- `GET /calendars/:id/appointments` — list appointments

### Custom Fields
- `GET /custom-fields/` — list custom fields

### Email/SMS
- v1 API does not have direct email template endpoints
- Use campaigns/workflows in GHL UI for bulk sends
- Can trigger workflows via API by adding tags or updating contact fields

## Usage Notes
- Rate limit: be conservative, use delays between bulk operations
- Contact total: ~4,878 as of Feb 2026
- This is a Zapier-type API key (v1), not OAuth2
