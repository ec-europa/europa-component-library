#!/bin/sh

# Exit the script on any command with non 0 return code
set -e

# Copy storybook
rm -rf ./public/playground
mkdir -p ./public/playground
cp -r ../../dist/playground/ec ./public/playground

# Make assets available for storybook
cp -r ../../dist/packages/ec-preset-website/. ./public/playground/ec
cp -r ../../dist/packages/ec-preset-editor/. ./public/playground/ec
