#!/bin/sh

# Exit the script on any command with non 0 return code
set -e

# Echo every command being executed
set -x

# Go to project root
cd "$(dirname "$0")"
cd ..

# Build storybook
yarn --cwd "./src/playground/ec" build
yarn --cwd "./src/playground/eu" build

# Copy builds
rm -rf ./dist/playground
mkdir -p ./dist/playground
cp -r ./src/playground/ec/build ./dist/playground/ec
cp -r ./src/playground/eu/build ./dist/playground/eu
