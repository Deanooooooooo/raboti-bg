import { readdir, readFile, writeFile } from 'node:fs/promises';
import { join } from 'node:path';

const root = new URL('../dist/', import.meta.url).pathname;
const base = process.env.DEPLOY_BASE ?? '/raboti-bg';

async function walk(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  for (const entry of entries) {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) {
      await walk(path);
      continue;
    }
    if (!entry.name.endsWith('.html')) continue;

    const html = await readFile(path, 'utf8');
    const prepared = html
      .replace('<head>', '<head><meta name="robots" content="noindex,nofollow,noarchive">')
      // Astro's base handles generated assets, including URLs inside CSS.
      // These rewrites cover only root-absolute links written directly in templates.
      .replace(new RegExp(`href="/(?!${base.slice(1)}/)`, 'g'), `href="${base}/`)
      .replace(new RegExp(`src="/(?!${base.slice(1)}/)`, 'g'), `src="${base}/`)
      .replace(new RegExp(`action="/(?!${base.slice(1)}/)`, 'g'), `action="${base}/`);
    await writeFile(path, prepared);
  }
}

await walk(root);
