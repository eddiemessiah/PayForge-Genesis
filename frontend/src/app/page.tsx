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
    <main className="min-h-screen bg-[#050B08] text-white selection:bg-emerald-500/30 font-sans overflow-x-hidden">
      {/* Background Glows (Zama Style) */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-emerald-600/10 blur-[120px] rounded-full mix-blend-screen" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-teal-600/5 blur-[120px] rounded-full mix-blend-screen" />
      </div>

      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#050B08]/80 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center shadow-[0_0_20px_rgba(16,185,129,0.2)]">
              <Shield className="w-4 h-4 text-[#050B08]" />
            </div>
            <span className="text-xl font-bold tracking-tight text-white">ZamaPay</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-white/60">
            <Link href="#features" className="hover:text-emerald-400 transition-colors">Platform</Link>
            <Link href="#compare" className="hover:text-emerald-400 transition-colors">Vs Legacy</Link>
            <Link href="/docs" className="hover:text-emerald-400 transition-colors">Documentation</Link>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/employee" className="text-sm font-medium text-white/70 hover:text-white transition-colors hidden sm:block">
              Employee Portal
            </Link>
            <Link href="/admin" className="text-sm font-medium bg-white text-black px-5 py-2.5 rounded-full hover:bg-emerald-50 hover:text-black transition-all flex items-center gap-2">
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
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-xs font-semibold tracking-wide text-emerald-400 uppercase">FHE Powered HR Infrastructure</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-[6rem] font-bold tracking-tighter leading-[1.05] mb-8 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60"
          >
            Confidential Payroll <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-teal-500">
              For The Frontier.
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-white/50 max-w-3xl mx-auto mb-12 leading-relaxed"
          >
            Stop leaking your cap table to the blockchain. ZamaPay replaces legacy HR and opaque multisigs with a fully homomorphic, trustless payroll engine.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link href="/admin" className="w-full sm:w-auto px-8 py-4 rounded-full bg-emerald-500 text-[#050B08] font-bold hover:scale-105 transition-transform flex items-center justify-center gap-2">
              Deploy Payroll Contract <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/docs" className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/5 text-white border border-white/10 font-semibold hover:bg-white/10 transition-all flex items-center justify-center gap-2">
              Read the Docs
            </Link>
          </motion.div>
        </section>

        {/* Modular Stack Section (Zama Green Theme) */}
        <section id="stack" className="max-w-7xl mx-auto px-6 py-24">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[280px]">
            {/* Zama Bento */}
            <div className="md:col-span-2 md:row-span-2 bg-[#0A140F] border border-emerald-500/20 rounded-[2rem] p-10 flex flex-col justify-between group hover:border-emerald-500/50 transition-colors relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 blur-[80px] rounded-full pointer-events-none" />
              <div className="relative z-10">
                <Lock className="w-10 h-10 text-emerald-400 mb-6" />
                <h3 className="text-3xl font-bold mb-4 text-white">Zama fhEVM <br/>Confidentiality</h3>
                <p className="text-white/60 text-lg leading-relaxed">
                  We utilize Zama's Fully Homomorphic Encryption to store salary amounts as `euint64`. The smart contract can process payroll, add bonuses, and calculate runway without ever decrypting the numbers on-chain.
                </p>
              </div>
              <div className="relative z-10 h-32 w-full bg-[#050B08] rounded-xl border border-white/5 flex items-center justify-center font-mono text-sm text-emerald-400/80 overflow-hidden shadow-inner">
                 _encryptedSalaries[employee] = euint64(tfhe.encrypt(5000))
              </div>
            </div>

            {/* Filecoin Bento */}
            <div className="md:col-span-2 bg-[#0A140F] border border-white/5 rounded-[2rem] p-8 flex flex-col justify-between group hover:border-emerald-500/30 transition-colors">
              <div className="flex justify-between items-start">
                <Database className="w-8 h-8 text-teal-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Immutable Payslips</h3>
                <p className="text-white/50">
                  Encrypted JSON payslips are uploaded via Storacha and pinned permanently to Filecoin for trustless compliance.
                </p>
              </div>
            </div>

            {/* World App Bento */}
            <div className="md:col-span-2 bg-[#0A140F] border border-white/5 rounded-[2rem] p-8 flex flex-col justify-between group hover:border-blue-500/30 transition-colors">
              <div className="flex justify-between items-start">
                <Globe className="w-8 h-8 text-blue-400" />
                <span className="text-xs font-bold tracking-widest text-blue-400 uppercase bg-blue-400/10 px-3 py-1 rounded-full">World App MiniKit</span>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">World ID Sybil Resistance</h3>
                <p className="text-white/50">
                  Ensure 1-person-1-salary for remote DAOs using World ID verification embedded directly via World App Mini-apps.
                </p>
              </div>
            </div>
          </div>
        </section>

      </div>
    </main>
  );
}
