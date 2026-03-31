"use client";

import { useState } from "react";
import { Unlock, HandCoins, FileText, LayoutDashboard, ShieldCheck } from "lucide-react";
import Link from "next/link";

export default function EmployeeDashboard() {
  const [isDecrypting, setIsDecrypting] = useState(false);
  const [isClaiming, setIsClaiming] = useState(false);
  const [decryptedAmount, setDecryptedAmount] = useState<string | null>(null);

  const handleDecrypt = () => {
    setIsDecrypting(true);
    // Simulate ZK / encryption logic delay
    setTimeout(() => {
      setDecryptedAmount("5,000 USDC");
      setIsDecrypting(false);
    }, 1500);
  };

  const handleClaim = () => {
    setIsClaiming(true);
    // Simulate transaction delay
    setTimeout(() => {
      alert("Funds claimed successfully to your wallet!");
      setIsClaiming(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-[#0f0f0f] text-[oklch(0.95_0.01_250)] p-6 md:p-12 lg:p-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-[-10%] right-[10%] w-[40%] h-[40%] bg-[oklch(0.6_0.2_290)]/10 blur-[120px] rounded-full pointer-events-none" />

      <header className="flex justify-between items-center mb-16 relative z-10">
        <div>
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-2">
            Employee Portal
          </h1>
          <p className="text-[oklch(0.7_0.02_250)] text-lg">
            Access your payslips and claim your encrypted salary.
          </p>
        </div>
        <Link 
          href="/" 
          className="flex items-center gap-2 text-sm text-[oklch(0.7_0.02_250)] hover:text-white transition-colors duration-200"
        >
          <LayoutDashboard className="w-4 h-4" />
          Back Home
        </Link>
      </header>

      <main className="grid grid-cols-1 lg:grid-cols-2 gap-8 relative z-10 max-w-[1024px] mx-auto">
        {/* Salary Panel */}
        <section className="flex flex-col gap-6">
          <div className="glass-panel p-8">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-medium text-white">Current Period</h2>
              <span className="px-3 py-1 rounded-full bg-[oklch(0.4_0.2_140)]/20 text-[oklch(0.8_0.2_140)] text-xs font-medium border border-[oklch(0.5_0.2_140)]/30">
                Ready to Claim
              </span>
            </div>
            
            <div className="flex flex-col gap-6 mb-8">
              <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 relative overflow-hidden">
                <span className="block text-sm text-[oklch(0.7_0.02_250)] mb-2">Allocated Salary</span>
                {decryptedAmount ? (
                  <div className="flex items-center gap-3">
                    <span className="text-4xl font-semibold tracking-tight text-white">
                      {decryptedAmount}
                    </span>
                    <ShieldCheck className="w-6 h-6 text-[oklch(0.7_0.2_140)]" />
                  </div>
                ) : (
                  <div className="flex items-center gap-3">
                    <span className="text-4xl font-mono text-[oklch(0.5_0.02_250)] tracking-widest">
                      **** **
                    </span>
                    <span className="text-xs text-[oklch(0.6_0.02_250)] px-2 py-1 bg-white/5 rounded">Encrypted</span>
                  </div>
                )}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              {!decryptedAmount ? (
                <button 
                  onClick={handleDecrypt}
                  disabled={isDecrypting}
                  className="flex-1 premium-btn flex items-center justify-center gap-2 bg-white/[0.05] hover:bg-white/[0.08] border border-white/10"
                >
                  {isDecrypting ? (
                    <span className="animate-pulse">Decrypting Protocol...</span>
                  ) : (
                    <>
                      <Unlock className="w-5 h-5" />
                      Decrypt Salary
                    </>
                  )}
                </button>
              ) : (
                <button 
                  onClick={handleClaim}
                  disabled={isClaiming}
                  className="flex-1 premium-btn flex items-center justify-center gap-2"
                >
                  {isClaiming ? (
                    <span className="animate-pulse">Processing Claim...</span>
                  ) : (
                    <>
                      <HandCoins className="w-5 h-5" />
                      Claim Funds
                    </>
                  )}
                </button>
              )}
            </div>
          </div>
        </section>

        {/* Payslips Panel */}
        <section className="flex flex-col gap-6">
          <div className="glass-panel p-8 h-full">
            <h2 className="text-2xl font-medium text-white mb-6">Decentralized Payslips</h2>
            <p className="text-[oklch(0.7_0.02_250)] text-sm mb-6">
              Your payroll records are stored immutably on IPFS via Storacha. Only you hold the decryption keys.
            </p>

            <div className="space-y-4">
              {/* Mock Payslip Record */}
              <div className="group flex items-center justify-between p-4 rounded-xl border border-white/10 bg-white/[0.01] hover:bg-white/[0.03] transition-colors">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-white/[0.05] rounded-lg group-hover:bg-[oklch(0.4_0.2_250)]/20 transition-colors">
                    <FileText className="w-5 h-5 text-[oklch(0.8_0.02_250)] group-hover:text-[oklch(0.8_0.2_250)]" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white">March 2026 Salary</p>
                    <p className="text-xs text-[oklch(0.6_0.02_250)] mt-0.5 truncate max-w-[150px] sm:max-w-[200px]">
                      ipfs://bafybeigdyr...f3oclgtqy55fbzdi
                    </p>
                  </div>
                </div>
                <a 
                  href="#"
                  className="text-sm font-medium text-[oklch(0.7_0.2_250)] hover:text-[oklch(0.8_0.2_250)]"
                  onClick={(e) => { e.preventDefault(); alert("Opening IPFS link..."); }}
                >
                  View
                </a>
              </div>

              {/* Another Mock Record */}
              <div className="group flex items-center justify-between p-4 rounded-xl border border-white/10 bg-white/[0.01] hover:bg-white/[0.03] transition-colors">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-white/[0.05] rounded-lg group-hover:bg-[oklch(0.4_0.2_250)]/20 transition-colors">
                    <FileText className="w-5 h-5 text-[oklch(0.8_0.02_250)] group-hover:text-[oklch(0.8_0.2_250)]" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white">February 2026 Salary</p>
                    <p className="text-xs text-[oklch(0.6_0.02_250)] mt-0.5 truncate max-w-[150px] sm:max-w-[200px]">
                      ipfs://bafybeifk4v...5xdfy5rt3f6pqq
                    </p>
                  </div>
                </div>
                <a 
                  href="#"
                  className="text-sm font-medium text-[oklch(0.7_0.2_250)] hover:text-[oklch(0.8_0.2_250)]"
                  onClick={(e) => { e.preventDefault(); alert("Opening IPFS link..."); }}
                >
                  View
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}