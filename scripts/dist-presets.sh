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
cp -r ./src/systems/ec/implementations/vanilla/packages/ec-preset-editor/dist ./dist/packages/ec-preset-editor
cp -r ./src/systems/ec/implementations/vanilla/packages/ec-preset-full/dist ./dist/packages/ec-preset-full
cp -r ./src/systems/ec/implementations/vanilla/packages/ec-preset-website/dist ./dist/packages/ec-preset-website
cp -r ./src/systems/eu/implementations/vanilla/packages/eu-preset-editor/dist ./dist/packages/eu-preset-editor
cp -r ./src/systems/eu/implementations/vanilla/packages/eu-preset-full/dist ./dist/packages/eu-preset-full
cp -r ./src/systems/eu/implementations/vanilla/packages/eu-preset-website/dist ./dist/packages/eu-preset-website
