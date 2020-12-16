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
cp -r ./src/presets/ec-preset-website/dist ./dist/packages/ec-preset-website
cp -r ./src/presets/ec-core/dist ./dist/packages/preset-ec-core
cp -r ./src/presets/eu-core/dist ./dist/packages/preset-eu-core
