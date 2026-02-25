@echo off
REM Obsidian Vault Backup Script for Windows
REM Add to Task Scheduler to run daily

SET VAULT_PATH=%USERPROFILE%\ObsidianVault
REM ^^ Change this to your vault location

cd /d "%VAULT_PATH%" || (echo Vault not found & exit /b 1)

git add -A
git diff --cached --quiet && (echo No changes to backup. & exit /b 0)

for /f "tokens=1-2 delims= " %%a in ('echo %date% %time%') do set TIMESTAMP=%%a %%b
git commit -m "vault backup: %TIMESTAMP%"
git push -u origin main
echo Backup complete: %TIMESTAMP%
