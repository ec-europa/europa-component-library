#!/bin/sh

# Exit the script on any command with non 0 return code
set -e

# Echo every command being executed
set -x

# Go to project root
cd "$(dirname "$0")"
cd ..

# Build storybook
pnpm --filter "@ecl/twig-ec-storybook" build
pnpm --filter "@ecl/twig-eu-storybook" build
# EP Storybook, for PR previews only
if [ "$ECL_EP_PREVIEW" = "true" ]; then
  pnpm --filter "@ecl/twig-ec-storybook" build:ep
fi

# Copy builds
rm -rf ./dist/playground
mkdir -p ./dist/playground
cp -r ./src/playground/ec/build ./dist/playground/ec
cp -r ./src/playground/eu/build ./dist/playground/eu
if [ "$ECL_EP_PREVIEW" = "true" ]; then
  cp -r ./src/playground/ec/build-ep ./dist/playground/ep
fi
