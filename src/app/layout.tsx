import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { cn } from "@/lib/utils";
import Sidebar from "@/components/Sidebar";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Analytica — E-commerce Analytics Dashboard",
  description: "Premium enterprise analytics platform for modern e-commerce businesses. Track revenue, customers, orders, and growth in real-time.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={cn(
          `${geistSans.variable} ${geistMono.variable} antialiased min-h-screen w-full text-white flex`,
          "bg-[#020617]"
        )}
        style={{
          backgroundImage: `
            radial-gradient(ellipse 80% 50% at 50% -20%, rgba(14,165,233,0.06) 0%, transparent 60%),
            linear-gradient(to bottom right, #020617 0%, #040d1f 100%)
          `
        }}
      >
        {/* Subtle dot grid overlay */}
        <div
          className="fixed inset-0 pointer-events-none opacity-[0.018]"
          style={{
            backgroundImage: `radial-gradient(circle, #94a3b8 1px, transparent 1px)`,
            backgroundSize: "32px 32px",
          }}
        />
        <Sidebar />
        <div className="flex-1 overflow-x-hidden">
          <div className="p-6 lg:p-8 max-w-[1600px]">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
