import type { APIRoute, GetStaticPaths } from "astro";
import { getCollection } from "astro:content";

const staticCards: Record<string, { title: string; line: string }> = {
  home: { title: "Вдига. Помага. Пише. Работи.", line: "AI служители за българския бизнес" },
  sluzhiteli: { title: "AI служители с ясна работа.", line: "Виж свободните позиции в Работи" },
  ceni: { title: "Плащаш за роля.", line: "Ясни месечни цени без мъгла" },
  demo: { title: "Чуй как работи.", line: "Демо на AI рецепционист на български" },
  kontakti: { title: "Кое остава несвършено?", line: "Нека го поеме AI служител" },
  "za-nas": { title: "Хората зад Работи.", line: "Реален български екип и компания" },
  blog: { title: "Без мъгла около AI.", line: "Практични ръководства за бизнеса" },
};
const escape = (value: string) => value.replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&apos;" }[char] || char));

export const getStaticPaths: GetStaticPaths = async () => {
  const agents = await getCollection("agents");
  const posts = await getCollection("blog");
  return [
    ...Object.entries(staticCards).map(([slug, card]) => ({ params: { slug }, props: card })),
    ...agents.map((agent) => ({ params: { slug: agent.data.slug }, props: { title: `${agent.data.name}. ${agent.data.role}.`, line: agent.data.priceLabel } })),
    ...posts.map((post) => ({ params: { slug: post.id }, props: { title: post.data.title, line: "Практично ръководство от Работи" } })),
  ];
};
export const GET: APIRoute = ({ props }) => {
  const { title, line } = props as { title: string; line: string };
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630"><rect width="1200" height="630" fill="#f5f7f4"/><circle cx="1050" cy="110" r="170" fill="#dff5ee"/><circle cx="1100" cy="560" r="230" fill="#ece8ff"/><rect x="70" y="70" width="1060" height="490" rx="42" fill="#fff" stroke="#dce2dc"/><circle cx="124" cy="124" r="14" fill="#0b7665"/><text x="155" y="137" font-family="Arial,sans-serif" font-size="42" font-weight="800" fill="#14251f">Работи</text><foreignObject x="104" y="220" width="900" height="180"><div xmlns="http://www.w3.org/1999/xhtml" style="font:800 66px/1.08 Arial,sans-serif;color:#14251f">${escape(title)}</div></foreignObject><text x="108" y="480" font-family="Arial,sans-serif" font-size="28" font-weight="600" fill="#59665f">${escape(line)}</text></svg>`;
  return new Response(svg, { headers: { "Content-Type": "image/svg+xml", "Cache-Control": "public,max-age=31536000,immutable" } });
};
