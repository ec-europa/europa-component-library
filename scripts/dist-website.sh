#!/bin/sh

# Exit the script on any command with non 0 return code
set -e

# Echo every command being executed
set -x

# Go to project root
cd "$(dirname "$0")"
cd ..

# Build website
cd ./website && yarn build && cd ..

# Copy builds
rm -rf ./dist/website
cp -r ./website/build dist/website
