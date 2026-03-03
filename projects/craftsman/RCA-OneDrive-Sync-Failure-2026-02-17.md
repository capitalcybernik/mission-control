# ROOT CAUSE ANALYSIS REPORT

**Incident:** HR File Sharing / OneDrive Sync Failure
**Date of Incident:** February 17, 2026
**Date Resolved:** February 19, 2026
**Prepared by:** Capital Cyber
**Classification:** Low Severity, No Data Loss

---

## EXECUTIVE SUMMARY

On February 17, 2026, a corrupted SkyDriveSync.exe process on Amy Zhang's workstation caused a file synchronization failure between OneDrive and the associated SharePoint document libraries. This resulted in several folders (including 401K and Confidential Data containing files from previous years) becoming temporarily inaccessible. The issue also affected Christal's view of the same files on the Payroll SharePoint site, as both users shared the same underlying document library. All files were confirmed present in backup and were restored the following day with no data loss. No indicators of malicious activity or outsider threat were identified.

---

## INCIDENT TIMELINE

### February 17, 2026 (Tuesday)

- **12:56 PM** — Amy Zhang contacted Nikhil Bon via Microsoft Teams reporting an HR file sharing issue
- Amy's workstation was assessed and a corrupted SkyDriveSync.exe was identified as the cause of the sync failure
- OneDrive was uninstalled and reinstalled on Amy's machine to resolve the sync issue
- **11:00 AM backup** — Rubrik backup confirmed all files present at this point
- **7:00 PM backup** — Rubrik backup showed files missing from certain folders, indicating the corrupted sync process deleted or desynchronized the files between the 11:00 AM and 7:00 PM backup window

### February 18, 2026 (Wednesday)

- **11:09 AM** — Amy reported that files from previous years were missing from certain folders
- A remote session was initiated to investigate
- Christal confirmed she was also missing the same files on the Payroll SharePoint site
- Rubrik backup analysis confirmed:
  - Files **present** in the February 17, 11:00 AM backup
  - Files **missing** from the February 17, 7:00 PM backup
- **Restoration Phase 1:** 401K folder restored first as a controlled test
- **Restoration Phase 2:** After successful test, the full Confidential Data folder was restored using **Append mode (no overwrite)** to preserve any newer files

### February 19, 2026 (Thursday)

- Amy confirmed she could see the restored files on the SharePoint site
- Minor residual issue: files visible in SharePoint but not yet appearing in OneDrive sync on her local machine (expected behavior as OneDrive re-indexes after restoration)
- Incident closed after file access was confirmed for both Amy and Christal

---

## ROOT CAUSE

A **corrupted SkyDriveSync.exe** process on Amy Zhang's workstation caused an abnormal synchronization event between her local OneDrive client and the connected SharePoint document libraries. During the sync failure, the corrupted process removed or desynchronized files from previous years within the 401K and Confidential Data folders. Because OneDrive and SharePoint share the same underlying storage, the deletion propagated to the SharePoint site, which is why Christal also observed missing files on the Payroll SharePoint library.

The corruption likely occurred due to one of the following:

- A failed or interrupted OneDrive client update that left SkyDriveSync.exe in a corrupted state
- Disk level file corruption affecting the OneDrive sync engine binary
- A conflict between the legacy SkyDriveSync.exe process and the modern OneDrive sync client

---

## IMPACT ASSESSMENT

| Category | Assessment |
|---|---|
| Data Loss | **None.** All files recovered from Rubrik backup |
| Users Affected | 2 (Amy Zhang, Christal) |
| Systems Affected | OneDrive sync client, Payroll SharePoint site |
| Duration | ~2 business days (Feb 17 to Feb 19) |
| Confidentiality Impact | None. No unauthorized access detected |
| Malicious Activity | **None identified.** No indicators of compromise |
| Business Impact | Minor. Temporary inability to access HR/Payroll files from prior years |

---

## CORRECTIVE ACTIONS TAKEN

1. ✅ Uninstalled and reinstalled OneDrive on Amy's workstation to eliminate the corrupted SkyDriveSync.exe
2. ✅ Verified backup integrity via Rubrik before restoration
3. ✅ Restored 401K folder first as a controlled test before full restoration
4. ✅ Restored Confidential Data folder using Append mode to prevent overwriting any current files
5. ✅ Confirmed file accessibility for both affected users

---

## PREVENTIVE RECOMMENDATIONS

1. **Enable OneDrive Known Folder Move (KFM) with version history retention** — Ensures local file changes are versioned and recoverable without needing full backup restoration

2. **Monitor OneDrive sync health via Action1** — Configure alerts for OneDrive sync client errors or process crashes across all managed endpoints to catch sync failures early

3. **Verify SkyDriveSync.exe is not present on workstations** — The SkyDriveSync.exe binary is a legacy component from the older OneDrive for Business client. All workstations should be running the modern OneDrive sync client (OneDrive.exe). Any machine still running SkyDriveSync.exe should be updated

4. **Enable SharePoint Recycle Bin monitoring** — Deleted files go to the SharePoint Recycle Bin before permanent deletion. Monitoring for bulk deletions can provide early warning of sync failures

5. **Schedule monthly Rubrik backup verification** — Perform a monthly spot check to confirm backup integrity for critical SharePoint libraries, especially HR and Payroll data

---

## CONCLUSION

This incident was caused by a corrupted legacy sync process (SkyDriveSync.exe), not by malicious activity, user error, or an external threat. The corrupted process caused files to be removed from the shared SharePoint library during a failed synchronization event. All files were successfully recovered from Rubrik backup within one business day. No data was lost. Preventive measures have been recommended to detect similar sync failures earlier and ensure all workstations are running the current OneDrive sync client.

---

**Report prepared by:** Capital Cyber
**Contact:** (571) 410-3066
**Date:** March 2, 2026
