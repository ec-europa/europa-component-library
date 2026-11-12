#!/bin/sh

# Exit the script on any command with non 0 return code
set -e

# Copy storybook
rm -rf ./public/playground
mkdir -p ./public/playground
cp -r ../../dist/playground/ec ./public/playground/ec
cp -r ../../dist/playground/eu ./public/playground/eu

# Make assets available for storybook
cp -r ../../dist/packages/ec/. ./public/playground/ec
cp -r ../../dist/packages/eu/. ./public/playground/eu
cp -a ../../src/playground/ec/public/* ./public/playground/ec
cp -a ../../src/playground/eu/public/* ./public/playground/eu

# EP Storybook (PR previews only): EC assets, plus the EP preset under ep/
if [ -d ../../dist/playground/ep ]; then
  cp -r ../../dist/playground/ep ./public/playground/ep
  cp -r ../../dist/packages/ec/. ./public/playground/ep
  cp -r ../../dist/packages/ep ./public/playground/ep/ep
  cp -a ../../src/playground/ec/public/* ./public/playground/ep
fi
