const fs = require('fs');

const API_KEY = "app-sk-eyJhZGRyZXNzIjoiMHg0NmRENDM3RjhhNUMxMTg1ZGQ4YzREMkRjNWUzMTU1ZjQ3MTJlMzhjIiwicHJvdmlkZXIiOiIweGE0OGYwMTI4NzIzMzUwOUZENjk0YTIyQmY4NDAyMjUwNjJFNjc4MzYiLCJ0aW1lc3RhbXAiOjE3NzQ5OTQ1NDgyMzEsImV4cGlyZXNBdCI6MCwibm9uY2UiOiIxNzc0OTk0NTQ4MjMxLTA3eDQzNjR0OW4yZjAwMDAwMCIsImdlbmVyYXRpb24iOjAsInRva2VuSWQiOjB9fDB4MjkxYzgyYmUwZDAxN2E5YjllMDU1ODE0YWY2MTRlZWYxNTRjYTcyMDkyOWE0MmJhYTE0ZmRlOGY4MzMzOTg3YjA2ZjA5MjliNGU4YjRlMjVhYjFiNDc0YTM5MDI3YmIxYzYyNDA5ZGZjOTFkYmE0OWZmNmZhNDgzNTYzOTA4YjAxYg==";
const BASE_URL = "https://compute-network-6.integratenetwork.work/v1/proxy/chat/completions";

async function generatePage(prompt, outputFile) {
  console.log("Generating " + outputFile + " via Qwen-2.5-7B on 0G Compute Network...");
  try {
    const res = await fetch(BASE_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${API_KEY}`
      },
      body: JSON.stringify({
        model: "qwen/qwen-2.5-7b-instruct",
        messages: [
          { role: "system", content: "You are an expert Next.js UI developer. Return ONLY valid TSX code using Tailwind CSS and lucide-react. Do not use markdown formatting blocks like ```tsx, just output the raw code. Do not add any conversational text. Use a high-end dark emerald theme (bg-[#050B08], text-emerald-400). Use 'export default function ComponentName() {}' format." },
          { role: "user", content: prompt }
        ],
        temperature: 0.7,
        max_tokens: 4000
      })
    });
    const data = await res.json();
    let code = data.choices[0].message.content;
    
    // Strip markdown blocks if the model hallucinates them
    code = code.replace(/```(?:tsx|typescript|javascript|js)?\n/g, '').replace(/```/g, '');
    
    fs.writeFileSync(outputFile, code);
    console.log("Successfully wrote to " + outputFile);
  } catch (err) {
    console.error("Error generating " + outputFile, err);
  }
}

async function main() {
  const landingPrompt = `Create a single-file Next.js landing page (export default function LandingPage) for 'ZamaPay'.
It must be a high-end enterprise UI with comprehensive copy.
Include exactly 6 sections:
1. Ultra-modern Hero section with abstract data visualizations.
2. Institutional Comparisons (Why Web3 DAOs need this over Web2).
3. Core Features Bento Grid (FHE Encryption, World ID Sybil Resistance).
4. Decentralized Storage (Protocol Labs & Filecoin integration).
5. Financial Security & Auditability.
6. A premium Footer.
Use lucide-react icons. Lots of padding, large typography, dark theme.`;

  const adminPrompt = `Create a comprehensive DAO Admin Dashboard (export default function AdminDashboard) for 'ZamaPay'.
It must have a complex, elaborate feature set in a single file.
Include:
- A Sidebar navigation menu (Overview, Employees, Treasury, Settings).
- A Top header with wallet connection status.
- A massive Treasury Overview section with 'Encrypted Outflow' visualizers.
- An 'Encrypted Cap Table' showing employees and their 'euint64' FHE salaries.
- A detailed Onboarding Form for new employees.
- A Recent Activity feed.
Use lucide-react icons, dark emerald/obsidian theme. Make the UI look like a Fortune 500 internal tool.`;

  await generatePage(landingPrompt, "src/app/page.tsx");
  await generatePage(adminPrompt, "src/app/admin/page.tsx");
}

main();
