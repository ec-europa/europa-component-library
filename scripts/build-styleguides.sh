#!/bin/sh

# Heavily inspired by https://github.com/facebookincubator/create-react-app/blob/master/tasks/release.sh

# Exit the script on any command with non 0 return code
set -e

# Echo every command being executed
set -x

# Go to project root
cd "$(dirname "$0")"
cd ..

# Build styleguides
yarn lerna --parallel --scope "@ecl/*-styleguide" exec "fractal build && cross-env NODE_ENV=production npm run build"
