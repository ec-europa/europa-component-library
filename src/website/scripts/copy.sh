#!/bin/sh

# Exit the script on any command with non 0 return code
set -e

# Copy storybook
rm -rf ./public/playground
mkdir -p ./public/playground
cp -r ../../dist/playground/ec ./public/playground/ec
cp -r ../../dist/playground/eu ./public/playground/eu

# Make assets available for storybook
cp -r ../../dist/packages/ec-preset-website/. ./public/playground/ec

cp -r ../../dist/packages/ec-core/. ./public/playground/ec
cp -r ../../dist/packages/eu-core/. ./public/playground/eu
