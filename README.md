# Работи.bg

Статичен Astro сайт за „Работи“ — AI служители за българския бизнес.

## Локално стартиране

```bash
npm install
npm run dev
```

Пълна проверка:

```bash
npm run qa
```

## Съдържание

### AI служители

Всеки служител е Markdown файл в `src/content/agents/`. Схемата е в `src/content.config.ts`.

- `status: live | soon` управлява дали ролята се предлага или събира чакащи.
- `price` е числовата стойност за schema.org.
- `priceLabel` е видимата цена.
- `accent` и `accentSoft` управляват визуалната идентичност на ролята.
- `faqs` се показват на страницата и се използват за FAQPage schema.

За нов служител:

1. Добавете Markdown файл в `src/content/agents/`.
2. Попълнете всички полета по съществуващ пример.
3. Задайте уникални `slug` и `order`.
4. Изпълнете `npm run qa`.

### Цени

Цените имат един източник: файловете в `src/content/agents/`. Не пишете числови цени директно в компоненти или страници. Текстове, които споменават цена в статия, трябва да се проверят при промяна; QA не може автоматично да пренапише редакционен текст.

> Преди публично пускане потвърдете дали Вдига е 97 BGN или 97 EUR. Brief-ът задава BGN, а съществуващият vdiga.bg source в момента съдържа EUR.

### Блог

Статиите са в `src/content/blog/`. Динамичният route генерира видими дати, Article schema, автор, съдържание и вътрешни връзки.

## Форми

Статичният сайт изпраща към `PUBLIC_FORM_ENDPOINT` (по подразбиране `/api/contact`). Cloudflare Pages Function е в `functions/api/contact.ts`.

Задължителна production променлива:

```text
LEADS_WEBHOOK_URL=https://...
```

Endpoint-ът валидира задължителните полета и honeypot-а, след което препраща JSON към зададения webhook. Без `LEADS_WEBHOOK_URL` връща 503 и формата показва телефон за директен контакт.

## Настройки

В `.env`:

- `PUBLIC_FORM_ENDPOINT` — custom serverless endpoint.
- `PUBLIC_PLAUSIBLE_DOMAIN` — включва Plausible без cookies.
- `PUBLIC_META_PIXEL_ID` — запазен toggle; Pixel не се зарежда в текущата версия.
- `LEADS_WEBHOOK_URL` — server-side Cloudflare secret.

Meta Pixel е изключен по подразбиране. Не го включвайте без consent механизъм.

## SEO и GEO

- статичен HTML;
- sitemap и robots.txt;
- Organization, Product, Offer, FAQPage, BreadcrumbList и Article schema;
- `/llms.txt`;
- build-time SVG Open Graph изображения;
- един `<h1>` на страница;
- AI crawlers са изрично разрешени.

## Deployment

Препоръчан Cloudflare Pages setup:

- Build command: `npm run build`
- Output directory: `dist`
- Node.js: текущ LTS
- Environment secret: `LEADS_WEBHOOK_URL`

След свързване на `raboti.bg`, задайте canonical origin на `https://raboti.bg` и пренасочете HTTP/www към него с един 301.
