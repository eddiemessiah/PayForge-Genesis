"use client";

import Link from "next/link";
import { Lock, Activity, Wallet, Globe, ArrowDownRight, ArrowUpRight, Zap, RefreshCw, Send, ScanLine } from "lucide-react";

export default function WalletAssetsPage() {
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
          <Link href="/employee" className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-white/50 hover:bg-white/5 hover:text-white transition-all">
            <Activity className="w-5 h-5" />
            <span className="text-sm font-bold tracking-wide">Paystreams</span>
          </Link>
          <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl bg-teal-500/10 text-teal-400 border border-teal-500/20 transition-all">
            <Wallet className="w-5 h-5" />
            <span className="text-sm font-bold tracking-wide">Wallet & Assets</span>
          </button>
          <Link href="/employee/worldid" className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-white/50 hover:bg-white/5 hover:text-white transition-all">
            <Globe className="w-5 h-5" />
            <span className="text-sm font-bold tracking-wide">World ID</span>
          </Link>
        </nav>
      </aside>

      <div className="flex-1 flex flex-col min-h-screen">
        <header className="h-20 border-b border-white/5 bg-[#030705] flex items-center justify-between px-8 sticky top-0 z-40 shrink-0">
          <div className="flex items-center gap-4">
            <div className="hidden sm:block">
              <span className="text-teal-400 font-bold tracking-widest uppercase text-xs">Portfolio</span>
              <h2 className="text-xl font-bold leading-none mt-1">Wallet & Assets</h2>
            </div>
          </div>
          <div className="flex items-center gap-3">
             <div className="px-4 py-2 bg-white/5 border border-white/10 rounded-full flex items-center gap-2 text-xs font-mono font-bold">
               <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse"/> 0x46D...e38C
             </div>
          </div>
        </header>

        <div className="p-6 md:p-10 max-w-7xl mx-auto w-full space-y-8 flex-1">
          {/* Top Asset KPI */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2 bg-gradient-to-br from-[#0A140F] to-[#030705] border border-white/5 rounded-[2rem] p-8 flex flex-col justify-between group overflow-hidden relative">
               <div className="absolute top-[-50%] right-[-10%] w-[80%] h-[150%] bg-teal-500/5 blur-[100px] rounded-full group-hover:bg-teal-500/10 transition-colors duration-700 pointer-events-none" />
               <div className="relative z-10">
                  <h2 className="text-white/40 text-xs font-bold tracking-widest uppercase mb-3 flex items-center gap-2"><Wallet className="w-4 h-4"/> Decrypted Net Worth</h2>
                  <div className="text-5xl md:text-6xl font-black tracking-tighter flex items-baseline gap-1">
                    $12,450<span className="text-3xl text-teal-400 opacity-80">.00</span>
                  </div>
                  <div className="text-xs text-white/40 mt-2 font-mono flex items-center gap-2"><RefreshCw className="w-3 h-3"/> Last Synced: Just now</div>
               </div>
               <div className="flex gap-3 relative z-10 mt-8">
                  <button className="bg-teal-500 text-[#030705] px-6 py-3 rounded-xl font-bold text-sm hover:scale-105 transition-transform flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(20,184,166,0.2)]">
                    <Send className="w-4 h-4" /> Send Funds
                  </button>
                  <button className="bg-white/5 text-white border border-white/10 px-6 py-3 rounded-xl font-bold text-sm hover:bg-white/10 transition-colors flex items-center justify-center gap-2">
                    <ScanLine className="w-4 h-4" /> Receive
                  </button>
               </div>
            </div>
            
            <div className="bg-[#050B08] border border-white/5 rounded-[2rem] p-6 flex flex-col justify-between">
              <div>
                <div className="text-white/40 text-xs font-bold tracking-widest uppercase mb-4 flex items-center gap-2"><Lock className="w-3 h-3 text-teal-400"/> Next Decryption</div>
                <div className="text-3xl font-mono text-teal-400 tracking-tight">euint(████)</div>
                <div className="text-xs text-white/30 mt-2 font-mono">From: Zama Protocol</div>
              </div>
              <div className="mt-6">
                <div className="w-full bg-white/5 rounded-full h-2 mb-2"><div className="bg-teal-500 h-2 rounded-full w-2/3 shadow-[0_0_10px_rgba(20,184,166,0.8)]"/></div>
                <div className="text-[10px] font-bold text-white/40 uppercase tracking-widest text-right">Available in 4 Days</div>
              </div>
            </div>
          </div>

          {/* Tokens List */}
          <div className="bg-[#050B08] border border-white/5 rounded-[2rem] flex flex-col overflow-hidden">
             <div className="p-6 border-b border-white/5 flex justify-between items-center bg-white/[0.02]">
                <h3 className="text-sm font-bold tracking-wide flex items-center gap-2"><Activity className="w-4 h-4 text-teal-400"/> Current Holdings</h3>
             </div>
             <div className="p-4 space-y-2">
                <div className="flex items-center justify-between p-4 hover:bg-white/5 rounded-xl transition-colors cursor-pointer group">
                   <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-blue-500/20 border border-blue-500/30 flex items-center justify-center font-bold text-blue-400">USDC</div>
                      <div>
                        <div className="font-bold text-sm">USD Coin</div>
                        <div className="text-[10px] font-mono text-white/40">Base Network</div>
                      </div>
                   </div>
                   <div className="text-right">
                     <div className="font-bold font-mono">$10,400.00</div>
                     <div className="text-xs text-white/40 font-mono">10,400 USDC</div>
                   </div>
                </div>
                
                <div className="flex items-center justify-between p-4 hover:bg-white/5 rounded-xl transition-colors cursor-pointer group">
                   <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center font-bold text-emerald-400">ETH</div>
                      <div>
                        <div className="font-bold text-sm">Ethereum</div>
                        <div className="text-[10px] font-mono text-white/40">Base Network</div>
                      </div>
                   </div>
                   <div className="text-right">
                     <div className="font-bold font-mono">$2,050.00</div>
                     <div className="text-xs text-white/40 font-mono">0.65 ETH</div>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </main>
  );
}
