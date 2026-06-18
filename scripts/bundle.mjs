// Produce a fully self-contained, openable HTML file for browser review.
// Inlines the self-hosted fonts (fonts/fonts.css + woff2) as base64 data URIs so
// the single output file renders correctly anywhere, with no adjacent assets.
//
//   node scripts/bundle.mjs [src.html] [out.html]
//
// Defaults: src=live-website.html  out=live-website-preview.html
import { readFileSync, writeFileSync } from 'node:fs';
import { resolve, dirname } from 'node:path';

const src = resolve(process.argv[2] || 'live-website.html');
const out = resolve(process.argv[3] || 'live-website-preview.html');

let html = readFileSync(src, 'utf8');
const fontsCssPath = resolve('fonts/fonts.css');
let css = readFileSync(fontsCssPath, 'utf8');

// Inline each woff2 referenced in fonts.css as a data URI.
css = css.replace(/url\(['"]?([^'")]+\.woff2)['"]?\)/g, (_m, file) => {
  const p = resolve(dirname(fontsCssPath), file);
  const b64 = readFileSync(p).toString('base64');
  return `url(data:font/woff2;base64,${b64}) format('woff2')`;
});

// Drop the font preload links (assets are now inlined) and replace the stylesheet
// link with an inline <style> block.
html = html.replace(/^\s*<link rel="preload"[^>]*\.woff2[^>]*>\s*$/gm, '');
html = html.replace(
  /<link rel="stylesheet" href="fonts\/fonts\.css"\s*\/?>/,
  `<style>\n${css}\n</style>`,
);

writeFileSync(out, html);
console.log(`wrote ${out} (${(Buffer.byteLength(html) / 1024).toFixed(0)} KB, fonts inlined)`);
