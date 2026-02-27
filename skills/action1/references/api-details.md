# Action1 API Reference Details

## Endpoint Object (full fields)

When querying with `?fields=*`:

| Field | Description |
|-------|-------------|
| id | Endpoint UUID |
| name | Computer name |
| status | Connected / Disconnected |
| last_seen | Last check-in timestamp |
| address | Internal IP |
| external_address | External IP |
| OS | Operating system (e.g., "Windows 11 (23H2)") |
| platform | Windows_64, macOS_ARM, etc. |
| agent_version | Action1 agent version |
| agent_install_date | When agent was installed |
| subscription_status | Active / Inactive |
| user | Last logged on user (DOMAIN\user) |
| comment | Admin notes |
| MAC | MAC address |
| serial | Hardware serial |
| reboot_required | Yes / No |
| CPU_name | Processor name |
| CPU_size | CPU specs |
| disk | Disk info |
| manufacturer | Hardware manufacturer |
| NIC | Network adapter |
| RAM | Memory info |
| last_boot_time | Last reboot timestamp |
| update_status | Patch status |
| vulnerability_status | Vulnerability scan status |
| missing_critical_updates | Count of critical missing patches |
| missing_other_updates | Count of other missing patches |

## Endpoint Group Filters

Groups use include/exclude filters:

```json
{
  "name": "Windows 10 Machines",
  "description": "All Win10 endpoints",
  "include_filter": [
    {"field_name": "OS", "field_value": "Windows 10", "mode": "include"}
  ],
  "exclude_filter": []
}
```

Filter fields: `OS`, `name`, `address`, `user`, `status`, `platform`

## Automation Object

```json
{
  "name": "Run Weekly Script",
  "settings": "ENABLED",
  "retry_minutes": 1440,
  "endpoints": [
    {"id": "<endpoint_id>", "type": "Endpoint"},
    {"id": "<group_id>", "type": "EndpointGroup"}
  ],
  "actions": [
    {
      "name": "Run Command",
      "template_id": "run_script",
      "params": {},
      "id": "action_uuid"
    }
  ]
}
```

## Common template_ids for Actions

| template_id | Description |
|------------|-------------|
| run_script | Run a custom script |
| install_update | Install specific update |
| install_package | Install software package |
| reboot | Reboot endpoint |
| uninstall_package | Uninstall software |

## PSAction1 PowerShell Module

For environments with PowerShell, the official `PSAction1` module provides cmdlets:

```powershell
Install-Module PSAction1
Set-Action1Region NorthAmerica
Set-Action1Credentials -APIKey "client_id" -Secret "client_secret"
Set-Action1DefaultOrg -Org_ID "org_uuid"

# Query
Get-Action1 Endpoints
Get-Action1 Endpoint -Id "uuid"
Get-Action1 Vulnerabilities
Get-Action1 Policies
Get-Action1 Automations
Get-Action1 Reports
Get-Action1 Apps
Get-Action1 MissingUpdates
Get-Action1 EndpointGroups
Get-Action1 Scripts
Get-Action1 Packages

# Create
New-Action1 EndpointGroup -Data $groupObj

# Modify
Update-Action1 Modify -Type EndpointGroup -Id "id" -Data $obj
Update-Action1 Delete -Type EndpointGroup -Id "id"

# Requery
Start-Action1Requery -Type Endpoints
```

## Rate Limits

No published rate limits, but implement exponential backoff on 429 responses. Typical safe rate: 60 requests/minute.
