#!/bin/sh

# Exit the script on any command with non 0 return code
set -e

# Copy storybook
rm -rf ./public/playground
mkdir -p ./public/playground
cp -r ../../dist/playground/ec ./public/playground

# Make assets available for storybook
cp -r ../../dist/packages/ec-preset-website/. ./public/playground/ec

cp -r ../../dist/packages/preset-ec-core/. ./public/playground/ec
cp -r ../../dist/packages/preset-eu-core/. ./public/playground/ec
