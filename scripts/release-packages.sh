#!/bin/sh

# Exit the script on any command with non 0 return code
set -e

# Echo every command being executed
set -x

# Go to project root
cd "$(dirname "$0")"
cd ..

echo 'Deleting older releases ...'

rm -rf ./dist/releases

echo 'Creating new releases ...'
mkdir ./dist/releases
mkdir ./dist/releases/ec
mkdir ./dist/releases/eu

# ecl/ec tar.gz
cp -r ./dist/flavors/ec/styles ./dist/flavors/ec/scripts ./dist/flavors/ec/fonts ./dist/flavors/ec/images ./dist/releases/ec
cp -r ./dist/flavors/eu/styles ./dist/flavors/eu/scripts ./dist/releases/eu

echo 'Preparing ECL releases ...'
cd ./dist/releases/ec
tar -zcvf ../framework.tar.gz *
zip -r ../framework.zip .

echo 'Preparing EU flavor of ECL'
cd ../eu
tar -zcvf ../framework_eu.tar.gz *
zip -r ../framework_eu.zip .

echo 'Removing temporary assets ...'
cd ..
rm -rf ec eu
