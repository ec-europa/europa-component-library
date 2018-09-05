#!/bin/sh

# Exit the script on any command with non 0 return code
set -e

# Copy storybook
rm -rf ./public/storybook
mkdir -p ./public/storybook
cp -r ../../dist/storybook/ec ./public/storybook
cp -r ../../dist/storybook/eu ./public/storybook
