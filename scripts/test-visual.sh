#!/bin/sh

# Exit the script on any command with non 0 return code
set -e

# Go to project root
cd "$(dirname "$0")"
cd ..

export ECL_SYSTEM=ec

TEST_BROWSER=chrome npx jest test/visual.test.js
TEST_BROWSER=ie npx jest test/visual.test.js
TEST_BROWSER=safari npx jest test/visual.test.js
TEST_BROWSER=firefox npx jest test/visual.test.js
