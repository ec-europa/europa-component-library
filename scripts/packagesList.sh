#!/bin/bash

# Find all package.json files in the root directory and its subdirectories,
# excluding node_modules and only searching in @ecl/ directories

public_packages=$(find $(dirname "$root_dir") -type f -name "package.json" -not -path "*/node_modules/*" -exec grep -L '"private": true' {} + | xargs -I {} grep -o '"name": "[^"]*' {} | cut -d'"' -f4)
lerna_version=$(grep -o '"version": "[^"]*' "$(dirname "$root_dir")/lerna.json" | cut -d'"' -f4);

# Output the list of public packages and save it to a file in the root
output_file="$(dirname "$root_dir")/ECL-npm-packages"
echo "Public packages:" > "$output_file"
for package in $public_packages; do
  echo "$package@$lerna_version" >> "$output_file"
done

echo "List of public packages saved to $output_file"
