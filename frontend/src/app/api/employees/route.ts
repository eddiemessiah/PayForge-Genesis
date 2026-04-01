import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json([
    { role: 'Core Smart Contract Dev', address: '0x71C...9A1B', status: 'Active', allocation: 'euint64(████)' },
    { role: 'Frontend Architect', address: '0x42B...1F2A', status: 'Active', allocation: 'euint64(████)' },
    { role: 'Treasury Manager', address: '0x99D...8E3C', status: 'Pending World ID', allocation: 'euint64(████)' },
    { role: 'Marketing Lead', address: '0x11A...4B5D', status: 'Active', allocation: 'euint64(████)' },
    { role: 'Community Manager', address: '0x33F...7C8E', status: 'Active', allocation: 'euint64(████)' },
  ]);
}