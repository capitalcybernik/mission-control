---
name: action1
description: Manage endpoints, patches, vulnerabilities, automations, and reports via the Action1 RMM/patch management REST API (v3.0). Use when querying endpoint status, checking patch compliance, listing vulnerabilities, running automations/scripts on endpoints, managing endpoint groups, pulling reports, or any Action1 platform operation. Requires API credentials (Client ID + Client Secret) stored in TOOLS.md.
---

# Action1 RMM Integration

## Authentication

Obtain a bearer token before any API call:

```bash
curl -s -XPOST \
  -H "Content-Type:application/x-www-form-urlencoded" \
  -d "client_id=${ACTION1_CLIENT_ID}&client_secret=${ACTION1_CLIENT_SECRET}" \
  https://app.action1.com/api/3.0/oauth2/token
```

Response contains `access_token` (JWT, 1h TTL), `refresh_token`, `expires_in`, `token_type: bearer`.

Use header `Authorization: Bearer <access_token>` on all subsequent calls.

**Credentials:** Read from TOOLS.md (`ACTION1_CLIENT_ID`, `ACTION1_CLIENT_SECRET`, `ACTION1_ORG_ID`).

## Base URL

```
https://app.action1.com/api/3.0
```

All endpoints below are relative to this base. Replace `{org_id}` with the organization ID.

## Core API Endpoints

### Organizations
- `GET /organizations` — list all organizations
- `GET /organizations/{org_id}` — single org details

### Endpoints (Managed Devices)
- `GET /endpoints/managed/{org_id}` — list endpoints
- `GET /endpoints/managed/{org_id}?fields=*` — list with full details (OS, IP, patch status, vulnerabilities, last seen, user, etc.)
- `GET /endpoints/managed/{org_id}/{endpoint_id}` — single endpoint
- `GET /endpoints/managed/{org_id}/{endpoint_id}/general` — endpoint general info

### Endpoint Groups
- `GET /endpoints/groups/{org_id}` — list groups
- `GET /endpoints/groups/{org_id}/{group_id}` — group details
- `GET /endpoints/groups/{org_id}/{group_id}/contents` — group members
- `POST /endpoints/groups/{org_id}` — create group (JSON body: name, description, include_filter, exclude_filter)
- `PUT /endpoints/groups/{org_id}/{group_id}` — modify group
- `DELETE /endpoints/groups/{org_id}/{group_id}` — delete group

### Policies (Patch Deployments)
- `GET /policies/{org_id}` — list policies
- `GET /policies/{org_id}/{policy_id}` — policy details
- `GET /policies/{org_id}/{policy_id}/results` — policy execution results

### Automations
- `GET /automations/{org_id}` — list automations
- `GET /automations/{org_id}/{automation_id}` — automation details
- `POST /automations/{org_id}` — create automation
- `PUT /automations/{org_id}/{automation_id}` — modify automation

### Missing Updates
- `GET /updates/missing/{org_id}` — list missing updates across all endpoints
- `GET /endpoints/managed/{org_id}/{endpoint_id}/missing_updates` — missing updates for one endpoint

### Vulnerabilities
- `GET /vulnerabilities/{org_id}` — list detected CVEs
- `GET /vulnerabilities/{org_id}/{vulnerability_id}` — vulnerability details

### Installed Software (Apps)
- `GET /apps/{org_id}` — list installed apps across endpoints
- `GET /endpoints/managed/{org_id}/{endpoint_id}/apps` — apps on a specific endpoint

### Software Repository (Packages)
- `GET /packages/{org_id}` — list available packages for deployment

### Scripts
- `GET /scripts/{org_id}` — list available scripts

### Reports
- `GET /reports/{org_id}` — list available reports
- `GET /reports/{org_id}/{report_id}/data` — report data
- `GET /reports/{org_id}/{report_id}/export` — export report

### Advanced Settings
- `GET /settings/{org_id}` — org level settings

## Pagination

All collection endpoints return paginated results:

```json
{
  "items": [...],
  "total_items": 150,
  "limit": 50,
  "next_page": "https://app.action1.com/api/3.0/...",
  "prev_page": null
}
```

Use `?from=N&limit=N` to paginate. Default limit is 50.

## Common Workflows

### Check Endpoint Health
1. `GET /endpoints/managed/{org_id}?fields=*`
2. Filter by `status` (Connected/Disconnected), `vulnerability_status`, `update_status`, `reboot_required`
3. Flag endpoints with `missing_critical_updates > 0`

### Patch Compliance Report
1. `GET /endpoints/managed/{org_id}?fields=*`
2. Count endpoints by `update_status` (Up to date / Updates available / etc.)
3. List endpoints with `missing_critical_updates` or `missing_other_updates`

### Vulnerability Summary
1. `GET /vulnerabilities/{org_id}`
2. Group by severity, list affected endpoints per CVE

### Run Script on Endpoint
1. Create or find automation with `run_script` template
2. Assign endpoint(s) to automation
3. Monitor policy results for completion

## Helper Script

For complex operations, use `scripts/action1_api.sh`:

```bash
# Usage: scripts/action1_api.sh <method> <endpoint_path> [json_body]
# Handles auth token caching and refresh automatically
```

## Error Handling

- `401 Unauthorized` — token expired, re-authenticate
- `403 Forbidden` — insufficient permissions for the API key
- `404 Not Found` — invalid org_id, endpoint_id, or resource path
- `429 Too Many Requests` — rate limited, back off and retry

## Notes

- API v3.0 is the current version
- Regions: NorthAmerica (`app.action1.com`) and Europe (`app.eu.action1.com`)
- All timestamps use format `YYYY-MM-DD_HH-MM-SS`
- For detailed API reference beyond this skill, see `references/api-details.md`
