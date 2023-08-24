#!/bin/bash

# Go to project root
cd "$(dirname "$0")"
cd ..

# Find all package.json files in the root directory and its subdirectories.
public_packages=$(find . -type f -name "package.json" -not -path "*/node_modules/*" -exec grep -L '"private": true' {} + | xargs -I {} grep -o '"name": "[^"]*' {} | cut -d'"' -f4)
# Get the version
lerna_version=$(grep -o '"version": "[^"]*' "lerna.json" | cut -d'"' -f4);

# Output the list of public packages and save it to a file in the root
output_file="ECL-npm-packages"
echo "Public packages:" > "$output_file"
for package in $public_packages; do
  echo "$package@$lerna_version" >> "$output_file"
done

echo "List of public packages saved to $output_file"
