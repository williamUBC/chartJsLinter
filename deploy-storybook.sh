#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build-storybook

# navigate into the build output directory
cd storybook-static

now -n chartjs-runtime-vis-linter-demo  --prod