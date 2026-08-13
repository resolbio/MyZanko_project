import http from "node:http";
import { createResponse } from "./app.js";

const PORT = Number(process.env.PORT || 3000);

const server = http.createServer(async (req, res) => {
  const url = new URL(req.url || "/", "http://localhost");

  try {
    const response = await createResponse(url.pathname);
    res.writeHead(response.statusCode, { "Content-Type": response.contentType });
    res.end(response.body);
  } catch {
    res.writeHead(500, { "Content-Type": "application/json; charset=utf-8" });
    res.end(JSON.stringify({ error: "Internal Server Error" }));
  }
});

server.listen(PORT, () => {
  console.log(`MyZanko server running on http://localhost:${PORT}`);
});
