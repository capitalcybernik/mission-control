#!/bin/bash
# Create task in Ares Tasks dartboard

DART_TOKEN="dsa_61c1377b1ea700a37b8fb813fe8ec1284b3a2fcf5eed7a13fa2a28e8f386abfa"

echo '{
  "jsonrpc": "2.0",
  "method": "tools/call",
  "params": {
    "name": "create_task",
    "arguments": {
      "title": "Review last 5 sales calls on Meetgeek",
      "dartboard": "Ares Tasks"
    }
  },
  "id": 2
}' | DART_TOKEN=$DART_TOKEN npx -y dart-mcp-server@latest 2>&1