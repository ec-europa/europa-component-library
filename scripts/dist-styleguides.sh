#!/bin/sh

# Exit the script on any command with non 0 return code
set -e

# Echo every command being executed
set -x

# Go to project root
cd "$(dirname "$0")"
cd ..

# Build styleguides
yarn lerna --parallel --scope "@ecl/*-styleguide" run dist

# Copy builds
rm -rf ./dist/website
cp -r ./website dist
cp -r ./tools/ec-styleguide/dist ./dist/website/ec
cp -r ./tools/eu-styleguide/dist ./dist/website/eu
