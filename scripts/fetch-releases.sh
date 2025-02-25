#!/bin/bash

# This script downloads the latests release data from cadence-workflow repositories
 gh api \
  -H "Accept: application/vnd.github+json" \
  -H "X-GitHub-Api-Version: 2022-11-28" \
  /repos/cadence-workflow/cadence/releases > static/data/releases/cadence.json


 gh api \
  -H "Accept: application/vnd.github+json" \
  -H "X-GitHub-Api-Version: 2022-11-28" \
  /repos/cadence-workflow/cadence-go-client/releases > static/data/releases/cadence-go-client.json


 gh api \
  -H "Accept: application/vnd.github+json" \
  -H "X-GitHub-Api-Version: 2022-11-28" \
  /repos/cadence-workflow/cadence-java-client/releases > static/data/releases/cadence-java-client.json

# Validate json files, if any of the commands fail, the script will exit with a non-zero status
cat static/data/releases/cadence.json | jq '.[] | has("tag_name") and has("body")' -e > /dev/null
cat static/data/releases/cadence-go-client.json | jq '.[] | has("tag_name") and has("body")' -e > /dev/null
cat static/data/releases/cadence-java-client.json | jq '.[] | has("tag_name") and has("body")' -e > /dev/null
