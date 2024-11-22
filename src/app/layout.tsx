"use client"

import { AnimatePresence } from "motion/react"
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { AddrProvider } from "@/contexts/addrContext";
import "./globals.css";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  useEffect(() => {
    const storage = globalThis?.sessionStorage;
    if (!storage) return;

    storage.setItem("prevPath", pathname);
  }, [pathname]);

  return (
    <html lang="en">
      <body className={`antialiased`} style={{minHeight:"100vh", display:"flex", flexDirection: "column", backgroundColor: "var(--background)"}}>
        <AddrProvider>
          <AnimatePresence>
            {children}
          </AnimatePresence>
        </AddrProvider>
      </body>
    </html>
  );
}
