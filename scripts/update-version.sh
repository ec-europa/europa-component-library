#!/bin/sh

# Heavily inspired by https://github.com/facebookincubator/create-react-app/blob/master/tasks/release.sh

# Exit the script on any command with non 0 return code
set -e

# Echo every command being executed
set -x

# Go to project root
cd "$(dirname "$0")"
cd ..

# Update version
./node_modules/.bin/lerna version --no-push --exact --no-git-tag-version "$@"
