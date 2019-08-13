#!/bin/sh

# Exit the script on any command with non 0 return code
set -e

# Echo every command being executed
set -x

# Go to project root
cd "$(dirname "$0")"
cd ..

# Build storybook
yarn --cwd "./src/systems/ec/implementations/react/storybook" build
yarn --cwd "./src/systems/eu/implementations/react/storybook" build

# Copy builds
rm -rf ./dist/playground
mkdir -p ./dist/playground
cp -r ./src/systems/ec/implementations/react/storybook/build ./dist/playground/ec
cp -r ./src/systems/eu/implementations/react/storybook/build ./dist/playground/eu
