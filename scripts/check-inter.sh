#!/bin/bash
set -e

INTER_DIR="$(cd "$(dirname "$0")/../src/presets/ec/fonts" && pwd)"
VERSION_FILE="$INTER_DIR/version.txt"
GITHUB_API_URL="https://api.github.com/repos/rsms/inter/releases/latest"

# Get the latest release tag
LATEST_TAG=$(curl -s "$GITHUB_API_URL" | grep -oP '"tag_name": "\K[^"]+')

# Check if a previous version is stored
if [ -f "$VERSION_FILE" ]; then
  INSTALLED_VERSION=$(cat "$VERSION_FILE")
else
  INSTALLED_VERSION="none"
fi

# Compare versions
if [ "$LATEST_TAG" != "$INSTALLED_VERSION" ]; then
  echo "New Inter release available: $LATEST_TAG (Installed: $INSTALLED_VERSION)"
  echo "Run './update-inter.sh' to update."
else
  echo "Inter font is up-to-date ($INSTALLED_VERSION)."
fi
