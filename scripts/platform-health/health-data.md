# Platform Health Data — 2026-03-06
Generated: 2026-03-06 09:00 UTC

## 1. Cron Job Health
### Active Cron Jobs
```
0 0 * * * /tmp/cron-daily-security.sh # Daily Security Audit (Midnight UTC)
0 11 * * * /tmp/cron-daily-strategy.sh # Daily Capital Cyber Strategy (6AM EST)
0 14 25 2 * /tmp/campaign-tier2.sh # CGA CPA Tier 2 Campaign
0 */4 * * * /tmp/context-check.sh # Context monitoring
19 03 24 02 * openclaw system event --text 'Nikhil: Summit site build update ready. Check status.' --mode now
0 5 * * * /root/.openclaw/workspace/scripts/daily-backup.sh >> /var/log/ares-backup.log 2>&1 # Ares daily self-backup (midnight EST)
0 16 2 3 * openclaw system event --text 'Nikhil: Reminder to send out the Cyber Grant Summit press release this week. Draft is in your email and at /root/Projects/cyber-grant-summit/press-release.md' --mode now
0 2 * * * cd /tmp/nextlevel-marketing && python3 /tmp/location-page-generator.py >> /tmp/location-cron.log 2>&1 && git add locations/ && git commit -m "auto: location pages batch 2026-03-02" && git push && vercel --prod --yes --token ***REDACTED*** >> /tmp/vercel-deploy.log 2>&1
*/30 * * * * /tmp/cron-check-agentmail.sh # AgentMail inbox check every 30 min
0 10 * * * /tmp/cron-advisory-council.sh # Business Advisory Council (5AM EST daily)
0 9 * * * /tmp/cron-platform-health.sh # Platform Health Council (4AM EST daily)
```
### Recent Log Output
```
=== Backup Log (last 10) ===
[main 76dbfa8] auto-backup: 2026-03-03 05:00 UTC
 5 files changed, 184 insertions(+), 1 deletion(-)
 create mode 100644 projects/craftsman/Starlink-Installation-Agreement-Craftsman-Auto-Care.md
 create mode 100644 projects/craftsman/Starlink-Installation-Agreement-Craftsman-Auto-Care.pdf
To https://github.com/capitalcybernik/cmmc-grc.git
   69e105e..76dbfa8  main -> main
Tue Mar  3 05:00:03 UTC 2026: Backup complete.
Wed Mar  4 05:00:01 UTC 2026: No changes to backup.
Thu Mar  5 05:00:01 UTC 2026: No changes to backup.
Fri Mar  6 05:00:02 UTC 2026: No changes to backup.

=== AgentMail Check Log (last 10) ===
2026-03-06T06:00:02.088011+00:00: No messages
2026-03-06T06:30:02.278439+00:00: No messages
2026-03-06T07:00:02.121356+00:00: No messages
2026-03-06T07:30:01.972068+00:00: No messages
2026-03-06T08:00:01.963029+00:00: No messages
2026-03-06T08:30:01.894777+00:00: No messages

=== Advisory Council Log (last 10) ===
(no log)

=== Security Audit Log (last 10) ===
(no log)

=== Syslog cron entries (last 20) ===
2026-03-06T07:55:01.228520+00:00 srv1375321 CRON[390136]: (root) CMD (command -v debian-sa1 > /dev/null && debian-sa1 1 1)
2026-03-06T08:00:01.265368+00:00 srv1375321 CRON[390184]: (root) CMD (/tmp/context-check.sh # Context monitoring)
2026-03-06T08:00:01.273334+00:00 srv1375321 CRON[390183]: (root) CMD (/tmp/cron-check-agentmail.sh # AgentMail inbox check every 30 min)
2026-03-06T08:00:01.282928+00:00 srv1375321 CRON[390182]: (CRON) info (No MTA installed, discarding output)
2026-03-06T08:05:01.166287+00:00 srv1375321 CRON[390236]: (root) CMD (command -v debian-sa1 > /dev/null && debian-sa1 1 1)
2026-03-06T08:15:01.180002+00:00 srv1375321 CRON[390328]: (root) CMD (command -v debian-sa1 > /dev/null && debian-sa1 1 1)
2026-03-06T08:17:01.192837+00:00 srv1375321 CRON[390347]: (root) CMD (cd / && run-parts --report /etc/cron.hourly)
2026-03-06T08:25:01.208455+00:00 srv1375321 CRON[390428]: (root) CMD (command -v debian-sa1 > /dev/null && debian-sa1 1 1)
2026-03-06T08:30:01.228757+00:00 srv1375321 CRON[390475]: (root) CMD (/tmp/cron-check-agentmail.sh # AgentMail inbox check every 30 min)
2026-03-06T08:30:01.232968+00:00 srv1375321 CRON[390476]: (root) CMD ([ -x /etc/init.d/anacron ] && if [ ! -d /run/systemd/system ]; then /usr/sbin/invoke-rc.d anacron start >/dev/null; fi)
2026-03-06T08:33:47.334117+00:00 srv1375321 systemd[1]: Started anacron.service - Run anacron jobs.
2026-03-06T08:33:47.343992+00:00 srv1375321 anacron[390514]: Anacron 2.3 started on 2026-03-06
2026-03-06T08:33:47.344104+00:00 srv1375321 anacron[390514]: Normal exit (0 jobs run)
2026-03-06T08:33:47.346587+00:00 srv1375321 systemd[1]: anacron.service: Deactivated successfully.
2026-03-06T08:35:01.090457+00:00 srv1375321 CRON[390528]: (root) CMD (command -v debian-sa1 > /dev/null && debian-sa1 1 1)
2026-03-06T08:45:01.106162+00:00 srv1375321 CRON[390624]: (root) CMD (command -v debian-sa1 > /dev/null && debian-sa1 1 1)
2026-03-06T08:55:01.122992+00:00 srv1375321 CRON[390715]: (root) CMD (command -v debian-sa1 > /dev/null && debian-sa1 1 1)
2026-03-06T09:00:01.145589+00:00 srv1375321 CRON[390762]: (root) CMD (/tmp/cron-check-agentmail.sh # AgentMail inbox check every 30 min)
2026-03-06T09:00:01.146940+00:00 srv1375321 CRON[390763]: (root) CMD (/tmp/cron-platform-health.sh # Platform Health Council (4AM EST daily))
2026-03-06T09:00:01.193319+00:00 srv1375321 crontab[390771]: (root) LIST (root)
```

## 2. Code Quality & Technical Debt
### Workspace File Stats
```
Total files: 45018
Markdown files: 1259
Python scripts: 38
Shell scripts: 47
JSON files: 1840

=== Files modified in last 7 days ===
/root/.openclaw/workspace/.clawhub/lock.json
/root/.openclaw/workspace/.gitignore
/root/.openclaw/workspace/.nojekyll
/root/.openclaw/workspace/>functions.write:18<|tool_call_argument_begin|>{
/root/.openclaw/workspace/>write:16<|tool_call_argument_begin|>{
/root/.openclaw/workspace/HEARTBEAT.md
/root/.openclaw/workspace/IDENTITY.md
/root/.openclaw/workspace/MEMORY.md
/root/.openclaw/workspace/README.md
/root/.openclaw/workspace/TOOLS.md
/root/.openclaw/workspace/USER.md
/root/.openclaw/workspace/backup-tracker/README.md
/root/.openclaw/workspace/backup-tracker/backups.json
/root/.openclaw/workspace/backup-tracker/dashboard.html
/root/.openclaw/workspace/cmmc-templates-2/Intake/CMMC-L2-Client-Intake-Form.docx
/root/.openclaw/workspace/cmmc-templates-2/L1/AC-access-control-policy.docx
/root/.openclaw/workspace/cmmc-templates-2/L1/IA-identification-authentication-policy.docx
/root/.openclaw/workspace/cmmc-templates-2/L1/MP-media-protection-policy.docx
/root/.openclaw/workspace/cmmc-templates-2/L1/PE-physical-protection-policy.docx
/root/.openclaw/workspace/cmmc-templates-2/L1/SC-system-communications-protection-policy.docx
/root/.openclaw/workspace/cmmc-templates-2/L1/SI-system-information-integrity-policy.docx
/root/.openclaw/workspace/cmmc-templates-2/L2/AC-access-control-policy.docx
/root/.openclaw/workspace/cmmc-templates-2/L2/AT-awareness-and-training-policy.docx
/root/.openclaw/workspace/cmmc-templates-2/L2/AT-awareness-training-policy.docx
/root/.openclaw/workspace/cmmc-templates-2/L2/AU-audit-accountability-policy.docx
/root/.openclaw/workspace/cmmc-templates-2/L2/AU-audit-and-accountability-policy.docx
/root/.openclaw/workspace/cmmc-templates-2/L2/CA-security-assessment-policy.docx
/root/.openclaw/workspace/cmmc-templates-2/L2/CM-configuration-management-policy.docx
/root/.openclaw/workspace/cmmc-templates-2/L2/IA-identification-and-authentication-policy.docx
/root/.openclaw/workspace/cmmc-templates-2/L2/IA-identification-authentication-policy.docx
/root/.openclaw/workspace/cmmc-templates-2/L2/IR-incident-response-policy.docx
/root/.openclaw/workspace/cmmc-templates-2/L2/MA-maintenance-policy.docx
/root/.openclaw/workspace/cmmc-templates-2/L2/MP-media-protection-policy.docx
/root/.openclaw/workspace/cmmc-templates-2/L2/PE-physical-protection-policy.docx
/root/.openclaw/workspace/cmmc-templates-2/L2/PS-personnel-security-policy.docx
/root/.openclaw/workspace/cmmc-templates-2/L2/RA-risk-assessment-policy.docx
/root/.openclaw/workspace/cmmc-templates-2/L2/SC-system-and-communications-protection-policy.docx
/root/.openclaw/workspace/cmmc-templates-2/L2/SC-system-communications-protection-policy.docx
/root/.openclaw/workspace/cmmc-templates-2/L2/SI-system-and-information-integrity-policy.docx
/root/.openclaw/workspace/cmmc-templates-2/L2/SI-system-information-integrity-policy.docx
/root/.openclaw/workspace/cmmc-templates-2/POAM/README.md
/root/.openclaw/workspace/cmmc-templates-2/README.md
/root/.openclaw/workspace/cmmc-templates-2/SSP/README.md
/root/.openclaw/workspace/cmmc-templates-2/Shared-Responsibility-Matrix.docx
/root/.openclaw/workspace/dart_task_create.md
/root/.openclaw/workspace/dashboard-reference.html
/root/.openclaw/workspace/data/backup-log.jsonl
/root/.openclaw/workspace/data/backup-status.json
/root/.openclaw/workspace/data/intel.json
/root/.openclaw/workspace/data/tasks.json
/root/.openclaw/workspace/docs/blog-cmmc-contracts-2026.html
/root/.openclaw/workspace/docs/cmmc-contract-tracker.html
/root/.openclaw/workspace/docs/cmmc-for-construction.html
/root/.openclaw/workspace/docs/cmmc-for-manufacturers.html
/root/.openclaw/workspace/docs/group-chat-rules.md
/root/.openclaw/workspace/docs/index.html
/root/.openclaw/workspace/docs/insurability-landing-page.html
/root/.openclaw/workspace/drafts/cga-queue/2026-02-26-thu.md
/root/.openclaw/workspace/drafts/cga-queue/2026-03-03-tuesday.md
/root/.openclaw/workspace/drafts/cga-queue/2026-03-05-thursday.md
/root/.openclaw/workspace/drafts/client-email-cyber-threat-alert-march2026.html
/root/.openclaw/workspace/drafts/cmmc-tracker-site/blog-cmmc-contracts-2026.html
/root/.openclaw/workspace/drafts/cmmc-tracker-site/cmmc-contract-tracker.html
/root/.openclaw/workspace/drafts/cmmc-tracker-site/cmmc-for-construction.html
/root/.openclaw/workspace/drafts/cmmc-tracker-site/cmmc-for-manufacturers.html
/root/.openclaw/workspace/drafts/insurability-landing-page.html
/root/.openclaw/workspace/drafts/wp-blog-cmmc-2026-content.html
/root/.openclaw/workspace/drafts/wp-careers-ambassador-arizona.html
/root/.openclaw/workspace/drafts/wp-careers-ambassador-dmv.html
/root/.openclaw/workspace/drafts/wp-careers-page.html
/root/.openclaw/workspace/drafts/wp-cmmc-construction-content.html
/root/.openclaw/workspace/drafts/wp-cmmc-manufacturers-content.html
/root/.openclaw/workspace/drafts/wp-cmmc-tracker-content.html
/root/.openclaw/workspace/drafts/wp-insurability-content.html
/root/.openclaw/workspace/generate_cmmc_l2_templates.py
/root/.openclaw/workspace/getnextlevel-email-ad.md
/root/.openclaw/workspace/index.html
/root/.openclaw/workspace/intel/2026-02-26.md
/root/.openclaw/workspace/intel/cmmc-contract-tracker.md
/root/.openclaw/workspace/marketing.md
/root/.openclaw/workspace/memory/2026-02-23.md
/root/.openclaw/workspace/memory/2026-02-26.md
/root/.openclaw/workspace/memory/2026-02-27.md
/root/.openclaw/workspace/memory/2026-02-28.md
/root/.openclaw/workspace/memory/2026-03-01.md
/root/.openclaw/workspace/memory/2026-03-02.md
/root/.openclaw/workspace/memory/2026-03-03.md
/root/.openclaw/workspace/memory/2026-03-04.md
/root/.openclaw/workspace/memory/2026-03-05.md
/root/.openclaw/workspace/memory/agentmail-state.json
/root/.openclaw/workspace/package-lock.json
/root/.openclaw/workspace/package.json
/root/.openclaw/workspace/projects/AIemployeeSOP/02-build/openclaw-claude-max-setup.md
/root/.openclaw/workspace/projects/cga-gap-assessment-grant-page.html
/root/.openclaw/workspace/projects/cmmc-gap-assessment/.env.local
/root/.openclaw/workspace/projects/cmmc-gap-assessment/.gitignore
/root/.openclaw/workspace/projects/cmmc-gap-assessment/.next/BUILD_ID
/root/.openclaw/workspace/projects/cmmc-gap-assessment/.next/app-path-routes-manifest.json
/root/.openclaw/workspace/projects/cmmc-gap-assessment/.next/build-manifest.json
/root/.openclaw/workspace/projects/cmmc-gap-assessment/.next/build/chunks/4c6ef_dc12dd76._.js
/root/.openclaw/workspace/projects/cmmc-gap-assessment/.next/build/chunks/4c6ef_dc12dd76._.js.map
/root/.openclaw/workspace/projects/cmmc-gap-assessment/.next/build/chunks/[root-of-the-server]__1b938fe3._.js
/root/.openclaw/workspace/projects/cmmc-gap-assessment/.next/build/chunks/[root-of-the-server]__1b938fe3._.js.map
/root/.openclaw/workspace/projects/cmmc-gap-assessment/.next/build/chunks/[root-of-the-server]__7743657f._.js
/root/.openclaw/workspace/projects/cmmc-gap-assessment/.next/build/chunks/[root-of-the-server]__7743657f._.js.map
/root/.openclaw/workspace/projects/cmmc-gap-assessment/.next/build/chunks/[turbopack-node]_transforms_postcss_ts_1f7a4a32._.js
/root/.openclaw/workspace/projects/cmmc-gap-assessment/.next/build/chunks/[turbopack-node]_transforms_postcss_ts_1f7a4a32._.js.map
/root/.openclaw/workspace/projects/cmmc-gap-assessment/.next/build/chunks/[turbopack]_runtime.js
/root/.openclaw/workspace/projects/cmmc-gap-assessment/.next/build/chunks/[turbopack]_runtime.js.map
/root/.openclaw/workspace/projects/cmmc-gap-assessment/.next/build/package.json
/root/.openclaw/workspace/projects/cmmc-gap-assessment/.next/build/postcss.js
/root/.openclaw/workspace/projects/cmmc-gap-assessment/.next/build/postcss.js.map
/root/.openclaw/workspace/projects/cmmc-gap-assessment/.next/cache/.previewinfo
/root/.openclaw/workspace/projects/cmmc-gap-assessment/.next/cache/.rscinfo
/root/.openclaw/workspace/projects/cmmc-gap-assessment/.next/cache/.tsbuildinfo
/root/.openclaw/workspace/projects/cmmc-gap-assessment/.next/diagnostics/build-diagnostics.json
/root/.openclaw/workspace/projects/cmmc-gap-assessment/.next/diagnostics/framework.json
/root/.openclaw/workspace/projects/cmmc-gap-assessment/.next/export-marker.json
/root/.openclaw/workspace/projects/cmmc-gap-assessment/.next/fallback-build-manifest.json
/root/.openclaw/workspace/projects/cmmc-gap-assessment/.next/images-manifest.json
/root/.openclaw/workspace/projects/cmmc-gap-assessment/.next/next-minimal-server.js.nft.json
/root/.openclaw/workspace/projects/cmmc-gap-assessment/.next/next-server.js.nft.json
/root/.openclaw/workspace/projects/cmmc-gap-assessment/.next/package.json
/root/.openclaw/workspace/projects/cmmc-gap-assessment/.next/prerender-manifest.json
/root/.openclaw/workspace/projects/cmmc-gap-assessment/.next/required-server-files.js
/root/.openclaw/workspace/projects/cmmc-gap-assessment/.next/required-server-files.json
/root/.openclaw/workspace/projects/cmmc-gap-assessment/.next/routes-manifest.json
/root/.openclaw/workspace/projects/cmmc-gap-assessment/.next/server/app-paths-manifest.json
/root/.openclaw/workspace/projects/cmmc-gap-assessment/.next/server/app/_global-error.html
/root/.openclaw/workspace/projects/cmmc-gap-assessment/.next/server/app/_global-error.meta
/root/.openclaw/workspace/projects/cmmc-gap-assessment/.next/server/app/_global-error.rsc
/root/.openclaw/workspace/projects/cmmc-gap-assessment/.next/server/app/_global-error.segments/__PAGE__.segment.rsc
/root/.openclaw/workspace/projects/cmmc-gap-assessment/.next/server/app/_global-error.segments/_full.segment.rsc
/root/.openclaw/workspace/projects/cmmc-gap-assessment/.next/server/app/_global-error.segments/_head.segment.rsc
/root/.openclaw/workspace/projects/cmmc-gap-assessment/.next/server/app/_global-error.segments/_index.segment.rsc
/root/.openclaw/workspace/projects/cmmc-gap-assessment/.next/server/app/_global-error.segments/_tree.segment.rsc
/root/.openclaw/workspace/projects/cmmc-gap-assessment/.next/server/app/_global-error/page.js
/root/.openclaw/workspace/projects/cmmc-gap-assessment/.next/server/app/_global-error/page.js.map
/root/.openclaw/workspace/projects/cmmc-gap-assessment/.next/server/app/_global-error/page.js.nft.json
/root/.openclaw/workspace/projects/cmmc-gap-assessment/.next/server/app/_global-error/page/app-paths-manifest.json
/root/.openclaw/workspace/projects/cmmc-gap-assessment/.next/server/app/_global-error/page/build-manifest.json
/root/.openclaw/workspace/projects/cmmc-gap-assessment/.next/server/app/_global-error/page/next-font-manifest.json
/root/.openclaw/workspace/projects/cmmc-gap-assessment/.next/server/app/_global-error/page/react-loadable-manifest.json
/root/.openclaw/workspace/projects/cmmc-gap-assessment/.next/server/app/_global-error/page/server-reference-manifest.json
/root/.openclaw/workspace/projects/cmmc-gap-assessment/.next/server/app/_global-error/page_client-reference-manifest.js
/root/.openclaw/workspace/projects/cmmc-gap-assessment/.next/server/app/_not-found.html
/root/.openclaw/workspace/projects/cmmc-gap-assessment/.next/server/app/_not-found.meta
/root/.openclaw/workspace/projects/cmmc-gap-assessment/.next/server/app/_not-found.rsc
/root/.openclaw/workspace/projects/cmmc-gap-assessment/.next/server/app/_not-found.segments/_full.segment.rsc
/root/.openclaw/workspace/projects/cmmc-gap-assessment/.next/server/app/_not-found.segments/_head.segment.rsc
/root/.openclaw/workspace/projects/cmmc-gap-assessment/.next/server/app/_not-found.segments/_index.segment.rsc
/root/.openclaw/workspace/projects/cmmc-gap-assessment/.next/server/app/_not-found.segments/_not-found.segment.rsc
/root/.openclaw/workspace/projects/cmmc-gap-assessment/.next/server/app/_not-found.segments/_not-found/__PAGE__.segment.rsc
/root/.openclaw/workspace/projects/cmmc-gap-assessment/.next/server/app/_not-found.segments/_tree.segment.rsc
/root/.openclaw/workspace/projects/cmmc-gap-assessment/.next/server/app/_not-found/page.js
/root/.openclaw/workspace/projects/cmmc-gap-assessment/.next/server/app/_not-found/page.js.map
/root/.openclaw/workspace/projects/cmmc-gap-assessment/.next/server/app/_not-found/page.js.nft.json
/root/.openclaw/workspace/projects/cmmc-gap-assessment/.next/server/app/_not-found/page/app-paths-manifest.json
/root/.openclaw/workspace/projects/cmmc-gap-assessment/.next/server/app/_not-found/page/build-manifest.json
/root/.openclaw/workspace/projects/cmmc-gap-assessment/.next/server/app/_not-found/page/next-font-manifest.json
/root/.openclaw/workspace/projects/cmmc-gap-assessment/.next/server/app/_not-found/page/react-loadable-manifest.json
/root/.openclaw/workspace/projects/cmmc-gap-assessment/.next/server/app/_not-found/page/server-reference-manifest.json
/root/.openclaw/workspace/projects/cmmc-gap-assessment/.next/server/app/_not-found/page_client-reference-manifest.js
/root/.openclaw/workspace/projects/cmmc-gap-assessment/.next/server/app/admin.html
/root/.openclaw/workspace/projects/cmmc-gap-assessment/.next/server/app/admin.meta
/root/.openclaw/workspace/projects/cmmc-gap-assessment/.next/server/app/admin.rsc
/root/.openclaw/workspace/projects/cmmc-gap-assessment/.next/server/app/admin.segments/_full.segment.rsc
/root/.openclaw/workspace/projects/cmmc-gap-assessment/.next/server/app/admin.segments/_head.segment.rsc
/root/.openclaw/workspace/projects/cmmc-gap-assessment/.next/server/app/admin.segments/_index.segment.rsc
/root/.openclaw/workspace/projects/cmmc-gap-assessment/.next/server/app/admin.segments/_tree.segment.rsc
/root/.openclaw/workspace/projects/cmmc-gap-assessment/.next/server/app/admin.segments/admin.segment.rsc
/root/.openclaw/workspace/projects/cmmc-gap-assessment/.next/server/app/admin.segments/admin/__PAGE__.segment.rsc
/root/.openclaw/workspace/projects/cmmc-gap-assessment/.next/server/app/admin/page.js
/root/.openclaw/workspace/projects/cmmc-gap-assessment/.next/server/app/admin/page.js.map
/root/.openclaw/workspace/projects/cmmc-gap-assessment/.next/server/app/admin/page.js.nft.json
/root/.openclaw/workspace/projects/cmmc-gap-assessment/.next/server/app/admin/page/app-paths-manifest.json
/root/.openclaw/workspace/projects/cmmc-gap-assessment/.next/server/app/admin/page/build-manifest.json
/root/.openclaw/workspace/projects/cmmc-gap-assessment/.next/server/app/admin/page/next-font-manifest.json
/root/.openclaw/workspace/projects/cmmc-gap-assessment/.next/server/app/admin/page/react-loadable-manifest.json
/root/.openclaw/workspace/projects/cmmc-gap-assessment/.next/server/app/admin/page/server-reference-manifest.json
/root/.openclaw/workspace/projects/cmmc-gap-assessment/.next/server/app/admin/page_client-reference-manifest.js
/root/.openclaw/workspace/projects/cmmc-gap-assessment/.next/server/app/api/admin/submissions/route.js
/root/.openclaw/workspace/projects/cmmc-gap-assessment/.next/server/app/api/admin/submissions/route.js.map
/root/.openclaw/workspace/projects/cmmc-gap-assessment/.next/server/app/api/admin/submissions/route.js.nft.json
/root/.openclaw/workspace/projects/cmmc-gap-assessment/.next/server/app/api/admin/submissions/route/app-paths-manifest.json
/root/.openclaw/workspace/projects/cmmc-gap-assessment/.next/server/app/api/admin/submissions/route/build-manifest.json
/root/.openclaw/workspace/projects/cmmc-gap-assessment/.next/server/app/api/admin/submissions/route/server-reference-manifest.json
/root/.openclaw/workspace/projects/cmmc-gap-assessment/.next/server/app/api/admin/submissions/route_client-reference-manifest.js
/root/.openclaw/workspace/projects/cmmc-gap-assessment/.next/server/app/api/submit-assessment/route.js
/root/.openclaw/workspace/projects/cmmc-gap-assessment/.next/server/app/api/submit-assessment/route.js.map
/root/.openclaw/workspace/projects/cmmc-gap-assessment/.next/server/app/api/submit-assessment/route.js.nft.json
/root/.openclaw/workspace/projects/cmmc-gap-assessment/.next/server/app/api/submit-assessment/route/app-paths-manifest.json
/root/.openclaw/workspace/projects/cmmc-gap-assessment/.next/server/app/api/submit-assessment/route/build-manifest.json
/root/.openclaw/workspace/projects/cmmc-gap-assessment/.next/server/app/api/submit-assessment/route/server-reference-manifest.json
/root/.openclaw/workspace/projects/cmmc-gap-assessment/.next/server/app/api/submit-assessment/route_client-reference-manifest.js
/root/.openclaw/workspace/projects/cmmc-gap-assessment/.next/server/app/api/validate-grant-code/route.js
/root/.openclaw/workspace/projects/cmmc-gap-assessment/.next/server/app/api/validate-grant-code/route.js.map
/root/.openclaw/workspace/projects/cmmc-gap-assessment/.next/server/app/api/validate-grant-code/route.js.nft.json
/root/.openclaw/workspace/projects/cmmc-gap-assessment/.next/server/app/api/validate-grant-code/route/app-paths-manifest.json
/root/.openclaw/workspace/projects/cmmc-gap-assessment/.next/server/app/api/validate-grant-code/route/build-manifest.json
/root/.openclaw/workspace/projects/cmmc-gap-assessment/.next/server/app/api/validate-grant-code/route/server-reference-manifest.json
/root/.openclaw/workspace/projects/cmmc-gap-assessment/.next/server/app/api/validate-grant-code/route_client-reference-manifest.js
/root/.openclaw/workspace/projects/cmmc-gap-assessment/.next/server/app/assessment.html
/root/.openclaw/workspace/projects/cmmc-gap-assessment/.next/server/app/assessment.meta
/root/.openclaw/workspace/projects/cmmc-gap-assessment/.next/server/app/assessment.rsc
/root/.openclaw/workspace/projects/cmmc-gap-assessment/.next/server/app/assessment.segments/_full.segment.rsc
/root/.openclaw/workspace/projects/cmmc-gap-assessment/.next/server/app/assessment.segments/_head.segment.rsc
/root/.openclaw/workspace/projects/cmmc-gap-assessment/.next/server/app/assessment.segments/_index.segment.rsc
/root/.openclaw/workspace/projects/cmmc-gap-assessment/.next/server/app/assessment.segments/_tree.segment.rsc
/root/.openclaw/workspace/projects/cmmc-gap-assessment/.next/server/app/assessment.segments/assessment.segment.rsc
/root/.openclaw/workspace/projects/cmmc-gap-assessment/.next/server/app/assessment.segments/assessment/__PAGE__.segment.rsc
/root/.openclaw/workspace/projects/cmmc-gap-assessment/.next/server/app/assessment/page.js
/root/.openclaw/workspace/projects/cmmc-gap-assessment/.next/server/app/assessment/page.js.map
/root/.openclaw/workspace/projects/cmmc-gap-assessment/.next/server/app/assessment/page.js.nft.json
/root/.openclaw/workspace/projects/cmmc-gap-assessment/.next/server/app/assessment/page/app-paths-manifest.json
/root/.openclaw/workspace/projects/cmmc-gap-assessment/.next/server/app/assessment/page/build-manifest.json
/root/.openclaw/workspace/projects/cmmc-gap-assessment/.next/server/app/assessment/page/next-font-manifest.json
/root/.openclaw/workspace/projects/cmmc-gap-assessment/.next/server/app/assessment/page/react-loadable-manifest.json
/root/.openclaw/workspace/projects/cmmc-gap-assessment/.next/server/app/assessment/page/server-reference-manifest.json
/root/.openclaw/workspace/projects/cmmc-gap-assessment/.next/server/app/assessment/page_client-reference-manifest.js
/root/.openclaw/workspace/projects/cmmc-gap-assessment/.next/server/app/favicon.ico.body
/root/.openclaw/workspace/projects/cmmc-gap-assessment/.next/server/app/favicon.ico.meta
/root/.openclaw/workspace/projects/cmmc-gap-assessment/.next/server/app/favicon.ico/route.js
/root/.openclaw/workspace/projects/cmmc-gap-assessment/.next/server/app/favicon.ico/route.js.map
/root/.openclaw/workspace/projects/cmmc-gap-assessment/.next/server/app/favicon.ico/route.js.nft.json
/root/.openclaw/workspace/projects/cmmc-gap-assessment/.next/server/app/favicon.ico/route/app-paths-manifest.json
/root/.openclaw/workspace/projects/cmmc-gap-assessment/.next/server/app/favicon.ico/route/build-manifest.json
/root/.openclaw/workspace/projects/cmmc-gap-assessment/.next/server/app/index.html
/root/.openclaw/workspace/projects/cmmc-gap-assessment/.next/server/app/index.meta
/root/.openclaw/workspace/projects/cmmc-gap-assessment/.next/server/app/index.rsc
/root/.openclaw/workspace/projects/cmmc-gap-assessment/.next/server/app/index.segments/__PAGE__.segment.rsc
/root/.openclaw/workspace/projects/cmmc-gap-assessment/.next/server/app/index.segments/_full.segment.rsc
/root/.openclaw/workspace/projects/cmmc-gap-assessment/.next/server/app/index.segments/_head.segment.rsc
/root/.openclaw/workspace/projects/cmmc-gap-assessment/.next/server/app/index.segments/_index.segment.rsc
/root/.openclaw/workspace/projects/cmmc-gap-assessment/.next/server/app/index.segments/_tree.segment.rsc
/root/.openclaw/workspace/projects/cmmc-gap-assessment/.next/server/app/page.js
/root/.openclaw/workspace/projects/cmmc-gap-assessment/.next/server/app/page.js.map
/root/.openclaw/workspace/projects/cmmc-gap-assessment/.next/server/app/page.js.nft.json
/root/.openclaw/workspace/projects/cmmc-gap-assessment/.next/server/app/page/app-paths-manifest.json
/root/.openclaw/workspace/projects/cmmc-gap-assessment/.next/server/app/page/build-manifest.json
/root/.openclaw/workspace/projects/cmmc-gap-assessment/.next/server/app/page/next-font-manifest.json
/root/.openclaw/workspace/projects/cmmc-gap-assessment/.next/server/app/page/react-loadable-manifest.json
/root/.openclaw/workspace/projects/cmmc-gap-assessment/.next/server/app/page/server-reference-manifest.json
/root/.openclaw/workspace/projects/cmmc-gap-assessment/.next/server/app/page_client-reference-manifest.js
/root/.openclaw/workspace/projects/cmmc-gap-assessment/.next/server/app/results.html
/root/.openclaw/workspace/projects/cmmc-gap-assessment/.next/server/app/results.meta
/root/.openclaw/workspace/projects/cmmc-gap-assessment/.next/server/app/results.rsc
/root/.openclaw/workspace/projects/cmmc-gap-assessment/.next/server/app/results.segments/_full.segment.rsc
/root/.openclaw/workspace/projects/cmmc-gap-assessment/.next/server/app/results.segments/_head.segment.rsc
/root/.openclaw/workspace/projects/cmmc-gap-assessment/.next/server/app/results.segments/_index.segment.rsc
/root/.openclaw/workspace/projects/cmmc-gap-assessment/.next/server/app/results.segments/_tree.segment.rsc
/root/.openclaw/workspace/projects/cmmc-gap-assessment/.next/server/app/results.segments/results.segment.rsc
/root/.openclaw/workspace/projects/cmmc-gap-assessment/.next/server/app/results.segments/results/__PAGE__.segment.rsc
/root/.openclaw/workspace/projects/cmmc-gap-assessment/.next/server/app/results/page.js
/root/.openclaw/workspace/projects/cmmc-gap-assessment/.next/server/app/results/page.js.map
/root/.openclaw/workspace/projects/cmmc-gap-assessment/.next/server/app/results/page.js.nft.json
/root/.openclaw/workspace/projects/cmmc-gap-assessment/.next/server/app/results/page/app-paths-manifest.json
/root/.openclaw/workspace/projects/cmmc-gap-assessment/.next/server/app/results/page/build-manifest.json
/root/.openclaw/workspace/projects/cmmc-gap-assessment/.next/server/app/results/page/next-font-manifest.json
/root/.openclaw/workspace/projects/cmmc-gap-assessment/.next/server/app/results/page/react-loadable-manifest.json
/root/.openclaw/workspace/projects/cmmc-gap-assessment/.next/server/app/results/page/server-reference-manifest.json
/root/.openclaw/workspace/projects/cmmc-gap-assessment/.next/server/app/results/page_client-reference-manifest.js
/root/.openclaw/workspace/projects/cmmc-gap-assessment/.next/server/chunks/4c6ef_next_dist_esm_build_templates_app-route_eb0704fb.js
/root/.openclaw/workspace/projects/cmmc-gap-assessment/.next/server/chunks/4c6ef_next_dist_esm_build_templates_app-route_eb0704fb.js.map
/root/.openclaw/workspace/projects/cmmc-gap-assessment/.next/server/chunks/90c36__next-internal_server_app_api_admin_submissions_route_actions_c70dfa78.js
/root/.openclaw/workspace/projects/cmmc-gap-assessment/.next/server/chunks/90c36__next-internal_server_app_api_admin_submissions_route_actions_c70dfa78.js.map
/root/.openclaw/workspace/projects/cmmc-gap-assessment/.next/server/chunks/90c36__next-internal_server_app_api_submit-assessment_route_actions_b4f3690d.js
/root/.openclaw/workspace/projects/cmmc-gap-assessment/.next/server/chunks/90c36__next-internal_server_app_api_submit-assessment_route_actions_b4f3690d.js.map
/root/.openclaw/workspace/projects/cmmc-gap-assessment/.next/server/chunks/90c36__next-internal_server_app_api_validate-grant-code_route_actions_e8b75039.js
/root/.openclaw/workspace/projects/cmmc-gap-assessment/.next/server/chunks/90c36__next-internal_server_app_api_validate-grant-code_route_actions_e8b75039.js.map
/root/.openclaw/workspace/projects/cmmc-gap-assessment/.next/server/chunks/90c36__next-internal_server_app_favicon_ico_route_actions_dc67e699.js
/root/.openclaw/workspace/projects/cmmc-gap-assessment/.next/server/chunks/90c36__next-internal_server_app_favicon_ico_route_actions_dc67e699.js.map
/root/.openclaw/workspace/projects/cmmc-gap-assessment/.next/server/chunks/[externals]_next_dist_a6d89067._.js
/root/.openclaw/workspace/projects/cmmc-gap-assessment/.next/server/chunks/[externals]_next_dist_a6d89067._.js.map
/root/.openclaw/workspace/projects/cmmc-gap-assessment/.next/server/chunks/[root-of-the-server]__109c515e._.js
/root/.openclaw/workspace/projects/cmmc-gap-assessment/.next/server/chunks/[root-of-the-server]__109c515e._.js.map
/root/.openclaw/workspace/projects/cmmc-gap-assessment/.next/server/chunks/[root-of-the-server]__14ace01c._.js
/root/.openclaw/workspace/projects/cmmc-gap-assessment/.next/server/chunks/[root-of-the-server]__14ace01c._.js.map
/root/.openclaw/workspace/projects/cmmc-gap-assessment/.next/server/chunks/[root-of-the-server]__28603069._.js
/root/.openclaw/workspace/projects/cmmc-gap-assessment/.next/server/chunks/[root-of-the-server]__28603069._.js.map
/root/.openclaw/workspace/projects/cmmc-gap-assessment/.next/server/chunks/[root-of-the-server]__e4f59f0c._.js
/root/.openclaw/workspace/projects/cmmc-gap-assessment/.next/server/chunks/[root-of-the-server]__e4f59f0c._.js.map
/root/.openclaw/workspace/projects/cmmc-gap-assessment/.next/server/chunks/[root-of-the-server]__facd3fbc._.js
/root/.openclaw/workspace/projects/cmmc-gap-assessment/.next/server/chunks/[root-of-the-server]__facd3fbc._.js.map
/root/.openclaw/workspace/projects/cmmc-gap-assessment/.next/server/chunks/[turbopack]_runtime.js
/root/.openclaw/workspace/projects/cmmc-gap-assessment/.next/server/chunks/[turbopack]_runtime.js.map
/root/.openclaw/workspace/projects/cmmc-gap-assessment/.next/server/chunks/ssr/4c6ef_next_dist_3b9bebd1._.js
/root/.openclaw/workspace/projects/cmmc-gap-assessment/.next/server/chunks/ssr/4c6ef_next_dist_3b9bebd1._.js.map
/root/.openclaw/workspace/projects/cmmc-gap-assessment/.next/server/chunks/ssr/4c6ef_next_dist_45a4cf2d._.js
/root/.openclaw/workspace/projects/cmmc-gap-assessment/.next/server/chunks/ssr/4c6ef_next_dist_45a4cf2d._.js.map
/root/.openclaw/workspace/projects/cmmc-gap-assessment/.next/server/chunks/ssr/4c6ef_next_dist_b6c50320._.js
/root/.openclaw/workspace/projects/cmmc-gap-assessment/.next/server/chunks/ssr/4c6ef_next_dist_b6c50320._.js.map
/root/.openclaw/workspace/projects/cmmc-gap-assessment/.next/server/chunks/ssr/4c6ef_next_dist_client_components_bdb51a2d._.js
/root/.openclaw/workspace/projects/cmmc-gap-assessment/.next/server/chunks/ssr/4c6ef_next_dist_client_components_bdb51a2d._.js.map
/root/.openclaw/workspace/projects/cmmc-gap-assessment/.next/server/chunks/ssr/4c6ef_next_dist_client_components_builtin_forbidden_1a5816eb.js
/root/.openclaw/workspace/projects/cmmc-gap-assessment/.next/server/chunks/ssr/4c6ef_next_dist_client_components_builtin_forbidden_1a5816eb.js.map
/root/.openclaw/workspace/projects/cmmc-gap-assessment/.next/server/chunks/ssr/4c6ef_next_dist_client_components_builtin_global-error_3edc50b1.js
/root/.openclaw/workspace/projects/cmmc-gap-assessment/.next/server/chunks/ssr/4c6ef_next_dist_client_components_builtin_global-error_3edc50b1.js.map
/root/.openclaw/workspace/projects/cmmc-gap-assessment/.next/server/chunks/ssr/4c6ef_next_dist_client_components_builtin_unauthorized_6a16027d.js
/root/.openclaw/workspace/projects/cmmc-gap-assessment/.next/server/chunks/ssr/4c6ef_next_dist_client_components_builtin_unauthorized_6a16027d.js.map
/root/.openclaw/workspace/projects/cmmc-gap-assessment/.next/server/chunks/ssr/4c6ef_next_dist_d313c406._.js
/root/.openclaw/workspace/projects/cmmc-gap-assessment/.next/server/chunks/ssr/4c6ef_next_dist_d313c406._.js.map
/root/.openclaw/workspace/projects/cmmc-gap-assessment/.next/server/chunks/ssr/4c6ef_next_dist_esm_build_templates_app-page_3de2f57f.js
/root/.openclaw/workspace/projects/cmmc-gap-assessment/.next/server/chunks/ssr/4c6ef_next_dist_esm_build_templates_app-page_3de2f57f.js.map
/root/.openclaw/workspace/projects/cmmc-gap-assessment/.next/server/chunks/ssr/4c6ef_next_dist_f352d238._.js
/root/.openclaw/workspace/projects/cmmc-gap-assessment/.next/server/chunks/ssr/4c6ef_next_dist_f352d238._.js.map
/root/.openclaw/workspace/projects/cmmc-gap-assessment/.next/server/chunks/ssr/90c36__next-internal_server_app__global-error_page_actions_a348c288.js
/root/.openclaw/workspace/projects/cmmc-gap-assessment/.next/server/chunks/ssr/90c36__next-internal_server_app__global-error_page_actions_a348c288.js.map
/root/.openclaw/workspace/projects/cmmc-gap-assessment/.next/server/chunks/ssr/9e3a1_cmmc-gap-assessment__next-internal_server_app__not-found_page_actions_bf10b22a.js
/root/.openclaw/workspace/projects/cmmc-gap-assessment/.next/server/chunks/ssr/9e3a1_cmmc-gap-assessment__next-internal_server_app__not-found_page_actions_bf10b22a.js.map
/root/.openclaw/workspace/projects/cmmc-gap-assessment/.next/server/chunks/ssr/9e3a1_cmmc-gap-assessment__next-internal_server_app_admin_page_actions_17b172ad.js
/root/.openclaw/workspace/projects/cmmc-gap-assessment/.next/server/chunks/ssr/9e3a1_cmmc-gap-assessment__next-internal_server_app_admin_page_actions_17b172ad.js.map
/root/.openclaw/workspace/projects/cmmc-gap-assessment/.next/server/chunks/ssr/9e3a1_cmmc-gap-assessment__next-internal_server_app_assessment_page_actions_ebba066c.js
/root/.openclaw/workspace/projects/cmmc-gap-assessment/.next/server/chunks/ssr/9e3a1_cmmc-gap-assessment__next-internal_server_app_assessment_page_actions_ebba066c.js.map
/root/.openclaw/workspace/projects/cmmc-gap-assessment/.next/server/chunks/ssr/9e3a1_cmmc-gap-assessment__next-internal_server_app_results_page_actions_c4dd19b4.js
/root/.openclaw/workspace/projects/cmmc-gap-assessment/.next/server/chunks/ssr/9e3a1_cmmc-gap-assessment__next-internal_server_app_results_page_actions_c4dd19b4.js.map
/root/.openclaw/workspace/projects/cmmc-gap-assessment/.next/server/chunks/ssr/[root-of-the-server]__06f852aa._.js
/root/.openclaw/workspace/projects/cmmc-gap-assessment/.next/server/chunks/ssr/[root-of-the-server]__06f852aa._.js.map
/root/.openclaw/workspace/projects/cmmc-gap-assessment/.next/server/chunks/ssr/[root-of-the-server]__0b02a0ae._.js
/root/.openclaw/workspace/projects/cmmc-gap-assessment/.next/server/chunks/ssr/[root-of-the-server]__0b02a0ae._.js.map
/root/.openclaw/workspace/projects/cmmc-gap-assessment/.next/server/chunks/ssr/[root-of-the-server]__176381e4._.js
/root/.openclaw/workspace/projects/cmmc-gap-assessment/.next/server/chunks/ssr/[root-of-the-server]__176381e4._.js.map
/root/.openclaw/workspace/projects/cmmc-gap-assessment/.next/server/chunks/ssr/[root-of-the-server]__3f9e311d._.js
/root/.openclaw/workspace/projects/cmmc-gap-assessment/.next/server/chunks/ssr/[root-of-the-server]__3f9e311d._.js.map
/root/.openclaw/workspace/projects/cmmc-gap-assessment/.next/server/chunks/ssr/[root-of-the-server]__72bcbcde._.js
/root/.openclaw/workspace/projects/cmmc-gap-assessment/.next/server/chunks/ssr/[root-of-the-server]__72bcbcde._.js.map
/root/.openclaw/workspace/projects/cmmc-gap-assessment/.next/server/chunks/ssr/[root-of-the-server]__7685c644._.js
/root/.openclaw/workspace/projects/cmmc-gap-assessment/.next/server/chunks/ssr/[root-of-the-server]__7685c644._.js.map
/root/.openclaw/workspace/projects/cmmc-gap-assessment/.next/server/chunks/ssr/[root-of-the-server]__7a30fa9e._.js
/root/.openclaw/workspace/projects/cmmc-gap-assessment/.next/server/chunks/ssr/[root-of-the-server]__7a30fa9e._.js.map
/root/.openclaw/workspace/projects/cmmc-gap-assessment/.next/server/chunks/ssr/[root-of-the-server]__7bbfdc90._.js
/root/.openclaw/workspace/projects/cmmc-gap-assessment/.next/server/chunks/ssr/[root-of-the-server]__7bbfdc90._.js.map
/root/.openclaw/workspace/projects/cmmc-gap-assessment/.next/server/chunks/ssr/[root-of-the-server]__7fc4f4c3._.js
/root/.openclaw/workspace/projects/cmmc-gap-assessment/.next/server/chunks/ssr/[root-of-the-server]__7fc4f4c3._.js.map
/root/.openclaw/workspace/projects/cmmc-gap-assessment/.next/server/chunks/ssr/[root-of-the-server]__8793acd8._.js
/root/.openclaw/workspace/projects/cmmc-gap-assessment/.next/server/chunks/ssr/[root-of-the-server]__8793acd8._.js.map
/root/.openclaw/workspace/projects/cmmc-gap-assessment/.next/server/chunks/ssr/[root-of-the-server]__87e9f703._.js
/root/.openclaw/workspace/projects/cmmc-gap-assessment/.next/server/chunks/ssr/[root-of-the-server]__87e9f703._.js.map
/root/.openclaw/workspace/projects/cmmc-gap-assessment/.next/server/chunks/ssr/[root-of-the-server]__a9fe8af8._.js
/root/.openclaw/workspace/projects/cmmc-gap-assessment/.next/server/chunks/ssr/[root-of-the-server]__a9fe8af8._.js.map
/root/.openclaw/workspace/projects/cmmc-gap-assessment/.next/server/chunks/ssr/[root-of-the-server]__af836258._.js
/root/.openclaw/workspace/projects/cmmc-gap-assessment/.next/server/chunks/ssr/[root-of-the-server]__af836258._.js.map
/root/.openclaw/workspace/projects/cmmc-gap-assessment/.next/server/chunks/ssr/[root-of-the-server]__b4613a7b._.js
/root/.openclaw/workspace/projects/cmmc-gap-assessment/.next/server/chunks/ssr/[root-of-the-server]__b4613a7b._.js.map
/root/.openclaw/workspace/projects/cmmc-gap-assessment/.next/server/chunks/ssr/[root-of-the-server]__cbd496a5._.js
/root/.openclaw/workspace/projects/cmmc-gap-assessment/.next/server/chunks/ssr/[root-of-the-server]__cbd496a5._.js.map
/root/.openclaw/workspace/projects/cmmc-gap-assessment/.next/server/chunks/ssr/[turbopack]_runtime.js
/root/.openclaw/workspace/projects/cmmc-gap-assessment/.next/server/chunks/ssr/[turbopack]_runtime.js.map
/root/.openclaw/workspace/projects/cmmc-gap-assessment/.next/server/chunks/ssr/projects_cmmc-gap-assessment_2f7fbc61._.js
/root/.openclaw/workspace/projects/cmmc-gap-assessment/.next/server/chunks/ssr/projects_cmmc-gap-assessment_2f7fbc61._.js.map
/root/.openclaw/workspace/projects/cmmc-gap-assessment/.next/server/chunks/ssr/projects_cmmc-gap-assessment_37bc5b52._.js
/root/.openclaw/workspace/projects/cmmc-gap-assessment/.next/server/chunks/ssr/projects_cmmc-gap-assessment_37bc5b52._.js.map
/root/.openclaw/workspace/projects/cmmc-gap-assessment/.next/server/chunks/ssr/projects_cmmc-gap-assessment__next-internal_server_app_page_actions_65a2e620.js
/root/.openclaw/workspace/projects/cmmc-gap-assessment/.next/server/chunks/ssr/projects_cmmc-gap-assessment__next-internal_server_app_page_actions_65a2e620.js.map
/root/.openclaw/workspace/projects/cmmc-gap-assessment/.next/server/chunks/ssr/projects_cmmc-gap-assessment_dbd8f229._.js
/root/.openclaw/workspace/projects/cmmc-gap-assessment/.next/server/chunks/ssr/projects_cmmc-gap-assessment_dbd8f229._.js.map
/root/.openclaw/workspace/projects/cmmc-gap-assessment/.next/server/chunks/ssr/projects_cmmc-gap-assessment_e03a895a._.js
/root/.openclaw/workspace/projects/cmmc-gap-assessment/.next/server/chunks/ssr/projects_cmmc-gap-assessment_e03a895a._.js.map
/root/.openclaw/workspace/projects/cmmc-gap-assessment/.next/server/chunks/ssr/projects_cmmc-gap-assessment_e05cc0d0._.js
/root/.openclaw/workspace/projects/cmmc-gap-assessment/.next/server/chunks/ssr/projects_cmmc-gap-assessment_e05cc0d0._.js.map
/root/.openclaw/workspace/projects/cmmc-gap-assessment/.next/server/chunks/ssr/projects_cmmc-gap-assessment_f75723dd._.js
/root/.openclaw/workspace/projects/cmmc-gap-assessment/.next/server/chunks/ssr/projects_cmmc-gap-assessment_f75723dd._.js.map
/root/.openclaw/workspace/projects/cmmc-gap-assessment/.next/server/chunks/ssr/projects_cmmc-gap-assessment_src_app_2f0a09c5._.js
/root/.openclaw/workspace/projects/cmmc-gap-assessment/.next/server/chunks/ssr/projects_cmmc-gap-assessment_src_app_2f0a09c5._.js.map
/root/.openclaw/workspace/projects/cmmc-gap-assessment/.next/server/chunks/ssr/projects_cmmc-gap-assessment_src_app_layout_tsx_927cce79._.js
/root/.openclaw/workspace/projects/cmmc-gap-assessment/.next/server/chunks/ssr/projects_cmmc-gap-assessment_src_app_layout_tsx_927cce79._.js.map
/root/.openclaw/workspace/projects/cmmc-gap-assessment/.next/server/functions-config-manifest.json
/root/.openclaw/workspace/projects/cmmc-gap-assessment/.next/server/interception-route-rewrite-manifest.js
/root/.openclaw/workspace/projects/cmmc-gap-assessment/.next/server/middleware-build-manifest.js
/root/.openclaw/workspace/projects/cmmc-gap-assessment/.next/server/middleware-manifest.json
/root/.openclaw/workspace/projects/cmmc-gap-assessment/.next/server/next-font-manifest.js
/root/.openclaw/workspace/projects/cmmc-gap-assessment/.next/server/next-font-manifest.json
/root/.openclaw/workspace/projects/cmmc-gap-assessment/.next/server/pages-manifest.json
/root/.openclaw/workspace/projects/cmmc-gap-assessment/.next/server/pages/404.html
/root/.openclaw/workspace/projects/cmmc-gap-assessment/.next/server/pages/500.html
/root/.openclaw/workspace/projects/cmmc-gap-assessment/.next/server/server-reference-manifest.js
/root/.openclaw/workspace/projects/cmmc-gap-assessment/.next/server/server-reference-manifest.json
/root/.openclaw/workspace/projects/cmmc-gap-assessment/.next/static/5rbt7bk3jc5claHrNhNZS/_buildManifest.js
/root/.openclaw/workspace/projects/cmmc-gap-assessment/.next/static/5rbt7bk3jc5claHrNhNZS/_clientMiddlewareManifest.json
/root/.openclaw/workspace/projects/cmmc-gap-assessment/.next/static/5rbt7bk3jc5claHrNhNZS/_ssgManifest.js
/root/.openclaw/workspace/projects/cmmc-gap-assessment/.next/static/chunks/0e69ea5f53a637ae.js
/root/.openclaw/workspace/projects/cmmc-gap-assessment/.next/static/chunks/0ef11776a7111de7.js
/root/.openclaw/workspace/projects/cmmc-gap-assessment/.next/static/chunks/29cc1b58af1ee432.js
/root/.openclaw/workspace/projects/cmmc-gap-assessment/.next/static/chunks/3c3f059dc65ad9d2.js
/root/.openclaw/workspace/projects/cmmc-gap-assessment/.next/static/chunks/5d147f42b4051020.js
/root/.openclaw/workspace/projects/cmmc-gap-assessment/.next/static/chunks/64a964ba5977f8c7.js
/root/.openclaw/workspace/projects/cmmc-gap-assessment/.next/static/chunks/674c8c1931a3e60d.js
/root/.openclaw/workspace/projects/cmmc-gap-assessment/.next/static/chunks/978f76e52d0b15e1.js
/root/.openclaw/workspace/projects/cmmc-gap-assessment/.next/static/chunks/a6dad97d9634a72d.js
/root/.openclaw/workspace/projects/cmmc-gap-assessment/.next/static/chunks/a6dad97d9634a72d.js.map
/root/.openclaw/workspace/projects/cmmc-gap-assessment/.next/static/chunks/b25136d265ec1264.js
/root/.openclaw/workspace/projects/cmmc-gap-assessment/.next/static/chunks/dd8c31bbafc57282.js
/root/.openclaw/workspace/projects/cmmc-gap-assessment/.next/static/chunks/fa4cc6ab25d7bcd0.css
/root/.openclaw/workspace/projects/cmmc-gap-assessment/.next/static/chunks/turbopack-34a08e015e1fa385.js
/root/.openclaw/workspace/projects/cmmc-gap-assessment/.next/static/media/favicon.0b3bf435.ico
/root/.openclaw/workspace/projects/cmmc-gap-assessment/.next/trace
/root/.openclaw/workspace/projects/cmmc-gap-assessment/.next/trace-build
/root/.openclaw/workspace/projects/cmmc-gap-assessment/.next/turbopack
/root/.openclaw/workspace/projects/cmmc-gap-assessment/.next/types/routes.d.ts
/root/.openclaw/workspace/projects/cmmc-gap-assessment/.next/types/validator.ts
/root/.openclaw/workspace/projects/cmmc-gap-assessment/.vercel/README.txt
/root/.openclaw/workspace/projects/cmmc-gap-assessment/.vercel/project.json
/root/.openclaw/workspace/projects/cmmc-gap-assessment/README.md
/root/.openclaw/workspace/projects/cmmc-gap-assessment/WEEKEND-BRIEF-FOR-RICK.md
/root/.openclaw/workspace/projects/cmmc-gap-assessment/eslint.config.mjs
/root/.openclaw/workspace/projects/cmmc-gap-assessment/next-env.d.ts
/root/.openclaw/workspace/projects/cmmc-gap-assessment/next.config.ts
/root/.openclaw/workspace/projects/cmmc-gap-assessment/package-lock.json
/root/.openclaw/workspace/projects/cmmc-gap-assessment/package.json
/root/.openclaw/workspace/projects/cmmc-gap-assessment/postcss.config.mjs
/root/.openclaw/workspace/projects/cmmc-gap-assessment/public/file.svg
/root/.openclaw/workspace/projects/cmmc-gap-assessment/public/globe.svg
/root/.openclaw/workspace/projects/cmmc-gap-assessment/public/next.svg
/root/.openclaw/workspace/projects/cmmc-gap-assessment/public/vercel.svg
/root/.openclaw/workspace/projects/cmmc-gap-assessment/public/window.svg
/root/.openclaw/workspace/projects/cmmc-gap-assessment/src/app/admin/page.tsx
/root/.openclaw/workspace/projects/cmmc-gap-assessment/src/app/api/admin/submissions/route.ts
/root/.openclaw/workspace/projects/cmmc-gap-assessment/src/app/api/submit-assessment/route.ts
/root/.openclaw/workspace/projects/cmmc-gap-assessment/src/app/api/validate-grant-code/route.ts
/root/.openclaw/workspace/projects/cmmc-gap-assessment/src/app/assessment/page.tsx
/root/.openclaw/workspace/projects/cmmc-gap-assessment/src/app/favicon.ico
/root/.openclaw/workspace/projects/cmmc-gap-assessment/src/app/globals.css
/root/.openclaw/workspace/projects/cmmc-gap-assessment/src/app/layout.tsx
/root/.openclaw/workspace/projects/cmmc-gap-assessment/src/app/page.tsx
/root/.openclaw/workspace/projects/cmmc-gap-assessment/src/app/results/page.tsx
/root/.openclaw/workspace/projects/cmmc-gap-assessment/src/data/assessment-controls.ts
/root/.openclaw/workspace/projects/cmmc-gap-assessment/src/data/controls.ts
/root/.openclaw/workspace/projects/cmmc-gap-assessment/src/data/nist-controls.ts
/root/.openclaw/workspace/projects/cmmc-gap-assessment/src/data/submissions/.gitkeep
/root/.openclaw/workspace/projects/cmmc-gap-assessment/src/lib/ghl.ts
/root/.openclaw/workspace/projects/cmmc-gap-assessment/src/lib/scoring.ts
/root/.openclaw/workspace/projects/cmmc-gap-assessment/src/lib/supabase.ts
/root/.openclaw/workspace/projects/cmmc-gap-assessment/src/types/index.ts
/root/.openclaw/workspace/projects/cmmc-gap-assessment/tsconfig.json
/root/.openclaw/workspace/projects/cmmcreadynow/.gitignore
/root/.openclaw/workspace/projects/cmmcreadynow/.next/BUILD_ID
/root/.openclaw/workspace/projects/cmmcreadynow/.next/app-build-manifest.json
/root/.openclaw/workspace/projects/cmmcreadynow/.next/app-path-routes-manifest.json
/root/.openclaw/workspace/projects/cmmcreadynow/.next/build-manifest.json
/root/.openclaw/workspace/projects/cmmcreadynow/.next/cache/.tsbuildinfo
/root/.openclaw/workspace/projects/cmmcreadynow/.next/cache/webpack/client-production/0.pack
/root/.openclaw/workspace/projects/cmmcreadynow/.next/cache/webpack/client-production/1.pack
/root/.openclaw/workspace/projects/cmmcreadynow/.next/cache/webpack/client-production/2.pack
/root/.openclaw/workspace/projects/cmmcreadynow/.next/cache/webpack/client-production/index.pack
/root/.openclaw/workspace/projects/cmmcreadynow/.next/cache/webpack/client-production/index.pack.old
/root/.openclaw/workspace/projects/cmmcreadynow/.next/cache/webpack/edge-server-production/0.pack
/root/.openclaw/workspace/projects/cmmcreadynow/.next/cache/webpack/edge-server-production/index.pack
/root/.openclaw/workspace/projects/cmmcreadynow/.next/cache/webpack/server-production/0.pack
/root/.openclaw/workspace/projects/cmmcreadynow/.next/cache/webpack/server-production/1.pack
/root/.openclaw/workspace/projects/cmmcreadynow/.next/cache/webpack/server-production/2.pack
/root/.openclaw/workspace/projects/cmmcreadynow/.next/cache/webpack/server-production/3.pack
/root/.openclaw/workspace/projects/cmmcreadynow/.next/cache/webpack/server-production/4.pack
/root/.openclaw/workspace/projects/cmmcreadynow/.next/cache/webpack/server-production/index.pack
/root/.openclaw/workspace/projects/cmmcreadynow/.next/cache/webpack/server-production/index.pack.old
/root/.openclaw/workspace/projects/cmmcreadynow/.next/export-marker.json
/root/.openclaw/workspace/projects/cmmcreadynow/.next/images-manifest.json
/root/.openclaw/workspace/projects/cmmcreadynow/.next/next-minimal-server.js.nft.json
/root/.openclaw/workspace/projects/cmmcreadynow/.next/next-server.js.nft.json
/root/.openclaw/workspace/projects/cmmcreadynow/.next/package.json
/root/.openclaw/workspace/projects/cmmcreadynow/.next/prerender-manifest.json
/root/.openclaw/workspace/projects/cmmcreadynow/.next/react-loadable-manifest.json
/root/.openclaw/workspace/projects/cmmcreadynow/.next/required-server-files.json
/root/.openclaw/workspace/projects/cmmcreadynow/.next/routes-manifest.json
/root/.openclaw/workspace/projects/cmmcreadynow/.next/server/app-paths-manifest.json
/root/.openclaw/workspace/projects/cmmcreadynow/.next/server/app/_not-found.html
/root/.openclaw/workspace/projects/cmmcreadynow/.next/server/app/_not-found.meta
/root/.openclaw/workspace/projects/cmmcreadynow/.next/server/app/_not-found.rsc
/root/.openclaw/workspace/projects/cmmcreadynow/.next/server/app/_not-found/page.js
/root/.openclaw/workspace/projects/cmmcreadynow/.next/server/app/_not-found/page.js.nft.json
/root/.openclaw/workspace/projects/cmmcreadynow/.next/server/app/_not-found/page_client-reference-manifest.js
/root/.openclaw/workspace/projects/cmmcreadynow/.next/server/app/about.html
/root/.openclaw/workspace/projects/cmmcreadynow/.next/server/app/about.meta
/root/.openclaw/workspace/projects/cmmcreadynow/.next/server/app/about.rsc
/root/.openclaw/workspace/projects/cmmcreadynow/.next/server/app/about/page.js
/root/.openclaw/workspace/projects/cmmcreadynow/.next/server/app/about/page.js.nft.json
/root/.openclaw/workspace/projects/cmmcreadynow/.next/server/app/about/page_client-reference-manifest.js
/root/.openclaw/workspace/projects/cmmcreadynow/.next/server/app/api/contact/route.js
/root/.openclaw/workspace/projects/cmmcreadynow/.next/server/app/api/contact/route.js.nft.json
/root/.openclaw/workspace/projects/cmmcreadynow/.next/server/app/contact.html
/root/.openclaw/workspace/projects/cmmcreadynow/.next/server/app/contact.meta
/root/.openclaw/workspace/projects/cmmcreadynow/.next/server/app/contact.rsc
/root/.openclaw/workspace/projects/cmmcreadynow/.next/server/app/contact/page.js
/root/.openclaw/workspace/projects/cmmcreadynow/.next/server/app/contact/page.js.nft.json
/root/.openclaw/workspace/projects/cmmcreadynow/.next/server/app/contact/page_client-reference-manifest.js
/root/.openclaw/workspace/projects/cmmcreadynow/.next/server/app/index.html
/root/.openclaw/workspace/projects/cmmcreadynow/.next/server/app/index.meta
/root/.openclaw/workspace/projects/cmmcreadynow/.next/server/app/index.rsc
/root/.openclaw/workspace/projects/cmmcreadynow/.next/server/app/page.js
/root/.openclaw/workspace/projects/cmmcreadynow/.next/server/app/page.js.nft.json
/root/.openclaw/workspace/projects/cmmcreadynow/.next/server/app/page_client-reference-manifest.js
/root/.openclaw/workspace/projects/cmmcreadynow/.next/server/app/services.html
/root/.openclaw/workspace/projects/cmmcreadynow/.next/server/app/services.meta
/root/.openclaw/workspace/projects/cmmcreadynow/.next/server/app/services.rsc
/root/.openclaw/workspace/projects/cmmcreadynow/.next/server/app/services/cmmc-compliance-manufacturing-new-jersey.html
/root/.openclaw/workspace/projects/cmmcreadynow/.next/server/app/services/cmmc-compliance-manufacturing-new-jersey.meta
/root/.openclaw/workspace/projects/cmmcreadynow/.next/server/app/services/cmmc-compliance-manufacturing-new-jersey.rsc
/root/.openclaw/workspace/projects/cmmcreadynow/.next/server/app/services/cmmc-compliance-manufacturing-new-jersey/page.js
/root/.openclaw/workspace/projects/cmmcreadynow/.next/server/app/services/cmmc-compliance-manufacturing-new-jersey/page.js.nft.json
/root/.openclaw/workspace/projects/cmmcreadynow/.next/server/app/services/cmmc-compliance-manufacturing-new-jersey/page_client-reference-manifest.js
/root/.openclaw/workspace/projects/cmmcreadynow/.next/server/app/services/cmmc-gap-assessment-defense-contractors-virginia.html
/root/.openclaw/workspace/projects/cmmcreadynow/.next/server/app/services/cmmc-gap-assessment-defense-contractors-virginia.meta
/root/.openclaw/workspace/projects/cmmcreadynow/.next/server/app/services/cmmc-gap-assessment-defense-contractors-virginia.rsc
/root/.openclaw/workspace/projects/cmmcreadynow/.next/server/app/services/cmmc-gap-assessment-defense-contractors-virginia/page.js
/root/.openclaw/workspace/projects/cmmcreadynow/.next/server/app/services/cmmc-gap-assessment-defense-contractors-virginia/page.js.nft.json
/root/.openclaw/workspace/projects/cmmcreadynow/.next/server/app/services/cmmc-gap-assessment-defense-contractors-virginia/page_client-reference-manifest.js
/root/.openclaw/workspace/projects/cmmcreadynow/.next/server/app/services/managed-security-services-aerospace-florida.html
/root/.openclaw/workspace/projects/cmmcreadynow/.next/server/app/services/managed-security-services-aerospace-florida.meta
/root/.openclaw/workspace/projects/cmmcreadynow/.next/server/app/services/managed-security-services-aerospace-florida.rsc
/root/.openclaw/workspace/projects/cmmcreadynow/.next/server/app/services/managed-security-services-aerospace-florida/page.js
/root/.openclaw/workspace/projects/cmmcreadynow/.next/server/app/services/managed-security-services-aerospace-florida/page.js.nft.json
/root/.openclaw/workspace/projects/cmmcreadynow/.next/server/app/services/managed-security-services-aerospace-florida/page_client-reference-manifest.js
/root/.openclaw/workspace/projects/cmmcreadynow/.next/server/app/services/nist-800-171-compliance-manufacturing-philadelphia.html
/root/.openclaw/workspace/projects/cmmcreadynow/.next/server/app/services/nist-800-171-compliance-manufacturing-philadelphia.meta
/root/.openclaw/workspace/projects/cmmcreadynow/.next/server/app/services/nist-800-171-compliance-manufacturing-philadelphia.rsc
/root/.openclaw/workspace/projects/cmmcreadynow/.next/server/app/services/nist-800-171-compliance-manufacturing-philadelphia/page.js
/root/.openclaw/workspace/projects/cmmcreadynow/.next/server/app/services/nist-800-171-compliance-manufacturing-philadelphia/page.js.nft.json
/root/.openclaw/workspace/projects/cmmcreadynow/.next/server/app/services/nist-800-171-compliance-manufacturing-philadelphia/page_client-reference-manifest.js
/root/.openclaw/workspace/projects/cmmcreadynow/.next/server/app/services/page.js
/root/.openclaw/workspace/projects/cmmcreadynow/.next/server/app/services/page.js.nft.json
/root/.openclaw/workspace/projects/cmmcreadynow/.next/server/app/services/page_client-reference-manifest.js
/root/.openclaw/workspace/projects/cmmcreadynow/.next/server/app/services/penetration-testing-construction-companies-new-york.html
/root/.openclaw/workspace/projects/cmmcreadynow/.next/server/app/services/penetration-testing-construction-companies-new-york.meta
/root/.openclaw/workspace/projects/cmmcreadynow/.next/server/app/services/penetration-testing-construction-companies-new-york.rsc
/root/.openclaw/workspace/projects/cmmcreadynow/.next/server/app/services/penetration-testing-construction-companies-new-york/page.js
/root/.openclaw/workspace/projects/cmmcreadynow/.next/server/app/services/penetration-testing-construction-companies-new-york/page.js.nft.json
/root/.openclaw/workspace/projects/cmmcreadynow/.next/server/app/services/penetration-testing-construction-companies-new-york/page_client-reference-manifest.js
/root/.openclaw/workspace/projects/cmmcreadynow/.next/server/chunks/182.js
/root/.openclaw/workspace/projects/cmmcreadynow/.next/server/chunks/276.js
/root/.openclaw/workspace/projects/cmmcreadynow/.next/server/chunks/682.js
/root/.openclaw/workspace/projects/cmmcreadynow/.next/server/chunks/940.js
/root/.openclaw/workspace/projects/cmmcreadynow/.next/server/chunks/954.js
/root/.openclaw/workspace/projects/cmmcreadynow/.next/server/chunks/font-manifest.json
/root/.openclaw/workspace/projects/cmmcreadynow/.next/server/font-manifest.json
/root/.openclaw/workspace/projects/cmmcreadynow/.next/server/functions-config-manifest.json
/root/.openclaw/workspace/projects/cmmcreadynow/.next/server/interception-route-rewrite-manifest.js
/root/.openclaw/workspace/projects/cmmcreadynow/.next/server/middleware-build-manifest.js
/root/.openclaw/workspace/projects/cmmcreadynow/.next/server/middleware-manifest.json
/root/.openclaw/workspace/projects/cmmcreadynow/.next/server/middleware-react-loadable-manifest.js
/root/.openclaw/workspace/projects/cmmcreadynow/.next/server/next-font-manifest.js
/root/.openclaw/workspace/projects/cmmcreadynow/.next/server/next-font-manifest.json
/root/.openclaw/workspace/projects/cmmcreadynow/.next/server/pages-manifest.json
/root/.openclaw/workspace/projects/cmmcreadynow/.next/server/pages/404.html
/root/.openclaw/workspace/projects/cmmcreadynow/.next/server/pages/500.html
/root/.openclaw/workspace/projects/cmmcreadynow/.next/server/pages/_app.js
/root/.openclaw/workspace/projects/cmmcreadynow/.next/server/pages/_app.js.nft.json
/root/.openclaw/workspace/projects/cmmcreadynow/.next/server/pages/_document.js
/root/.openclaw/workspace/projects/cmmcreadynow/.next/server/pages/_document.js.nft.json
/root/.openclaw/workspace/projects/cmmcreadynow/.next/server/pages/_error.js
/root/.openclaw/workspace/projects/cmmcreadynow/.next/server/pages/_error.js.nft.json
/root/.openclaw/workspace/projects/cmmcreadynow/.next/server/server-reference-manifest.js
/root/.openclaw/workspace/projects/cmmcreadynow/.next/server/server-reference-manifest.json
/root/.openclaw/workspace/projects/cmmcreadynow/.next/server/webpack-runtime.js
/root/.openclaw/workspace/projects/cmmcreadynow/.next/standalone/.next/BUILD_ID
/root/.openclaw/workspace/projects/cmmcreadynow/.next/standalone/.next/app-build-manifest.json
/root/.openclaw/workspace/projects/cmmcreadynow/.next/standalone/.next/app-path-routes-manifest.json
/root/.openclaw/workspace/projects/cmmcreadynow/.next/standalone/.next/build-manifest.json
/root/.openclaw/workspace/projects/cmmcreadynow/.next/standalone/.next/package.json
/root/.openclaw/workspace/projects/cmmcreadynow/.next/standalone/.next/prerender-manifest.json
/root/.openclaw/workspace/projects/cmmcreadynow/.next/standalone/.next/react-loadable-manifest.json
/root/.openclaw/workspace/projects/cmmcreadynow/.next/standalone/.next/required-server-files.json
/root/.openclaw/workspace/projects/cmmcreadynow/.next/standalone/.next/routes-manifest.json
/root/.openclaw/workspace/projects/cmmcreadynow/.next/standalone/.next/server/app-paths-manifest.json
/root/.openclaw/workspace/projects/cmmcreadynow/.next/standalone/.next/server/app/_not-found.html
/root/.openclaw/workspace/projects/cmmcreadynow/.next/standalone/.next/server/app/_not-found.meta
/root/.openclaw/workspace/projects/cmmcreadynow/.next/standalone/.next/server/app/_not-found.rsc
/root/.openclaw/workspace/projects/cmmcreadynow/.next/standalone/.next/server/app/_not-found/page.js
/root/.openclaw/workspace/projects/cmmcreadynow/.next/standalone/.next/server/app/_not-found/page.js.nft.json
/root/.openclaw/workspace/projects/cmmcreadynow/.next/standalone/.next/server/app/_not-found/page_client-reference-manifest.js
/root/.openclaw/workspace/projects/cmmcreadynow/.next/standalone/.next/server/app/about.html
/root/.openclaw/workspace/projects/cmmcreadynow/.next/standalone/.next/server/app/about.meta
/root/.openclaw/workspace/projects/cmmcreadynow/.next/standalone/.next/server/app/about.rsc
/root/.openclaw/workspace/projects/cmmcreadynow/.next/standalone/.next/server/app/about/page.js
/root/.openclaw/workspace/projects/cmmcreadynow/.next/standalone/.next/server/app/about/page.js.nft.json
/root/.openclaw/workspace/projects/cmmcreadynow/.next/standalone/.next/server/app/about/page_client-reference-manifest.js
/root/.openclaw/workspace/projects/cmmcreadynow/.next/standalone/.next/server/app/api/contact/route.js
/root/.openclaw/workspace/projects/cmmcreadynow/.next/standalone/.next/server/app/api/contact/route.js.nft.json
/root/.openclaw/workspace/projects/cmmcreadynow/.next/standalone/.next/server/app/contact.html
/root/.openclaw/workspace/projects/cmmcreadynow/.next/standalone/.next/server/app/contact.meta
/root/.openclaw/workspace/projects/cmmcreadynow/.next/standalone/.next/server/app/contact.rsc
/root/.openclaw/workspace/projects/cmmcreadynow/.next/standalone/.next/server/app/contact/page.js
/root/.openclaw/workspace/projects/cmmcreadynow/.next/standalone/.next/server/app/contact/page.js.nft.json
/root/.openclaw/workspace/projects/cmmcreadynow/.next/standalone/.next/server/app/contact/page_client-reference-manifest.js
/root/.openclaw/workspace/projects/cmmcreadynow/.next/standalone/.next/server/app/index.html
/root/.openclaw/workspace/projects/cmmcreadynow/.next/standalone/.next/server/app/index.meta
/root/.openclaw/workspace/projects/cmmcreadynow/.next/standalone/.next/server/app/index.rsc
/root/.openclaw/workspace/projects/cmmcreadynow/.next/standalone/.next/server/app/page.js
/root/.openclaw/workspace/projects/cmmcreadynow/.next/standalone/.next/server/app/page.js.nft.json
/root/.openclaw/workspace/projects/cmmcreadynow/.next/standalone/.next/server/app/page_client-reference-manifest.js
/root/.openclaw/workspace/projects/cmmcreadynow/.next/standalone/.next/server/app/services.html
/root/.openclaw/workspace/projects/cmmcreadynow/.next/standalone/.next/server/app/services.meta
/root/.openclaw/workspace/projects/cmmcreadynow/.next/standalone/.next/server/app/services.rsc
/root/.openclaw/workspace/projects/cmmcreadynow/.next/standalone/.next/server/app/services/cmmc-compliance-manufacturing-new-jersey.html
/root/.openclaw/workspace/projects/cmmcreadynow/.next/standalone/.next/server/app/services/cmmc-compliance-manufacturing-new-jersey.meta
/root/.openclaw/workspace/projects/cmmcreadynow/.next/standalone/.next/server/app/services/cmmc-compliance-manufacturing-new-jersey.rsc
/root/.openclaw/workspace/projects/cmmcreadynow/.next/standalone/.next/server/app/services/cmmc-compliance-manufacturing-new-jersey/page.js
/root/.openclaw/workspace/projects/cmmcreadynow/.next/standalone/.next/server/app/services/cmmc-compliance-manufacturing-new-jersey/page.js.nft.json
/root/.openclaw/workspace/projects/cmmcreadynow/.next/standalone/.next/server/app/services/cmmc-compliance-manufacturing-new-jersey/page_client-reference-manifest.js
/root/.openclaw/workspace/projects/cmmcreadynow/.next/standalone/.next/server/app/services/cmmc-gap-assessment-defense-contractors-virginia.html
/root/.openclaw/workspace/projects/cmmcreadynow/.next/standalone/.next/server/app/services/cmmc-gap-assessment-defense-contractors-virginia.meta
/root/.openclaw/workspace/projects/cmmcreadynow/.next/standalone/.next/server/app/services/cmmc-gap-assessment-defense-contractors-virginia.rsc
/root/.openclaw/workspace/projects/cmmcreadynow/.next/standalone/.next/server/app/services/cmmc-gap-assessment-defense-contractors-virginia/page.js
/root/.openclaw/workspace/projects/cmmcreadynow/.next/standalone/.next/server/app/services/cmmc-gap-assessment-defense-contractors-virginia/page.js.nft.json
/root/.openclaw/workspace/projects/cmmcreadynow/.next/standalone/.next/server/app/services/cmmc-gap-assessment-defense-contractors-virginia/page_client-reference-manifest.js
/root/.openclaw/workspace/projects/cmmcreadynow/.next/standalone/.next/server/app/services/managed-security-services-aerospace-florida.html
/root/.openclaw/workspace/projects/cmmcreadynow/.next/standalone/.next/server/app/services/managed-security-services-aerospace-florida.meta
/root/.openclaw/workspace/projects/cmmcreadynow/.next/standalone/.next/server/app/services/managed-security-services-aerospace-florida.rsc
/root/.openclaw/workspace/projects/cmmcreadynow/.next/standalone/.next/server/app/services/managed-security-services-aerospace-florida/page.js
/root/.openclaw/workspace/projects/cmmcreadynow/.next/standalone/.next/server/app/services/managed-security-services-aerospace-florida/page.js.nft.json
/root/.openclaw/workspace/projects/cmmcreadynow/.next/standalone/.next/server/app/services/managed-security-services-aerospace-florida/page_client-reference-manifest.js
/root/.openclaw/workspace/projects/cmmcreadynow/.next/standalone/.next/server/app/services/nist-800-171-compliance-manufacturing-philadelphia.html
/root/.openclaw/workspace/projects/cmmcreadynow/.next/standalone/.next/server/app/services/nist-800-171-compliance-manufacturing-philadelphia.meta
/root/.openclaw/workspace/projects/cmmcreadynow/.next/standalone/.next/server/app/services/nist-800-171-compliance-manufacturing-philadelphia.rsc
/root/.openclaw/workspace/projects/cmmcreadynow/.next/standalone/.next/server/app/services/nist-800-171-compliance-manufacturing-philadelphia/page.js
/root/.openclaw/workspace/projects/cmmcreadynow/.next/standalone/.next/server/app/services/nist-800-171-compliance-manufacturing-philadelphia/page.js.nft.json
/root/.openclaw/workspace/projects/cmmcreadynow/.next/standalone/.next/server/app/services/nist-800-171-compliance-manufacturing-philadelphia/page_client-reference-manifest.js
/root/.openclaw/workspace/projects/cmmcreadynow/.next/standalone/.next/server/app/services/page.js
/root/.openclaw/workspace/projects/cmmcreadynow/.next/standalone/.next/server/app/services/page.js.nft.json
/root/.openclaw/workspace/projects/cmmcreadynow/.next/standalone/.next/server/app/services/page_client-reference-manifest.js
/root/.openclaw/workspace/projects/cmmcreadynow/.next/standalone/.next/server/app/services/penetration-testing-construction-companies-new-york.html
/root/.openclaw/workspace/projects/cmmcreadynow/.next/standalone/.next/server/app/services/penetration-testing-construction-companies-new-york.meta
/root/.openclaw/workspace/projects/cmmcreadynow/.next/standalone/.next/server/app/services/penetration-testing-construction-companies-new-york.rsc
/root/.openclaw/workspace/projects/cmmcreadynow/.next/standalone/.next/server/app/services/penetration-testing-construction-companies-new-york/page.js
/root/.openclaw/workspace/projects/cmmcreadynow/.next/standalone/.next/server/app/services/penetration-testing-construction-companies-new-york/page.js.nft.json
/root/.openclaw/workspace/projects/cmmcreadynow/.next/standalone/.next/server/app/services/penetration-testing-construction-companies-new-york/page_client-reference-manifest.js
/root/.openclaw/workspace/projects/cmmcreadynow/.next/standalone/.next/server/chunks/182.js
/root/.openclaw/workspace/projects/cmmcreadynow/.next/standalone/.next/server/chunks/276.js
/root/.openclaw/workspace/projects/cmmcreadynow/.next/standalone/.next/server/chunks/682.js
/root/.openclaw/workspace/projects/cmmcreadynow/.next/standalone/.next/server/chunks/940.js
/root/.openclaw/workspace/projects/cmmcreadynow/.next/standalone/.next/server/chunks/954.js
/root/.openclaw/workspace/projects/cmmcreadynow/.next/standalone/.next/server/font-manifest.json
/root/.openclaw/workspace/projects/cmmcreadynow/.next/standalone/.next/server/middleware-build-manifest.js
/root/.openclaw/workspace/projects/cmmcreadynow/.next/standalone/.next/server/middleware-manifest.json
/root/.openclaw/workspace/projects/cmmcreadynow/.next/standalone/.next/server/middleware-react-loadable-manifest.js
/root/.openclaw/workspace/projects/cmmcreadynow/.next/standalone/.next/server/next-font-manifest.js
/root/.openclaw/workspace/projects/cmmcreadynow/.next/standalone/.next/server/next-font-manifest.json
/root/.openclaw/workspace/projects/cmmcreadynow/.next/standalone/.next/server/pages-manifest.json
/root/.openclaw/workspace/projects/cmmcreadynow/.next/standalone/.next/server/pages/404.html
/root/.openclaw/workspace/projects/cmmcreadynow/.next/standalone/.next/server/pages/500.html
/root/.openclaw/workspace/projects/cmmcreadynow/.next/standalone/.next/server/pages/_app.js
/root/.openclaw/workspace/projects/cmmcreadynow/.next/standalone/.next/server/pages/_app.js.nft.json
/root/.openclaw/workspace/projects/cmmcreadynow/.next/standalone/.next/server/pages/_document.js
/root/.openclaw/workspace/projects/cmmcreadynow/.next/standalone/.next/server/pages/_document.js.nft.json
/root/.openclaw/workspace/projects/cmmcreadynow/.next/standalone/.next/server/pages/_error.js
/root/.openclaw/workspace/projects/cmmcreadynow/.next/standalone/.next/server/pages/_error.js.nft.json
/root/.openclaw/workspace/projects/cmmcreadynow/.next/standalone/.next/server/server-reference-manifest.js
/root/.openclaw/workspace/projects/cmmcreadynow/.next/standalone/.next/server/server-reference-manifest.json
/root/.openclaw/workspace/projects/cmmcreadynow/.next/standalone/.next/server/webpack-runtime.js
/root/.openclaw/workspace/projects/cmmcreadynow/.next/standalone/package.json
/root/.openclaw/workspace/projects/cmmcreadynow/.next/standalone/server.js
/root/.openclaw/workspace/projects/cmmcreadynow/.next/static/D8HcbPlgij0mAyojXYAmY/_buildManifest.js
/root/.openclaw/workspace/projects/cmmcreadynow/.next/static/D8HcbPlgij0mAyojXYAmY/_ssgManifest.js
/root/.openclaw/workspace/projects/cmmcreadynow/.next/static/chunks/117-f48404e42cb32be4.js
/root/.openclaw/workspace/projects/cmmcreadynow/.next/static/chunks/3-53d241f94d4ec005.js
/root/.openclaw/workspace/projects/cmmcreadynow/.next/static/chunks/878-dcb6c40db4685857.js
/root/.openclaw/workspace/projects/cmmcreadynow/.next/static/chunks/972-66fe8c15ab2ed532.js
/root/.openclaw/workspace/projects/cmmcreadynow/.next/static/chunks/app/_not-found/page-b594cd94f1ea2cd6.js
/root/.openclaw/workspace/projects/cmmcreadynow/.next/static/chunks/app/about/page-4b6a394f08267225.js
/root/.openclaw/workspace/projects/cmmcreadynow/.next/static/chunks/app/contact/page-7937a1543ec1f298.js
/root/.openclaw/workspace/projects/cmmcreadynow/.next/static/chunks/app/layout-662c3711554c7558.js
/root/.openclaw/workspace/projects/cmmcreadynow/.next/static/chunks/app/page-dcb72041051244f7.js
/root/.openclaw/workspace/projects/cmmcreadynow/.next/static/chunks/app/services/cmmc-compliance-manufacturing-new-jersey/page-ea7a609e9146c79c.js
/root/.openclaw/workspace/projects/cmmcreadynow/.next/static/chunks/app/services/cmmc-gap-assessment-defense-contractors-virginia/page-0662d1623238a35b.js
/root/.openclaw/workspace/projects/cmmcreadynow/.next/static/chunks/app/services/managed-security-services-aerospace-florida/page-2bcfe6810146256c.js
/root/.openclaw/workspace/projects/cmmcreadynow/.next/static/chunks/app/services/nist-800-171-compliance-manufacturing-philadelphia/page-aecd563443251b2d.js
/root/.openclaw/workspace/projects/cmmcreadynow/.next/static/chunks/app/services/page-49235bfd089d846f.js
/root/.openclaw/workspace/projects/cmmcreadynow/.next/static/chunks/app/services/penetration-testing-construction-companies-new-york/page-371fb2f9bd1c154b.js
/root/.openclaw/workspace/projects/cmmcreadynow/.next/static/chunks/fd9d1056-0807e69ea9c303ac.js
/root/.openclaw/workspace/projects/cmmcreadynow/.next/static/chunks/framework-f66176bb897dc684.js
/root/.openclaw/workspace/projects/cmmcreadynow/.next/static/chunks/main-630391ff7d0dbbac.js
/root/.openclaw/workspace/projects/cmmcreadynow/.next/static/chunks/main-app-940a99988c9e7d8d.js
/root/.openclaw/workspace/projects/cmmcreadynow/.next/static/chunks/pages/_app-72b849fbd24ac258.js
/root/.openclaw/workspace/projects/cmmcreadynow/.next/static/chunks/pages/_error-7ba65e1336b92748.js
/root/.openclaw/workspace/projects/cmmcreadynow/.next/static/chunks/polyfills-42372ed130431b0a.js
/root/.openclaw/workspace/projects/cmmcreadynow/.next/static/chunks/webpack-616e068a201ad621.js
/root/.openclaw/workspace/projects/cmmcreadynow/.next/static/css/0259fcbb0c520cdd.css
/root/.openclaw/workspace/projects/cmmcreadynow/.next/trace
/root/.openclaw/workspace/projects/cmmcreadynow/.next/types/app/about/page.ts
/root/.openclaw/workspace/projects/cmmcreadynow/.next/types/app/api/contact/route.ts
/root/.openclaw/workspace/projects/cmmcreadynow/.next/types/app/contact/page.ts
/root/.openclaw/workspace/projects/cmmcreadynow/.next/types/app/page.ts
/root/.openclaw/workspace/projects/cmmcreadynow/.next/types/app/services/cmmc-compliance-manufacturing-new-jersey/page.ts
/root/.openclaw/workspace/projects/cmmcreadynow/.next/types/app/services/cmmc-gap-assessment-defense-contractors-virginia/page.ts
/root/.openclaw/workspace/projects/cmmcreadynow/.next/types/app/services/managed-security-services-aerospace-florida/page.ts
/root/.openclaw/workspace/projects/cmmcreadynow/.next/types/app/services/nist-800-171-compliance-manufacturing-philadelphia/page.ts
/root/.openclaw/workspace/projects/cmmcreadynow/.next/types/app/services/page.ts
/root/.openclaw/workspace/projects/cmmcreadynow/.next/types/app/services/penetration-testing-construction-companies-new-york/page.ts
/root/.openclaw/workspace/projects/cmmcreadynow/.next/types/package.json
/root/.openclaw/workspace/projects/cmmcreadynow/.vercel/README.txt
/root/.openclaw/workspace/projects/cmmcreadynow/.vercel/project.json
/root/.openclaw/workspace/projects/cmmcreadynow/README.md
/root/.openclaw/workspace/projects/cmmcreadynow/next-env.d.ts
/root/.openclaw/workspace/projects/cmmcreadynow/next.config.js
/root/.openclaw/workspace/projects/cmmcreadynow/package-lock.json
/root/.openclaw/workspace/projects/cmmcreadynow/package.json
/root/.openclaw/workspace/projects/cmmcreadynow/page-generator/PAGE-GENERATOR-SPECS.md
/root/.openclaw/workspace/projects/cmmcreadynow/postcss.config.js
/root/.openclaw/workspace/projects/cmmcreadynow/public/favicon.png
/root/.openclaw/workspace/projects/cmmcreadynow/public/images/cta.png
/root/.openclaw/workspace/projects/cmmcreadynow/public/images/favicon.png
/root/.openclaw/workspace/projects/cmmcreadynow/public/images/hero.jpg
/root/.openclaw/workspace/projects/cmmcreadynow/public/images/logo-white.webp
/root/.openclaw/workspace/projects/cmmcreadynow/public/images/multi-device.png
/root/.openclaw/workspace/projects/cmmcreadynow/public/images/security.png
/root/.openclaw/workspace/projects/cmmcreadynow/src/app/about/page.tsx
/root/.openclaw/workspace/projects/cmmcreadynow/src/app/api/contact/route.ts
/root/.openclaw/workspace/projects/cmmcreadynow/src/app/best-practices/page.tsx
/root/.openclaw/workspace/projects/cmmcreadynow/src/app/blog/cmmc-cost-small-business/page.tsx
/root/.openclaw/workspace/projects/cmmcreadynow/src/app/blog/cmmc-gap-assessment-grant-launch/page.tsx
/root/.openclaw/workspace/projects/cmmcreadynow/src/app/blog/cmmc-phase-2-timeline-2026/page.tsx
/root/.openclaw/workspace/projects/cmmcreadynow/src/app/blog/false-claims-act-cmmc/page.tsx
/root/.openclaw/workspace/projects/cmmcreadynow/src/app/blog/page.tsx
/root/.openclaw/workspace/projects/cmmcreadynow/src/app/blog/top-10-nist-800-171-gaps/page.tsx
/root/.openclaw/workspace/projects/cmmcreadynow/src/app/blog/what-is-cmmc-gap-assessment/page.tsx
/root/.openclaw/workspace/projects/cmmcreadynow/src/app/case-studies/page.tsx
/root/.openclaw/workspace/projects/cmmcreadynow/src/app/cmmc-guide/page.tsx
/root/.openclaw/workspace/projects/cmmcreadynow/src/app/contact/page.tsx
/root/.openclaw/workspace/projects/cmmcreadynow/src/app/globals.css
/root/.openclaw/workspace/projects/cmmcreadynow/src/app/help-center/page.tsx
/root/.openclaw/workspace/projects/cmmcreadynow/src/app/layout.tsx
/root/.openclaw/workspace/projects/cmmcreadynow/src/app/page.tsx
/root/.openclaw/workspace/projects/cmmcreadynow/src/app/privacy/page.tsx
/root/.openclaw/workspace/projects/cmmcreadynow/src/app/services/cmmc-compliance-aberdeen-md/page.tsx
/root/.openclaw/workspace/projects/cmmcreadynow/src/app/services/cmmc-compliance-alexandria-va/page.tsx
/root/.openclaw/workspace/projects/cmmcreadynow/src/app/services/cmmc-compliance-annapolis-junction-md/page.tsx
/root/.openclaw/workspace/projects/cmmcreadynow/src/app/services/cmmc-compliance-annapolis-md/page.tsx
/root/.openclaw/workspace/projects/cmmcreadynow/src/app/services/cmmc-compliance-arlington-va/page.tsx
/root/.openclaw/workspace/projects/cmmcreadynow/src/app/services/cmmc-compliance-ashburn-va/page.tsx
/root/.openclaw/workspace/projects/cmmcreadynow/src/app/services/cmmc-compliance-baltimore-md/page.tsx
/root/.openclaw/workspace/projects/cmmcreadynow/src/app/services/cmmc-compliance-bethesda-md/page.tsx
/root/.openclaw/workspace/projects/cmmcreadynow/src/app/services/cmmc-compliance-bowie-md/page.tsx
/root/.openclaw/workspace/projects/cmmcreadynow/src/app/services/cmmc-compliance-chantilly-va/page.tsx
/root/.openclaw/workspace/projects/cmmcreadynow/src/app/services/cmmc-compliance-charlottesville-va/page.tsx
/root/.openclaw/workspace/projects/cmmcreadynow/src/app/services/cmmc-compliance-chesapeake-va/page.tsx
/root/.openclaw/workspace/projects/cmmcreadynow/src/app/services/cmmc-compliance-college-park-md/page.tsx
/root/.openclaw/workspace/projects/cmmcreadynow/src/app/services/cmmc-compliance-columbia-md/page.tsx
/root/.openclaw/workspace/projects/cmmcreadynow/src/app/services/cmmc-compliance-dahlgren-va/page.tsx
/root/.openclaw/workspace/projects/cmmcreadynow/src/app/services/cmmc-compliance-dulles-va/page.tsx
/root/.openclaw/workspace/projects/cmmcreadynow/src/app/services/cmmc-compliance-fairfax-va/page.tsx
/root/.openclaw/workspace/projects/cmmcreadynow/src/app/services/cmmc-compliance-fort-belvoir-va/page.tsx
/root/.openclaw/workspace/projects/cmmcreadynow/src/app/services/cmmc-compliance-frederick-md/page.tsx
/root/.openclaw/workspace/projects/cmmcreadynow/src/app/services/cmmc-compliance-fredericksburg-va/page.tsx
/root/.openclaw/workspace/projects/cmmcreadynow/src/app/services/cmmc-compliance-gaithersburg-md/page.tsx
/root/.openclaw/workspace/projects/cmmcreadynow/src/app/services/cmmc-compliance-greenbelt-md/page.tsx
/root/.openclaw/workspace/projects/cmmcreadynow/src/app/services/cmmc-compliance-hampton-roads-va/page.tsx
/root/.openclaw/workspace/projects/cmmcreadynow/src/app/services/cmmc-compliance-hampton-va/page.tsx
/root/.openclaw/workspace/projects/cmmcreadynow/src/app/services/cmmc-compliance-hanover-md/page.tsx
/root/.openclaw/workspace/projects/cmmcreadynow/src/app/services/cmmc-compliance-herndon-va/page.tsx
/root/.openclaw/workspace/projects/cmmcreadynow/src/app/services/cmmc-compliance-hunt-valley-md/page.tsx
/root/.openclaw/workspace/projects/cmmcreadynow/src/app/services/cmmc-compliance-indian-head-md/page.tsx
/root/.openclaw/workspace/projects/cmmcreadynow/src/app/services/cmmc-compliance-laurel-md/page.tsx
/root/.openclaw/workspace/projects/cmmcreadynow/src/app/services/cmmc-compliance-leesburg-va/page.tsx
/root/.openclaw/workspace/projects/cmmcreadynow/src/app/services/cmmc-compliance-lexington-park-md/page.tsx
/root/.openclaw/workspace/projects/cmmcreadynow/src/app/services/cmmc-compliance-linthicum-md/page.tsx
/root/.openclaw/workspace/projects/cmmcreadynow/src/app/services/cmmc-compliance-manassas-va/page.tsx
/root/.openclaw/workspace/projects/cmmcreadynow/src/app/services/cmmc-compliance-manufacturing-new-jersey/page.tsx
/root/.openclaw/workspace/projects/cmmcreadynow/src/app/services/cmmc-compliance-mclean-va/page.tsx
/root/.openclaw/workspace/projects/cmmcreadynow/src/app/services/cmmc-compliance-newport-news-va/page.tsx
/root/.openclaw/workspace/projects/cmmcreadynow/src/app/services/cmmc-compliance-norfolk-va/page.tsx
/root/.openclaw/workspace/projects/cmmcreadynow/src/app/services/cmmc-compliance-owings-mills-md/page.tsx
/root/.openclaw/workspace/projects/cmmcreadynow/src/app/services/cmmc-compliance-quantico-va/page.tsx
/root/.openclaw/workspace/projects/cmmcreadynow/src/app/services/cmmc-compliance-reston-va/page.tsx
/root/.openclaw/workspace/projects/cmmcreadynow/src/app/services/cmmc-compliance-richmond-va/page.tsx
/root/.openclaw/workspace/projects/cmmcreadynow/src/app/services/cmmc-compliance-rockville-md/page.tsx
/root/.openclaw/workspace/projects/cmmcreadynow/src/app/services/cmmc-compliance-silver-spring-md/page.tsx
/root/.openclaw/workspace/projects/cmmcreadynow/src/app/services/cmmc-compliance-springfield-va/page.tsx
/root/.openclaw/workspace/projects/cmmcreadynow/src/app/services/cmmc-compliance-stafford-va/page.tsx
/root/.openclaw/workspace/projects/cmmcreadynow/src/app/services/cmmc-compliance-sterling-va/page.tsx
/root/.openclaw/workspace/projects/cmmcreadynow/src/app/services/cmmc-compliance-tysons-va/page.tsx
/root/.openclaw/workspace/projects/cmmcreadynow/src/app/services/cmmc-compliance-virginia-beach-va/page.tsx
/root/.openclaw/workspace/projects/cmmcreadynow/src/app/services/cmmc-compliance-washington-dc/page.tsx
/root/.openclaw/workspace/projects/cmmcreadynow/src/app/services/cmmc-compliance-winchester-va/page.tsx
/root/.openclaw/workspace/projects/cmmcreadynow/src/app/services/cmmc-compliance-woodbridge-va/page.tsx
/root/.openclaw/workspace/projects/cmmcreadynow/src/app/services/cmmc-gap-assessment-defense-contractors-virginia/page.tsx
/root/.openclaw/workspace/projects/cmmcreadynow/src/app/services/create_remaining_pages.sh
/root/.openclaw/workspace/projects/cmmcreadynow/src/app/services/managed-security-services-aerospace-florida/page.tsx
/root/.openclaw/workspace/projects/cmmcreadynow/src/app/services/nist-800-171-compliance-manufacturing-philadelphia/page.tsx
/root/.openclaw/workspace/projects/cmmcreadynow/src/app/services/page.tsx
/root/.openclaw/workspace/projects/cmmcreadynow/src/app/services/penetration-testing-construction-companies-new-york/page.tsx
/root/.openclaw/workspace/projects/cmmcreadynow/src/app/terms/page.tsx
/root/.openclaw/workspace/projects/cmmcreadynow/src/components/Footer.tsx
/root/.openclaw/workspace/projects/cmmcreadynow/src/components/Header.tsx
/root/.openclaw/workspace/projects/cmmcreadynow/src/components/IconMap.tsx
/root/.openclaw/workspace/projects/cmmcreadynow/src/components/ScrollFadeIn.tsx
/root/.openclaw/workspace/projects/cmmcreadynow/src/components/SectionHeading.tsx
/root/.openclaw/workspace/projects/cmmcreadynow/src/content/site-content.ts
/root/.openclaw/workspace/projects/cmmcreadynow/tailwind.config.js
/root/.openclaw/workspace/projects/cmmcreadynow/tsconfig.json
/root/.openclaw/workspace/projects/content-patterns/viral-linkedin-pattern.md
/root/.openclaw/workspace/projects/craftsman/Microsoft-Teams-Governance-Policy.md
/root/.openclaw/workspace/projects/craftsman/Microsoft-Teams-Governance-Policy.pdf
/root/.openclaw/workspace/projects/craftsman/RCA-OneDrive-Sync-Failure-2026-02-17.md
/root/.openclaw/workspace/projects/craftsman/RCA-OneDrive-Sync-Failure-2026-02-17.pdf
/root/.openclaw/workspace/projects/craftsman/Starlink-Installation-Agreement-Craftsman-Auto-Care.md
/root/.openclaw/workspace/projects/craftsman/Starlink-Installation-Agreement-Craftsman-Auto-Care.pdf
/root/.openclaw/workspace/projects/craftsman/Starlink-Installation-Agreement-FINAL-v2.md
/root/.openclaw/workspace/projects/craftsman/Starlink-Installation-Agreement-FINAL-v2.pdf
/root/.openclaw/workspace/projects/craftsman/Starlink-Installation-Agreement-FINAL-v3.md
/root/.openclaw/workspace/projects/craftsman/Starlink-Installation-Agreement-FINAL-v3.pdf
/root/.openclaw/workspace/projects/craftsman/Starlink-Installation-Agreement-FINAL.md
/root/.openclaw/workspace/projects/craftsman/Starlink-Installation-Agreement-FINAL.pdf
/root/.openclaw/workspace/projects/gsa-scrape/COLD-EMAIL-CAMPAIGN.md
/root/.openclaw/workspace/projects/gsa-scrape/dcaa-output/dcaa-fy2024-filtered.xlsx
/root/.openclaw/workspace/projects/gsa-scrape/dcaa-output/dcaa-fy2024-full.pdf
/root/.openclaw/workspace/projects/gsa-scrape/dcaa-output/dcaa-fy2024.pdf
/root/.openclaw/workspace/projects/gsa-scrape/dcaa-output/dcaa-listing-fy2024.pdf
/root/.openclaw/workspace/projects/gsa-scrape/dcaa-output/dcaa-listing.pdf
/root/.openclaw/workspace/projects/gsa-scrape/dcaa-scrape-task.md
/root/.openclaw/workspace/projects/gsa-scrape/gsa_full_mas.csv
/root/.openclaw/workspace/projects/gsa-scrape/gsa_manufacturing_construction.csv
/root/.openclaw/workspace/projects/gsa-scrape/gsa_target_markets.csv
/root/.openclaw/workspace/projects/skill-recommendations.md
/root/.openclaw/workspace/projects/telcounited-redesign/PROJECT-PLAN.md
/root/.openclaw/workspace/projects/telcounitedcyber-redesign/PROJECT-PLAN.md
/root/.openclaw/workspace/projects/templates/AI-Use-Policy-Template.md
/root/.openclaw/workspace/projects/templates/AI-Use-Policy-Template.pdf
/root/.openclaw/workspace/projects/templates/Cybersecurity-Policy-Template.md
/root/.openclaw/workspace/projects/templates/Cybersecurity-Policy-Template.pdf
/root/.openclaw/workspace/projects/templates/Freshdesk-vs-BoldDesk-Executive-Report.md
/root/.openclaw/workspace/projects/templates/Freshdesk-vs-BoldDesk-Executive-Report.pdf
/root/.openclaw/workspace/projects/templates/Incident-Response-Plan-Template.md
/root/.openclaw/workspace/projects/templates/Incident-Response-Plan-Template.pdf
/root/.openclaw/workspace/projects/templates/Microsoft-Teams-Governance-Policy-Template.md
/root/.openclaw/workspace/projects/templates/Microsoft-Teams-Governance-Policy-Template.pdf
/root/.openclaw/workspace/projects/tiktok-slideshow-prototype/README.md
/root/.openclaw/workspace/projects/tiktok-slideshow-prototype/generate_slideshow.py
/root/.openclaw/workspace/projects/tiktok-slideshow-prototype/generate_slideshow_simple.py
/root/.openclaw/workspace/projects/tiktok-slideshow-prototype/generate_test_slide.py
/root/.openclaw/workspace/projects/tiktok-slideshow-prototype/hooks.md
/root/.openclaw/workspace/projects/tiktok-slideshow-prototype/output/slide_01_hook.png
/root/.openclaw/workspace/projects/tiktok-slideshow-prototype/output/slide_02_problem.png
/root/.openclaw/workspace/projects/tiktok-slideshow-prototype/output/slide_03_discovery.png
/root/.openclaw/workspace/projects/tiktok-slideshow-prototype/output/slide_04_transformation 1.png
/root/.openclaw/workspace/projects/tiktok-slideshow-prototype/output/slide_05_transformation 2.png
/root/.openclaw/workspace/projects/tiktok-slideshow-prototype/output/slide_06_cta.png
/root/.openclaw/workspace/projects/tiktok-slideshow-prototype/output/test_slide_01_hook.png
/root/.openclaw/workspace/projects/tiktok-slideshow-prototype/post_to_tiktok.py
/root/.openclaw/workspace/projects/tiktok-slideshow-prototype/requirements.txt
/root/.openclaw/workspace/projects/tiktok-slideshow-prototype/venv/pyvenv.cfg
/root/.openclaw/workspace/reference/ai-safe2-templates/AGENTS.md
/root/.openclaw/workspace/reference/ai-safe2-templates/HEARTBEAT.md
/root/.openclaw/workspace/reference/ai-safe2-templates/IDENTITY.md
/root/.openclaw/workspace/reference/ai-safe2-templates/MODEL-ROUTER.md
/root/.openclaw/workspace/reference/ai-safe2-templates/OPENCLAW-AGENT-TEMPLATE.md
/root/.openclaw/workspace/reference/ai-safe2-templates/OPENCLAW-WORKSPACE-POLICY.md
/root/.openclaw/workspace/reference/ai-safe2-templates/README.md
/root/.openclaw/workspace/reference/ai-safe2-templates/RELEASE-NOTES.md
/root/.openclaw/workspace/reference/ai-safe2-templates/SOCIAL-POSTS.md
/root/.openclaw/workspace/reference/ai-safe2-templates/SOUL.md
/root/.openclaw/workspace/reference/ai-safe2-templates/SUBAGENT-POLICY.md
/root/.openclaw/workspace/reference/ai-safe2-templates/TOOLS.md
/root/.openclaw/workspace/reference/ai-safe2-templates/USER.md
/root/.openclaw/workspace/reference/ai-safe2-templates/cli.py
/root/.openclaw/workspace/reference/ai-safe2-templates/openclaw_memory.md
/root/.openclaw/workspace/reference/ai-safe2-templates/scanner.py
/root/.openclaw/workspace/reference/skills-assessment.md
/root/.openclaw/workspace/sales.md
/root/.openclaw/workspace/scripts/advisory-council/collect-data.sh
/root/.openclaw/workspace/scripts/advisory-council/council-prompt.md
/root/.openclaw/workspace/scripts/advisory-council/daily-briefing-data.md
/root/.openclaw/workspace/scripts/backup-workspace.sh
/root/.openclaw/workspace/scripts/check-agentmail.py
/root/.openclaw/workspace/scripts/platform-health/health-collector.sh
/root/.openclaw/workspace/scripts/platform-health/health-data.md
/root/.openclaw/workspace/scripts/platform-health/health-prompt.md
/root/.openclaw/workspace/security-audit-log.jsonl
/root/.openclaw/workspace/skills.md
/root/.openclaw/workspace/skills/action1/SKILL.md
/root/.openclaw/workspace/skills/action1/references/api-details.md
/root/.openclaw/workspace/skills/action1/scripts/action1_api.sh
/root/.openclaw/workspace/skills/agentmail-integration/.clawhub/origin.json
/root/.openclaw/workspace/skills/agentmail-integration/SKILL.md
/root/.openclaw/workspace/skills/agentmail-integration/_meta.json
/root/.openclaw/workspace/skills/agentmail-integration/references/API.md
/root/.openclaw/workspace/skills/agentmail-integration/references/EXAMPLES.md
/root/.openclaw/workspace/skills/agentmail-integration/references/WEBHOOKS.md
/root/.openclaw/workspace/skills/agentmail-integration/references/patterns.md
/root/.openclaw/workspace/skills/agentmail-integration/scripts/agentmail-helper.py
/root/.openclaw/workspace/skills/agentmail-integration/scripts/check_inbox.py
/root/.openclaw/workspace/skills/agentmail-integration/scripts/send_email.py
/root/.openclaw/workspace/skills/agentmail-integration/scripts/setup_webhook.py
/root/.openclaw/workspace/skills/anthropic-frontend-design/.clawhub/origin.json
/root/.openclaw/workspace/skills/anthropic-frontend-design/SKILL.md
/root/.openclaw/workspace/skills/anthropic-frontend-design/_meta.json
/root/.openclaw/workspace/skills/anthropic-frontend-design/assets/data/charts.csv
/root/.openclaw/workspace/skills/anthropic-frontend-design/assets/data/colors.csv
/root/.openclaw/workspace/skills/anthropic-frontend-design/assets/data/icons.csv
/root/.openclaw/workspace/skills/anthropic-frontend-design/assets/data/landing.csv
/root/.openclaw/workspace/skills/anthropic-frontend-design/assets/data/products.csv
/root/.openclaw/workspace/skills/anthropic-frontend-design/assets/data/react-performance.csv
/root/.openclaw/workspace/skills/anthropic-frontend-design/assets/data/stacks/astro.csv
/root/.openclaw/workspace/skills/anthropic-frontend-design/assets/data/stacks/flutter.csv
/root/.openclaw/workspace/skills/anthropic-frontend-design/assets/data/stacks/html-tailwind.csv
/root/.openclaw/workspace/skills/anthropic-frontend-design/assets/data/stacks/jetpack-compose.csv
/root/.openclaw/workspace/skills/anthropic-frontend-design/assets/data/stacks/nextjs.csv
/root/.openclaw/workspace/skills/anthropic-frontend-design/assets/data/stacks/nuxt-ui.csv
/root/.openclaw/workspace/skills/anthropic-frontend-design/assets/data/stacks/nuxtjs.csv
/root/.openclaw/workspace/skills/anthropic-frontend-design/assets/data/stacks/react-native.csv
/root/.openclaw/workspace/skills/anthropic-frontend-design/assets/data/stacks/react.csv
/root/.openclaw/workspace/skills/anthropic-frontend-design/assets/data/stacks/shadcn.csv
/root/.openclaw/workspace/skills/anthropic-frontend-design/assets/data/stacks/svelte.csv
/root/.openclaw/workspace/skills/anthropic-frontend-design/assets/data/stacks/swiftui.csv
/root/.openclaw/workspace/skills/anthropic-frontend-design/assets/data/stacks/vue.csv
/root/.openclaw/workspace/skills/anthropic-frontend-design/assets/data/styles.csv
/root/.openclaw/workspace/skills/anthropic-frontend-design/assets/data/typography.csv
/root/.openclaw/workspace/skills/anthropic-frontend-design/assets/data/ui-reasoning.csv
/root/.openclaw/workspace/skills/anthropic-frontend-design/assets/data/ux-guidelines.csv
/root/.openclaw/workspace/skills/anthropic-frontend-design/assets/data/web-interface.csv
/root/.openclaw/workspace/skills/anthropic-frontend-design/data/charts.csv
/root/.openclaw/workspace/skills/anthropic-frontend-design/data/colors.csv
/root/.openclaw/workspace/skills/anthropic-frontend-design/data/icons.csv
/root/.openclaw/workspace/skills/anthropic-frontend-design/data/landing.csv
/root/.openclaw/workspace/skills/anthropic-frontend-design/data/products.csv
/root/.openclaw/workspace/skills/anthropic-frontend-design/data/react-performance.csv
/root/.openclaw/workspace/skills/anthropic-frontend-design/data/stacks/astro.csv
/root/.openclaw/workspace/skills/anthropic-frontend-design/data/stacks/flutter.csv
/root/.openclaw/workspace/skills/anthropic-frontend-design/data/stacks/html-tailwind.csv
/root/.openclaw/workspace/skills/anthropic-frontend-design/data/stacks/jetpack-compose.csv
/root/.openclaw/workspace/skills/anthropic-frontend-design/data/stacks/nextjs.csv
/root/.openclaw/workspace/skills/anthropic-frontend-design/data/stacks/nuxt-ui.csv
/root/.openclaw/workspace/skills/anthropic-frontend-design/data/stacks/nuxtjs.csv
/root/.openclaw/workspace/skills/anthropic-frontend-design/data/stacks/react-native.csv
/root/.openclaw/workspace/skills/anthropic-frontend-design/data/stacks/react.csv
/root/.openclaw/workspace/skills/anthropic-frontend-design/data/stacks/shadcn.csv
/root/.openclaw/workspace/skills/anthropic-frontend-design/data/stacks/svelte.csv
/root/.openclaw/workspace/skills/anthropic-frontend-design/data/stacks/swiftui.csv
/root/.openclaw/workspace/skills/anthropic-frontend-design/data/stacks/vue.csv
/root/.openclaw/workspace/skills/anthropic-frontend-design/data/styles.csv
/root/.openclaw/workspace/skills/anthropic-frontend-design/data/typography.csv
/root/.openclaw/workspace/skills/anthropic-frontend-design/data/ui-reasoning.csv
/root/.openclaw/workspace/skills/anthropic-frontend-design/data/ux-guidelines.csv
/root/.openclaw/workspace/skills/anthropic-frontend-design/data/web-interface.csv
/root/.openclaw/workspace/skills/anthropic-frontend-design/scripts/__init__.py
/root/.openclaw/workspace/skills/anthropic-frontend-design/scripts/core.py
/root/.openclaw/workspace/skills/anthropic-frontend-design/scripts/design_system.py
/root/.openclaw/workspace/skills/anthropic-frontend-design/scripts/search.py
/root/.openclaw/workspace/skills/business-model-canvas/.clawhub/origin.json
/root/.openclaw/workspace/skills/business-model-canvas/SKILL.md
/root/.openclaw/workspace/skills/business-model-canvas/_meta.json
/root/.openclaw/workspace/skills/cellcog/.clawhub/origin.json
/root/.openclaw/workspace/skills/cellcog/SKILL.md
/root/.openclaw/workspace/skills/cellcog/_meta.json
/root/.openclaw/workspace/skills/cmmc-grc/README.md
/root/.openclaw/workspace/skills/cmmc-grc/SKILL.md
/root/.openclaw/workspace/skills/cmmc-grc/assets/CMMC-L2-Client-Intake-Form.docx
/root/.openclaw/workspace/skills/cmmc-grc/assets/templates/L1/AC-access-control-policy.docx
/root/.openclaw/workspace/skills/cmmc-grc/assets/templates/L1/IA-identification-authentication-policy.docx
/root/.openclaw/workspace/skills/cmmc-grc/assets/templates/L1/MP-media-protection-policy.docx
/root/.openclaw/workspace/skills/cmmc-grc/assets/templates/L1/PE-physical-protection-policy.docx
/root/.openclaw/workspace/skills/cmmc-grc/assets/templates/L1/SC-system-communications-protection-policy.docx
/root/.openclaw/workspace/skills/cmmc-grc/assets/templates/L1/SI-system-information-integrity-policy.docx
/root/.openclaw/workspace/skills/cmmc-grc/assets/templates/L2-capital-cyber/AC-access-control-policy.docx
/root/.openclaw/workspace/skills/cmmc-grc/assets/templates/L2-capital-cyber/AT-awareness-and-training-policy.docx
/root/.openclaw/workspace/skills/cmmc-grc/assets/templates/L2-capital-cyber/AU-audit-and-accountability-policy.docx
/root/.openclaw/workspace/skills/cmmc-grc/assets/templates/L2-capital-cyber/CA-security-assessment-policy.docx
/root/.openclaw/workspace/skills/cmmc-grc/assets/templates/L2-capital-cyber/CM-configuration-management-policy.docx
/root/.openclaw/workspace/skills/cmmc-grc/assets/templates/L2-capital-cyber/IA-identification-and-authentication-policy.docx
/root/.openclaw/workspace/skills/cmmc-grc/assets/templates/L2-capital-cyber/IR-incident-response-policy.docx
/root/.openclaw/workspace/skills/cmmc-grc/assets/templates/L2-capital-cyber/MA-maintenance-policy.docx
/root/.openclaw/workspace/skills/cmmc-grc/assets/templates/L2-capital-cyber/MP-media-protection-policy.docx
/root/.openclaw/workspace/skills/cmmc-grc/assets/templates/L2-capital-cyber/PE-physical-protection-policy.docx
/root/.openclaw/workspace/skills/cmmc-grc/assets/templates/L2-capital-cyber/PS-personnel-security-policy.docx
/root/.openclaw/workspace/skills/cmmc-grc/assets/templates/L2-capital-cyber/RA-risk-assessment-policy.docx
/root/.openclaw/workspace/skills/cmmc-grc/assets/templates/L2-capital-cyber/SC-system-and-communications-protection-policy.docx
/root/.openclaw/workspace/skills/cmmc-grc/assets/templates/L2-capital-cyber/SI-system-and-information-integrity-policy.docx
/root/.openclaw/workspace/skills/cmmc-grc/assets/templates/L2/AC-access-control-policy.docx
/root/.openclaw/workspace/skills/cmmc-grc/assets/templates/L2/AT-awareness-training-policy.docx
/root/.openclaw/workspace/skills/cmmc-grc/assets/templates/L2/AU-audit-accountability-policy.docx
/root/.openclaw/workspace/skills/cmmc-grc/assets/templates/L2/CA-security-assessment-policy.docx
/root/.openclaw/workspace/skills/cmmc-grc/assets/templates/L2/CM-configuration-management-policy.docx
/root/.openclaw/workspace/skills/cmmc-grc/assets/templates/L2/IA-identification-authentication-policy.docx
/root/.openclaw/workspace/skills/cmmc-grc/assets/templates/L2/IR-incident-response-policy.docx
/root/.openclaw/workspace/skills/cmmc-grc/assets/templates/L2/MA-maintenance-policy.docx
/root/.openclaw/workspace/skills/cmmc-grc/assets/templates/L2/MP-media-protection-policy.docx
/root/.openclaw/workspace/skills/cmmc-grc/assets/templates/L2/PE-physical-protection-policy.docx
/root/.openclaw/workspace/skills/cmmc-grc/assets/templates/L2/PS-personnel-security-policy.docx
/root/.openclaw/workspace/skills/cmmc-grc/assets/templates/L2/RA-risk-assessment-policy.docx
/root/.openclaw/workspace/skills/cmmc-grc/assets/templates/L2/README.md
/root/.openclaw/workspace/skills/cmmc-grc/assets/templates/L2/SC-system-communications-protection-policy.docx
/root/.openclaw/workspace/skills/cmmc-grc/assets/templates/L2/SI-system-information-integrity-policy.docx
/root/.openclaw/workspace/skills/cmmc-grc/assets/templates/L2/backup/MA-maintenance-policy-old.docx
/root/.openclaw/workspace/skills/cmmc-grc/assets/templates/L2/backup/MP-media-protection-policy-old.docx
/root/.openclaw/workspace/skills/cmmc-grc/assets/templates/L2/backup/PE-physical-protection-policy-old.docx
/root/.openclaw/workspace/skills/cmmc-grc/assets/templates/L2/backup/PS-personnel-security-policy-old.docx
/root/.openclaw/workspace/skills/cmmc-grc/assets/templates/L2/backup/RA-risk-assessment-policy-old.docx
/root/.openclaw/workspace/skills/cmmc-grc/assets/templates/L2/backup/SC-system-communications-protection-policy-old.docx
/root/.openclaw/workspace/skills/cmmc-grc/assets/templates/L2/backup/SI-system-information-integrity-policy-old.docx
/root/.openclaw/workspace/skills/cmmc-grc/references/control-families.md
/root/.openclaw/workspace/skills/cmmc-grc/references/poam-guide.md
/root/.openclaw/workspace/skills/cmmc-grc/references/ssp-template.md
/root/.openclaw/workspace/skills/cmmc-grc/scripts/fill_placeholders.py
/root/.openclaw/workspace/skills/cmmc-grc/scripts/generate_l2_policies.py
/root/.openclaw/workspace/skills/computer-use/.clawhub/origin.json
/root/.openclaw/workspace/skills/computer-use/SKILL.md
/root/.openclaw/workspace/skills/computer-use/_meta.json
/root/.openclaw/workspace/skills/computer-use/scripts/click.sh
/root/.openclaw/workspace/skills/computer-use/scripts/cursor_position.sh
/root/.openclaw/workspace/skills/computer-use/scripts/drag.sh
/root/.openclaw/workspace/skills/computer-use/scripts/hold_key.sh
/root/.openclaw/workspace/skills/computer-use/scripts/key.sh
/root/.openclaw/workspace/skills/computer-use/scripts/minimal-desktop.sh
/root/.openclaw/workspace/skills/computer-use/scripts/mouse_down.sh
/root/.openclaw/workspace/skills/computer-use/scripts/mouse_move.sh
/root/.openclaw/workspace/skills/computer-use/scripts/mouse_up.sh
/root/.openclaw/workspace/skills/computer-use/scripts/screenshot.sh
/root/.openclaw/workspace/skills/computer-use/scripts/scroll.sh
/root/.openclaw/workspace/skills/computer-use/scripts/setup-vnc.sh
/root/.openclaw/workspace/skills/computer-use/scripts/type_text.sh
/root/.openclaw/workspace/skills/computer-use/scripts/vnc_start.sh
/root/.openclaw/workspace/skills/computer-use/scripts/vnc_stop.sh
/root/.openclaw/workspace/skills/computer-use/scripts/wait.sh
/root/.openclaw/workspace/skills/computer-use/scripts/zoom.sh
/root/.openclaw/workspace/skills/conventional-commits/.clawhub/origin.json
/root/.openclaw/workspace/skills/conventional-commits/SKILL.md
/root/.openclaw/workspace/skills/conventional-commits/_meta.json
/root/.openclaw/workspace/skills/docker-essentials/.clawhub/origin.json
/root/.openclaw/workspace/skills/docker-essentials/SKILL.md
/root/.openclaw/workspace/skills/docker-essentials/_meta.json
/root/.openclaw/workspace/skills/github/.clawhub/origin.json
/root/.openclaw/workspace/skills/github/SKILL.md
/root/.openclaw/workspace/skills/github/_meta.json
/root/.openclaw/workspace/skills/negotiation/.clawhub/origin.json
/root/.openclaw/workspace/skills/negotiation/SKILL.md
/root/.openclaw/workspace/skills/negotiation/_meta.json
/root/.openclaw/workspace/skills/negotiation/techniques.md
/root/.openclaw/workspace/skills/openai-whisper-api/scripts/transcribe.sh
/root/.openclaw/workspace/skills/skill-vetting/.clawhub/origin.json
/root/.openclaw/workspace/skills/skill-vetting/ARCHITECTURE.md
/root/.openclaw/workspace/skills/skill-vetting/SKILL.md
/root/.openclaw/workspace/skills/skill-vetting/_meta.json
/root/.openclaw/workspace/skills/skill-vetting/references/patterns.md
/root/.openclaw/workspace/skills/skill-vetting/scripts/scan.py
/root/.openclaw/workspace/skills/speedtest/.clawhub/origin.json
/root/.openclaw/workspace/skills/speedtest/SKILL.md
/root/.openclaw/workspace/skills/speedtest/_meta.json
/root/.openclaw/workspace/skills/speedtest/references/speedtest-cli.md
/root/.openclaw/workspace/skills/speedtest/scripts/speedtest-history.sh
/root/.openclaw/workspace/skills/speedtest/scripts/speedtest-social.sh
/root/.openclaw/workspace/skills/trend-watcher/.clawhub/origin.json
/root/.openclaw/workspace/skills/trend-watcher/SKILL.md
/root/.openclaw/workspace/skills/trend-watcher/_meta.json
/root/.openclaw/workspace/skills/trend-watcher/index.js
/root/.openclaw/workspace/skills/video-agent/.clawhub/origin.json
/root/.openclaw/workspace/skills/video-agent/SKILL.md
/root/.openclaw/workspace/skills/video-agent/_meta.json
/root/.openclaw/workspace/skills/video-agent/references/assets.md
/root/.openclaw/workspace/skills/video-agent/references/authentication.md
/root/.openclaw/workspace/skills/video-agent/references/avatars.md
/root/.openclaw/workspace/skills/video-agent/references/backgrounds.md
/root/.openclaw/workspace/skills/video-agent/references/captions.md
/root/.openclaw/workspace/skills/video-agent/references/dimensions.md
/root/.openclaw/workspace/skills/video-agent/references/photo-avatars.md
/root/.openclaw/workspace/skills/video-agent/references/prompt-examples.md
/root/.openclaw/workspace/skills/video-agent/references/prompt-optimizer.md
/root/.openclaw/workspace/skills/video-agent/references/quota.md
/root/.openclaw/workspace/skills/video-agent/references/remotion-integration.md
/root/.openclaw/workspace/skills/video-agent/references/scripts.md
/root/.openclaw/workspace/skills/video-agent/references/templates.md
/root/.openclaw/workspace/skills/video-agent/references/text-overlays.md
/root/.openclaw/workspace/skills/video-agent/references/text-to-speech.md
/root/.openclaw/workspace/skills/video-agent/references/video-agent.md
/root/.openclaw/workspace/skills/video-agent/references/video-generation.md
/root/.openclaw/workspace/skills/video-agent/references/video-status.md
/root/.openclaw/workspace/skills/video-agent/references/video-translation.md
/root/.openclaw/workspace/skills/video-agent/references/visual-styles.md
/root/.openclaw/workspace/skills/video-agent/references/voices.md
/root/.openclaw/workspace/skills/video-agent/references/webhooks.md
/root/.openclaw/workspace/tasks.md
/root/.openclaw/workspace/todo.md

=== TODO/FIXME/HACK in codebase ===
/root/.openclaw/workspace/skills/self-improving-agent/SKILL.md:138:## [LRN-YYYYMMDD-XXX] category
/root/.openclaw/workspace/skills/self-improving-agent/SKILL.md:172:## [ERR-YYYYMMDD-XXX] skill_or_command_name
/root/.openclaw/workspace/skills/self-improving-agent/SKILL.md:208:## [FEAT-YYYYMMDD-XXX] capability_name
/root/.openclaw/workspace/skills/self-improving-agent/SKILL.md:236:Format: `TYPE-YYYYMMDD-XXX`
/root/.openclaw/workspace/skills/self-improving-agent/SKILL.md:239:- XXX: Sequential number or random 3 chars (e.g., `001`, `A7B`)
/root/.openclaw/workspace/skills/self-improving-agent/scripts/extract-skill.sh:140:description: "[TODO: Add a concise description of what this skill does and when to use it]"
/root/.openclaw/workspace/skills/self-improving-agent/scripts/extract-skill.sh:145:[TODO: Brief introduction explaining the skill's purpose]
/root/.openclaw/workspace/skills/self-improving-agent/scripts/extract-skill.sh:155:[TODO: Detailed usage instructions]
/root/.openclaw/workspace/skills/self-improving-agent/scripts/extract-skill.sh:159:[TODO: Add concrete examples]
/root/.openclaw/workspace/skills/self-improving-agent/scripts/extract-skill.sh:164:- Learning ID: [TODO: Add original learning ID]
/root/.openclaw/workspace/skills/self-improving-agent/scripts/extract-skill.sh:180:description: "[TODO: Add a concise description of what this skill does and when to use it]"
/root/.openclaw/workspace/skills/self-improving-agent/scripts/extract-skill.sh:185:[TODO: Brief introduction explaining the skill's purpose]
/root/.openclaw/workspace/skills/self-improving-agent/scripts/extract-skill.sh:195:[TODO: Detailed usage instructions]
/root/.openclaw/workspace/skills/self-improving-agent/scripts/extract-skill.sh:199:[TODO: Add concrete examples]
/root/.openclaw/workspace/skills/self-improving-agent/scripts/extract-skill.sh:204:- Learning ID: [TODO: Add original learning ID]
/root/.openclaw/workspace/skills/self-improving-agent/scripts/extract-skill.sh:216:echo "  2. Fill in the TODO sections with content from your learning"
/root/.openclaw/workspace/skills/self-improving-agent/scripts/error-detector.sh:52:Use the self-improvement skill format: [ERR-YYYYMMDD-XXX]
/root/.openclaw/workspace/skills/self-improving-agent/assets/SKILL-TEMPLATE.md:62:- **Learning ID**: LRN-YYYYMMDD-XXX
/root/.openclaw/workspace/skills/self-improving-agent/assets/SKILL-TEMPLATE.md:89:- Learning ID: LRN-YYYYMMDD-XXX
/root/.openclaw/workspace/skills/self-improving-agent/assets/SKILL-TEMPLATE.md:137:- Learning ID: LRN-YYYYMMDD-XXX
/root/.openclaw/workspace/skills/sms/send-sms.js:5: * Number format: +1XXXXXXXXXX
/root/.openclaw/workspace/skills/skill-vetting/ARCHITECTURE.md:292:  (e.g., "# TODO: eval is used here for the DSL parser, see issue #42")
/root/.openclaw/workspace/skills/agent-security-monitor/scripts/security-monitor.sh:32:    ["XXXX"]="placeholder"
/root/.openclaw/workspace/skills/ai-meeting-notes/assets/PREFERENCES-template.md:43:- `"TODO: {task} // @{owner} // {deadline}"`
/root/.openclaw/workspace/skills/upload-post/SKILL.md:176:curl "https://api.upload-post.com/api/uploadposts/status?request_id=XXX" \
/root/.openclaw/workspace/getnextlevel-email-ad.md:41:$X,XXX one-time setup (payment plans available). No monthly fees for the AI itself, just your existing tool costs.
/root/.openclaw/workspace/scripts/platform-health/health-data.md:1149:=== TODO/FIXME/HACK in codebase ===
/root/.openclaw/workspace/scripts/platform-health/health-collector.sh:52:echo "=== TODO/FIXME/HACK in codebase ===" >> "$OUT"
/root/.openclaw/workspace/scripts/platform-health/health-prompt.md:21:- Technical debt accumulating? (TODOs, FIXMEs, HACKs)
/root/.openclaw/workspace/gmail-api/node_modules/side-channel-weakmap/index.js:81:		// @ts-expect-error TODO: figure out why this is erroring
```

## 3. Prompt Quality Audit
### Core Identity Files
```
SOUL.md: 52 lines, 460 words, last modified 7 days ago
IDENTITY.md: 55 lines, 287 words, last modified 6 days ago
USER.md: 42 lines, 234 words, last modified 6 days ago
AGENTS.md: 225 lines, 1292 words, last modified 7 days ago
HEARTBEAT.md: 40 lines, 248 words, last modified 0 days ago

=== Skill SKILL.md files ===
  self-improving-agent: 647 lines
  anthropic-frontend-design: 100 lines
  cmmc: 61 lines
  email-marketing: 116 lines
  cellcog: 510 lines
  conventional-commits: 186 lines
  agentmail-integration: 396 lines
  openclaw-social-scheduler: 585 lines
  dart-ai: 60 lines
  marketing-mode: 693 lines
  cmmc-grc: 159 lines
  ai-seo: 102 lines
  nikhil-fb-creator: 170 lines
  social-media-scheduler: 49 lines
  action1: 148 lines
  gohighlevel: 49 lines
  skill-vetting: 151 lines
  business-model-canvas: 153 lines
  trend-watcher: 62 lines
  ghl-crm-pro: 173 lines
  cyber-security-engineer: 84 lines
  agent-security-monitor: 170 lines
  email-daily-summary: 335 lines
  ai-meeting-notes: 988 lines
  speedtest: 158 lines
  security-auditor: 399 lines
  negotiation: 115 lines
  humanizer: 110 lines
  openai-whisper-api: 43 lines
  linkedin-lead-generation: 49 lines
  upload-post: 262 lines
  docker-essentials: 349 lines
  github: 47 lines
  computer-use: 215 lines
  video-agent: 75 lines
  capital-cyber-copy: 156 lines

=== Cron/council prompts ===
  platform-health/health-data.md: 1229 lines
  platform-health/health-prompt.md: 118 lines
  advisory-council/daily-briefing-data.md: 188 lines
  advisory-council/council-prompt.md: 132 lines
  daily-intel-brief.md: 29 lines
```

## 4. Dependencies & Packages
```
=== Node.js ===
v22.22.0
=== OpenClaw ===
2026.2.19-2
=== Python packages (key) ===
agentmail                0.2.23
git-filter-repo          2.47.0
python-dotenv            1.2.2
requests                 2.31.0
requests-oauthlib        2.0.0
=== npm global packages ===
/usr/lib
├── @anthropic-ai/claude-code@2.1.44
├── clawhub@0.6.1
├── corepack@0.34.0
├── dart-mcp-server@0.2.1
├── nodemailer@8.0.1
├── npm@10.9.4
├── openclaw@2026.2.19-2
├── playwright@1.58.2
├── pm2@6.0.14
├── staticrypt@3.5.4
└── vercel@50.22.1

=== Outdated npm globals ===
Package                        Current    Wanted    Latest  Location                                Depended by
@anthropic-ai/claude-code       2.1.44    2.1.70    2.1.70  node_modules/@anthropic-ai/claude-code  global
clawhub                          0.6.1     0.7.0     0.7.0  node_modules/clawhub                    global
corepack                        0.34.0    0.34.6    0.34.6  node_modules/corepack                   global
npm                             10.9.4   11.11.0   11.11.0  node_modules/npm                        global
openclaw                   2026.2.19-2  2026.3.2  2026.3.2  node_modules/openclaw                   global
vercel                         50.22.1   50.28.0   50.28.0  node_modules/vercel                     global
```

## 5. Storage & Disk Usage
```
=== Disk usage ===
Filesystem      Size  Used Avail Use% Mounted on
/dev/sda1        48G   36G   12G  75% /

=== Workspace size ===
1.6G	/root/.openclaw/workspace
1.2G	/root/.openclaw/workspace/projects/
229M	/root/.openclaw/workspace/gmail-api/
52M	/root/.openclaw/workspace/node_modules/
7.5M	/root/.openclaw/workspace/skills/
6.2M	/root/.openclaw/workspace/cmmc-templates-2/
448K	/root/.openclaw/workspace/drafts/
412K	/root/.openclaw/workspace/assets/
336K	/root/.openclaw/workspace/docs/
288K	/root/.openclaw/workspace/capital-cyber-content/
248K	/root/.openclaw/workspace/scripts/
168K	/root/.openclaw/workspace/reference/
124K	/root/.openclaw/workspace/cc-blog-posts/
120K	/root/.openclaw/workspace/location-pages/
112K	/root/.openclaw/workspace/memory/
112K	/root/.openclaw/workspace/marketing-emails/

=== Git repo size ===
77M	/root/.openclaw/workspace/.git

=== Memory files ===
112K	/root/.openclaw/workspace/memory/
total 116
drwxr-xr-x  2 root root 4096 Mar  6 05:37 .
drwxr-xr-x 35 root root 4096 Mar  5 12:04 ..
-rw-r--r--  1 root root  687 Feb 14 04:29 2026-02-14.md
-rw-r--r--  1 root root 4801 Feb 20 01:27 2026-02-19.md
-rw-r--r--  1 root root 3113 Feb 21 04:49 2026-02-20.md
-rw-r--r--  1 root root 9619 Feb 22 23:48 2026-02-22.md
-rw-r--r--  1 root root 1985 Mar  2 03:33 2026-02-23.md
-rw-r--r--  1 root root  807 Feb 24 12:39 2026-02-24.md
-rw-r--r--  1 root root  327 Feb 25 11:54 2026-02-25.md
-rw-r--r--  1 root root 4245 Feb 27 15:43 2026-02-26.md
-rw-r--r--  1 root root 1498 Feb 28 03:08 2026-02-27.md
-rw-r--r--  1 root root 1615 Mar  2 03:34 2026-02-28.md
-rw-r--r--  1 root root 3957 Mar  2 03:33 2026-03-01.md
-rw-r--r--  1 root root 4495 Mar  3 00:00 2026-03-02.md
-rw-r--r--  1 root root 3308 Mar  3 20:33 2026-03-03.md
-rw-r--r--  1 root root 1637 Mar  4 04:14 2026-03-04.md
-rw-r--r--  1 root root 1247 Mar  6 00:08 2026-03-05.md
-rw-r--r--  1 root root   83 Mar  6 09:00 agentmail-state.json

=== Log files ===
12K	/var/log/ares-backup.log
4.0K	/var/log/agentmail-check.log
(no log files)
```

## 6. Skill Integrity
```
=== Installed Skills ===
  action1: SKILL.md=YES scripts=YES
  agent-security-monitor: SKILL.md=YES scripts=YES
  agentmail-integration: SKILL.md=YES scripts=YES
  ai-meeting-notes: SKILL.md=YES scripts=NO
  ai-seo: SKILL.md=YES scripts=NO
  anthropic-frontend-design: SKILL.md=YES scripts=YES
  business-model-canvas: SKILL.md=YES scripts=NO
  capital-cyber-copy: SKILL.md=YES scripts=NO
  cellcog: SKILL.md=YES scripts=NO
  cmmc-grc: SKILL.md=YES scripts=YES
  cmmc: SKILL.md=YES scripts=NO
  computer-use: SKILL.md=YES scripts=YES
  conventional-commits: SKILL.md=YES scripts=NO
  cyber-security-engineer: SKILL.md=YES scripts=YES
  dart-ai: SKILL.md=YES scripts=NO
  docker-essentials: SKILL.md=YES scripts=NO
  email-daily-summary: SKILL.md=YES scripts=NO
  email-marketing: SKILL.md=YES scripts=NO
  ghl-crm-pro: SKILL.md=YES scripts=YES
  github: SKILL.md=YES scripts=NO
  gohighlevel: SKILL.md=YES scripts=NO
  humanizer: SKILL.md=YES scripts=NO
  linkedin-lead-generation: SKILL.md=YES scripts=YES
  linkedin: SKILL.md=NO scripts=NO
  marketing-mode: SKILL.md=YES scripts=NO
  negotiation: SKILL.md=YES scripts=NO
  nikhil-fb-creator: SKILL.md=YES scripts=NO
  openai-whisper-api: SKILL.md=YES scripts=YES
  openclaw-social-scheduler: SKILL.md=YES scripts=YES
  security-auditor: SKILL.md=YES scripts=NO
  self-improving-agent: SKILL.md=YES scripts=YES
  skill-vetting: SKILL.md=YES scripts=YES
  sms: SKILL.md=NO scripts=NO
  social-media-scheduler: SKILL.md=YES scripts=NO
  speedtest: SKILL.md=YES scripts=YES
  trend-watcher: SKILL.md=YES scripts=NO
  upload-post: SKILL.md=YES scripts=NO
  video-agent: SKILL.md=YES scripts=NO

=== ClawHub installed (from .clawhub markers) ===
  self-improving-agent: v1
  anthropic-frontend-design: v1
  email-marketing: v1
  cellcog: v1
  conventional-commits: v1
  agentmail-integration: v1
  openclaw-social-scheduler: v1
  marketing-mode: v1
  social-media-scheduler: v1
  skill-vetting: v1
  business-model-canvas: v1
  trend-watcher: v1
  ghl-crm-pro: v1
  cyber-security-engineer: v1
  agent-security-monitor: v1
  email-daily-summary: v1
  ai-meeting-notes: v1
  speedtest: v1
  security-auditor: v1
  negotiation: v1
  openai-whisper-api: v1
  linkedin-lead-generation: v1
  upload-post: v1
  docker-essentials: v1
  github: v1
  computer-use: v1
  video-agent: v1
```

## 7. Config Consistency
```
=== .gitignore ===
# Sensitive config files
.env
.env.local
.env.*
*.key
secrets/

# API tokens and credentials
.dart-config
token.json
credentials.json
*_token*
*secret*

# Gmail API
gmail-api/credentials.json
gmail-api/token.json
gmail-api/exchange-token.js

# Node
node_modules/

# Tools - now redacted, safe to commit
# (Actual credentials moved to /root/.openclaw/.local/credentials.md)

# Contains sensitive content
drafts/linkedin-queue/*password*
marketing-emails/*password*

.gitmodules
/root/.openclaw/.local/

# Git backup directories (contain secrets)
.git-backup-*

=== Environment variables (names only) ===

=== Git remote ===
cleaned	/tmp/ares-clean.git (fetch)
cleaned	/tmp/ares-clean.git (push)
mission-control	https://oauth2:***REDACTED***@github.com/capitalcybernik/mission-control.git (fetch)
mission-control	https://oauth2:***REDACTED***@github.com/capitalcybernik/mission-control.git (push)
origin	https://capitalcybernik:***REDACTED***@github.com/capitalcybernik/cmmc-grc.git (fetch)
origin	https://capitalcybernik:***REDACTED***@github.com/capitalcybernik/cmmc-grc.git (push)

=== OpenClaw config files ===
-rw-r--r-- 1 root root   72 Feb 15 14:46 /root/.openclaw/config.json
-rw-r--r-- 1 root root  233 Feb 16 03:18 /root/.openclaw/mcp.json
-rw------- 1 root root 5024 Feb 23 10:46 /root/.openclaw/openclaw.json
-rw-r--r-- 1 root root  187 Mar  4 23:42 /root/.openclaw/update-check.json
(none found)
```

## 8. Data Integrity
```
=== MEMORY.md health ===
MEMORY.md: 231 lines, 1860 words

=== Memory file dates ===
  2026-02-14.md: 16 lines
  2026-02-19.md: 124 lines
  2026-02-20.md: 73 lines
  2026-02-22.md: 246 lines
  2026-02-23.md: 48 lines
  2026-02-24.md: 16 lines
  2026-02-25.md: 7 lines
  2026-02-26.md: 80 lines
  2026-02-27.md: 34 lines
  2026-02-28.md: 33 lines
  2026-03-01.md: 65 lines
  2026-03-02.md: 83 lines
  2026-03-03.md: 49 lines
  2026-03-04.md: 31 lines
  2026-03-05.md: 31 lines

=== AgentMail state ===
{
  "last_checked": "2026-03-06T09:00:02.486452+00:00",
  "last_message_id": null
}
=== Git status (uncommitted changes) ===
 M .clawhub/lock.json
 M memory/agentmail-state.json
 M scripts/platform-health/health-data.md
```

## 9. Security Posture
```
=== Listening ports ===
State  Recv-Q Send-Q Local Address:Port  Peer Address:PortProcess                                                   
LISTEN 0      4096       127.0.0.1:631        0.0.0.0:*    users:(("cupsd",pid=382738,fd=7))                        
LISTEN 0      511          0.0.0.0:443        0.0.0.0:*    users:(("nginx",pid=73310,fd=7),("nginx",pid=73223,fd=7))
LISTEN 0      4096   127.0.0.53%lo:53         0.0.0.0:*    users:(("systemd-resolve",pid=676,fd=15))                
LISTEN 0      511          0.0.0.0:80         0.0.0.0:*    users:(("nginx",pid=73310,fd=5),("nginx",pid=73223,fd=5))
LISTEN 0      4096         0.0.0.0:22         0.0.0.0:*    users:(("sshd",pid=2183,fd=3),("systemd",pid=1,fd=278))  
LISTEN 0      4096      127.0.0.54:53         0.0.0.0:*    users:(("systemd-resolve",pid=676,fd=17))                
LISTEN 0      511        127.0.0.1:18789      0.0.0.0:*    users:(("openclaw-gatewa",pid=361953,fd=23))             
LISTEN 0      511        127.0.0.1:18792      0.0.0.0:*    users:(("openclaw-gatewa",pid=361953,fd=28))             
LISTEN 0      511          0.0.0.0:3456       0.0.0.0:*    users:(("node /root/Proj",pid=377432,fd=23))             
LISTEN 0      4096           [::1]:631           [::]:*    users:(("cupsd",pid=382738,fd=6))                        
LISTEN 0      511             [::]:80            [::]:*    users:(("nginx",pid=73310,fd=6),("nginx",pid=73223,fd=6))
LISTEN 0      4096            [::]:22            [::]:*    users:(("sshd",pid=2183,fd=4),("systemd",pid=1,fd=280))  
LISTEN 0      511            [::1]:18789         [::]:*    users:(("openclaw-gatewa",pid=361953,fd=24))             
LISTEN 0      2                  *:3389             *:*    users:(("xrdp",pid=1079,fd=11))                          

=== Failed SSH attempts (last 24h) ===
21132

=== Credentials in git check ===
6

=== TOOLS.md in git? ===
1
```
