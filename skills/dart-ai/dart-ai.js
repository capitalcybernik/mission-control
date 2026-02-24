const { spawn } = require('child_process');
const DART_TOKEN = process.env.DART_TOKEN || 'dsa_61c1377b1ea700a37b8fb813fe8ec1284b3a2fcf5eed7a13fa2a28e8f386abfa';
const DARTBOARD_NAME = "Ares Tasks";

async function mcpCall(method, params) {
  return new Promise((resolve, reject) => {
    const server = spawn('npx', ['-y', 'dart-mcp-server@latest'], {
      env: { ...process.env, DART_TOKEN },
      stdio: ['pipe', 'pipe', 'inherit']
    });

    const targetId = Date.now();
    server.stdout.on('data', (data) => {
      const lines = data.toString().trim().split('\n');
      for (const line of lines) {
        if (line.includes('Dart MCP Server running')) continue;
        try {
          const response = JSON.parse(line);
          if (response.id === targetId) {
            server.kill();
            resolve(response);
            return;
          }
        } catch (e) {}
      }
    });

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

    const request = { jsonrpc: "2.0", id: targetId, method, params };

    server.stdin.write(JSON.stringify(initRequest) + '\n');
    setTimeout(() => {
      server.stdin.write(JSON.stringify(request) + '\n');
    }, 100);

    setTimeout(() => { server.kill(); reject(new Error('Timeout')); }, 10000);
  });
}

async function listTasks() {
  const result = await mcpCall('tools/call', {
    name: 'list_tasks',
    arguments: { 
      dartboard: DARTBOARD_NAME,
      limit: 50 
    }
  });
  return result;
}

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

async function main() {
  const args = process.argv.slice(2);
  const action = args[0];

  try {
    switch (action) {
      case 'list':
        const tasks = await listTasks();
        const data = JSON.parse(tasks.result.content[0].text);
        console.log(`\n=== Tasks in "${DARTBOARD_NAME}" ===`);
        console.log(`Total: ${data.count}`);
        if (data.results && data.results.length > 0) {
          data.results.forEach((task, i) => {
            console.log(`\n${i + 1}. ${task.title}`);
            console.log(`   Status: ${task.status} | Priority: ${task.priority}`);
            if (task.description) console.log(`   Description: ${task.description.substring(0, 100)}...`);
          });
        } else {
          console.log('No tasks found in this dartboard.');
        }
        break;
      
      case 'create':
        const title = args.slice(1).join(' ');
        if (!title) {
          console.error('Usage: dart-ai create <title>');
          process.exit(1);
        }
        const created = await createTask(title);
        console.log('✓ Created:', created.result ? 'Success' : 'Failed');
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
        console.log('✓ Updated:', updated.result ? 'Success' : 'Failed');
        break;
      
      default:
        console.log(`
Dart AI Skill - "${DARTBOARD_NAME}"

Usage:
  dart-ai list                    List all tasks
  dart-ai create <title>          Create new task  
  dart-ai update <task-id> <status>  Update task status

Valid statuses: To-do, Doing, Done
        `);
    }
  } catch (error) {
    console.error('Error:', error.message);
    process.exit(1);
  }
}

// Export for programmatic use
module.exports = { listTasks, createTask, updateTask, mcpCall };

// Run CLI if called directly
if (require.main === module) {
  main();
}