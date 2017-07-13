#!/bin/bash

set -ev

if [ "${TEST_SUITE}" = "test:functional" ] && { [ "${TRAVIS_BRANCH}" = "master" ] && [ "${TRAVIS_PULL_REQUEST}" = "false" ] || yarn lerna updated -- --since master ; } ; then
  npm rebuild node-sass;
  npm run dist;
fi
