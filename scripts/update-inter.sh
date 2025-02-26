#!/bin/bash

# Define the destination directory
INTER_DIR="$(cd "$(dirname "$0")/../src/presets/ec/fonts" && pwd)"

# Get the latest tag using curl and grep (no jq)
LATEST_TAG=$(curl -s https://api.github.com/repos/rsms/inter/releases/latest | grep -oP '"tag_name": "\K(v[0-9.]+)')

VERSION_WITH_V="${LATEST_TAG}" # Keep the 'v' for URL
VERSION_WITHOUT_V="${LATEST_TAG#v}" # Remove the 'v' for filenames

# Define the URL for downloading the ZIP
URL="https://github.com/rsms/inter/releases/download/$LATEST_TAG/Inter-$VERSION_WITHOUT_V.zip"

# Print the download URL
echo "Downloading from URL: $URL"

# Download the ZIP file
curl -L "$URL" -o Inter.zip

# Create the target directory if it doesn't exist
mkdir -p "$INTER_DIR"

# Unzip the font files into the correct folder
unzip -q Inter.zip -d temp_inter_extract

# Copy only the necessary files to the correct folder
cp "temp_inter_extract/web/InterVariable.woff2" "$INTER_DIR/"
cp "temp_inter_extract/web/InterVariable-Italic.woff2" "$INTER_DIR/"

# Remove the temp extracted files
rm -rf temp_inter_extract

# Remove the ZIP file
rm Inter.zip

echo "Fonts have been successfully updated!"
