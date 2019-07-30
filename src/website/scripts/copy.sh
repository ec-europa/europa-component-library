#!/bin/sh

# Exit the script on any command with non 0 return code
set -e

# Copy storybook
rm -rf ./public/playground
mkdir -p ./public/playground
cp -r ../../dist/playground/ec ./public/playground
cp -r ../../dist/playground/eu ./public/playground

# Make css available for storybook
cp -r ../../dist/packages/ec-preset-website/styles ./public/playground/ec
cp -r ../../dist/packages/ec-preset-legacy-website/styles ./public/playground/ec
cp -r ../../dist/packages/eu-preset-website/styles ./public/playground/eu
cp -r ../../dist/packages/eu-preset-legacy-website/styles ./public/playground/eu
