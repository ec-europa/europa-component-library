#!/bin/sh

# Heavily inspired by https://github.com/facebookincubator/create-react-app/blob/master/tasks/release.sh

# Exit the script on any command with non 0 return code
set -e

# Echo every command being executed
set -x

# Go to project root
cd "$(dirname "$0")"
cd ..

# Make sure git is clean
if [ -n "$(git status --porcelain)" ]; then
  echo "Your git status is not clean. Aborting.";
  exit 1;
fi

# Publish updated packages
./node_modules/.bin/lerna publish from-package "$@"
