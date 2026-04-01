"use client";

import { ReactNode } from "react";
import { MiniKitProvider } from "@worldcoin/minikit-js/minikit-provider";

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <MiniKitProvider>
      {children}
    </MiniKitProvider>
  );
}
