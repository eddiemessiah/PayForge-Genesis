import Link from "next/link";
import { ArrowLeft, Shield, Globe, Database } from "lucide-react";

export default function DocsPage() {
  return (
    <main className="min-h-screen bg-[#050B08] text-white selection:bg-emerald-500/30">
      <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#050B08]/80 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-white/60 hover:text-white transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to ZamaPay
          </Link>
          <div className="text-emerald-400 font-bold tracking-widest uppercase text-sm">Documentation</div>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-6 pt-40 pb-32">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-8">ZamaPay Documentation</h1>
        <p className="text-xl text-white/50 mb-16 leading-relaxed">
          The technical architecture and developer guide for integrating Fully Homomorphic Encryption (FHE) payroll into your DAO or World App Mini-App.
        </p>

        <div className="space-y-12">
          {/* Section 1 */}
          <div className="bg-[#0A140F] border border-emerald-500/20 rounded-3xl p-8 shadow-[0_0_40px_rgba(16,185,129,0.05)] relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 blur-[80px] rounded-full pointer-events-none" />
            <div className="flex items-center gap-4 mb-6 relative z-10">
              <Shield className="w-8 h-8 text-emerald-400" />
              <h2 className="text-2xl font-bold text-white">1. Zama fhEVM (Confidential Compute)</h2>
            </div>
            <p className="text-white/60 mb-6 leading-relaxed relative z-10 text-lg">
              ZamaPay uses the `zama-ai/fhevm` library to ensure that individual salaries are never exposed on-chain. When a DAO Admin inputs a salary, it is encrypted into an `euint64` data type.
            </p>
            <div className="bg-[#050B08] border border-white/5 p-6 rounded-xl font-mono text-sm text-emerald-400 shadow-inner relative z-10">
              import "fhevm/lib/TFHE.sol";<br/><br/>
              mapping(address => euint64) private _encryptedSalaries;
            </div>
          </div>

          {/* Section 2 */}
          <div className="bg-[#0A140F] border border-blue-500/20 rounded-3xl p-8 shadow-[0_0_40px_rgba(59,130,246,0.05)] relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 blur-[80px] rounded-full pointer-events-none" />
            <div className="flex items-center gap-4 mb-6 relative z-10">
              <Globe className="w-8 h-8 text-blue-400" />
              <h2 className="text-2xl font-bold text-white">2. World App MiniKit Integration</h2>
            </div>
            <p className="text-white/60 mb-6 leading-relaxed relative z-10 text-lg">
              To achieve Sybil-resistant payroll (preventing duplicate wallets from claiming grants), ZamaPay integrates directly into the World App. Employees use `Verify with World ID` to decrypt and claim their salary gas-free.
            </p>
            <div className="bg-[#050B08] border border-white/5 p-6 rounded-xl font-mono text-sm text-blue-400 shadow-inner relative z-10">
              import &#123; MiniKit &#125; from '@worldcoin/minikit-js'<br/><br/>
              const res = await MiniKit.commands.verify(&#123; action: 'claim-salary' &#125;)
            </div>
          </div>

          {/* Section 3 */}
          <div className="bg-[#0A140F] border border-teal-500/20 rounded-3xl p-8 shadow-[0_0_40px_rgba(20,184,166,0.05)] relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/5 blur-[80px] rounded-full pointer-events-none" />
            <div className="flex items-center gap-4 mb-6 relative z-10">
              <Database className="w-8 h-8 text-teal-400" />
              <h2 className="text-2xl font-bold text-white">3. Protocol Labs (Decentralized Storage)</h2>
            </div>
            <p className="text-white/60 leading-relaxed relative z-10 text-lg">
              Blockchains are too expensive for heavy HR data. ZamaPay uploads encrypted JSON payslips and contractor agreements to IPFS via Storacha, pinning them permanently to the Filecoin network for audit compliance.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
