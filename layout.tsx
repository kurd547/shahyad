import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import  "./globals.css";
import { ThemeProvider } from "@/components/Common/theme-provider";

import { Quantico } from 'next/font/google'

const quantico = Quantico({
  subsets: ['latin'],
  weight: ['400', '700'],        // Quantico ships 400 and 700
  variable: '--font-quantico',   // expose as CSS var for flexibility
  display: 'swap',               // no invisible text
})


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Shahyad barzi | Full Stack Engineer",
  description:
    "Personal portfolio of Shahyad barzi – showcasing projects, skills, and experience in fullstack development.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={quantico.variable} suppressHydrationWarning>
      <body suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
