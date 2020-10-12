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
cp -r ./src/implementations/vanilla/packages/preset-editor/dist ./dist/packages/preset-editor
cp -r ./src/implementations/vanilla/packages/preset-full/dist ./dist/packages/preset-full
cp -r ./src/implementations/vanilla/packages/preset-website/dist ./dist/packages/preset-website
