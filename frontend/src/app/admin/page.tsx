"use client";

import { useState } from "react";
import { 
  Users, Wallet, LayoutDashboard, Settings, Plus, Activity,
  Lock, FileText, ChevronRight, Search, Menu, Bell, 
  BarChart4, ArrowUpRight, EyeOff, CheckCircle2, Loader2, Database
} from "lucide-react";
import Link from "next/link";

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("overview");
  const [isWalletConnected, setIsWalletConnected] = useState(false);
  const [isConnecting, setIsConnecting] = useState(false);

  // Onboarding State
  const [onboardState, setOnboardState] = useState<"idle" | "encrypting" | "pinning" | "success">("idle");
  const [newEmployeeAddress, setNewEmployeeAddress] = useState("");
  const [newEmployeeSalary, setNewEmployeeSalary] = useState("");

  const handleConnectWallet = () => {
    setIsConnecting(true);
    setTimeout(() => {
      setIsWalletConnected(true);
      setIsConnecting(false);
    }, 1500);
  };

  const handleOnboard = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newEmployeeAddress || !newEmployeeSalary) return;
    
    setOnboardState("encrypting");
    setTimeout(() => {
      setOnboardState("pinning");
      setTimeout(() => {
        setOnboardState("success");
        setNewEmployeeAddress("");
        setNewEmployeeSalary("");
        setTimeout(() => setOnboardState("idle"), 3000);
      }, 2000);
    }, 2000);
  };

  return (
    <main className="min-h-screen bg-[#020504] text-white selection:bg-emerald-500/30 flex overflow-hidden">
      {/* Sidebar Navigation */}
      <aside className="w-[280px] border-r border-white/5 bg-[#020504]/40 backdrop-blur-3xl flex-col hidden md:flex shrink-0">
        <div className="h-20 flex items-center px-8 border-b border-white/5">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center shadow-[0_0_15px_rgba(16,185,129,0.2)] group-hover:scale-105 transition-transform">
              <Lock className="w-4 h-4 text-[#020504] fill-current" />
            </div>
            <span className="text-xl font-bold tracking-tight text-white group-hover:text-emerald-400 transition-colors">ZamaPay</span>
          </Link>
        </div>
        <nav className="flex-1 px-4 py-8 space-y-1.5 overflow-y-auto">
          <div className="px-4 text-[10px] font-bold tracking-widest text-white/30 uppercase mb-4">Core</div>
          {["overview", "cap table", "treasury", "reports"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-xl transition-all text-sm font-semibold ${
                activeTab === tab 
                  ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 shadow-[0_0_10px_rgba(16,185,129,0.05)]" 
                  : "text-white/40 hover:bg-white/5 hover:text-white border border-transparent"
              }`}
            >
              {tab === "overview" && <LayoutDashboard className="w-4 h-4" />}
              {tab === "cap table" && <Users className="w-4 h-4" />}
              {tab === "treasury" && <Wallet className="w-4 h-4" />}
              {tab === "reports" && <BarChart4 className="w-4 h-4" />}
              <span className="capitalize">{tab}</span>
            </button>
          ))}
          <div className="px-4 text-[10px] font-bold tracking-widest text-white/30 uppercase mb-4 mt-8">System</div>
          <button className="w-full flex items-center gap-3 px-4 py-2.5 rounded-xl transition-all text-sm font-semibold text-white/40 hover:bg-white/5 hover:text-white border border-transparent">
            <Settings className="w-4 h-4" /> Settings
          </button>
        </nav>
        <div className="p-6 border-t border-white/5 bg-gradient-to-b from-transparent to-[#050B08]/50">
          {isWalletConnected ? (
            <div className="bg-white/5 border border-white/5 p-4 rounded-2xl flex items-center gap-3 hover:border-white/10 transition-colors cursor-pointer">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-emerald-500 shadow-inner flex items-center justify-center border border-white/10">
                <span className="text-[10px] font-bold">DAO</span>
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-sm font-bold truncate">Zama Protocol</div>
                <div className="text-[10px] text-emerald-400 flex items-center gap-1 mt-0.5"><div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"/> 0x89F...A2C</div>
              </div>
            </div>
          ) : (
             <button onClick={handleConnectWallet} disabled={isConnecting} className="w-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 p-4 rounded-2xl flex items-center justify-center gap-2 hover:bg-emerald-500/20 transition-colors text-sm font-bold">
               {isConnecting ? <><Loader2 className="w-4 h-4 animate-spin"/> Connecting...</> : <><Wallet className="w-4 h-4"/> Connect Wallet</>}
             </button>
          )}
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col h-screen overflow-hidden bg-[url('/noise.png')] bg-repeat bg-[length:100px_100px] bg-blend-overlay">
        
        {/* Top Header */}
        <header className="h-20 border-b border-white/5 bg-[#020504]/60 backdrop-blur-3xl flex items-center justify-between px-8 z-40 shrink-0">
          <div className="flex items-center gap-6">
            <button className="md:hidden"><Menu className="w-5 h-5 text-white/50" /></button>
            <div className="bg-white/5 border border-white/5 rounded-full px-4 py-2.5 flex items-center gap-3 hidden sm:flex w-[320px] focus-within:border-emerald-500/30 transition-colors focus-within:bg-white/10">
              <Search className="w-4 h-4 text-white/30" />
              <input type="text" placeholder="Search txs, employees, addresses..." className="bg-transparent border-none outline-none text-xs font-medium text-white w-full placeholder:text-white/20" />
            </div>
          </div>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold tracking-wide">
              <Lock className="w-3 h-3" /> FHE Active
            </div>
            <button className="relative p-2 rounded-full hover:bg-white/5 transition-colors">
              <Bell className="w-5 h-5 text-white/40 hover:text-white" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-emerald-500 rounded-full border-[1.5px] border-[#020504]" />
            </button>
            <Link href="/" className="text-xs font-bold text-white/40 hover:text-emerald-400 transition-colors flex items-center gap-1.5 bg-white/5 px-4 py-2 rounded-full">
              Exit App <ChevronRight className="w-3 h-3" />
            </Link>
          </div>
        </header>

        {/* Dashboard Body - High Density Bento */}
        <div className="flex-1 overflow-y-auto p-6 md:p-8 space-y-6">
          
          {/* Top KPI Row */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* Main Balance */}
            <div className="md:col-span-2 bg-gradient-to-br from-[#0A140F] to-[#050B08] border border-white/5 rounded-[2rem] p-8 relative overflow-hidden group">
              <div className="absolute top-[-50%] right-[-10%] w-[80%] h-[150%] bg-emerald-500/5 blur-[100px] rounded-full group-hover:bg-emerald-500/10 transition-colors duration-700 pointer-events-none" />
              <div className="relative z-10 flex flex-col h-full justify-between gap-8">
                <div className="flex justify-between items-start">
                  <div>
                    <h2 className="text-white/40 text-xs font-bold tracking-widest uppercase mb-3 flex items-center gap-2"><Wallet className="w-4 h-4"/> Treasury TVL</h2>
                    <div className="text-5xl md:text-6xl font-black tracking-tighter flex items-baseline gap-1">
                      $1,240,500<span className="text-3xl text-emerald-400 opacity-80">.00</span>
                    </div>
                  </div>
                  <div className="bg-emerald-500/10 text-emerald-400 px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1 border border-emerald-500/20">
                    <ArrowUpRight className="w-3 h-3" /> 2.4%
                  </div>
                </div>
                <div className="flex gap-3">
                  <button className="bg-emerald-500 text-[#020504] px-6 py-2.5 rounded-full font-bold text-sm hover:scale-105 transition-transform shadow-[0_0_20px_rgba(16,185,129,0.2)]">
                    Fund Contract
                  </button>
                  <button className="bg-white/5 text-white border border-white/10 px-6 py-2.5 rounded-full font-bold text-sm hover:bg-white/10 transition-colors">
                    Withdraw
                  </button>
                </div>
              </div>
            </div>

            {/* Encrypted Outflow */}
            <div className="bg-[#050B08] border border-white/5 rounded-[2rem] p-6 flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-2 right-2 text-white/5"><EyeOff className="w-24 h-24" /></div>
              <div className="relative z-10">
                <div className="text-white/40 text-xs font-bold tracking-widest uppercase mb-4 flex items-center gap-2"><Lock className="w-3 h-3 text-emerald-400"/> Monthly Outflow</div>
                <div className="text-3xl font-mono text-emerald-400 tracking-tight">euint(████)</div>
                <div className="text-xs text-white/30 mt-2 font-mono">Zama TFHE Encrypted</div>
              </div>
              <div className="relative z-10 w-full h-12 mt-6 flex items-end gap-1 opacity-50">
                {[40, 70, 45, 90, 65, 80, 50, 100].map((h, i) => (
                  <div key={i} className="flex-1 bg-emerald-500/20 rounded-t-sm" style={{ height: `${h}%` }} />
                ))}
              </div>
            </div>

            {/* Active Contributors */}
            <div className="bg-[#050B08] border border-white/5 rounded-[2rem] p-6 flex flex-col justify-between">
              <div>
                <div className="text-white/40 text-xs font-bold tracking-widest uppercase mb-4 flex items-center gap-2"><Users className="w-3 h-3 text-blue-400"/> Contributors</div>
                <div className="text-4xl font-black">12</div>
              </div>
              <div className="mt-6 flex items-center gap-2">
                <div className="flex -space-x-3">
                  {[1,2,3,4].map(i => (
                    <div key={i} className={`w-8 h-8 rounded-full border-2 border-[#050B08] bg-gradient-to-br from-white/10 to-white/5 flex items-center justify-center text-[10px] font-bold`} style={{ zIndex: 5-i}}>
                      0x
                    </div>
                  ))}
                </div>
                <div className="text-xs font-bold text-white/30">+8 more</div>
              </div>
            </div>
          </div>

          {/* Lower Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            
            {/* Encrypted Cap Table */}
            <div className="lg:col-span-2 bg-[#050B08] border border-white/5 rounded-[2rem] flex flex-col overflow-hidden">
              <div className="p-6 border-b border-white/5 flex justify-between items-center bg-white/[0.02]">
                <h3 className="text-sm font-bold tracking-wide flex items-center gap-2"><Lock className="w-4 h-4 text-emerald-400"/> Encrypted Cap Table</h3>
                <button className="text-xs font-bold text-emerald-400 hover:text-emerald-300 transition-colors flex items-center gap-1">Manage <ChevronRight className="w-3 h-3" /></button>
              </div>
              
              <div className="flex-1 overflow-y-auto p-2">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr>
                      <th className="px-4 py-3 text-[10px] font-bold tracking-widest text-white/30 uppercase">Address / Role</th>
                      <th className="px-4 py-3 text-[10px] font-bold tracking-widest text-white/30 uppercase">Status</th>
                      <th className="px-4 py-3 text-[10px] font-bold tracking-widest text-white/30 uppercase text-right">Encrypted Allocation (USDC)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { role: 'Core Smart Contract Dev', address: '0x71C...9A1B', status: 'Active' },
                      { role: 'Frontend Architect', address: '0x42B...1F2A', status: 'Active' },
                      { role: 'Treasury Manager', address: '0x99D...8E3C', status: 'Pending World ID' },
                      { role: 'Marketing Lead', address: '0x11A...4B5D', status: 'Active' },
                      { role: 'Community Manager', address: '0x33F...7C8E', status: 'Active' },
                    ].map((row, i) => (
                      <tr key={i} className="group hover:bg-white/[0.02] transition-colors border-b border-white/5 last:border-0">
                        <td className="px-4 py-4">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center border border-white/5 group-hover:border-emerald-500/30 transition-colors">
                              <Users className="w-4 h-4 text-white/40 group-hover:text-emerald-400" />
                            </div>
                            <div>
                              <div className="font-mono text-sm text-white/90">{row.address}</div>
                              <div className="text-xs text-white/40 mt-0.5">{row.role}</div>
                            </div>
                          </div>
                        </td>
                        <td className="px-4 py-4">
                          <span className={`px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-widest border ${
                            row.status === 'Active' ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' : 'bg-white/5 text-white/40 border-white/10'
                          }`}>
                            {row.status}
                          </span>
                        </td>
                        <td className="px-4 py-4 text-right">
                          <div className="font-mono text-sm text-emerald-400 bg-emerald-500/5 px-3 py-1.5 rounded-lg inline-block border border-emerald-500/10">euint64(████)</div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Action Sidebar */}
            <div className="space-y-6">
              
              {/* Onboarding Interactive Form */}
              <div className="bg-[#050B08] border border-white/5 rounded-[2rem] p-6">
                <h3 className="text-sm font-bold tracking-wide flex items-center gap-2 mb-6"><Plus className="w-4 h-4 text-emerald-400"/> Onboard Contributor</h3>
                <form onSubmit={handleOnboard} className="space-y-4">
                  <div>
                    <label className="text-[10px] font-bold tracking-widest text-white/30 uppercase block mb-1.5">Wallet Address</label>
                    <input 
                      type="text" 
                      value={newEmployeeAddress}
                      onChange={(e) => setNewEmployeeAddress(e.target.value)}
                      className="w-full bg-white/[0.02] border border-white/10 rounded-xl p-3 text-sm font-mono text-white outline-none focus:border-emerald-500/50 transition-colors" 
                      placeholder="0x..." 
                    />
                  </div>
                  <div>
                    <label className="text-[10px] font-bold tracking-widest text-white/30 uppercase block mb-1.5">Monthly USDC Allocation</label>
                    <input 
                      type="text" 
                      value={newEmployeeSalary}
                      onChange={(e) => setNewEmployeeSalary(e.target.value)}
                      className="w-full bg-white/[0.02] border border-white/10 rounded-xl p-3 text-sm font-mono text-white outline-none focus:border-emerald-500/50 transition-colors" 
                      placeholder="5000" 
                    />
                  </div>
                  
                  {onboardState === "idle" && (
                    <button type="submit" disabled={!newEmployeeAddress || !newEmployeeSalary} className="w-full bg-emerald-500 text-[#020504] px-4 py-3 rounded-xl font-bold text-sm hover:bg-emerald-400 transition-colors disabled:opacity-50 disabled:cursor-not-allowed mt-2">
                      Encrypt & Deploy
                    </button>
                  )}

                  {onboardState === "encrypting" && (
                    <button disabled className="w-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 px-4 py-3 rounded-xl font-bold text-sm flex items-center justify-center gap-2 mt-2">
                      <Loader2 className="w-4 h-4 animate-spin" /> Encrypting Salary via FHE...
                    </button>
                  )}

                  {onboardState === "pinning" && (
                    <button disabled className="w-full bg-blue-500/20 border border-blue-500/30 text-blue-400 px-4 py-3 rounded-xl font-bold text-sm flex items-center justify-center gap-2 mt-2">
                      <Database className="w-4 h-4 animate-pulse" /> Pinning to IPFS (Filecoin)...
                    </button>
                  )}

                  {onboardState === "success" && (
                    <button disabled className="w-full bg-emerald-500 text-[#020504] px-4 py-3 rounded-xl font-bold text-sm flex items-center justify-center gap-2 mt-2">
                      <CheckCircle2 className="w-4 h-4" /> Successfully Onboarded
                    </button>
                  )}
                </form>
              </div>

              {/* Activity Log */}
              <div className="bg-[#050B08] border border-white/5 rounded-[2rem] p-6">
                <h3 className="text-sm font-bold tracking-wide flex items-center gap-2 mb-6"><Activity className="w-4 h-4 text-emerald-400"/> Network Activity</h3>
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 shrink-0 shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
                    <div>
                      <div className="text-xs font-bold text-white/90">Payroll Executed</div>
                      <div className="text-[10px] text-white/40 mt-0.5 font-mono">tx: 0x8a9...c4b2</div>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5 shrink-0" />
                    <div>
                      <div className="text-xs font-bold text-white/90">IPFS Payslip Pinned</div>
                      <div className="text-[10px] text-white/40 mt-0.5 font-mono">CID: bafy...h7qp</div>
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
