#!/bin/bash
set -e

echo "Building Shunya.exe..."
pnpm install
pnpm run build

echo "Build complete!"
echo "Frontend output: apps/frontend/dist/"
echo "Backend output: apps/backend/dist/"
echo ""
echo "To deploy to GitHub Pages:"
echo "1. Go to https://github.com/sabhyamtrivedycoder/shunya-exe/settings/pages"
echo "2. Select 'Deploy from a branch'"
echo "3. Choose 'main' branch and '/docs' folder"
echo "4. Your site will be live at: https://sabhyamtrivedycoder.github.io/shunya-exe/"
