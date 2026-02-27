#!/usr/bin/env bash
# Action1 API helper — handles auth token caching and auto-refresh
# Usage: action1_api.sh <METHOD> <path> [json_body]
# Example: action1_api.sh GET /organizations
# Example: action1_api.sh GET /endpoints/managed/${ACTION1_ORG_ID}?fields=*
# Example: action1_api.sh POST /endpoints/groups/${ACTION1_ORG_ID} '{"name":"test"}'
#
# Requires env vars: ACTION1_CLIENT_ID, ACTION1_CLIENT_SECRET
# Optional: ACTION1_REGION (NorthAmerica|Europe, default NorthAmerica)

set -euo pipefail

TOKEN_CACHE="/tmp/.action1_token"
TOKEN_EXPIRY_CACHE="/tmp/.action1_token_expiry"

BASE_URL="https://app.action1.com/api/3.0"
if [[ "${ACTION1_REGION:-NorthAmerica}" == "Europe" ]]; then
  BASE_URL="https://app.eu.action1.com/api/3.0"
fi

get_token() {
  # Check cached token
  if [[ -f "$TOKEN_CACHE" && -f "$TOKEN_EXPIRY_CACHE" ]]; then
    local expiry
    expiry=$(cat "$TOKEN_EXPIRY_CACHE")
    local now
    now=$(date +%s)
    if (( now < expiry - 60 )); then
      cat "$TOKEN_CACHE"
      return
    fi
  fi

  # Fetch new token
  local resp
  resp=$(curl -s -XPOST \
    -H "Content-Type:application/x-www-form-urlencoded" \
    -d "client_id=${ACTION1_CLIENT_ID}&client_secret=${ACTION1_CLIENT_SECRET}" \
    "${BASE_URL}/oauth2/token")

  local token
  token=$(echo "$resp" | jq -r '.access_token // empty')
  if [[ -z "$token" ]]; then
    echo "ERROR: Failed to authenticate. Response: $resp" >&2
    exit 1
  fi

  local expires_in
  expires_in=$(echo "$resp" | jq -r '.expires_in // 3600')
  local expiry_ts
  expiry_ts=$(( $(date +%s) + expires_in ))

  echo "$token" > "$TOKEN_CACHE"
  echo "$expiry_ts" > "$TOKEN_EXPIRY_CACHE"
  chmod 600 "$TOKEN_CACHE" "$TOKEN_EXPIRY_CACHE"

  echo "$token"
}

METHOD="${1:?Usage: action1_api.sh METHOD path [body]}"
PATH_ARG="${2:?Usage: action1_api.sh METHOD path [body]}"
BODY="${3:-}"

TOKEN=$(get_token)

CURL_ARGS=(-s -X "$METHOD" -H "Authorization: Bearer $TOKEN" -H "Content-Type: application/json")

if [[ -n "$BODY" ]]; then
  CURL_ARGS+=(-d "$BODY")
fi

curl "${CURL_ARGS[@]}" "${BASE_URL}${PATH_ARG}"
