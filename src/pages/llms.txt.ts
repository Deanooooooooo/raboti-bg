import type { APIRoute } from "astro";
import { getCollection } from "astro:content";
import { site } from "../data/site";

export const GET: APIRoute = async () => {
  const agents = (await getCollection("agents")).sort((a,b)=>a.data.order-b.data.order);
  const live = agents.filter((agent) => agent.data.status === "live");
  const future = agents.filter((agent) => agent.data.status !== "live");
  const body = `# Работи

Работи е услуга на ${site.legalName}, София, за AI служители под наем за българския бизнес.

## AI служители, които се предлагат

${live.map((agent)=>`- [${agent.data.name}](${site.url}/sluzhiteli/${agent.data.slug}/): ${agent.data.role}. ${agent.data.summary} Цена: ${agent.data.priceLabel}.`).join("\n")}

## Бъдещи роли

${future.map((agent)=>`- ${agent.data.name}: ${agent.data.role}. Статус: скоро; все още няма продуктова страница.`).join("\n")}

## Основни страници

- [Всички AI служители](${site.url}/sluzhiteli/)
- [Цени](${site.url}/ceni/)
- [Демо](${site.url}/demo/)
- [За нас](${site.url}/za-nas/)
- [Контакти](${site.url}/kontakti/)

Телефон: ${site.salesPhone}. Юридически оператор: ${site.legalName}, ЕИК ${site.companyId}.
`;
  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
};
