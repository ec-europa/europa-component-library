#!/bin/sh

# Heavily inspired by https://github.com/facebookincubator/create-react-app/blob/master/tasks/release.sh

# Exit the script on any command with non 0 return code
set -e

# Echo every command being executed
set -x

# Go to project root
cd "$(dirname "$0")"
cd ..

# Build packages
yarn lerna --parallel --scope "@ecl/*-preset-*" run build

# Copy output to dist
rm -rf ./dist/packages
mkdir ./dist/packages
cp -r ./src/systems/ec/ec-preset/ec-preset-corporate/dist ./dist/packages/ec-preset-corporate
cp -r ./src/systems/ec/ec-preset/ec-preset-full/dist ./dist/packages/ec-preset-full
cp -r ./src/systems/eu/eu-preset/eu-preset-corporate/dist ./dist/packages/eu-preset-corporate
cp -r ./src/systems/eu/eu-preset/eu-preset-full/dist ./dist/packages/eu-preset-full
