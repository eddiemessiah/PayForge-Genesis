# ZamaPay: Confidential Onchain Payroll & AI Treasury

## 1. Idea Validation & Technical Improvements
**The Problem:** Traditional Web3 payroll forces DAOs into a binary choice: use a public multisig and leak everyone's exact salary to the entire world, or use Web2 SaaS and break the trustless nature of the organization.
**The Solution (ZamaPay):** A modular, privacy-first onchain payroll system. It uses **Zama's fhEVM** to completely encrypt salary amounts on-chain so treasuries can automate payroll with zero-knowledge privacy. We then use **Protocol Labs' IPFS and Filecoin** via Storacha to permanently and securely store the encrypted payslips and HR compliance data. Finally, our AI Treasury agent can forecast runway without ever decrypting individual contributor data.
**Technical Upgrades:**
- **fhEVM (Zama):** Utilizing `euint32` and `euint64` primitives for encrypted `salaryAmount`. The smart contract can add/subtract treasury balances and execute payouts *without* ever decrypting the value on-chain.
- **Filecoin/IPFS (Protocol Labs):** Offloading heavy HR metadata (payslips, contractor agreements) from the blockchain. We upload encrypted JSON receipts to IPFS and pin them via Filecoin for permanent, decentralized availability.

## 2. UX Copy & CX Improvements
*Shift from Crypto Jargon to Web2 Fintech Phrasing.*
- **Instead of:** "Sign this transaction to encrypt your `euint32` salary via FHE."
- **Use:** "Securely process payroll. (Powered by Zama Confidential Compute)."
- **Instead of:** "Upload IPFS CID to IPNS via Filecoin."
- **Use:** "Generate Immutable Payslip. (Stored securely on Filecoin)."
- **CX Goal:** The DAO Treasurer should feel like they are using Deel or Gusto, not Remix. The complexity of Fully Homomorphic Encryption should be entirely invisible to the end-user.

## 3. USPs, ICP, and TAM
**Unique Selling Propositions (USPs):**
1. **Absolute Confidentiality:** The only on-chain payroll system where the smart contract executes payments without knowing the plaintext amounts.
2. **Permanent Audit Trails:** Immutable payslips stored on Filecoin guarantee compliance without trusting a central database.
3. **Modular Composability:** Plugs directly into existing DAO multisigs (Safe) or AI Agents.
**Ideal Customer Profile (ICP):**
- Web3 Native Startups (10-50 employees).
- DAOs and decentralized protocols distributing monthly grants/salaries.
- Remote-first engineering teams paying contractors globally in stablecoins (USDC/USDT).
**Total Addressable Market (TAM):**
The global Web3 workforce is estimated at over 300,000 active monthly developers and contributors. The Web3 payroll processing market (currently dominated by hybrid solutions like Request Finance) processes billions annually. By solving the privacy barrier, ZamaPay unlocks the massive segment of teams refusing to use on-chain payroll due to salary exposure.

## 4. User Personas
1. **Alex (DAO Treasurer):** 32, runs a 50-member DeFi DAO. Needs to bulk fund the treasury and auto-distribute salaries monthly, but must keep individual amounts hidden from members to prevent HR drama while maintaining audit-proof records.
2. **Jordan (Remote Web3 Freelancer):** Developer in LatAm. Needs to claim their salary privately in USDC, view only their own payslip, and avoid invasive KYC friction.
3. **Sam (Web3 Startup Founder):** Scaling globally. Needs modular integration (swap payment token or storage provider), governance voting on total payroll budgets, and confidential compliance.

## 5. Sponsor Track Integrations
1. **Zama (Confidential Onchain Finance Bounty):** Directly integrates the fhEVM. The core mechanism of ZamaPay relies on Zama's Fully Homomorphic Encryption to keep the `salaryAmount` variable encrypted on-chain, proving that confidential on-chain finance is possible at scale.
2. **Protocol Labs / Filecoin (Modular Storage Primitive):** Demonstrates modular worlds by utilizing decentralized storage. Every time a payroll is executed, an encrypted JSON payslip is generated, uploaded to IPFS, and pinned to Filecoin, proving a swappable storage primitive.

## 6. Pitch Deck Outline (8 Slides)
1. **Title:** ZamaPay - Confidential Onchain Payroll.
2. **The Problem:** Web3 payroll is public, causing massive HR friction.
3. **The Solution:** Fully Homomorphic Encryption (FHE) meets Decentralized Storage.
4. **How it Works (The Flow):** DAO funds contract -> Zama encrypts salaries -> Employees claim -> Filecoin stores payslips.
5. **The Magic (Demo):** 1-minute video showing the UI and the encrypted on-chain data.
6. **Sponsor Alignment:** Highlight Zama and Protocol Labs integrations.
7. **Business Model:** 0.1% processing fee on total payroll volume.
8. **The Team / Next Steps:** Roadmap to Mainnet.

## 7. 90-Day Roadmap
- **Month 1:** Refine MVP smart contracts. Complete deep audit of Zama FHE integration. Launch on Zama Testnet.
- **Month 2:** Build out the AI Treasury Agent to read encrypted aggregate data. Finalize Filecoin pinning infrastructure.
- **Month 3:** Mainnet launch. Onboard 3 beta DAOs. Implement multi-token support (ETH/USDC).

## 8. Devpost Hackathon Submission Text
**Project Name:** ZamaPay
**Tagline:** A modular, privacy-first onchain payroll system using FHE and decentralized storage.
**The Problem:** Traditional Web3 payroll forces DAOs into a binary choice: use a public multisig and leak everyone's exact salary to the entire world, or use Web2 SaaS and break the trustless nature of the organization.
**The Solution:** ZamaPay leverages the ultimate modular stack. We use Zama's fhEVM to completely encrypt salary amounts on-chain so treasuries can automate payroll with zero-knowledge privacy. We then use Protocol Labs' IPFS and Filecoin to permanently and securely store the encrypted payslips and HR compliance data.
**How we built it:** 
- **Smart Contracts:** Solidity leveraging `zama-ai/fhevm` to use `euint32` for confidential salary storage and execution.
- **Frontend:** Next.js (App Router), Tailwind CSS, and Wagmi for a premium, Web2-style fintech experience.
- **Storage:** IPFS and Filecoin for immutable, decentralized payslip storage.
**Challenges we ran into:** Managing the gas costs and execution time of FHE operations on-chain, which we optimized by batching payroll executions.
**What's next for ZamaPay:** Mainnet deployment, multi-token streaming, and an AI Treasury agent for runway forecasting.
