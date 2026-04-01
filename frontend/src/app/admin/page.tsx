"use client";

import { useState } from "react";
import { 
  Users, Wallet, LayoutDashboard, Settings, Plus, Activity,
  Lock, FileText, ChevronRight, Search, Menu, Bell
} from "lucide-react";
import Link from "next/link";

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <main className="min-h-screen bg-[#050B08] text-white selection:bg-emerald-500/30 flex">
      {/* Sidebar Navigation */}
      <aside className="w-64 border-r border-white/5 bg-[#050B08]/80 backdrop-blur-xl flex flex-col hidden md:flex">
        <div className="h-20 flex items-center px-6 border-b border-white/5">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center">
              <Lock className="w-4 h-4 text-[#050B08]" />
            </div>
            <span className="text-xl font-bold tracking-tight text-white">ZamaPay</span>
          </Link>
        </div>
        <nav className="flex-1 px-4 py-8 space-y-2">
          {["overview", "employees", "treasury", "settings"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                activeTab === tab 
                  ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20" 
                  : "text-white/50 hover:bg-white/5 hover:text-white"
              }`}
            >
              {tab === "overview" && <LayoutDashboard className="w-5 h-5" />}
              {tab === "employees" && <Users className="w-5 h-5" />}
              {tab === "treasury" && <Wallet className="w-5 h-5" />}
              {tab === "settings" && <Settings className="w-5 h-5" />}
              <span className="capitalize text-sm font-bold tracking-wide">{tab}</span>
            </button>
          ))}
        </nav>
        <div className="p-4 border-t border-white/5">
          <div className="bg-[#0A140F] border border-white/5 p-4 rounded-2xl flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-emerald-500" />
            <div>
              <div className="text-sm font-bold">0x89F...A2C</div>
              <div className="text-xs text-emerald-400">Connected</div>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col h-screen overflow-y-auto">
        
        {/* Top Header */}
        <header className="h-20 border-b border-white/5 bg-[#050B08] flex items-center justify-between px-8 sticky top-0 z-40">
          <div className="flex items-center gap-4">
            <button className="md:hidden"><Menu className="w-6 h-6 text-white/50" /></button>
            <div className="bg-[#0A140F] border border-white/5 rounded-full px-4 py-2 flex items-center gap-2 hidden sm:flex">
              <Search className="w-4 h-4 text-white/40" />
              <input type="text" placeholder="Search transactions..." className="bg-transparent border-none outline-none text-sm text-white w-64" />
            </div>
          </div>
          <div className="flex items-center gap-6">
            <button className="relative">
              <Bell className="w-5 h-5 text-white/50 hover:text-white transition-colors" />
              <span className="absolute top-0 right-0 w-2 h-2 bg-emerald-500 rounded-full border border-[#050B08]" />
            </button>
            <Link href="/" className="text-sm font-bold text-white/50 hover:text-emerald-400 transition-colors flex items-center gap-2">
              Exit App <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </header>

        {/* Dashboard Body */}
        <div className="p-8 max-w-7xl mx-auto w-full space-y-8">
          
          {/* Treasury Overview */}
          <section className="bg-[#0A140F] border border-emerald-500/20 rounded-[2rem] p-10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 blur-[100px] rounded-full pointer-events-none" />
            <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
              <div>
                <h2 className="text-white/50 text-sm font-bold tracking-widest uppercase mb-2">Total Treasury Balance</h2>
                <div className="text-6xl font-black tracking-tighter">$1,240,500<span className="text-3xl text-emerald-400">.00</span></div>
              </div>
              <div className="flex gap-4">
                <button className="bg-emerald-500 text-[#050B08] px-6 py-3 rounded-full font-bold text-sm hover:scale-105 transition-transform shadow-[0_0_20px_rgba(16,185,129,0.2)]">
                  Fund Contract
                </button>
                <button className="bg-white/5 text-white border border-white/10 px-6 py-3 rounded-full font-bold text-sm hover:bg-white/10 transition-colors">
                  Withdraw
                </button>
              </div>
            </div>

            <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-12">
              <div className="bg-[#050B08] border border-white/5 rounded-2xl p-6">
                <div className="text-white/40 text-sm mb-3 flex items-center gap-2"><Lock className="w-4 h-4" /> Monthly FHE Encrypted Outflow</div>
                <div className="text-3xl font-mono text-emerald-400">euint(████)</div>
              </div>
              <div className="bg-[#050B08] border border-white/5 rounded-2xl p-6">
                <div className="text-white/40 text-sm mb-3 flex items-center gap-2"><Users className="w-4 h-4" /> Verified Contributors</div>
                <div className="text-3xl font-bold">12</div>
              </div>
              <div className="bg-[#050B08] border border-white/5 rounded-2xl p-6">
                <div className="text-white/40 text-sm mb-3 flex items-center gap-2"><FileText className="w-4 h-4" /> Immutable Payslips</div>
                <div className="text-3xl font-bold text-blue-400">Synced to IPFS</div>
              </div>
            </div>
          </section>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Encrypted Cap Table */}
            <div className="lg:col-span-2 bg-[#0A140F] border border-white/5 rounded-[2rem] p-8">
              <div className="flex justify-between items-center mb-8">
                <h3 className="text-xl font-bold">Encrypted Cap Table</h3>
                <button className="text-sm font-bold text-emerald-400 flex items-center gap-1">View All <ChevronRight className="w-4 h-4" /></button>
              </div>
              
              <div className="space-y-4">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="group flex items-center justify-between bg-[#050B08] border border-white/5 rounded-2xl p-5 hover:border-emerald-500/30 transition-colors">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center">
                        <Users className="w-5 h-5 text-white/50 group-hover:text-emerald-400 transition-colors" />
                      </div>
                      <div>
                        <div className="font-mono text-sm text-white/80">0x71C...9A{i}B</div>
                        <div className="text-xs text-white/40 mt-1">Smart Contract Dev</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-mono text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-lg inline-block">euint64(████)</div>
                      <div className="text-xs text-white/30 mt-2 flex items-center justify-end gap-1"><Lock className="w-3 h-3" /> Zama TFHE</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Sidebar Actions */}
            <div className="space-y-8">
              
              {/* Onboarding Form */}
              <div className="bg-[#0A140F] border border-white/5 rounded-[2rem] p-8">
                <h3 className="text-lg font-bold mb-6 flex items-center gap-2"><Plus className="w-5 h-5 text-emerald-400" /> Onboard Contributor</h3>
                <form className="space-y-5">
                  <div>
                    <label className="text-xs text-white/40 uppercase tracking-widest font-bold mb-2 block">Wallet Address</label>
                    <input type="text" className="w-full bg-[#050B08] border border-white/10 rounded-xl p-4 text-white outline-none focus:border-emerald-500/50 font-mono text-sm transition-colors" placeholder="0x..." />
                  </div>
                  <div>
                    <label className="text-xs text-white/40 uppercase tracking-widest font-bold mb-2 block">Monthly USDC Salary</label>
                    <input type="text" className="w-full bg-[#050B08] border border-white/10 rounded-xl p-4 text-white outline-none focus:border-emerald-500/50 font-mono text-sm transition-colors" placeholder="5000" />
                  </div>
                  <button type="button" className="w-full bg-emerald-500 text-[#050B08] font-bold py-4 rounded-xl hover:bg-emerald-400 transition-transform active:scale-95 shadow-[0_0_20px_rgba(16,185,129,0.2)] mt-2">
                    Encrypt & Submit
                  </button>
                </form>
              </div>

              {/* Activity Feed */}
              <div className="bg-[#0A140F] border border-white/5 rounded-[2rem] p-8">
                <h3 className="text-lg font-bold mb-6 flex items-center gap-2"><Activity className="w-5 h-5 text-emerald-400" /> Recent Network Activity</h3>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-2 h-2 rounded-full bg-emerald-400 mt-2 shrink-0 shadow-[0_0_10px_rgba(52,211,153,0.8)]" />
                    <div>
                      <div className="text-sm font-medium">Payroll Executed</div>
                      <div className="text-xs text-white/40 mt-1">tx: 0x8a9...c4b2</div>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-2 h-2 rounded-full bg-blue-400 mt-2 shrink-0" />
                    <div>
                      <div className="text-sm font-medium">IPFS Payslip Pinned</div>
                      <div className="text-xs text-white/40 mt-1">CID: bafy...h7qp</div>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-2 h-2 rounded-full bg-white/20 mt-2 shrink-0" />
                    <div>
                      <div className="text-sm font-medium">New Employee Added</div>
                      <div className="text-xs text-white/40 mt-1">Encrypted allocation saved</div>
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
