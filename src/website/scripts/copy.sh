#!/bin/sh

# Exit the script on any command with non 0 return code
set -e

# Copy storybook
rm -rf ./public/playground
mkdir -p ./public/playground
cp -r ../../dist/playground/ec ./public/playground/ec
cp -r ../../dist/playground/eu ./public/playground/eu
cp -r ../../dist/playground/eds ./public/playground/eds

# Make assets available for storybook
cp -r ../../dist/packages/ec/. ./public/playground/ec
cp -r ../../dist/packages/eu/. ./public/playground/eu
cp -a ../../src/playground/ec/public/* ./public/playground/ec
cp -a ../../src/playground/eu/public/* ./public/playground/eu
# eds' own storybook build is already self-contained (its
# .storybook/main.js always bundles the preset's compiled CSS/fonts as a
# staticDir, unlike ec/eu which rely on the dist/packages/* overlay above)
# - just carry over its own public/ assets (favicon), same as ec/eu.
cp -a ../../src/playground/eds/public/* ./public/playground/eds