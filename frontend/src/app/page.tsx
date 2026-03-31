"use client";

import Link from "next/link";
import { 
  Shield, 
  Database, 
  Brain, 
  ArrowRight, 
  Lock, 
  CheckCircle2, 
  Zap, 
  Globe, 
  FileText, 
  EyeOff, 
  Building2 
} from "lucide-react";
import { motion } from "framer-motion";

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white selection:bg-violet-500/30 font-sans overflow-x-hidden">
      {/* Background Glows */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-violet-600/20 blur-[120px] rounded-full mix-blend-screen" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-fuchsia-600/10 blur-[120px] rounded-full mix-blend-screen" />
      </div>

      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#050505]/60 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center shadow-[0_0_20px_rgba(139,92,246,0.3)]">
              <Shield className="w-4 h-4 text-white" />
            </div>
            <span className="text-xl font-bold tracking-tight text-white">PayForge</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-white/60">
            <a href="#features" className="hover:text-white transition-colors">Platform</a>
            <a href="#compare" className="hover:text-white transition-colors">Vs Legacy</a>
            <a href="#stack" className="hover:text-white transition-colors">Technology</a>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/employee" className="text-sm font-medium text-white/70 hover:text-white transition-colors hidden sm:block">
              Employee Portal
            </Link>
            <Link href="/admin" className="text-sm font-medium bg-white text-black px-5 py-2.5 rounded-full hover:bg-white/90 transition-all flex items-center gap-2">
              Launch DAO App <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </nav>

      <div className="relative z-10 pt-32">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-6 pt-20 pb-32 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-violet-500 animate-pulse" />
            <span className="text-xs font-semibold tracking-wide text-white/80 uppercase">PL Genesis Hackathon MVP</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-[5.5rem] font-bold tracking-tighter leading-[1.1] mb-8 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60"
          >
            Confidential Payroll <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-fuchsia-400">
              For The Frontier.
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-white/50 max-w-3xl mx-auto mb-12 leading-relaxed"
          >
            Stop leaking your cap table to the blockchain. PayForge replaces legacy HR and opaque multisigs with a fully homomorphic, trustless payroll engine powered by Zama and Protocol Labs.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link href="/admin" className="w-full sm:w-auto px-8 py-4 rounded-full bg-white text-black font-semibold hover:scale-105 transition-transform flex items-center justify-center gap-2">
              Deploy Payroll Contract <ArrowRight className="w-4 h-4" />
            </Link>
            <a href="https://github.com/eddiemessiah/PayForge-Genesis" target="_blank" className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/5 text-white border border-white/10 font-semibold hover:bg-white/10 transition-all flex items-center justify-center gap-2">
              View on GitHub
            </a>
          </motion.div>
        </section>

        {/* Real World Replacement Section */}
        <section id="compare" className="max-w-7xl mx-auto px-6 py-24 border-t border-white/5">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Replacing Institutional Legacy</h2>
            <p className="text-white/50 text-lg max-w-2xl mx-auto">Why DAOs and Web3 startups are migrating to PayForge.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Web2 */}
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm">
              <div className="w-12 h-12 rounded-xl bg-red-500/10 flex items-center justify-center mb-6">
                <Building2 className="w-6 h-6 text-red-400" />
              </div>
              <h3 className="text-xl font-bold mb-4">Web2 SaaS (Deel/Gusto)</h3>
              <ul className="space-y-4 text-white/60">
                <li className="flex items-start gap-3"><span className="text-red-400 mt-1">✕</span> Centralized custody of funds</li>
                <li className="flex items-start gap-3"><span className="text-red-400 mt-1">✕</span> High processing fees & FX spreads</li>
                <li className="flex items-start gap-3"><span className="text-red-400 mt-1">✕</span> Hostile to anonymous Web3 contributors</li>
              </ul>
            </div>

            {/* Trad Web3 */}
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm">
              <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center mb-6">
                <Globe className="w-6 h-6 text-orange-400" />
              </div>
              <h3 className="text-xl font-bold mb-4">Standard Multisigs</h3>
              <ul className="space-y-4 text-white/60">
                <li className="flex items-start gap-3"><span className="text-orange-400 mt-1">✕</span> Zero privacy (salaries public on-chain)</li>
                <li className="flex items-start gap-3"><span className="text-orange-400 mt-1">✕</span> Creates internal HR drama and leverage</li>
                <li className="flex items-start gap-3"><span className="text-orange-400 mt-1">✕</span> Manual execution for every payment</li>
              </ul>
            </div>

            {/* PayForge */}
            <div className="bg-gradient-to-b from-violet-500/20 to-transparent border border-violet-500/30 rounded-3xl p-8 backdrop-blur-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-violet-500/20 blur-3xl rounded-full" />
              <div className="w-12 h-12 rounded-xl bg-violet-500 flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(139,92,246,0.5)]">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">PayForge Engine</h3>
              <ul className="space-y-4 text-white/80">
                <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-violet-400 shrink-0 mt-0.5" /> FHE encrypted salaries (100% private)</li>
                <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-violet-400 shrink-0 mt-0.5" /> Immutable Filecoin payslips</li>
                <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-violet-400 shrink-0 mt-0.5" /> Trustless, automated smart contract execution</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Bento Grid Features */}
        <section id="stack" className="max-w-7xl mx-auto px-6 py-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">The Modular Stack</h2>
            <p className="text-white/50 text-lg max-w-2xl mx-auto">Built on the bleeding edge of cryptography and decentralized storage.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[280px]">
            {/* Zama Bento */}
            <div className="md:col-span-2 md:row-span-2 bg-[#0A0A0A] border border-white/10 rounded-3xl p-10 flex flex-col justify-between group hover:border-violet-500/50 transition-colors">
              <div>
                <Lock className="w-10 h-10 text-violet-400 mb-6" />
                <h3 className="text-3xl font-bold mb-4">Zama fhEVM <br/>Confidentiality</h3>
                <p className="text-white/50 text-lg leading-relaxed">
                  We utilize Zama's Fully Homomorphic Encryption to store salary amounts as `euint64`. The smart contract can process payroll, add bonuses, and calculate runway without ever decrypting the numbers on-chain.
                </p>
              </div>
              <div className="h-32 w-full bg-[#111] rounded-xl border border-white/5 flex items-center justify-center font-mono text-sm text-violet-400/80 overflow-hidden relative">
                 <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20"></div>
                 _encryptedSalaries[employee] = euint64(tfhe.encrypt(5000))
              </div>
            </div>

            {/* Filecoin Bento */}
            <div className="md:col-span-2 bg-[#0A0A0A] border border-white/10 rounded-3xl p-8 flex flex-col justify-between group hover:border-blue-500/50 transition-colors">
              <div className="flex justify-between items-start">
                <Database className="w-8 h-8 text-blue-400" />
                <span className="text-xs font-bold tracking-widest text-blue-400 uppercase bg-blue-400/10 px-3 py-1 rounded-full">Protocol Labs</span>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Immutable Payslips</h3>
                <p className="text-white/50">
                  Heavy HR data is offloaded from the chain. Encrypted JSON payslips are uploaded via Storacha and pinned permanently to Filecoin.
                </p>
              </div>
            </div>

            {/* AI Agent Bento */}
            <div className="md:col-span-2 bg-[#0A0A0A] border border-white/10 rounded-3xl p-8 flex flex-col justify-between group hover:border-emerald-500/50 transition-colors">
              <div className="flex justify-between items-start">
                <Brain className="w-8 h-8 text-emerald-400" />
                <span className="text-xs font-bold tracking-widest text-emerald-400 uppercase bg-emerald-400/10 px-3 py-1 rounded-full">0G Compute</span>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">AI Treasury Forecasting</h3>
                <p className="text-white/50">
                  Our autonomous agent analyzes encrypted total outflow to forecast DAO runway, preserving individual contributor privacy.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="max-w-4xl mx-auto px-6 py-32 text-center">
          <div className="bg-gradient-to-br from-violet-600/20 to-fuchsia-600/20 border border-violet-500/30 rounded-[3rem] p-16 backdrop-blur-xl relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10"></div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-white relative z-10">Ready to secure your treasury?</h2>
            <p className="text-white/70 text-lg mb-10 max-w-xl mx-auto relative z-10">
              Deploy your DAO's confidential payroll contract today. No signups. No KYC. Just pure cryptography.
            </p>
            <Link href="/admin" className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-black font-bold text-lg hover:scale-105 transition-transform shadow-[0_0_40px_rgba(255,255,255,0.3)] relative z-10">
              Initialize Factory <Zap className="w-5 h-5 text-violet-600" />
            </Link>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-white/5 py-12 text-center text-white/40 text-sm">
          <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 font-bold text-white/80">
              <Shield className="w-4 h-4" /> PayForge
            </div>
            <p>Built for the PL Genesis: Frontiers of Collaboration Hackathon</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">GitHub</a>
              <a href="#" className="hover:text-white transition-colors">Devpost</a>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}
