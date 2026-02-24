# Dart AI Skill

## Purpose
Integrate with Dart AI project management for the "Ares Tasks" dartboard.

## When to Use
- ONLY when user EXPLICITLY asks to add/update/close a task
- When user asks to list or summarize tasks
- NEVER create tasks without explicit permission

## When NOT to Use
- General conversation ("I'm tired", "Good morning")
- Questions about topics
- Requests for information
- Jokes, chitchat, etc.

## Available Tools

### dart_list_tasks
List all tasks in Ares Tasks dartboard.

### dart_create_task
Create a new task. ALWAYS confirm with user first.
Parameters:
- title (required): Task title
- description (optional): Task details
- status (optional): todo, in_progress, done
- priority (optional): low, medium, high

### dart_update_task
Update existing task. ALWAYS confirm with user first.
Parameters:
- task_id (required): Task ID
- status/priority/title/etc: Fields to update

### dart_delete_task
Move task to trash. ALWAYS confirm with user first.
Parameters:
- task_id (required): Task ID

### dart_summarize_tasks
Get AI summary of tasks.

## Examples

✅ "Add a task to call John tomorrow"
→ Use dart_create_task

✅ "What tasks do I have?"
→ Use dart_list_tasks

✅ "Close the website task"
→ Use dart_update_task to mark done

❌ "I'm feeling tired"
→ Do NOT use - just respond normally

❌ "What's the weather?"
→ Do NOT use - use weather skill instead

## Confirmation Required
For create, update, delete - always say:
"I'll add that task to Ares Tasks. Confirm?"

Wait for yes before proceeding.