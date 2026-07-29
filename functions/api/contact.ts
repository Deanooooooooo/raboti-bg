interface Env {
  LEADS_WEBHOOK_URL?: string;
}

type PagesFunction<TEnv> = (context: {
  request: Request;
  env: TEnv;
}) => Response | Promise<Response>;

const json = (data: unknown, status = 200) => new Response(JSON.stringify(data), {
  status,
  headers: { "Content-Type": "application/json; charset=utf-8", "Cache-Control": "no-store" },
});

export const onRequestPost: PagesFunction<Env> = async ({ request, env }) => {
  if (!request.headers.get("content-type")?.includes("application/json")) return json({ error: "Unsupported content type" }, 415);
  let body: Record<string, unknown>;
  try { body = await request.json(); } catch { return json({ error: "Invalid JSON" }, 400); }
  if (String(body.website || "").trim()) return json({ ok: true });
  const intent = String(body.intent || "");
  if (!["hire", "waitlist"].includes(intent)) return json({ error: "Invalid intent" }, 400);
  if (intent === "hire" && (!String(body.name || "").trim() || !String(body.phone || "").trim() || !String(body.businessType || "").trim() || body.consent !== "yes")) {
    return json({ error: "Missing required fields" }, 400);
  }
  if (intent === "waitlist" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(body.email || ""))) return json({ error: "Invalid email" }, 400);
  if (!env.LEADS_WEBHOOK_URL) return json({ error: "Lead destination is not configured" }, 503);
  const upstream = await fetch(env.LEADS_WEBHOOK_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ ...body, receivedAt: new Date().toISOString(), userAgent: request.headers.get("user-agent") }),
  });
  if (!upstream.ok) return json({ error: "Lead destination failed" }, 502);
  return json({ ok: true });
};
