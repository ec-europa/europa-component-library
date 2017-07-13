#!/bin/bash

set -ev

if [ "${TRAVIS_BRANCH}" = "master" ] && [ "${TRAVIS_PULL_REQUEST}" = "false" ] || [ "${TEST_SUITE}" != "test:functional" ] || [ "$(yarn lerna updated -- --since master)" ] ; then
  npm run "$TEST_SUITE";
fi
