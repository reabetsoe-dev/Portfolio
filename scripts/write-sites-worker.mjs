import { mkdir, writeFile } from "node:fs/promises";

const worker = `const cacheControlByExtension = new Map([
  [".css", "public, max-age=31536000, immutable"],
  [".js", "public, max-age=31536000, immutable"],
  [".jpg", "public, max-age=31536000, immutable"],
  [".jpeg", "public, max-age=31536000, immutable"],
  [".png", "public, max-age=31536000, immutable"],
  [".svg", "public, max-age=31536000, immutable"],
  [".webp", "public, max-age=31536000, immutable"],
  [".woff", "public, max-age=31536000, immutable"],
  [".woff2", "public, max-age=31536000, immutable"],
]);

function withCacheHeaders(response, pathname) {
  if (!response.ok) {
    return response;
  }

  const extension = pathname.match(/\\.[a-z0-9]+$/i)?.[0]?.toLowerCase();
  const cacheControl = extension ? cacheControlByExtension.get(extension) : undefined;

  if (!cacheControl) {
    return response;
  }

  const headers = new Headers(response.headers);
  headers.set("Cache-Control", cacheControl);
  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers,
  });
}

export default {
  async fetch(request, env) {
    if (request.method !== "GET" && request.method !== "HEAD") {
      return new Response("Method Not Allowed", {
        status: 405,
        headers: { Allow: "GET, HEAD" },
      });
    }

    const url = new URL(request.url);
    const assetResponse = await env.ASSETS.fetch(request);

    if (assetResponse.status !== 404) {
      return withCacheHeaders(assetResponse, url.pathname);
    }

    const acceptsHtml = request.headers.get("Accept")?.includes("text/html");
    const looksLikeRoute = !url.pathname.split("/").pop()?.includes(".");

    if (acceptsHtml || looksLikeRoute) {
      const fallbackUrl = new URL("/index.html", url);
      return env.ASSETS.fetch(new Request(fallbackUrl, request));
    }

    return assetResponse;
  },
};
`;

await mkdir("dist/server", { recursive: true });
await writeFile("dist/server/index.js", worker);
