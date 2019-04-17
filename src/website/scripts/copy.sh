#!/bin/sh

# Exit the script on any command with non 0 return code
set -e

# Copy storybook
rm -rf ./public/storybook
mkdir -p ./public/storybook
cp -r ../../dist/storybook/ec ./public/storybook
cp -r ../../dist/storybook/eu ./public/storybook

# Make css available for storybook
cp -r ../../dist/packages/ec-preset-website/styles ./public/storybook/ec
cp -r ../../dist/packages/eu-preset-website/styles ./public/storybook/eu
