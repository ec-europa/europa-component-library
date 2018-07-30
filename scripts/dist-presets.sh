#!/bin/sh

# Exit the script on any command with non 0 return code
set -e

# Echo every command being executed
set -x

# Go to project root
cd "$(dirname "$0")"
cd ..

# Build packages
yarn lerna --concurrency 3 --scope "@ecl/*-preset-*" run dist

# Copy builds
rm -rf ./dist/packages
mkdir -p ./dist/packages
cp -r ./src/systems/ec/implementations/vanilla/packages/ec-preset-base/dist ./dist/packages/ec-preset-base
cp -r ./src/systems/ec/implementations/vanilla/packages/ec-preset-corporate/dist ./dist/packages/ec-preset-corporate
cp -r ./src/systems/ec/implementations/vanilla/packages/ec-preset-full/dist ./dist/packages/ec-preset-full
cp -r ./src/systems/ec/implementations/vanilla/packages/ec-preset-website/dist ./dist/packages/ec-preset-website
cp -r ./src/systems/ec/implementations/vanilla/packages/ec-preset-webtools/dist ./dist/packages/ec-preset-webtools
cp -r ./src/systems/eu/implementations/vanilla/packages/eu-preset-base/dist ./dist/packages/eu-preset-base
cp -r ./src/systems/eu/implementations/vanilla/packages/eu-preset-corporate/dist ./dist/packages/eu-preset-corporate
cp -r ./src/systems/eu/implementations/vanilla/packages/eu-preset-full/dist ./dist/packages/eu-preset-full
cp -r ./src/systems/eu/implementations/vanilla/packages/eu-preset-website/dist ./dist/packages/eu-preset-website
cp -r ./src/systems/eu/implementations/vanilla/packages/eu-preset-webtools/dist ./dist/packages/eu-preset-webtools
