"use client";

import Link from "next/link";
import { ArrowRight, Shield, Globe, Lock, Cpu, EyeOff, LayoutDashboard, Users, Activity } from "lucide-react";

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-[#030705] text-white selection:bg-emerald-500/30 overflow-hidden relative">
      {/* Background Glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-emerald-500/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-teal-500/10 blur-[150px] rounded-full pointer-events-none" />
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#030705]/60 backdrop-blur-2xl">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center">
              <Lock className="w-4 h-4 text-[#030705] fill-current" />
            </div>
            <span className="text-xl font-bold tracking-tight text-white">ZamaPay</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-white/60">
            <a href="#features" className="hover:text-emerald-400 transition-colors">Platform</a>
            <a href="#security" className="hover:text-emerald-400 transition-colors">Security</a>
            <a href="#bento" className="hover:text-emerald-400 transition-colors">Architecture</a>
          </div>

          <div className="flex items-center gap-4">
            <Link href="/employee" className="text-sm font-bold text-white/60 hover:text-white transition-colors hidden sm:block">
              Contributor Login
            </Link>
            <Link href="/admin" className="bg-emerald-500 text-[#030705] px-5 py-2.5 rounded-full font-bold text-sm hover:scale-105 transition-transform shadow-[0_0_20px_rgba(16,185,129,0.3)] flex items-center gap-2">
              Launch App <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-40 pb-20 px-6 max-w-7xl mx-auto flex flex-col items-center text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-xs font-bold tracking-widest uppercase mb-8">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" /> FHE-Powered Payroll
        </div>
        <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-6 leading-[1.1]">
          Decentralized <br className="hidden md:block"/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-400 to-emerald-500">
            Confidential Payroll
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-white/50 max-w-3xl mb-12 font-medium">
          The first institutional-grade DAO treasury management system built on Zama's Fully Homomorphic Encryption. Total privacy meets on-chain verifyability.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center">
          <Link href="/admin" className="w-full sm:w-auto bg-white text-[#030705] px-8 py-4 rounded-full font-bold text-lg hover:bg-emerald-50 transition-colors flex items-center justify-center gap-2">
            Start Building <LayoutDashboard className="w-5 h-5" />
          </Link>
          <Link href="/employee" className="w-full sm:w-auto bg-white/5 border border-white/10 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-colors flex items-center justify-center gap-2">
            Employee Portal <Users className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Bento Grid Architecture */}
      <section id="bento" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-4">Institutional-Grade Architecture</h2>
          <p className="text-white/50 text-lg max-w-2xl">A high-density financial ecosystem engineered for privacy and trust.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[280px]">
          {/* Card 1: FHE */}
          <div className="md:col-span-2 bg-gradient-to-br from-[#0A140F] to-[#050B08] border border-white/5 rounded-[2rem] p-8 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 blur-[80px] rounded-full pointer-events-none group-hover:bg-emerald-500/20 transition-all duration-700" />
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div>
                <Lock className="w-8 h-8 text-emerald-400 mb-4" />
                <h3 className="text-2xl font-bold mb-2">Zama TFHE Integration</h3>
                <p className="text-white/50 max-w-md">Compute on encrypted data directly on-chain. Salary allocations, cap tables, and outflows remain mathematically confidential while verifiable.</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="font-mono text-xs text-emerald-400 bg-emerald-500/10 px-3 py-1.5 rounded-lg border border-emerald-500/20">euint64(encrypted)</div>
                <ArrowRight className="w-4 h-4 text-white/30" />
                <div className="font-mono text-xs text-white/80 bg-white/5 px-3 py-1.5 rounded-lg border border-white/10">Decrypted claim</div>
              </div>
            </div>
          </div>

          {/* Card 2: World ID */}
          <div className="bg-gradient-to-br from-[#0A140F] to-[#050B08] border border-white/5 rounded-[2rem] p-8 relative overflow-hidden group">
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div>
                <Globe className="w-8 h-8 text-blue-400 mb-4" />
                <h3 className="text-2xl font-bold mb-2">Sybil Resistance</h3>
                <p className="text-white/50 text-sm">Powered by World ID to ensure 1 human = 1 claim. Eliminate bot farming in DAO contributor payments.</p>
              </div>
              <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
                <div className="w-[85%] h-full bg-blue-500 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.8)]" />
              </div>
            </div>
          </div>

          {/* Card 3: Storage */}
          <div className="bg-gradient-to-br from-[#0A140F] to-[#050B08] border border-white/5 rounded-[2rem] p-8 relative overflow-hidden group">
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div>
                <Cpu className="w-8 h-8 text-teal-400 mb-4" />
                <h3 className="text-xl font-bold mb-2">Decentralized Storage</h3>
                <p className="text-white/50 text-sm">Immutable payslips pinned via Storacha/IPFS.</p>
              </div>
              <div className="text-xs font-mono text-white/40 truncate">CID: bafybeig...qxq</div>
            </div>
          </div>

          {/* Card 4: High-density dashboard */}
          <div className="md:col-span-2 bg-gradient-to-br from-[#0A140F] to-[#050B08] border border-white/5 rounded-[2rem] p-8 relative overflow-hidden group">
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div className="flex justify-between items-start">
                <div>
                  <EyeOff className="w-8 h-8 text-emerald-400 mb-4" />
                  <h3 className="text-2xl font-bold mb-2">Dark Pool Operations</h3>
                  <p className="text-white/50 max-w-md">Multi-panel administrative layouts for treasury managers. View encrypted cap tables and manage payroll outflows securely.</p>
                </div>
                <div className="hidden sm:flex space-x-2">
                  <div className="w-20 h-2 bg-emerald-500/20 rounded-full overflow-hidden relative">
                    <div className="absolute top-0 left-0 w-1/2 h-full bg-emerald-500 animate-pulse" />
                  </div>
                  <div className="w-8 h-2 bg-white/10 rounded-full" />
                </div>
              </div>
              <div className="flex items-center gap-4 border-t border-white/10 pt-4 mt-4">
                <Activity className="w-4 h-4 text-emerald-400" />
                <span className="text-sm font-medium">Real-time Encrypted Processing</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 py-12 px-6 bg-[#050B08]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <Lock className="w-5 h-5 text-emerald-500" />
            <span className="text-lg font-bold tracking-tight text-white">ZamaPay</span>
          </div>
          <div className="text-white/40 text-sm">
            © 2026 ZamaPay. Built for the privacy-first web3 ecosystem.
          </div>
          <div className="flex items-center gap-6 text-sm font-medium text-white/40">
            <Link href="/admin" className="hover:text-emerald-400 transition-colors">Admin Dashboard</Link>
            <Link href="/employee" className="hover:text-emerald-400 transition-colors">Contributor Portal</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
