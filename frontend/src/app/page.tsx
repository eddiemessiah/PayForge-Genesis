"use client";

import Link from "next/link";
import { Shield, ArrowRight, EyeOff, Globe2, Sparkles, Building2, ChevronRight, Fingerprint, LockKeyhole } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function LandingPage() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: targetRef, offset: ["start end", "end start"] });
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);

  return (
    <main className="min-h-screen bg-[#050505] text-[#FAFAFA] font-sans selection:bg-emerald-500/30 overflow-x-hidden">
      
      {/* Ambient Architectural Gradients */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] opacity-[0.15] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-emerald-400 via-[#050505] to-[#050505] blur-[100px]" />
      </div>

      {/* Ultra-Minimal Nav */}
      <nav className="fixed top-0 w-full z-50 border-b border-white/[0.04] bg-[#050505]/70 backdrop-blur-2xl">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-b from-emerald-400 to-teal-600 flex items-center justify-center shadow-[0_0_30px_rgba(52,211,153,0.3)]">
              <Shield className="w-4 h-4 text-[#050505]" />
            </div>
            <span className="text-xl font-bold tracking-tight">ZamaPay</span>
          </div>
          
          <div className="hidden lg:flex items-center gap-10">
            <Link href="#features" className="text-sm font-medium text-white/50 hover:text-white transition-colors">Platform</Link>
            <Link href="#developers" className="text-sm font-medium text-white/50 hover:text-white transition-colors">Developers</Link>
            <Link href="/docs" className="text-sm font-medium text-white/50 hover:text-white transition-colors">Documentation</Link>
          </div>

          <div className="flex items-center gap-4">
            <Link href="/employee" className="text-sm font-medium text-white/50 hover:text-white transition-colors hidden md:block">
              Contributor Login
            </Link>
            <Link href="/admin" className="text-sm font-medium bg-white text-black px-6 py-2.5 rounded-full hover:scale-105 transition-all flex items-center gap-2">
              Launch App <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </nav>

      {/* Architectural Hero */}
      <section className="relative z-10 pt-40 pb-32 max-w-[1400px] mx-auto px-6 lg:px-12 flex flex-col items-center text-center">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] border border-white/[0.08] mb-12 backdrop-blur-md"
        >
          <Sparkles className="w-4 h-4 text-emerald-400" />
          <span className="text-xs font-medium tracking-wide text-white/80">Built for PL Genesis Hackathon</span>
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-6xl md:text-8xl lg:text-[7rem] font-bold tracking-tighter leading-[1.02] mb-8"
        >
          Payroll, <span className="text-white/30">Encrypted.</span><br/>
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-600">
            Organizations, Unlocked.
          </span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-xl md:text-2xl text-white/40 max-w-3xl mx-auto mb-14 leading-relaxed font-light"
        >
          Stop broadcasting your cap table. ZamaPay uses Fully Homomorphic Encryption to run trustless, on-chain payroll where salary data remains completely mathematically hidden.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
        >
          <Link href="/admin" className="w-full sm:w-auto px-10 py-5 rounded-full bg-emerald-500 text-black font-bold text-lg hover:bg-emerald-400 transition-colors flex items-center justify-center gap-2 group shadow-[0_0_40px_rgba(52,211,153,0.2)]">
            Deploy Factory <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link href="/docs" className="w-full sm:w-auto px-10 py-5 rounded-full bg-white/[0.03] text-white border border-white/[0.08] font-medium text-lg hover:bg-white/[0.08] transition-colors flex items-center justify-center gap-2">
            Read Documentation
          </Link>
        </motion.div>

        {/* Abstract UI Preview */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="w-full mt-32 relative"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent z-10" />
          <div className="aspect-[21/9] w-full rounded-[2.5rem] border border-white/[0.08] bg-[#0A0A0A] overflow-hidden relative shadow-2xl flex flex-col">
            <div className="h-16 border-b border-white/[0.05] flex items-center px-8 gap-4">
              <div className="flex gap-2"><div className="w-3 h-3 rounded-full bg-white/10"/><div className="w-3 h-3 rounded-full bg-white/10"/><div className="w-3 h-3 rounded-full bg-white/10"/></div>
            </div>
            <div className="flex-1 p-12 grid grid-cols-3 gap-8">
               <div className="col-span-2 bg-white/[0.02] rounded-3xl border border-white/[0.04] p-8 flex flex-col justify-between">
                  <div>
                    <div className="w-12 h-12 rounded-full bg-emerald-500/10 flex items-center justify-center mb-6"><LockKeyhole className="w-6 h-6 text-emerald-400"/></div>
                    <div className="text-white/40 text-sm mb-2">Encrypted Outflow</div>
                    <div className="text-4xl font-mono text-emerald-400">euint64(████████)</div>
                  </div>
                  <div className="h-2 w-full bg-white/[0.05] rounded-full overflow-hidden"><div className="h-full w-2/3 bg-emerald-500 rounded-full"/></div>
               </div>
               <div className="bg-white/[0.02] rounded-3xl border border-white/[0.04] p-8 flex flex-col gap-4">
                  {[1,2,3].map(i => (
                    <div key={i} className="h-16 w-full rounded-xl bg-white/[0.03] border border-white/[0.02] flex items-center px-4 gap-4">
                      <div className="w-8 h-8 rounded-full bg-white/10"/>
                      <div className="flex-1"><div className="h-2 w-1/2 bg-white/20 rounded-full mb-2"/><div className="h-2 w-1/3 bg-white/10 rounded-full"/></div>
                    </div>
                  ))}
               </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Feature Bento */}
      <section ref={targetRef} className="max-w-[1400px] mx-auto px-6 lg:px-12 py-32 border-t border-white/[0.04]">
        <div className="mb-20">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-6">Built on the modular frontier.</h2>
          <p className="text-xl text-white/40 max-w-2xl">ZamaPay integrates the best-in-class primitives for privacy, decentralized storage, and Sybil resistance.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[300px]">
          
          {/* Zama */}
          <div className="md:col-span-8 bg-gradient-to-br from-white/[0.03] to-transparent border border-white/[0.06] rounded-[2rem] p-10 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 blur-[100px] rounded-full pointer-events-none transition-opacity group-hover:opacity-100 opacity-50" />
            <div className="relative z-10 flex flex-col h-full justify-between">
              <div>
                <LockKeyhole className="w-10 h-10 text-emerald-400 mb-6" />
                <h3 className="text-3xl font-bold mb-3">Zama fhEVM</h3>
                <p className="text-white/50 text-lg max-w-lg">Using TFHE.sol, salaries are encrypted as 64-bit unsigned integers. The contract executes payroll without decrypting the values.</p>
              </div>
            </div>
          </div>

          {/* World App */}
          <div className="md:col-span-4 bg-white/[0.02] border border-white/[0.06] rounded-[2rem] p-10 relative overflow-hidden group hover:border-blue-500/30 transition-colors">
            <div className="relative z-10 flex flex-col h-full justify-between">
              <Fingerprint className="w-10 h-10 text-blue-400 mb-6" />
              <div>
                <h3 className="text-2xl font-bold mb-3">World ID Sybil Resistance</h3>
                <p className="text-white/50">Verify human contributors instantly via the World App MiniKit.</p>
              </div>
            </div>
          </div>

          {/* Protocol Labs */}
          <div className="md:col-span-5 bg-white/[0.02] border border-white/[0.06] rounded-[2rem] p-10 relative overflow-hidden group hover:border-teal-500/30 transition-colors">
            <div className="relative z-10 flex flex-col h-full justify-between">
              <Database className="w-10 h-10 text-teal-400 mb-6" />
              <div>
                <h3 className="text-2xl font-bold mb-3">Protocol Labs Storage</h3>
                <p className="text-white/50">Encrypted JSON payslips pinned immutably to Filecoin via Storacha.</p>
              </div>
            </div>
          </div>

          {/* Legacy Replacement */}
          <div className="md:col-span-7 bg-white/[0.02] border border-white/[0.06] rounded-[2rem] p-10 relative overflow-hidden flex items-center justify-center">
            <div className="w-full max-w-md space-y-4">
               <div className="flex items-center justify-between text-sm"><span className="text-white/50">Legacy Web2 HR</span><span className="text-red-400">Centralized</span></div>
               <div className="flex items-center justify-between text-sm"><span className="text-white/50">Standard Multisig</span><span className="text-orange-400">Public Salaries</span></div>
               <div className="w-full h-px bg-white/10 my-4" />
               <div className="flex items-center justify-between font-bold"><span className="text-white">ZamaPay Engine</span><span className="text-emerald-400">100% Trustless & Private</span></div>
            </div>
          </div>

        </div>
      </section>

    </main>
  );
}
