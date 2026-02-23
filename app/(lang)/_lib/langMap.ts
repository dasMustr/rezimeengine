// app/(lang)/_lib/langMap.ts

type Lang = "id" | "en";

function normalizePath(pathname: string) {
  return pathname.split("?")[0].split("#")[0];
}

// Canon route pairs (ID ↔ EN)
const PAIRS: Array<[string, string]> = [
  ["/", "/en"],

  ["/id", "/en"],
  ["/id/memahami", "/en/introduction"],
  ["/id/kerangka", "/en/framework"],
  ["/id/penerapan", "/en/application"],
  ["/id/kontak", "/en/contact"],

  // EN back (optional but harmless even though PAIRS are bidirectional via maps)
  // Not needed here since we build both maps below.
];

// Optional: legacy routes → map them too (so toggle works even if someone lands there)
const LEGACY: Array<[string, string]> = [
  ["/orientation", "/en/introduction"],
  ["/operator", "/en/framework"],
  ["/allocator", "/en/application"],
  ["/contact", "/en/contact"],

  // If old access/pricing still exists temporarily:
  // ["/pricing", "/en/contact"],
];

// Build lookups both ways
const idToEn = new Map<string, string>();
const enToId = new Map<string, string>();

for (const [id, en] of [...PAIRS, ...LEGACY]) {
  idToEn.set(id, en);

  // Map EN back to the *proper* ID route.
  // If the ID entry isn't language-scoped (like "/"), keep it.
  const backToId = id;
  enToId.set(en, backToId);
}

export function getMirrorPath(pathname: string): string {
  const p = normalizePath(pathname);

  // ID canon root
  if (p === "/") return "/en";

  // ID scoped
  if (p.startsWith("/id")) return idToEn.get(p) ?? "/en";

  // EN scoped
  if (p === "/en") return "/";
  if (p.startsWith("/en")) return enToId.get(p) ?? "/";

  // Non-language routes: keep as-is
  return p;
}

export function getLang(pathname: string): Lang {
  const p = normalizePath(pathname);
  if (p.startsWith("/en")) return "en";
  return "id";
}