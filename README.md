# ZamaPay - Decentralized Confidential Payroll

ZamaPay is a Fortune 500-grade decentralized payroll system built for DAOs and Web3 organizations. 

## The Problem
When decentralized organizations pay contributors on public ledgers, salaries, allocations, and treasury outflows are exposed to the world. This creates a massive privacy problem, making it impossible to run competitive, enterprise-grade payroll on-chain.

## The Solution
ZamaPay solves this by combining Fully Homomorphic Encryption (FHE), decentralized storage, and robust Proof of Personhood. We enable DAOs to onboard contributors, encrypt their salaries, pin immutable HR documentation to the decentralized web, and allow employees to securely claim their paystreams—all without ever leaking the actual amounts to the public ledger.

## Features
* **Confidential Cap Tables:** View active contributors and their statuses without exposing their USD allocations. All allocations are masked as `euint64` ciphertexts.
* **Encrypted Payroll Distribution:** DAOs can fund the treasury and distribute payroll blindly.
* **Proof of Personhood:** Employees must verify they are a unique human to claim their salaries, preventing Sybil attacks where one person drains multiple DAO allocations.
* **Immutable HR Records:** Payslips and contributor agreements are securely pinned to IPFS, with only the CID stored on-chain.
* **Mobile-First Contributor Portal:** Built as a World App Mini App for seamless, on-the-go access.

## Hackathon Sponsor Tracks & Integrations

### 1. Zama (fhEVM)
Zama's Fully Homomorphic Encryption is the core of our protocol. The `ConfidentialPayroll.sol` smart contract is designed for the Zama fhEVM. When a DAO sets a contributor's salary, the value is encrypted into an `euint64`. The network computes the payroll outflows blindly, ensuring that even the DAO admins cannot see the decrypted individual allocations—only the intended employee can decrypt their claim.

### 2. Worldcoin (World ID & MiniKit)
We integrated the official World App MiniKit SDK. ZamaPay is not just a web application; it is a native Mini App designed to be distributed inside the World App ecosystem. To prevent Sybil attacks, employees must use World ID's anonymous actions to generate a Zero-Knowledge Proof (ZKP) locally. We don't store biometrics—just a nullifier hash. Once their unique humanity is verified, the DAO's Paymaster sponsors their gas fees via ERC-4337 Account Abstraction.

### 3. Filecoin (IPFS)
When a new contributor is onboarded, their HR documentation and signed agreements are pinned to IPFS using Filecoin storage providers. The decentralized web ensures immutable storage of these records, and we only store the resulting CID hash (`bafybei...`) on the Zama fhEVM smart contract, maintaining high performance and low storage costs on-chain.

## Future Exploration: How can we integrate Flow or Ethereum L1?
As we look to scale ZamaPay beyond the MVP, we are actively exploring cross-chain architectures:
* **Ethereum L1:** Can we use Ethereum as the base settlement layer while relying on the Zama fhEVM network as a specialized coprocessor for the confidential payroll math?
* **Flow Blockchain:** Flow's highly scalable, low-friction environment is perfect for consumer-facing Mini Apps. How can we bridge Zama's FHE state proofs to Flow smart contracts to allow users to interact with encrypted payrolls directly from their Flow wallets? We want to leverage Flow's seamless onboarding for enterprise employees who may not be Web3 native.
