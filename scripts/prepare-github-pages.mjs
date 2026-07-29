import { readdir, readFile, writeFile } from 'node:fs/promises';
import { join } from 'node:path';

const root = new URL('../dist/', import.meta.url).pathname;
const base = '/raboti-bg';

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
      .replaceAll('href="/', `href="${base}/`)
      .replaceAll('src="/', `src="${base}/`)
      .replaceAll('action="/', `action="${base}/`);
    await writeFile(path, prepared);
  }
}

await walk(root);
