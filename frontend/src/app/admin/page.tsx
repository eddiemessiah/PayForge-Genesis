"use client";

import { useState } from "react";
import { UploadCloud, CheckCircle, Plus, LayoutDashboard } from "lucide-react";
import Link from "next/link";
import { uploadPayslipToStoracha } from "@/utils/storacha";

export default function AdminDashboard() {
  const [isUploading, setIsUploading] = useState(false);
  const [payslipCID, setPayslipCID] = useState<string | null>(null);

  const handleAddEmployee = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsUploading(true);
    
    // Placeholder logic to simulate IPFS upload
    const mockPayslipData = { name: "John Doe", amount: "5000 USDC", timestamp: Date.now() };
    const cid = await uploadPayslipToStoracha(mockPayslipData);
    
    setPayslipCID(cid);
    setIsUploading(false);
  };

  return (
    <div className="min-h-screen bg-[#0f0f0f] text-[oklch(0.95_0.01_250)] p-6 md:p-12 lg:p-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-[0%] left-[20%] w-[30%] h-[40%] bg-[oklch(0.6_0.2_250)]/10 blur-[120px] rounded-full pointer-events-none" />

      <header className="flex justify-between items-center mb-16 relative z-10">
        <div>
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-2">
            Admin Dashboard
          </h1>
          <p className="text-[oklch(0.7_0.02_250)] text-lg">
            Manage DAO treasury and employee payrolls securely.
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

      <main className="grid grid-cols-1 lg:grid-cols-12 gap-8 relative z-10 max-w-[1280px] mx-auto">
        {/* Deposit Funds Panel */}
        <section className="col-span-1 lg:col-span-5 flex flex-col gap-6">
          <div className="glass-panel p-8">
            <h2 className="text-2xl font-medium text-white mb-6">Treasury Overview</h2>
            <div className="flex flex-col gap-4 mb-8">
              <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5">
                <span className="block text-sm text-[oklch(0.7_0.02_250)] mb-1">Available Balance</span>
                <span className="text-4xl font-semibold tracking-tight">120,500 USDC</span>
              </div>
            </div>

            <form className="space-y-4">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-[oklch(0.8_0.02_250)]">Deposit Amount</label>
                <input 
                  type="number" 
                  placeholder="0.00 USDC" 
                  className="premium-input w-full text-lg"
                />
              </div>
              <button 
                type="button" 
                className="w-full premium-btn flex items-center justify-center gap-2 mt-2"
              >
                <Plus className="w-5 h-5" />
                Deposit Funds
              </button>
            </form>
          </div>
        </section>

        {/* Add Employee Panel */}
        <section className="col-span-1 lg:col-span-7 flex flex-col gap-6">
          <div className="glass-panel p-8 relative overflow-hidden">
            <h2 className="text-2xl font-medium text-white mb-6">Add Employee & Distribute</h2>
            
            <form onSubmit={handleAddEmployee} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium text-[oklch(0.8_0.02_250)]">Wallet Address</label>
                  <input 
                    type="text" 
                    placeholder="0x..." 
                    className="premium-input w-full"
                    required
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium text-[oklch(0.8_0.02_250)]">Encrypted Salary</label>
                  <input 
                    type="number" 
                    placeholder="Amount in USDC" 
                    className="premium-input w-full"
                    required
                  />
                  <span className="text-xs text-[oklch(0.6_0.02_250)]">
                    Amount will be encrypted on-chain.
                  </span>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-[oklch(0.8_0.02_250)]">Decentralized Payslip</label>
                <div className="flex items-center gap-4 p-4 rounded-xl border border-dashed border-white/20 bg-white/[0.01]">
                  <div className="p-3 bg-white/[0.05] rounded-lg">
                    <UploadCloud className="w-6 h-6 text-[oklch(0.7_0.02_250)]" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-white">Generate & Upload IPFS Payslip</p>
                    <p className="text-xs text-[oklch(0.6_0.02_250)]">Stored securely via Storacha/Filecoin</p>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 flex justify-end">
                <button 
                  type="submit" 
                  disabled={isUploading}
                  className="premium-btn flex items-center gap-2"
                >
                  {isUploading ? (
                    <span className="animate-pulse">Uploading to IPFS...</span>
                  ) : (
                    <>
                      <CheckCircle className="w-5 h-5" />
                      Add & Encrypt Salary
                    </>
                  )}
                </button>
              </div>

              {payslipCID && (
                <div className="p-4 rounded-xl bg-[oklch(0.4_0.2_140)]/20 border border-[oklch(0.5_0.2_140)]/30 mt-4 flex flex-col gap-1">
                  <span className="text-sm text-[oklch(0.8_0.2_140)] font-medium">Success! Payslip uploaded to Storacha.</span>
                  <a href={`https://dweb.link/ipfs/${payslipCID}`} target="_blank" rel="noreferrer" className="text-xs text-[oklch(0.6_0.1_140)] underline truncate">
                    ipfs://{payslipCID}
                  </a>
                </div>
              )}
            </form>
          </div>
        </section>
      </main>
    </div>
  );
}