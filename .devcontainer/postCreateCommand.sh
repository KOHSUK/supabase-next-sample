#!/bin/sh

set -ex

# Supabase CLI
# Select a package that is suitable for your environment from <https://github.com/supabase/cli/releases>
# The package below is for the Apple Silicon Mac.
curl -LO https://github.com/supabase/cli/releases/download/v0.39.3/supabase_0.39.3_linux_arm64.deb

sudo dpkg -i ./supabase_0.39.3_linux_arm64.deb

rm -rf supabase_0.39.3_linux_arm64.deb

supabase init

# NPM
npm install

echo "Done!"