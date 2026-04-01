import { NextResponse } from 'next/server';
import { db } from '../db';

export async function GET() {
  return NextResponse.json({ success: true, data: db.employees });
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const newEmployee = {
      role: body.role || 'New Contributor',
      address: body.address,
      status: 'Active',
    };
    db.employees.unshift(newEmployee);
    
    // Mock Filecoin storage via Lighthouse / web3.storage pinning
    const filecoinCid = "bafybeig" + Math.random().toString(36).substring(2, 10) + "mockhash";

    return NextResponse.json({ 
      success: true, 
      data: newEmployee,
      filecoinCid
    });
  } catch (err) {
    return NextResponse.json({ success: false, error: 'Failed' }, { status: 500 });
  }
}
