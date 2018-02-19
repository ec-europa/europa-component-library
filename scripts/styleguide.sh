#!/bin/sh

yarn clean

cd packages/styleguides/ec
npx fractal build && npx cross-env NODE_ENV=production npm run build

cd ../eu
npx fractal build && npx cross-env NODE_ENV=production npm run build

# go back to root
cd ../../../
cp static/landing_page/index.html dist/
