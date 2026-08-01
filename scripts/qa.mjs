import { readFile, readdir, stat } from "node:fs/promises";
import { join } from "node:path";

const root = new URL("../dist/", import.meta.url);
const failures = [];
const htmlFiles = [];

async function walk(path) {
  for (const entry of await readdir(path)) {
    const full = join(path, entry);
    const info = await stat(full);
    if (info.isDirectory()) await walk(full);
    else if (entry.endsWith(".html")) htmlFiles.push(full);
  }
}

await walk(root.pathname);
for (const file of htmlFiles) {
  const html = await readFile(file, "utf8");
  const h1s = (html.match(/<h1(?:\s|>)/g) || []).length;
  if (h1s !== 1) failures.push(`${file}: expected 1 h1, found ${h1s}`);
  if (!html.includes('<html lang="bg">')) failures.push(`${file}: missing lang=bg`);
  if (!html.includes('rel="canonical"')) failures.push(`${file}: missing canonical`);
  if (!html.includes('application/ld+json')) failures.push(`${file}: missing JSON-LD`);
}

const homepage = await readFile(join(root.pathname, "index.html"), "utf8");
if (!homepage.includes("0899 917 920")) failures.push("Homepage: phone is not visible in HTML");
if (!homepage.includes("Наеми") || !homepage.includes("AI служител")) failures.push("Homepage: primary workforce headline missing");
for (const agent of ["Вдига", "Помага", "Пише", "Смята", "Продава"]) {
  if (!homepage.includes(agent)) failures.push(`Homepage: ${agent} is missing from the roster`);
}

if (failures.length) {
  console.error(failures.join("\n"));
  process.exit(1);
}
console.log(`QA passed for ${htmlFiles.length} HTML pages.`);
