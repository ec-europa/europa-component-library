#!/bin/sh

# Exit the script on any command with non 0 return code
set -e

# Echo every command being executed
set -x

# Go to project root
cd "$(dirname "$0")"
cd ..

# Build styleguides
yarn --cwd "./src/systems/ec/implementations/react/storybook" build

# Copy builds
rm -rf ./dist/storybook
mkdir -p ./dist/storybook
cp -r ./src/systems/ec/implementations/react/storybook/build ./dist/storybook/ec
