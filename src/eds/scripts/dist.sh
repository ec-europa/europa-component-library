#!/bin/sh

# Builds every EDS deliverable into src/eds/dist, kept apart from ECL's
# root dist/ so EDS can be released on its own.

# Exit the script on any command with non 0 return code
set -e

# Echo every command being executed
set -x

# Go to src/eds
cd "$(dirname "$0")"
cd ..

pnpm --filter "@ecl/preset-eds" dist
pnpm --filter "@ecl/eds-storybook" build

rm -rf ./dist
mkdir -p ./dist
cp -r ./preset/dist ./dist/preset
cp -r ./playground/build ./dist/playground
