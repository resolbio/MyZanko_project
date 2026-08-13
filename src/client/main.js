const healthEl = document.querySelector("[data-health]");

async function checkHealth() {
  try {
    const response = await fetch("/api/health");
    const payload = await response.json();
    healthEl.textContent = payload.status === "ok" ? "API ready" : "API unavailable";
  } catch {
    healthEl.textContent = "API unavailable";
  }
}

checkHealth();
