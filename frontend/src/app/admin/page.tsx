"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Users, Wallet, LayoutDashboard, Settings, Plus, Activity,
  Lock, FileText, ChevronRight, Search, Menu, Bell, 
  BarChart4, ArrowUpRight, EyeOff, CheckCircle2, Loader2, Database, X, ShieldAlert,
  ArrowDownRight
} from "lucide-react";
import Link from "next/link";

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("overview");
  const [isWalletConnected, setIsWalletConnected] = useState(false);
  const [isConnecting, setIsConnecting] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // State
  const [capTable, setCapTable] = useState<any[]>([]);
  const [loadingEmployees, setLoadingEmployees] = useState(true);

  // Onboarding State
  const [onboardState, setOnboardState] = useState<"idle" | "encrypting" | "pinning" | "success">("idle");
  const [newEmployeeAddress, setNewEmployeeAddress] = useState("");
  const [newEmployeeSalary, setNewEmployeeSalary] = useState("");
  const [newEmployeeRole, setNewEmployeeRole] = useState("");

  useEffect(() => {
    fetch('/api/employees')
      .then(res => res.json())
      .then(json => {
        if(json.success) setCapTable(json.data);
        setLoadingEmployees(false);
      })
      .catch(console.error);
  }, []);

  const handleConnectWallet = () => {
    setIsConnecting(true);
    setTimeout(() => {
      setIsWalletConnected(true);
      setIsConnecting(false);
    }, 1500);
  };

  const handleOnboard = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newEmployeeAddress || !newEmployeeSalary) return;
    
    setOnboardState("encrypting");
    setTimeout(async () => {
      setOnboardState("pinning");
      
      try {
        const res = await fetch('/api/employees', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ 
            address: newEmployeeAddress,
            role: newEmployeeRole || 'Payroll Recipient'
          })
        });
        const json = await res.json();
        
        if(json.success) {
          setOnboardState("success");
          setCapTable(prev => [json.data, ...prev]);
          setNewEmployeeAddress("");
          setNewEmployeeSalary("");
          setNewEmployeeRole("");
          setTimeout(() => setOnboardState("idle"), 3000);
        }
      } catch(e) {
        console.error(e);
        setOnboardState("idle");
      }
    }, 2000);
  };

  const NavLinks = () => (
    <>
      <div className="px-4 text-[10px] font-bold tracking-widest text-white/30 uppercase mb-4 mt-8 md:mt-0">Core</div>
      {["overview", "cap table", "treasury", "reports"].map((tab) => (
        <button
          key={tab}
          onClick={() => { setActiveTab(tab); setIsMobileMenuOpen(false); }}
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
    </>
  );

  return (
    <main className="min-h-screen bg-[#020504] text-white selection:bg-emerald-500/30 flex overflow-hidden">
      
      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: -300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -300 }}
            className="fixed inset-0 z-50 bg-[#020504]/95 backdrop-blur-3xl p-6 md:hidden flex flex-col"
          >
            <div className="flex justify-between items-center mb-8">
              <Link href="/" className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center shadow-[0_0_15px_rgba(16,185,129,0.2)]">
                  <Lock className="w-4 h-4 text-[#020504] fill-current" />
                </div>
                <span className="text-xl font-bold tracking-tight text-white">ZamaPay Admin</span>
              </Link>
              <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 bg-white/5 rounded-full text-white/50 hover:text-white">
                <X className="w-6 h-6" />
              </button>
            </div>
            <nav className="flex-1 space-y-2">
              <NavLinks />
            </nav>
            <div className="mt-auto pt-6 border-t border-white/5">
              <Link href="/employee" className="w-full text-center block text-sm font-bold text-white/50 hover:text-emerald-400 py-3 bg-white/5 rounded-xl">Switch to Employee Portal</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

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
          <NavLinks />
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
        <header className="h-20 border-b border-white/5 bg-[#020504]/60 backdrop-blur-3xl flex items-center justify-between px-6 md:px-8 z-40 shrink-0">
          <div className="flex items-center gap-6">
            <button onClick={() => setIsMobileMenuOpen(true)} className="md:hidden p-2 -ml-2 rounded-lg bg-white/5 text-white"><Menu className="w-5 h-5" /></button>
            <div className="bg-white/5 border border-white/5 rounded-full px-4 py-2.5 flex items-center gap-3 hidden sm:flex w-[320px] focus-within:border-emerald-500/30 transition-colors focus-within:bg-white/10">
              <Search className="w-4 h-4 text-white/30" />
              <input type="text" placeholder="Search txs, employees, addresses..." className="bg-transparent border-none outline-none text-xs font-medium text-white w-full placeholder:text-white/20" />
            </div>
          </div>
          <div className="flex items-center gap-4 md:gap-6">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold tracking-wide">
              <Lock className="w-3 h-3 hidden sm:block" /> <span className="hidden sm:block">FHE Active</span><span className="sm:hidden">FHE</span>
            </div>
            <Link href="/employee" className="text-xs font-bold text-white/40 hover:text-emerald-400 transition-colors flex items-center gap-1.5 bg-white/5 px-4 py-2 rounded-full hidden sm:flex">
              Exit App <ChevronRight className="w-3 h-3" />
            </Link>
          </div>
        </header>

        {/* Dashboard Body */}
        <div className="flex-1 overflow-y-auto p-4 md:p-8 space-y-6">
          
          <AnimatePresence mode="wait">
            {activeTab === "overview" && (
              <motion.div key="overview" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.3 }} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  {/* Main Balance */}
                  <div className="md:col-span-2 bg-gradient-to-br from-[#0A140F] to-[#050B08] border border-white/5 rounded-[2rem] p-6 md:p-8 relative overflow-hidden group">
                    <div className="absolute top-[-50%] right-[-10%] w-[80%] h-[150%] bg-emerald-500/5 blur-[100px] rounded-full group-hover:bg-emerald-500/10 transition-colors duration-700 pointer-events-none" />
                    <div className="relative z-10 flex flex-col h-full justify-between gap-8">
                      <div className="flex justify-between items-start">
                        <div>
                          <h2 className="text-white/40 text-xs font-bold tracking-widest uppercase mb-3 flex items-center gap-2"><Wallet className="w-4 h-4"/> Treasury TVL</h2>
                          <div className="text-4xl md:text-6xl font-black tracking-tighter flex items-baseline gap-1">
                            $1,240,500<span className="text-2xl md:text-3xl text-emerald-400 opacity-80">.00</span>
                          </div>
                        </div>
                        <div className="bg-emerald-500/10 text-emerald-400 px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1 border border-emerald-500/20">
                          <ArrowUpRight className="w-3 h-3" /> 2.4%
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <button onClick={() => setActiveTab('treasury')} className="bg-emerald-500 text-[#020504] px-6 py-2.5 rounded-full font-bold text-sm hover:scale-105 transition-transform shadow-[0_0_20px_rgba(16,185,129,0.2)]">
                          Manage Treasury
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Active Contributors */}
                  <div className="md:col-span-2 bg-[#050B08] border border-white/5 rounded-[2rem] p-6 flex flex-col justify-between">
                    <div>
                      <div className="text-white/40 text-xs font-bold tracking-widest uppercase mb-4 flex items-center gap-2"><Users className="w-3 h-3 text-blue-400"/> Contributors</div>
                      <div className="text-4xl font-black">{capTable.length}</div>
                    </div>
                    <div className="mt-6 flex items-center gap-2">
                      <div className="flex -space-x-3">
                        {capTable.slice(0, 4).map((_, i) => (
                          <div key={i} className={`w-8 h-8 rounded-full border-2 border-[#050B08] bg-gradient-to-br from-white/10 to-white/5 flex items-center justify-center text-[10px] font-bold`} style={{ zIndex: 5-i}}>
                            0x
                          </div>
                        ))}
                      </div>
                      <button onClick={() => setActiveTab('cap table')} className="ml-auto text-xs font-bold text-blue-400 hover:text-blue-300">View Cap Table &rarr;</button>
                    </div>
                  </div>
                </div>

                {/* Quick Actions / Recent Activity */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-[#050B08] border border-white/5 rounded-[2rem] p-6">
                    <h3 className="text-sm font-bold tracking-wide flex items-center gap-2 mb-6"><Activity className="w-4 h-4 text-emerald-400"/> Protocol Activity</h3>
                    <div className="space-y-4">
                      <div className="flex gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 shrink-0 shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
                        <div>
                          <div className="text-xs font-bold text-white/90">Payroll Batch Executed</div>
                          <div className="text-[10px] text-white/40 mt-0.5 font-mono">12 claims unlocked via TFHE</div>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5 shrink-0" />
                        <div>
                          <div className="text-xs font-bold text-white/90">World ID Zero-Knowledge Sync</div>
                          <div className="text-[10px] text-white/40 mt-0.5 font-mono">4 New unique humans verified</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-[#050B08] border border-white/5 rounded-[2rem] p-6 flex flex-col items-center justify-center text-center">
                     <ShieldAlert className="w-12 h-12 text-emerald-400/20 mb-4" />
                     <h3 className="text-sm font-bold text-white mb-2">Decentralized Trust</h3>
                     <p className="text-xs text-white/50 max-w-sm">ZamaPay is currently running on the Zama fhEVM. All payroll allocations are strictly encrypted via Fully Homomorphic Encryption. Only the intended employee can decrypt their balances.</p>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === "cap table" && (
              <motion.div key="cap-table" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.3 }} className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 bg-[#050B08] border border-white/5 rounded-[2rem] flex flex-col overflow-hidden">
                  <div className="p-6 border-b border-white/5 flex justify-between items-center bg-white/[0.02]">
                    <h3 className="text-sm font-bold tracking-wide flex items-center gap-2"><Lock className="w-4 h-4 text-emerald-400"/> Encrypted Cap Table</h3>
                  </div>
                  <div className="flex-1 overflow-x-auto p-2">
                    <table className="w-full text-left border-collapse min-w-[500px]">
                      <thead>
                        <tr>
                          <th className="px-4 py-3 text-[10px] font-bold tracking-widest text-white/30 uppercase">Address / Role</th>
                          <th className="px-4 py-3 text-[10px] font-bold tracking-widest text-white/30 uppercase">Status</th>
                          <th className="px-4 py-3 text-[10px] font-bold tracking-widest text-white/30 uppercase text-right">Encrypted Allocation (USDC)</th>
                        </tr>
                      </thead>
                      <tbody>
                        {loadingEmployees ? (
                          <tr><td colSpan={3} className="px-4 py-8 text-center text-white/40 text-sm">Loading on-chain data...</td></tr>
                        ) : capTable.map((row, i) => (
                          <motion.tr initial={{ opacity: 0 }} animate={{ opacity: 1 }} key={i} className="group hover:bg-white/[0.02] transition-colors border-b border-white/5 last:border-0">
                            <td className="px-4 py-4">
                              <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center border border-white/5 group-hover:border-emerald-500/30 transition-colors">
                                  <Users className="w-4 h-4 text-white/40 group-hover:text-emerald-400" />
                                </div>
                                <div>
                                  <div className="font-mono text-sm text-white/90 truncate w-24 md:w-auto">{row.address}</div>
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
                              <div className="font-mono text-xs md:text-sm text-emerald-400 bg-emerald-500/5 px-3 py-1.5 rounded-lg inline-block border border-emerald-500/10">euint64(████)</div>
                            </td>
                          </motion.tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="bg-[#050B08] border border-white/5 rounded-[2rem] p-6">
                    <h3 className="text-sm font-bold tracking-wide flex items-center gap-2 mb-6"><Plus className="w-4 h-4 text-emerald-400"/> Onboard Contributor</h3>
                    <form onSubmit={handleOnboard} className="space-y-4">
                      <div>
                        <label className="text-[10px] font-bold tracking-widest text-white/30 uppercase block mb-1.5">Wallet Address</label>
                        <input type="text" value={newEmployeeAddress} onChange={(e) => setNewEmployeeAddress(e.target.value)} className="w-full bg-white/[0.02] border border-white/10 rounded-xl p-3 text-sm font-mono text-white outline-none focus:border-emerald-500/50 transition-colors" placeholder="0x..." />
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <label className="text-[10px] font-bold tracking-widest text-white/30 uppercase block mb-1.5">Role</label>
                          <input type="text" value={newEmployeeRole} onChange={(e) => setNewEmployeeRole(e.target.value)} className="w-full bg-white/[0.02] border border-white/10 rounded-xl p-3 text-sm font-mono text-white outline-none focus:border-emerald-500/50 transition-colors" placeholder="Developer" />
                        </div>
                        <div>
                          <label className="text-[10px] font-bold tracking-widest text-white/30 uppercase block mb-1.5">Salary (USDC)</label>
                          <input type="text" value={newEmployeeSalary} onChange={(e) => setNewEmployeeSalary(e.target.value)} className="w-full bg-white/[0.02] border border-white/10 rounded-xl p-3 text-sm font-mono text-white outline-none focus:border-emerald-500/50 transition-colors" placeholder="5000" />
                        </div>
                      </div>
                      
                      {onboardState === "idle" && (
                        <button type="submit" disabled={!newEmployeeAddress || !newEmployeeSalary} className="w-full bg-emerald-500 text-[#020504] px-4 py-3 rounded-xl font-bold text-sm hover:bg-emerald-400 transition-colors disabled:opacity-50 disabled:cursor-not-allowed mt-2">
                          Encrypt & Add to Protocol
                        </button>
                      )}
                      {onboardState === "encrypting" && (
                        <button disabled className="w-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 px-4 py-3 rounded-xl font-bold text-sm flex items-center justify-center gap-2 mt-2">
                          <Loader2 className="w-4 h-4 animate-spin" /> Encrypting via Zama FHE...
                        </button>
                      )}
                      {onboardState === "pinning" && (
                        <button disabled className="w-full bg-blue-500/20 border border-blue-500/30 text-blue-400 px-4 py-3 rounded-xl font-bold text-sm flex items-center justify-center gap-2 mt-2">
                          <Database className="w-4 h-4 animate-pulse" /> Pinning HR Docs to Filecoin...
                        </button>
                      )}
                      {onboardState === "success" && (
                        <button disabled className="w-full bg-emerald-500 text-[#020504] px-4 py-3 rounded-xl font-bold text-sm flex items-center justify-center gap-2 mt-2">
                          <CheckCircle2 className="w-4 h-4" /> Successfully Onboarded
                        </button>
                      )}
                    </form>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === "treasury" && (
              <motion.div key="treasury" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.3 }} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-gradient-to-br from-[#0A140F] to-[#050B08] border border-white/5 rounded-[2rem] p-8 flex flex-col justify-between group overflow-hidden relative">
                    <div className="absolute top-[-50%] right-[-10%] w-[80%] h-[150%] bg-emerald-500/5 blur-[100px] rounded-full group-hover:bg-emerald-500/10 transition-colors duration-700 pointer-events-none" />
                    <div className="relative z-10 flex flex-col h-full justify-between gap-8">
                      <div>
                        <h2 className="text-white/40 text-xs font-bold tracking-widest uppercase mb-3 flex items-center gap-2"><Wallet className="w-4 h-4"/> Live Treasury TVL</h2>
                        <div className="text-5xl md:text-6xl font-black tracking-tighter flex items-baseline gap-1">
                          $1,240,500<span className="text-3xl text-emerald-400 opacity-80">.00</span>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <button className="bg-emerald-500 text-[#020504] px-6 py-2.5 rounded-full font-bold text-sm hover:scale-105 transition-transform shadow-[0_0_20px_rgba(16,185,129,0.2)] flex items-center gap-2">
                           <ArrowDownRight className="w-4 h-4"/> Deposit USDC
                        </button>
                        <button className="bg-white/5 text-white border border-white/10 px-6 py-2.5 rounded-full font-bold text-sm hover:bg-white/10 transition-colors flex items-center gap-2">
                           <ArrowUpRight className="w-4 h-4"/> Withdraw
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="bg-[#050B08] border border-white/5 rounded-[2rem] p-6 flex flex-col justify-between relative overflow-hidden">
                    <div className="absolute top-2 right-2 text-white/5"><EyeOff className="w-24 h-24" /></div>
                    <div className="relative z-10">
                      <div className="text-white/40 text-xs font-bold tracking-widest uppercase mb-4 flex items-center gap-2"><Lock className="w-3 h-3 text-emerald-400"/> Monthly Projected Outflow</div>
                      <div className="text-3xl font-mono text-emerald-400 tracking-tight">euint(████)</div>
                      <div className="text-xs text-white/30 mt-2 font-mono">Zama TFHE Encrypted. Cannot be viewed by admin.</div>
                    </div>
                    <div className="relative z-10 w-full h-12 mt-6 flex items-end gap-1 opacity-50">
                      {[40, 70, 45, 90, 65, 80, 50, 100].map((h, i) => (
                        <div key={i} className="flex-1 bg-emerald-500/20 rounded-t-sm" style={{ height: `${h}%` }} />
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === "reports" && (
              <motion.div key="reports" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.3 }} className="bg-[#050B08] border border-white/5 rounded-[2rem] p-12 flex flex-col items-center justify-center text-center">
                 <BarChart4 className="w-16 h-16 text-emerald-400/20 mb-6" />
                 <h2 className="text-2xl font-bold text-white mb-2">Encrypted Analytics</h2>
                 <p className="text-white/50 max-w-md mx-auto">Because the payroll and allocations are executed using TFHE on Zama, individual salary analytics are completely private. Analytics views are restricted.</p>
              </motion.div>
            )}

          </AnimatePresence>
        </div>
      </div>
    </main>
  );
}
