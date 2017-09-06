#!/bin/sh

# Exit the script on any command with non 0 return code
set -e

# Go to project root
cd "$(dirname "$0")"
cd ..

if [ "${DRONE}" = "true" ]; then
  git config --global user.email "DIGIT-INNO@ec.europa.eu";
  git config --global user.name "HAL Patch INNO";
fi

# Deploy
./node_modules/.bin/gh-pages \
  --silent \
  --repo https://${GH_TOKEN}@github.com/ec-europa/europa-component-library.git \
  --dist dist \
  --message "Update GitHub Pages [SKIP CI]"
