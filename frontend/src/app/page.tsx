"use client";

import { useState } from 'react';
import Image from 'next/image';
import { BriefcaseIcon, ShieldIcon, CheckCircleIcon, BoltIcon, LockIcon, LockOpenIcon } from 'lucide-react';

const LandingPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#050B08] text-emerald-400">
      <section className="max-w-7xl w-full p-8 md:p-16 flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to ZamaPay</h1>
          <p className="text-lg mb-8">Experience the future of financial transactions with ultra-modern, secure, and transparent payments.</p>
          <button className="px-6 py-3 rounded-full bg-emerald-500 text-white hover:bg-emerald-600 transition-colors duration-300">Get Started</button>
        </div>
        <div className="md:w-1/2 hidden md:block">
          <Image src="/hero-image.png" alt="Hero Image" width={600} height={600} className="object-cover" />
        </div>
      </section>

      <section className="max-w-7xl w-full p-8 md:p-16 flex flex-col items-center justify-center gap-8">
        <h2 className="text-3xl font-bold">Institutional Comparisons</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="p-4 border rounded-lg flex flex-col items-center justify-center">
            <BriefcaseIcon className="w-10 h-10 mb-4" />
            <h3 className="text-xl font-semibold">Web3 DAOs Need This Over Web2</h3>
            <p>Discover why decentralized organizations thrive with ZamaPay's advanced features.</p>
          </div>
          <div className="p-4 border rounded-lg flex flex-col items-center justify-center">
            <ShieldIcon className="w-10 h-10 mb-4" />
            <h3 className="text-xl font-semibold">Enhanced Security</h3>
            <p>Experience unparalleled security with FHE Encryption and World ID Sybil Resistance.</p>
          </div>
          <div className="p-4 border rounded-lg flex flex-col items-center justify-center">
            <CheckCircleIcon className="w-10 h-10 mb-4" />
            <h3 className="text-xl font-semibold">Trustworthy Transactions</h3>
            <p>Every transaction is auditable and transparent, ensuring trust and reliability.</p>
          </div>
        </div>
      </section>

      <section className="max-w-7xl w-full p-8 md:p-16 flex flex-col items-center justify-center gap-8">
        <h2 className="text-3xl font-bold">Core Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="p-4 border rounded-lg flex flex-col items-center justify-center">
            <LockIcon className="w-10 h-10 mb-4" />
            <h3 className="text-xl font-semibold">FHE Encryption</h3>
            <p>Protect your data with Fully Homomorphic Encryption, ensuring privacy and security.</p>
          </div>
          <div className="p-4 border rounded-lg flex flex-col items-center justify-center">
            <LockOpenIcon className="w-10 h-10 mb-4" />
            <h3 className="text-xl font-semibold">World ID Sybil Resistance</h3>
            <p>Prevent identity fraud and ensure each user is unique with World ID.</p>
          </div>
          <div className="p-4 border rounded-lg flex flex-col items-center justify-center">
            <BoltIcon className="w-10 h-10 mb-4" />
            <h3 className="text-xl font-semibold">Decentralized Storage</h3>
            <p>Store your data on the decentralized network with Protocol Labs & Filecoin integration.</p>
          </div>
        </div>
      </section>

      <section className="max-w-7xl w-full p-8 md:p-16 flex flex-col items-center justify-center gap-8">
        <h2 className="text-3xl font-bold">Financial Security & Auditability</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="p-4 border rounded-lg flex flex-col items-center justify-center">
            <LockIcon className="w-10 h-10 mb-4" />
            <h3 className="text-xl font-semibold">Data Privacy</h3>
            <p>Your data remains private and secure with robust encryption methods.</p>
          </div>
          <div className="p-4 border rounded-lg flex flex-col items-center justify-center">
            <CheckCircleIcon className="w-10 h-10 mb-4" />
            <h3 className="text-xl font-semibold">Auditability</h3>
            <p>Every transaction is auditable, providing transparency and accountability.</p>
          </div>
          <div className="p-4 border rounded-lg flex flex-col items-center justify-center">
            <ShieldIcon className="w-10 h-10 mb-4" />
            <h3 className="text-xl font-semibold">Compliance</h3>
            <p>Stay compliant with regulatory requirements while enjoying the benefits of Web3.</p>
          </div>
        </div>
      </section>

      <footer className="max-w-7xl w-full p-8 md:p-16 flex flex-col items-center justify-center gap-8">
        <h2 className="text-3xl font-bold">Premium Footer</h2>
        <p className="text-lg">© 2023 ZamaPay. All rights reserved.</p>
        <div className="flex gap-4">
          <a href="#" className="text-emerald-500 hover:text-emerald-600 transition-colors duration-300">Privacy Policy</a>
          <a href="#" className="text-emerald-500 hover:text-emerald-600 transition-colors duration-300">Terms of Service</a>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
