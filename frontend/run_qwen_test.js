const API_KEY = "app-sk-eyJhZGRyZXNzIjoiMHg0NmRENDM3RjhhNUMxMTg1ZGQ4YzREMkRjNWUzMTU1ZjQ3MTJlMzhjIiwicHJvdmlkZXIiOiIweGE0OGYwMTI4NzIzMzUwOUZENjk0YTIyQmY4NDAyMjUwNjJFNjc4MzYiLCJ0aW1lc3RhbXAiOjE3NzQ5OTQ1NDgyMzEsImV4cGlyZXNBdCI6MCwibm9uY2UiOiIxNzc0OTk0NTQ4MjMxLTA3eDQzNjR0OW4yZjAwMDAwMCIsImdlbmVyYXRpb24iOjAsInRva2VuSWQiOjB9fDB4MjkxYzgyYmUwZDAxN2E5YjllMDU1ODE0YWY2MTRlZWYxNTRjYTcyMDkyOWE0MmJhYTE0ZmRlOGY4MzMzOTg3YjA2ZjA5MjliNGU4YjRlMjVhYjFiNDc0YTM5MDI3YmIxYzYyNDA5ZGZjOTFkYmE0OWZmNmZhNDgzNTYzOTA4YjAxYg==";
const BASE_URL = "https://compute-network-6.integratenetwork.work/v1/proxy/chat/completions";

async function main() {
  const res = await fetch(BASE_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${API_KEY}`
    },
    body: JSON.stringify({
      model: "qwen/qwen-2.5-7b-instruct",
      messages: [{ role: "user", content: "hello" }],
      temperature: 0.7,
      max_tokens: 100
    })
  });
  const data = await res.json();
  console.log(data);
}
main();
