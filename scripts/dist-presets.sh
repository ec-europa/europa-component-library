#!/bin/sh

# Exit the script on any command with non 0 return code
set -e

# Echo every command being executed
set -x

# Go to project root
cd "$(dirname "$0")"
cd ..

# Copy builds
rm -rf ./dist/packages
mkdir -p ./dist/packages
cp -r ./src/presets/ec/dist ./dist/packages/ec
cp -r ./src/presets/reset/dist/styles ./dist/packages/ec
cp -r ./src/presets/rtl/dist/styles ./dist/packages/ec
cp -r ./src/presets/eu/dist ./dist/packages/eu
cp -r ./src/presets/reset/dist/styles ./dist/packages/eu
cp -r ./src/presets/rtl/dist/styles ./dist/packages/eu
