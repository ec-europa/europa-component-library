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
rm -rf ./dist/styleguide
mkdir ./dist/styleguide
cp -r ./tools/ec-styleguide/dist ./dist/styleguide/ec
cp -r ./tools/eu-styleguide/dist ./dist/styleguide/eu

# Build website
yarn lerna --scope "@ecl/website" run build

# Copy builds
rm -rf ./dist/website
cp -r ./website/build dist/website
