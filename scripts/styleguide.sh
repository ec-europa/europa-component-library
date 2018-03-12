#!/bin/sh

cd packages/styleguides/ec
npx fractal build && cross-env NODE_ENV=production npm run build

cd ../eu
npx fractal build && cross-env NODE_ENV=production npm run build
