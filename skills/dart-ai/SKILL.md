# Dart AI Skill for OpenClaw
# Ares Tasks Integration

## Overview
This skill enables task management through Dart AI project management platform.
Dartboard: "Ares Tasks"

## Rules
- ONLY add/update/close tasks when EXPLICITLY asked
- DO NOT create tasks by default
- Some requests are NOT tasks - acknowledge them normally
- Always confirm before creating tasks

## Available Actions

### list_tasks
List all tasks in the Ares Tasks dartboard

### create_task  
Create a new task (requires explicit confirmation)
Required fields:
- title: Task title
Optional fields:
- description: Task details
- status: todo, in_progress, done
- priority: low, medium, high
- assignee: Email or user ID
- due_date: ISO format date

### update_task
Update an existing task (requires explicit confirmation)
Fields:
- task_id: The task ID to update
- Any fields to change (title, status, priority, etc.)

### delete_task
Move task to trash (requires explicit confirmation)

### get_task
Get details of a specific task

### summarize_tasks
Get AI summary of tasks with optional filters

## Usage Examples

User: "Add a task to review the CMMC proposal"
→ Create task: "Review CMMC proposal" in Ares Tasks

User: "What tasks do I have?"
→ List all tasks in Ares Tasks

User: "Mark the website task as done"
→ Update task status to "done"

User: "I'm feeling tired today"
→ NOT a task - acknowledge normally

## Configuration
DART_TOKEN is stored in ~/.openclaw/.dart-config
MCP server config in ~/.openclaw/mcp.json