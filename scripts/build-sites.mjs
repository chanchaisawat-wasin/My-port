import { spawnSync } from "node:child_process";
import {
  mkdir,
  readdir,
  rename,
  rm,
  writeFile,
} from "node:fs/promises";
import { resolve } from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = resolve(fileURLToPath(new URL("..", import.meta.url)));
const viteBin = resolve(projectRoot, "node_modules", "vite", "bin", "vite.js");
const distDir = resolve(projectRoot, "dist");
const clientDir = resolve(distDir, "client");
const serverDir = resolve(distDir, "server");

const build = spawnSync(process.execPath, [viteBin, "build"], {
  cwd: projectRoot,
  env: { ...process.env, SITES_BUILD: "1" },
  stdio: "inherit",
});

if (build.status !== 0) {
  process.exit(build.status ?? 1);
}

await rm(clientDir, { recursive: true, force: true });
await rm(serverDir, { recursive: true, force: true });
await mkdir(clientDir, { recursive: true });

for (const entry of await readdir(distDir)) {
  if (entry === "client" || entry === "server") continue;
  await rename(resolve(distDir, entry), resolve(clientDir, entry));
}

await mkdir(serverDir, { recursive: true });
await writeFile(
  resolve(serverDir, "index.js"),
  `const worker = {
  async fetch(request, env) {
    const response = await env.ASSETS.fetch(request);
    if (response.status !== 404 || request.method !== "GET") return response;

    const url = new URL(request.url);
    if (/\\.[a-z0-9]+$/i.test(url.pathname)) return response;

    return env.ASSETS.fetch(new Request(new URL("/index.html", request.url), request));
  },
};

export default worker;
`,
  "utf8",
);
