#!/bin/sh

# Exit the script on any command with non 0 return code
set -e

# Echo every command being executed
set -x

# Go to project root
cd "$(dirname "$0")"
cd ..

# Build storybook
yarn --cwd "./src/implementations/twig/storybook/ec" build
yarn --cwd "./src/implementations/twig/storybook/eu" build

# Copy builds
rm -rf ./dist/playground
mkdir -p ./dist/playground
cp -r ./src/implementations/twig/storybook/ec/build ./dist/playground/ec
cp -r ./src/implementations/twig/storybook/eu/build ./dist/playground/eu
