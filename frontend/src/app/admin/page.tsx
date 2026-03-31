"use client";

import Link from "next/link";
import { ArrowLeft, Shield, Plus, Database, Brain, Activity, Wallet, FileLock2, Search } from "lucide-react";

export default function AdminDashboard() {
  return (
    <main className="min-h-screen bg-[#050B08] text-white selection:bg-emerald-500/30">
      <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#050B08]/80 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-white/60 hover:text-white transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back Home
          </Link>
          <div className="flex items-center gap-4">
            <span className="text-emerald-400 font-bold tracking-widest uppercase text-sm">DAO Treasury Admin</span>
            <div className="w-8 h-8 rounded-full bg-emerald-500/20 border border-emerald-500/50 flex items-center justify-center">
              <Shield className="w-4 h-4 text-emerald-400" />
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-6 pt-32 pb-24">
        <h1 className="text-4xl font-bold tracking-tighter mb-12">Treasury Dashboard</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Main Stats Area */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Financial Overview Bento */}
            <div className="bg-[#0A140F] border border-emerald-500/20 rounded-3xl p-8 shadow-[0_0_40px_rgba(16,185,129,0.05)] relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 blur-[80px] rounded-full pointer-events-none" />
              <div className="flex justify-between items-start mb-8 relative z-10">
                <div>
                  <h2 className="text-white/60 font-medium mb-1">Total Treasury Balance</h2>
                  <div className="text-5xl font-black text-white">$1,240,500.00 <span className="text-lg text-emerald-400 font-normal">USDC</span></div>
                </div>
                <button className="bg-white text-black px-6 py-2.5 rounded-full font-bold text-sm hover:bg-emerald-50 transition-colors flex items-center gap-2">
                  <Wallet className="w-4 h-4" /> Deposit
                </button>
              </div>
              
              <div className="grid grid-cols-2 gap-4 relative z-10">
                <div className="bg-[#050B08] border border-white/5 rounded-2xl p-6">
                  <div className="text-white/50 text-sm mb-2 flex items-center gap-2"><FileLock2 className="w-4 h-4" /> Encrypted Payroll Outflow</div>
                  <div className="text-2xl font-bold text-emerald-400">████████</div>
                  <div className="text-xs text-white/30 mt-2">Only AI Treasury Agent can parse total flow</div>
                </div>
                <div className="bg-[#050B08] border border-white/5 rounded-2xl p-6">
                  <div className="text-white/50 text-sm mb-2 flex items-center gap-2"><Activity className="w-4 h-4 text-blue-400" /> Active Contractors</div>
                  <div className="text-2xl font-bold text-white">12 Verified</div>
                  <div className="text-xs text-white/30 mt-2">World ID Sybil Resistance Active</div>
                </div>
              </div>
            </div>

            {/* Employee List */}
            <div className="bg-[#0A140F] border border-white/5 rounded-3xl p-8">
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-xl font-bold">Encrypted Cap Table</h2>
                <div className="bg-[#050B08] border border-white/5 rounded-full px-4 py-2 flex items-center gap-2">
                  <Search className="w-4 h-4 text-white/40" />
                  <input type="text" placeholder="Search wallet..." className="bg-transparent border-none outline-none text-sm text-white w-32" />
                </div>
              </div>

              <div className="space-y-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="flex items-center justify-between bg-[#050B08] border border-white/5 rounded-2xl p-4">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center">
                        <Shield className="w-5 h-5 text-emerald-400" />
                      </div>
                      <div>
                        <div className="font-mono text-sm text-white/80">0x71C...9A{i}B</div>
                        <div className="text-xs text-white/40">Frontend Developer</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-mono text-emerald-400">euint64(████)</div>
                      <div className="text-xs text-white/40">Zama FHE Encrypted</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Action Sidebar */}
          <div className="space-y-8">
            
            <div className="bg-[#0A140F] border border-emerald-500/20 rounded-3xl p-8">
              <h2 className="text-xl font-bold mb-6 flex items-center gap-2"><Plus className="w-5 h-5 text-emerald-400" /> Onboard Contributor</h2>
              <form className="space-y-4">
                <div>
                  <label className="text-xs text-white/50 uppercase tracking-wider mb-2 block">Wallet Address</label>
                  <input type="text" className="w-full bg-[#050B08] border border-white/10 rounded-xl p-3 text-white outline-none focus:border-emerald-500/50 font-mono text-sm" placeholder="0x..." />
                </div>
                <div>
                  <label className="text-xs text-white/50 uppercase tracking-wider mb-2 block">Monthly Salary (USDC)</label>
                  <input type="text" className="w-full bg-[#050B08] border border-white/10 rounded-xl p-3 text-white outline-none focus:border-emerald-500/50 font-mono text-sm" placeholder="5000" />
                </div>
                <button type="button" className="w-full bg-emerald-500 text-[#050B08] font-bold py-4 rounded-xl hover:bg-emerald-400 transition-colors mt-4 flex items-center justify-center gap-2">
                  <Shield className="w-4 h-4" /> Encrypt & Deploy to Zama
                </button>
                <div className="text-center text-xs text-white/40 mt-4 flex items-center justify-center gap-1">
                  <Database className="w-3 h-3 text-teal-400" /> Contract auto-pins to Filecoin
                </div>
              </form>
            </div>

            <div className="bg-[#0A140F] border border-white/5 rounded-3xl p-8">
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2"><Brain className="w-5 h-5 text-emerald-400" /> 0G Treasury AI</h2>
              <p className="text-white/60 text-sm leading-relaxed mb-6">
                Our autonomous agent analyzes encrypted total outflow to forecast runway without breaking FHE privacy.
              </p>
              <button className="w-full bg-white/5 text-white border border-white/10 font-bold py-3 rounded-xl hover:bg-white/10 transition-colors text-sm">
                Generate AI Runway Report
              </button>
            </div>

          </div>

        </div>
      </div>
    </main>
  );
}
