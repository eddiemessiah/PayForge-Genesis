"use client";

import Link from "next/link";
import { ArrowLeft, Wallet, Shield, Globe, Lock, Unlock, FileText, Briefcase, Activity } from "lucide-react";

export default function EmployeePortal() {
  return (
    <main className="min-h-screen bg-[#050B08] text-white selection:bg-emerald-500/30">
      <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#050B08]/80 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-white/60 hover:text-white transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back Home
          </Link>
          <div className="flex items-center gap-4">
            <span className="text-blue-400 font-bold tracking-widest uppercase text-sm">Contributor Portal</span>
            <div className="w-8 h-8 rounded-full bg-blue-500/20 border border-blue-500/50 flex items-center justify-center">
              <Globe className="w-4 h-4 text-blue-400" />
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-6 pt-32 pb-24">
        <h1 className="text-4xl font-bold tracking-tighter mb-12">My Paystreams</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          <div className="lg:col-span-2 space-y-8">
            
            {/* Verify Section */}
            <div className="bg-[#0A140F] border border-blue-500/20 rounded-3xl p-8 shadow-[0_0_40px_rgba(59,130,246,0.05)] relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 blur-[80px] rounded-full pointer-events-none" />
              <div className="flex justify-between items-start mb-8 relative z-10">
                <div>
                  <h2 className="text-white font-bold text-2xl mb-2 flex items-center gap-3"><Globe className="w-6 h-6 text-blue-400"/> World ID Verification</h2>
                  <p className="text-white/50">Prove you are a unique human to unlock your encrypted salary claims across multiple DAOs.</p>
                </div>
                <button className="bg-blue-500 text-black px-6 py-2.5 rounded-full font-bold text-sm hover:bg-blue-400 transition-colors flex items-center gap-2">
                  Verify <Shield className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Employers List */}
            <h2 className="text-xl font-bold mb-4 mt-12 flex items-center gap-2"><Briefcase className="w-5 h-5 text-emerald-400" /> Connected Employers</h2>
            
            {/* Employer Card 1 */}
            <div className="bg-[#0A140F] border border-white/5 rounded-3xl p-8 mb-6">
              <div className="flex justify-between items-center mb-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#050B08] border border-white/10 flex items-center justify-center font-bold text-xl">D</div>
                  <div>
                    <div className="font-bold text-lg">DeFi Protocol DAO</div>
                    <div className="text-sm text-white/40">Core Contributor • Joined Jan 2026</div>
                  </div>
                </div>
                <div className="bg-emerald-500/10 text-emerald-400 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest border border-emerald-500/20">
                  Active
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-[#050B08] border border-white/5 rounded-2xl p-6">
                  <div className="text-white/50 text-sm mb-2 flex items-center gap-2"><Lock className="w-4 h-4" /> Encrypted Allocation</div>
                  <div className="text-2xl font-mono text-emerald-400 mb-2">euint64(████)</div>
                  <button className="text-xs font-bold text-white bg-white/10 px-3 py-1.5 rounded-lg hover:bg-white/20 transition-colors flex items-center gap-1">
                    <Unlock className="w-3 h-3" /> Request Decryption
                  </button>
                </div>
                <div className="bg-[#050B08] border border-white/5 rounded-2xl p-6 flex flex-col justify-center items-center text-center">
                  <FileText className="w-6 h-6 text-teal-400 mb-2" />
                  <div className="text-sm font-bold text-white mb-1">View Payslip</div>
                  <div className="text-xs text-white/40">Pinned to Filecoin via Storacha</div>
                </div>
              </div>
            </div>

            {/* Employer Card 2 */}
            <div className="bg-[#0A140F] border border-white/5 rounded-3xl p-8 opacity-75 hover:opacity-100 transition-opacity">
              <div className="flex justify-between items-center mb-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#050B08] border border-white/10 flex items-center justify-center font-bold text-xl">O</div>
                  <div>
                    <div className="font-bold text-lg">Omni-Chain Labs</div>
                    <div className="text-sm text-white/40">Smart Contract Auditor • Joined Mar 2026</div>
                  </div>
                </div>
                <div className="bg-white/5 text-white/40 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest border border-white/10">
                  Pending Claim
                </div>
              </div>
            </div>

          </div>

          {/* Action Sidebar */}
          <div className="space-y-8">
            <div className="bg-[#0A140F] border border-emerald-500/20 rounded-3xl p-8">
              <h2 className="text-xl font-bold mb-6">Quick Claim</h2>
              <div className="bg-[#050B08] border border-white/5 rounded-2xl p-6 mb-6">
                <div className="text-sm text-white/50 mb-2">Available Balance (Decrypted)</div>
                <div className="text-4xl font-black text-white mb-1">$5,240.<span className="text-2xl text-emerald-400">00</span></div>
                <div className="text-xs text-white/30">From DeFi Protocol DAO</div>
              </div>
              <button className="w-full bg-emerald-500 text-[#050B08] font-bold py-4 rounded-xl hover:bg-emerald-400 transition-colors flex items-center justify-center gap-2">
                <Wallet className="w-5 h-5" /> Claim USDC to Wallet
              </button>
            </div>

            <div className="bg-[#0A140F] border border-white/5 rounded-3xl p-8">
              <h2 className="text-lg font-bold mb-4 flex items-center gap-2"><Activity className="w-4 h-4 text-emerald-400" /> Recent Activity</h2>
              <div className="space-y-4">
                <div className="flex justify-between items-center border-b border-white/5 pb-4">
                  <div>
                    <div className="text-sm font-medium">Decrypted Claim</div>
                    <div className="text-xs text-white/40">Mar 15, 2026</div>
                  </div>
                  <div className="text-sm font-mono text-emerald-400">+$4,500 USDC</div>
                </div>
                <div className="flex justify-between items-center border-b border-white/5 pb-4">
                  <div>
                    <div className="text-sm font-medium">World ID Sync</div>
                    <div className="text-xs text-white/40">Mar 01, 2026</div>
                  </div>
                  <div className="text-sm font-bold text-blue-400">Verified</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}
