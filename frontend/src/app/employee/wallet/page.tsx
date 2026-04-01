"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Lock, Activity, Wallet, Globe, RefreshCw, Send, ScanLine, Menu, X, CheckCircle2 } from "lucide-react";

export default function WalletAssetsPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const NavLinks = () => (
    <>
      <Link href="/employee" onClick={() => setIsMobileMenuOpen(false)} className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-white/50 hover:bg-white/5 hover:text-white transition-all">
        <Activity className="w-5 h-5" />
        <span className="text-sm font-bold tracking-wide">Paystreams</span>
      </Link>
      <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl bg-teal-500/10 text-teal-400 border border-teal-500/20 transition-all">
        <Wallet className="w-5 h-5" />
        <span className="text-sm font-bold tracking-wide">Wallet & Assets</span>
      </button>
      <Link href="/employee/worldid" onClick={() => setIsMobileMenuOpen(false)} className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-white/50 hover:bg-white/5 hover:text-white transition-all">
        <Globe className="w-5 h-5" />
        <span className="text-sm font-bold tracking-wide">World ID</span>
      </Link>
    </>
  );

  return (
    <main className="min-h-screen bg-[#030705] text-white selection:bg-teal-500/30 flex overflow-hidden">
      
      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: -300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -300 }}
            className="fixed inset-0 z-50 bg-[#030705]/95 backdrop-blur-3xl p-6 md:hidden flex flex-col"
          >
            <div className="flex justify-between items-center mb-8">
              <Link href="/" className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-teal-500 to-blue-500 flex items-center justify-center shadow-[0_0_15px_rgba(20,184,166,0.2)]">
                  <Lock className="w-4 h-4 text-[#030705] fill-current" />
                </div>
                <span className="text-xl font-bold tracking-tight text-white">Wallet</span>
              </Link>
              <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 bg-white/5 rounded-full text-white/50 hover:text-white">
                <X className="w-6 h-6" />
              </button>
            </div>
            <nav className="flex-1 space-y-2">
              <NavLinks />
            </nav>
            <div className="mt-auto pt-6 border-t border-white/5">
              <Link href="/admin" className="w-full text-center block text-sm font-bold text-white/50 hover:text-teal-400 py-3 bg-white/5 rounded-xl">Switch to Admin DAO</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

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
          <NavLinks />
        </nav>
      </aside>

      <div className="flex-1 flex flex-col h-screen overflow-hidden">
        <header className="h-20 border-b border-white/5 bg-[#030705] flex items-center justify-between px-6 md:px-8 shrink-0">
          <div className="flex items-center gap-4">
            <button onClick={() => setIsMobileMenuOpen(true)} className="md:hidden p-2 -ml-2 rounded-lg hover:bg-white/5 text-white/50 hover:text-white transition-colors"><Menu className="w-6 h-6" /></button>
            <div className="hidden sm:block">
              <span className="text-teal-400 font-bold tracking-widest uppercase text-xs">Portfolio</span>
              <h2 className="text-xl font-bold leading-none mt-1">Wallet & Assets</h2>
            </div>
          </div>
          <div className="flex items-center gap-3">
             <div className="px-3 md:px-4 py-2 bg-white/5 border border-white/10 rounded-full flex items-center gap-2 text-[10px] md:text-xs font-mono font-bold">
               <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse"/> <span className="hidden sm:inline">0x46D...e38C</span><span className="sm:hidden">0x...e38C</span>
             </div>
          </div>
        </header>

        <div className="flex-1 overflow-y-auto p-4 md:p-10 space-y-6 md:space-y-8">
          {/* Top Asset KPI */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2 bg-gradient-to-br from-[#0A140F] to-[#030705] border border-white/5 rounded-[2rem] p-6 md:p-8 flex flex-col justify-between group overflow-hidden relative">
               <div className="absolute top-[-50%] right-[-10%] w-[80%] h-[150%] bg-teal-500/5 blur-[100px] rounded-full group-hover:bg-teal-500/10 transition-colors duration-700 pointer-events-none" />
               <div className="relative z-10">
                  <h2 className="text-white/40 text-[10px] md:text-xs font-bold tracking-widest uppercase mb-3 flex items-center gap-2"><Wallet className="w-4 h-4"/> Decrypted Net Worth</h2>
                  <div className="text-4xl md:text-6xl font-black tracking-tighter flex items-baseline gap-1">
                    $12,450<span className="text-2xl md:text-3xl text-teal-400 opacity-80">.00</span>
                  </div>
                  <div className="text-[10px] md:text-xs text-white/40 mt-2 font-mono flex items-center gap-2"><RefreshCw className="w-3 h-3"/> Last Synced: Just now</div>
               </div>
               <div className="flex flex-col sm:flex-row gap-3 relative z-10 mt-6 md:mt-8">
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
                <div className="text-white/40 text-[10px] md:text-xs font-bold tracking-widest uppercase mb-4 flex items-center gap-2"><Lock className="w-3 h-3 text-teal-400"/> Next Decryption</div>
                <div className="text-2xl md:text-3xl font-mono text-teal-400 tracking-tight">euint(████)</div>
                <div className="text-[10px] md:text-xs text-white/30 mt-2 font-mono">From: Zama Protocol</div>
              </div>
              <div className="mt-6">
                <div className="w-full bg-white/5 rounded-full h-2 mb-2"><div className="bg-teal-500 h-2 rounded-full w-2/3 shadow-[0_0_10px_rgba(20,184,166,0.8)]"/></div>
                <div className="text-[10px] font-bold text-white/40 uppercase tracking-widest text-right">Available in 4 Days</div>
              </div>
            </div>
          </motion.div>

          {/* Tokens List */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="bg-[#050B08] border border-white/5 rounded-[2rem] flex flex-col overflow-hidden">
             <div className="p-4 md:p-6 border-b border-white/5 flex justify-between items-center bg-white/[0.02]">
                <h3 className="text-xs md:text-sm font-bold tracking-wide flex items-center gap-2"><Activity className="w-4 h-4 text-teal-400"/> Current Holdings</h3>
             </div>
             <div className="p-2 md:p-4 space-y-2">
                <div className="flex items-center justify-between p-3 md:p-4 hover:bg-white/5 rounded-xl transition-colors cursor-pointer group">
                   <div className="flex items-center gap-3 md:gap-4">
                      <div className="w-10 h-10 rounded-full bg-blue-500/20 border border-blue-500/30 flex items-center justify-center font-bold text-blue-400 text-xs md:text-sm">USDC</div>
                      <div>
                        <div className="font-bold text-sm">USD Coin</div>
                        <div className="text-[10px] font-mono text-white/40">Base Network</div>
                      </div>
                   </div>
                   <div className="text-right">
                     <div className="font-bold font-mono text-sm md:text-base">$10,400.00</div>
                     <div className="text-[10px] md:text-xs text-white/40 font-mono">10,400 USDC</div>
                   </div>
                </div>
                
                <div className="flex items-center justify-between p-3 md:p-4 hover:bg-white/5 rounded-xl transition-colors cursor-pointer group">
                   <div className="flex items-center gap-3 md:gap-4">
                      <div className="w-10 h-10 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center font-bold text-emerald-400 text-xs md:text-sm">ETH</div>
                      <div>
                        <div className="font-bold text-sm">Ethereum</div>
                        <div className="text-[10px] font-mono text-white/40">Base Network</div>
                      </div>
                   </div>
                   <div className="text-right">
                     <div className="font-bold font-mono text-sm md:text-base">$2,050.00</div>
                     <div className="text-[10px] md:text-xs text-white/40 font-mono">0.65 ETH</div>
                   </div>
                </div>
             </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
