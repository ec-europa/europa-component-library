#!/bin/sh

cd tools/ec-styleguide
npx fractal build && cross-env NODE_ENV=production npm run build

cd ../eu-styleguide
npx fractal build && cross-env NODE_ENV=production npm run build
