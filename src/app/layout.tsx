"use client"

import { Montserrat } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import { AnimatePresence } from "framer-motion";
import React from "react";
import { usePathname } from "next/navigation";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathName = usePathname();
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} font-montserrat antialiased `}
      >
        <Script id="theme-switcher" strategy="beforeInteractive">
          {`
            document.documentElement.classList.toggle(
              'dark',
              localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
            )
          `}
        </Script>
        <AnimatePresence mode="wait" initial={false}>
            {React.cloneElement(children as React.ReactElement, { key: pathName })}
          </AnimatePresence>
      </body>
    </html>
  );
}
