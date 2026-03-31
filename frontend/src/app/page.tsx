import Link from "next/link";
import { ArrowRight, Shield, Wallet } from "lucide-react";

export default function Home() {
  return (
    <main className="flex-1 flex flex-col items-center justify-center p-6 sm:p-12 md:p-24 relative overflow-hidden">
      {/* Premium ambient gradient background */}
      <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-[oklch(0.6_0.2_250)]/20 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-[oklch(0.6_0.2_290)]/20 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="z-10 text-center max-w-[65ch] space-y-8">
        <h1 className="text-5xl md:text-6xl font-semibold tracking-tight leading-tight">
          Decentralized Payroll, <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[oklch(0.85_0.15_250)] to-[oklch(0.75_0.1_200)]">
            Forged for Web3
          </span>
        </h1>
        
        <p className="text-[oklch(0.7_0.02_250)] text-lg md:text-xl leading-relaxed">
          PayForge simplifies DAO compensation. Securely manage deposits, encrypt salaries, 
          and empower contributors to claim their funds seamlessly.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8">
          <Link 
            href="/admin" 
            className="group w-full sm:w-auto flex items-center justify-center gap-3 bg-[oklch(0.4_0.15_250)] hover:bg-[oklch(0.5_0.15_250)] text-white px-8 py-4 rounded-xl font-medium transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-0.5"
          >
            <Shield className="w-5 h-5" />
            Admin Dashboard
            <ArrowRight className="w-4 h-4 opacity-70 group-hover:translate-x-1 transition-transform" />
          </Link>
          
          <Link 
            href="/employee" 
            className="group w-full sm:w-auto flex items-center justify-center gap-3 bg-white/[0.03] hover:bg-white/[0.06] border border-white/10 text-white px-8 py-4 rounded-xl font-medium transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] backdrop-blur-md hover:border-white/20"
          >
            <Wallet className="w-5 h-5" />
            Employee Portal
            <ArrowRight className="w-4 h-4 opacity-70 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </main>
  );
}