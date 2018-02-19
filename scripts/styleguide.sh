#!/bin/sh

yarn clean

cd packages/theme/ecl-fractal-theme
yarn build

cd ../../styleguides/ec
npx fractal build && npx cross-env NODE_ENV=production npm run build

cd ../eu
npx fractal build && npx cross-env NODE_ENV=production npm run build

cd ../docs
npx fractal build && npx cross-env NODE_ENV=production

# go back to root
cd ../../../
cp static/landing_page/index.html dist/
