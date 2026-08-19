import test from "node:test";
import assert from "node:assert/strict";
import { createResponse } from "../src/server/app.js";
import { API_HEALTH_ROUTE } from "../src/shared/config.js";

test("health endpoint returns ok response", async () => {
  const response = await createResponse(API_HEALTH_ROUTE);
  assert.equal(response.statusCode, 200);
  assert.equal(response.contentType, "application/json; charset=utf-8");
  assert.deepEqual(JSON.parse(response.body), { status: "ok" });
});

test("unknown route returns 404", async () => {
  const response = await createResponse("/missing");
  assert.equal(response.statusCode, 404);
});
