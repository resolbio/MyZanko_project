import { cp, mkdir, rm } from "node:fs/promises";

const distDir = new URL("../dist", import.meta.url);

await rm(distDir, { recursive: true, force: true });
await mkdir(distDir, { recursive: true });
await cp(new URL("../public", import.meta.url), new URL("../dist/public", import.meta.url), { recursive: true });
await cp(new URL("../src", import.meta.url), new URL("../dist/src", import.meta.url), { recursive: true });

console.log("Build output generated in dist/");
