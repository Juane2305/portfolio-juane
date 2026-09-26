#!/usr/bin/env bash
# Renders the CV HTML sources to PDF with headless Chrome.
# Usage: bash cv/build.sh
set -euo pipefail

cd "$(dirname "$0")"
CHROME="${CHROME:-/Applications/Google Chrome.app/Contents/MacOS/Google Chrome}"
OUT="../public/cv"
mkdir -p "$OUT"

render() {
  "$CHROME" --headless=new --disable-gpu --no-pdf-header-footer \
    --virtual-time-budget=5000 \
    --print-to-pdf="$OUT/$2" "file://$PWD/$1" 2>/dev/null
}

render cv-es.html juane-elizondo-cv-es.pdf
render cv-en.html juane-elizondo-cv-en.pdf
echo "PDFs written to public/cv/"
