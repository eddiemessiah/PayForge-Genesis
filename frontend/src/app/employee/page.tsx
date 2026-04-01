"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Wallet, Shield, Globe, Lock, Unlock, FileText, Briefcase, Activity, CheckCircle2, Menu, Bell, ChevronRight, EyeOff, Database, Zap, Loader2 } from "lucide-react";

export default function EmployeePortal() {
  const [claimState, setClaimState] = useState<"idle" | "decrypting" | "claiming" | "success">("idle");
  const [localBalance, setLocalBalance] = useState(5240);

  const handleClaim = () => {
    setClaimState("decrypting");
    setTimeout(() => {
      setClaimState("claiming");
      setTimeout(() => {
        setClaimState("success");
        setLocalBalance(0);
        setTimeout(() => setClaimState("idle"), 3000);
      }, 2500);
    }, 2000);
  };

  return (
    <main className="min-h-screen bg-[#030705] text-white selection:bg-teal-500/30 flex">
      {/* Sidebar Navigation */}
      <aside className="w-64 border-r border-white/5 bg-[#030705]/80 backdrop-blur-xl flex flex-col hidden md:flex h-screen sticky top-0">
        <div className="h-20 flex items-center px-6 border-b border-white/5 shrink-0">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-teal-500 to-blue-500 flex items-center justify-center transition-transform group-hover:scale-105 shadow-[0_0_20px_rgba(20,184,166,0.3)]">
              <Lock className="w-4 h-4 text-[#030705] fill-current" />
            </div>
            <span className="text-xl font-bold tracking-tight text-white">ZamaPay</span>
          </Link>
        </div>
        <nav className="flex-1 px-4 py-8 space-y-2 overflow-y-auto">
          <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl bg-teal-500/10 text-teal-400 border border-teal-500/20 transition-all">
            <Activity className="w-5 h-5" />
            <span className="text-sm font-bold tracking-wide">Paystreams</span>
          </button>
          <Link href="/employee/wallet" className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-white/50 hover:bg-white/5 hover:text-white transition-all">
            <Wallet className="w-5 h-5" />
            <span className="text-sm font-bold tracking-wide">Wallet & Assets</span>
          </Link>
          <Link href="/employee/worldid" className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-white/50 hover:bg-white/5 hover:text-white transition-all">
            <Globe className="w-5 h-5" />
            <span className="text-sm font-bold tracking-wide">World ID</span>
          </Link>
        </nav>
        <div className="p-4 border-t border-white/5 shrink-0">
          <div className="bg-white/5 border border-white/5 p-4 rounded-2xl flex items-center gap-3 hover:bg-white/10 transition-colors cursor-pointer">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-teal-400 to-blue-500 shadow-inner" />
            <div>
              <div className="text-sm font-mono text-white/90">0x46D...e38C</div>
              <div className="text-xs text-teal-400 flex items-center gap-1 mt-1"><CheckCircle2 className="w-3 h-3" /> Connected</div>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-h-screen">
        
        {/* Top Header */}
        <header className="h-20 border-b border-white/5 bg-[#030705] flex items-center justify-between px-8 sticky top-0 z-40 shrink-0">
          <div className="flex items-center gap-4">
            <button className="md:hidden p-2 -ml-2 rounded-lg hover:bg-white/5 text-white/50 hover:text-white transition-colors">
              <Menu className="w-6 h-6" />
            </button>
            <div className="hidden sm:block">
              <span className="text-teal-400 font-bold tracking-widest uppercase text-xs">Contributor Portal</span>
              <h2 className="text-xl font-bold leading-none mt-1">Dashboard</h2>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <button className="relative p-2 rounded-full hover:bg-white/5 transition-colors">
              <Bell className="w-5 h-5 text-white/50 hover:text-white" />
              <span className="absolute top-2 right-2 w-2 h-2 bg-teal-500 rounded-full shadow-[0_0_10px_rgba(20,184,166,0.8)]" />
            </button>
            <Link href="/" className="text-sm font-bold text-white/50 hover:text-teal-400 transition-colors flex items-center gap-2">
              Exit <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </header>

        {/* Dashboard Body */}
        <div className="p-6 md:p-10 max-w-7xl mx-auto w-full space-y-8 flex-1">
          
          {/* World ID Verification Card */}
          <div className="bg-gradient-to-r from-blue-950/40 to-[#030705] border border-blue-500/20 rounded-[2rem] p-8 shadow-[0_0_40px_rgba(59,130,246,0.05)] relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6 group">
            <div className="absolute top-0 left-0 w-64 h-64 bg-blue-500/10 blur-[80px] rounded-full pointer-events-none group-hover:bg-blue-500/20 transition-colors" />
            <div className="relative z-10 flex items-start gap-6">
              <div className="w-16 h-16 rounded-2xl bg-blue-500/20 border border-blue-500/40 flex items-center justify-center shrink-0 shadow-inner">
                <Globe className="w-8 h-8 text-blue-400" />
              </div>
              <div>
                <h2 className="text-white font-bold text-2xl mb-2">World ID Verification Required</h2>
                <p className="text-white/60 text-sm max-w-xl leading-relaxed">To claim encrypted FHE paystreams across multiple DAOs, you must prove unique humanity. Gas fees for claims are sponsored upon verification.</p>
              </div>
            </div>
            <Link href="/employee/worldid" className="relative z-10 w-full md:w-auto bg-blue-500 text-[#030705] px-8 py-3.5 rounded-full font-bold text-sm hover:scale-105 transition-transform flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(59,130,246,0.3)]">
              Verify with World App <Shield className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Main Paystreams Column */}
            <div className="lg:col-span-2 space-y-6">
              <div className="flex items-center justify-between mb-2">
                <h2 className="text-xl font-bold flex items-center gap-2"><Briefcase className="w-5 h-5 text-teal-400" /> Active DAO Contracts</h2>
              </div>
              
              {/* Employer Card 1 */}
              <div className="bg-[#0A0E0C] border border-white/5 rounded-[2rem] p-8 hover:border-teal-500/30 transition-colors group relative overflow-hidden">
                <div className="absolute top-0 right-0 w-48 h-48 bg-teal-500/5 blur-[60px] rounded-full pointer-events-none group-hover:bg-teal-500/10 transition-colors" />
                
                <div className="flex justify-between items-start mb-8 relative z-10">
                  <div className="flex items-center gap-5">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-teal-500/20 to-[#030705] border border-teal-500/30 flex items-center justify-center font-black text-2xl text-teal-400 shadow-inner">
                      D
                    </div>
                    <div>
                      <div className="font-bold text-xl text-white">DeFi Protocol DAO</div>
                      <div className="text-sm text-white/50 mt-1 flex items-center gap-2">
                        Core Contributor <span className="w-1 h-1 rounded-full bg-white/20"/> Joined Jan 2026
                      </div>
                    </div>
                  </div>
                  <div className="bg-teal-500/10 text-teal-400 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest border border-teal-500/20 flex items-center gap-1.5 shadow-[0_0_10px_rgba(20,184,166,0.1)]">
                    <div className="w-1.5 h-1.5 bg-teal-400 rounded-full animate-pulse"/> Active
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 relative z-10">
                  <div className="bg-[#030705] border border-white/5 rounded-2xl p-6 relative group/card hover:border-white/10 transition-colors">
                    <div className="text-white/40 text-xs font-bold uppercase tracking-widest mb-3 flex items-center gap-2">
                      <Lock className="w-3.5 h-3.5" /> Encrypted Allocation
                    </div>
                    <div className="text-3xl font-mono text-teal-400 mb-4 bg-teal-500/5 inline-block px-3 py-1 rounded-lg border border-teal-500/10">euint(████)</div>
                    <button className="w-full text-xs font-bold text-[#030705] bg-teal-500 py-2.5 rounded-xl hover:bg-teal-400 transition-colors flex items-center justify-center gap-1.5 shadow-[0_0_15px_rgba(20,184,166,0.2)]">
                      <Unlock className="w-3.5 h-3.5" /> Request Client Decryption
                    </button>
                  </div>
                  
                  <div className="bg-[#030705] border border-white/5 rounded-2xl p-6 flex flex-col justify-between group/card hover:border-white/10 transition-colors">
                    <div className="text-white/40 text-xs font-bold uppercase tracking-widest mb-3 flex items-center gap-2">
                      <FileText className="w-3.5 h-3.5" /> HR Documentation
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center border border-blue-500/20">
                        <Database className="w-4 h-4 text-blue-400" />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-white">View Immutable Payslip</div>
                        <div className="text-[10px] text-blue-400 font-mono mt-1">CID: bafy...h7qp</div>
                      </div>
                    </div>
                    <button className="w-full text-xs font-bold text-white bg-white/5 py-2.5 rounded-xl hover:bg-white/10 transition-colors border border-white/5 mt-4 flex items-center justify-center gap-2">
                      Fetch from Filecoin
                    </button>
                  </div>
                </div>
              </div>

            </div>

            {/* Side Action Panel */}
            <div className="space-y-6">
              
              {/* Quick Claim Card */}
              <div className="bg-[#0A0E0C] border border-white/5 rounded-[2rem] p-8">
                <h2 className="text-lg font-bold mb-6 flex items-center gap-2"><Zap className="w-5 h-5 text-yellow-400" /> Action Center</h2>
                <div className="bg-[#030705] border border-white/5 rounded-2xl p-6 mb-6 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-teal-500/10 blur-[40px] rounded-full pointer-events-none" />
                  <div className="text-xs text-white/40 font-bold uppercase tracking-widest mb-3 flex items-center gap-2"><EyeOff className="w-3.5 h-3.5"/> Locally Decrypted Balance</div>
                  <div className="text-4xl font-black text-white mb-1">${localBalance.toLocaleString()}<span className="text-2xl text-teal-400">.00</span></div>
                  <div className="text-xs text-white/40 font-mono">From: DeFi Protocol DAO</div>
                </div>
                
                {claimState === "idle" && (
                  <button onClick={handleClaim} className="w-full bg-white text-[#030705] font-bold py-3.5 rounded-xl hover:bg-teal-50 transition-colors flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:scale-105 active:scale-95 duration-200">
                    <Wallet className="w-4 h-4" /> Claim USDC to Wallet
                  </button>
                )}
                {claimState === "decrypting" && (
                  <button disabled className="w-full bg-teal-500/20 text-teal-400 border border-teal-500/30 font-bold py-3.5 rounded-xl flex items-center justify-center gap-2">
                    <Loader2 className="w-4 h-4 animate-spin" /> Verifying TFHE Ciphertext...
                  </button>
                )}
                {claimState === "claiming" && (
                  <button disabled className="w-full bg-blue-500/20 text-blue-400 border border-blue-500/30 font-bold py-3.5 rounded-xl flex items-center justify-center gap-2">
                    <Loader2 className="w-4 h-4 animate-pulse" /> Dispatching on fhEVM...
                  </button>
                )}
                {claimState === "success" && (
                  <button disabled className="w-full bg-emerald-500 text-[#030705] font-bold py-3.5 rounded-xl flex items-center justify-center gap-2">
                    <CheckCircle2 className="w-4 h-4" /> Claim Successful!
                  </button>
                )}
              </div>

              {/* Activity Log */}
              <div className="bg-[#0A0E0C] border border-white/5 rounded-[2rem] p-8">
                <h2 className="text-lg font-bold mb-6 flex items-center gap-2"><Activity className="w-4 h-4 text-teal-400" /> Event Stream</h2>
                <div className="space-y-5">
                  <div className="flex gap-4">
                    <div className="w-2 h-2 rounded-full bg-teal-400 mt-1.5 shrink-0 shadow-[0_0_8px_rgba(20,184,166,0.8)]" />
                    <div>
                      <div className="text-sm font-bold text-white/90">Decrypted Claim Success</div>
                      <div className="text-xs text-white/40 mt-1 font-mono">+$4,500 USDC</div>
                      <div className="text-[10px] text-white/30 mt-1">Mar 15, 2026</div>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-2 h-2 rounded-full bg-blue-400 mt-1.5 shrink-0" />
                    <div>
                      <div className="text-sm font-bold text-white/90">Filecoin Data Sync</div>
                      <div className="text-xs text-white/40 mt-1 font-mono">CID: bafy...h7qp</div>
                      <div className="text-[10px] text-white/30 mt-1">Mar 01, 2026</div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
