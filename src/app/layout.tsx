"use client"

import { AnimatePresence } from "motion/react"
import { useEffect } from "react";
import { usePathname } from "next/navigation";
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
      <body className={`antialiased`}>
        <AnimatePresence>
          {children}
        </AnimatePresence>
      </body>
    </html>
  );
}
