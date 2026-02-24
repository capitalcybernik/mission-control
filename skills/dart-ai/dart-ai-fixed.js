#!/usr/bin/env node
/**
 * Fixed Dart AI Skill for OpenClaw
 * Properly configured for "Ares Tasks" dartboard
 */

const { spawn } = require('child_process');
const DART_TOKEN = process.env.DART_TOKEN || 'dsa_61c1377b1ea700a37b8fb813fe8ec1284b3a2fcf5eed7a13fa2a28e8f386abfa';
const DARTBOARD_NAME = "Ares Tasks";

async function mcpCall(method, params) {
  return new Promise((resolve, reject) => {
    const server = spawn('npx', ['-y', 'dart-mcp-server@latest'], {
      env: { ...process.env, DART_TOKEN },
      stdio: ['pipe', 'pipe', 'inherit']
    });

    const request = {
      jsonrpc: "2.0",
      id: Date.now(),
      method,
      params
    };

    let responseData = '';
    let initialized = false;

    server.stdout.on('data', (data) => {
      const lines = data.toString().trim().split('\n');
      for (const line of lines) {
        if (line.includes('Dart MCP Server running')) continue;
        
        try {
          const response = JSON.parse(line);
          if (response.id === request.id) {
            server.kill();
            resolve(response);
            return;
          }
        } catch (e) {
          // Ignore parsing errors
        }
      }
    });

    server.on('error', reject);
    server.on('exit', (code) => {
      if (code !== 0) reject(new Error(`Process exited with code ${code}`));
    });

    // Initialize first
    const initRequest = {
      jsonrpc: "2.0",
      id: Date.now() - 1,
      method: "initialize",
      params: {
        protocolVersion: "2024-11-05",
        capabilities: {},
        clientInfo: { name: "openclaw", version: "1.0.0" }
      }
    };

    server.stdin.write(JSON.stringify(initRequest) + '\n');
    setTimeout(() => {
      server.stdin.write(JSON.stringify(request) + '\n');
    }, 100);

    setTimeout(() => {
      server.kill();
      reject(new Error('Timeout'));
    }, 10000);
  });
}

// List all tasks (with proper filters)
async function listTasks(options = {}) {
  const result = await mcpCall('tools/call', {
    name: 'list_tasks',
    arguments: {
      dartboard: DARTBOARD_NAME,
      no_defaults: true, // Skip default filters
      limit: options.limit || 20,
      ...options
    }
  });
  return result;
}

// Create task
async function createTask(title, options = {}) {
  const result = await mcpCall('tools/call', {
    name: 'create_task',
    arguments: {
      title,
      dartboard: DARTBOARD_NAME,
      status: options.status || 'To-do',
      priority: options.priority || 'medium',
      description: options.description || '',
      ...options
    }
  });
  return result;
}

// Update task
async function updateTask(taskId, updates) {
  const result = await mcpCall('tools/call', {
    name: 'update_task',
    arguments: {
      id: taskId,
      ...updates
    }
  });
  return result;
}

// Get task details
async function getTask(taskId) {
  const result = await mcpCall('tools/call', {
    name: 'get_task',
    arguments: { id: taskId }
  });
  return result;
}

// Main CLI interface
async function main() {
  const args = process.argv.slice(2);
  const action = args[0];

  try {
    switch (action) {
      case 'list':
        const tasks = await listTasks();
        console.log(JSON.stringify(tasks, null, 2));
        break;
      
      case 'create':
        const title = args.slice(1).join(' ');
        if (!title) {
          console.error('Usage: dart-ai create <title>');
          process.exit(1);
        }
        const created = await createTask(title);
        console.log('✓ Created task:', created.result?.title || 'Success');
        break;
      
      case 'update':
        const taskId = args[1];
        const status = args[2];
        if (!taskId || !status) {
          console.error('Usage: dart-ai update <task-id> <status>');
          console.error('Valid statuses: To-do, Doing, Done');
          process.exit(1);
        }
        const updated = await updateTask(taskId, { status });
        console.log('✓ Updated task:', updated.result ? 'Success' : 'Failed');
        break;
      
      case 'capabilities':
        console.log(`
Dart MCP Capabilities for "${DARTBOARD_NAME}":

Available Commands:
  list              - List all tasks
  create <title>    - Create new task
  update <id> <status> - Update task status (To-do/Doing/Done)
  capabilities      - Show this help

Examples:
  dart-ai list
  dart-ai create "Fix WordPress access"
  dart-ai update 12345 "Done"
        `);
        break;
      
      default:
        console.log(`
Fixed Dart AI Skill - "${DARTBOARD_NAME}"

Usage:
  dart-ai list                    List all tasks
  dart-ai create <title>          Create new task  
  dart-ai update <id> <status>    Update task status
  dart-ai capabilities            Show capabilities

Valid statuses: To-do, Doing, Done
        `);
    }
  } catch (error) {
    console.error('Error:', error.message);
    process.exit(1);
  }
}

// Export functions for programmatic use
module.exports = { listTasks, createTask, updateTask, getTask, mcpCall };

// Run CLI if called directly
if (require.main === module) {
  main();
}