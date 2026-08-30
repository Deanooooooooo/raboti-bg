import type { APIRoute } from "astro";
import { getCollection } from "astro:content";
import { site } from "../data/site";
export const GET: APIRoute = async () => {
  const agents = (await getCollection("agents")).sort((a,b)=>a.data.order-b.data.order);
  const posts = (await getCollection("blog")).sort((a,b)=>b.data.publishedAt.valueOf()-a.data.publishedAt.valueOf());
  const body = `# Работи\n\nРаботи е услуга на ${site.legalName}, София, за AI служители под наем за българския бизнес.\n\n## AI служители\n\n${agents.map((agent)=>`- [${agent.data.name}](${site.url}/sluzhiteli/${agent.data.slug}/): ${agent.data.role}. ${agent.data.summary} Цена: ${agent.data.priceLabel}. Статус: ${agent.data.status === "live" ? "предлага се" : "скоро"}.`).join("\n")}\n\n## Практични ръководства\n\n${posts.map((post)=>`- [${post.data.title}](${site.url}/blog/${post.id}/): ${post.data.description}`).join("\n")}\n\n## Основни страници\n\n- [Всички AI служители](${site.url}/sluzhiteli/)\n- [Цени](${site.url}/ceni/)\n- [Демо](${site.url}/demo/)\n- [За нас](${site.url}/za-nas/)\n- [Контакти](${site.url}/kontakti/)\n\nТелефон: ${site.salesPhone}. Юридически оператор: ${site.legalName}, ЕИК ${site.companyId}.\n`;
  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
};
