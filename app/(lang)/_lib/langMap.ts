// app/(lang)/_lib/langMap.ts

type Lang = "id" | "en";

function normalizePath(pathname: string) {
  return pathname.split("?")[0].split("#")[0];
}

// Canon route pairs
const PAIRS: Array<[string, string]> = [
  ["/id", "/en"],

  ["/id/memahami", "/en/introduction"],
  ["/id/kerangka", "/en/framework"],
  ["/id/penerapan", "/en/application"],
  ["/id/akses", "/en/access"],
];

// Optional: legacy routes → map them too (so toggle works even if someone lands there)
const LEGACY: Array<[string, string]> = [
  ["/orientation", "/en/introduction"],
  ["/operator", "/en/framework"],
  ["/allocator", "/en/application"],
  ["/pricing", "/en/access"],
];

// Build lookups both ways
const idToEn = new Map<string, string>();
const enToId = new Map<string, string>();

for (const [id, en] of [...PAIRS, ...LEGACY]) {
  idToEn.set(id, en);
  enToId.set(en, id.startsWith("/id") ? id : "/id"); // legacy maps back to /id by default
}

export function getMirrorPath(pathname: string): string {
  const p = normalizePath(pathname);

  // If exact match exists, return it
  if (p.startsWith("/id")) return idToEn.get(p) ?? "/en";
  if (p.startsWith("/en")) return enToId.get(p) ?? "/id";

  // If user is on a global page (/contact, /terms), keep them there
  // (since those pages are not language-scoped right now)
  return p;
}

export function getLang(pathname: string): Lang {
  const p = normalizePath(pathname);
  if (p.startsWith("/en")) return "en";
  return "id";
}