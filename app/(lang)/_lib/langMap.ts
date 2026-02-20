export const langMirror: Record<string, string> = {
  "/id/memahami": "/en/introduction",
  "/id/kerangka": "/en/framework",
  "/id/penerapan": "/en/application",
  "/id/akses": "/en/access",

  "/en/introduction": "/id/memahami",
  "/en/framework": "/id/kerangka",
  "/en/application": "/id/penerapan",
  "/en/access": "/id/akses",
};

export function getMirrorPath(pathname: string) {
  return langMirror[pathname] || "/id/memahami";
}