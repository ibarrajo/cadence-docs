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
