import { API_HEALTH_ROUTE } from "../shared/config.js";

const htmlPath = new URL("../../public/index.html", import.meta.url);
const cssPath = new URL("../../public/styles.css", import.meta.url);
const jsPath = new URL("../client/main.js", import.meta.url);

async function readTextFile(fileUrl) {
  const { readFile } = await import("node:fs/promises");
  return readFile(fileUrl, "utf8");
}

export async function createResponse(pathname) {
  if (pathname === API_HEALTH_ROUTE) {
    return {
      statusCode: 200,
      contentType: "application/json; charset=utf-8",
      body: JSON.stringify({ status: "ok" })
    };
  }

  if (pathname === "/" || pathname === "/index.html") {
    return {
      statusCode: 200,
      contentType: "text/html; charset=utf-8",
      body: await readTextFile(htmlPath)
    };
  }

  if (pathname === "/styles.css") {
    return {
      statusCode: 200,
      contentType: "text/css; charset=utf-8",
      body: await readTextFile(cssPath)
    };
  }

  if (pathname === "/main.js") {
    return {
      statusCode: 200,
      contentType: "application/javascript; charset=utf-8",
      body: await readTextFile(jsPath)
    };
  }

  return {
    statusCode: 404,
    contentType: "application/json; charset=utf-8",
    body: JSON.stringify({ error: "Not Found" })
  };
}
