"use client";

import { useState } from "react";
import Link from "next/link";
import { Lock, Activity, Wallet, Globe, CheckCircle2, Menu, Bell, ChevronRight, Shield, Fingerprint, ScanFace, Loader2 } from "lucide-react";

export default function WorldIDPage() {
  const [verifyState, setVerifyState] = useState<"idle" | "scanning" | "generating_zkp" | "verified">("idle");

  const handleVerify = () => {
    setVerifyState("scanning");
    setTimeout(() => {
      setVerifyState("generating_zkp");
      setTimeout(() => {
        setVerifyState("verified");
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
          <Link href="/employee" className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-white/50 hover:bg-white/5 hover:text-white transition-all">
            <Activity className="w-5 h-5" />
            <span className="text-sm font-bold tracking-wide">Paystreams</span>
          </Link>
          <Link href="/employee/wallet" className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-white/50 hover:bg-white/5 hover:text-white transition-all">
            <Wallet className="w-5 h-5" />
            <span className="text-sm font-bold tracking-wide">Wallet & Assets</span>
          </Link>
          <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl bg-teal-500/10 text-teal-400 border border-teal-500/20 transition-all">
            <Globe className="w-5 h-5" />
            <span className="text-sm font-bold tracking-wide">World ID</span>
          </button>
        </nav>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-h-screen">
        <header className="h-20 border-b border-white/5 bg-[#030705] flex items-center justify-between px-8 sticky top-0 z-40 shrink-0">
          <div className="flex items-center gap-4">
            <button className="md:hidden p-2 -ml-2 rounded-lg hover:bg-white/5 text-white/50 hover:text-white transition-colors"><Menu className="w-6 h-6" /></button>
            <div className="hidden sm:block">
              <span className="text-teal-400 font-bold tracking-widest uppercase text-xs">Identity Verification</span>
              <h2 className="text-xl font-bold leading-none mt-1">World ID Settings</h2>
            </div>
          </div>
        </header>

        <div className="p-6 md:p-10 max-w-4xl w-full mx-auto space-y-8 flex-1">
          <div className="bg-[#0A0E0C] border border-white/5 rounded-[2rem] p-8 md:p-12 relative overflow-hidden group">
            <div className="absolute top-[-50%] right-[-10%] w-[80%] h-[150%] bg-blue-500/5 blur-[100px] rounded-full group-hover:bg-blue-500/10 transition-colors duration-700 pointer-events-none" />
            
            <div className="relative z-10 flex flex-col items-center text-center space-y-6">
              <div className={`w-24 h-24 rounded-3xl flex items-center justify-center shadow-inner transition-all duration-500 ${verifyState === 'verified' ? 'bg-teal-500/20 border border-teal-500/40 text-teal-400 shadow-[0_0_30px_rgba(20,184,166,0.3)]' : 'bg-blue-500/20 border border-blue-500/40 text-blue-400 shadow-[0_0_30px_rgba(59,130,246,0.3)]'}`}>
                {verifyState === 'idle' && <Globe className="w-12 h-12" />}
                {verifyState === 'scanning' && <ScanFace className="w-12 h-12 animate-pulse" />}
                {verifyState === 'generating_zkp' && <Fingerprint className="w-12 h-12 animate-bounce" />}
                {verifyState === 'verified' && <CheckCircle2 className="w-12 h-12" />}
              </div>
              
              <div>
                <h1 className="text-3xl font-black text-white mb-2">Proof of Personhood</h1>
                <p className="text-white/50 max-w-md mx-auto">
                  {verifyState === 'idle' && "Connect your World App to generate a Zero-Knowledge Proof (ZKP). This ensures encrypted paystreams are claimed by unique humans, preventing Sybil attacks."}
                  {verifyState === 'scanning' && "Waiting for World App confirmation..."}
                  {verifyState === 'generating_zkp' && "Generating Zero-Knowledge Proof locally. Your biometrics never leave your device."}
                  {verifyState === 'verified' && "Successfully verified. Your World ID is now linked to your ZamaPay account via an on-chain ZKP."}
                </p>
              </div>

              {verifyState === 'idle' && (
                <button onClick={handleVerify} className="bg-blue-500 text-[#030705] px-8 py-4 rounded-full font-bold text-sm hover:scale-105 transition-transform flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(59,130,246,0.3)] mt-4">
                  Verify with World App <Shield className="w-4 h-4" />
                </button>
              )}

              {(verifyState === 'scanning' || verifyState === 'generating_zkp') && (
                <div className="bg-blue-500/10 border border-blue-500/20 text-blue-400 px-8 py-4 rounded-full font-bold text-sm flex items-center justify-center gap-3 mt-4">
                  <Loader2 className="w-4 h-4 animate-spin" /> 
                  {verifyState === 'scanning' ? "Awaiting Orb/App..." : "Computing ZK-Proof..."}
                </div>
              )}

              {verifyState === 'verified' && (
                <div className="bg-teal-500/10 border border-teal-500/20 text-teal-400 px-8 py-4 rounded-full font-bold text-sm flex items-center justify-center gap-2 mt-4">
                  <CheckCircle2 className="w-4 h-4" /> Identity Verified (Nullifier Hash: 0x8f...3c2a)
                </div>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[#0A0E0C] border border-white/5 rounded-[2rem] p-8">
              <h3 className="text-white font-bold mb-4 flex items-center gap-2"><Lock className="w-4 h-4 text-blue-400"/> Privacy Preserved</h3>
              <p className="text-sm text-white/50 leading-relaxed">
                ZamaPay uses World ID's anonymous actions. We only store a cryptographic nullifier hash. Your real identity, biometrics, and World ID are mathematically decoupled from your wallet address.
              </p>
            </div>
            <div className="bg-[#0A0E0C] border border-white/5 rounded-[2rem] p-8">
              <h3 className="text-white font-bold mb-4 flex items-center gap-2"><Activity className="w-4 h-4 text-emerald-400"/> Gasless Claims</h3>
              <p className="text-sm text-white/50 leading-relaxed">
                Once verified, DAOs sponsor the gas fees for your encrypted salary claims via ERC-4337 Account Abstraction. The ZKP is passed directly to the Paymster.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
