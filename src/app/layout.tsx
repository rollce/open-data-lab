import type { Metadata } from "next";
import { Crimson_Pro, Space_Grotesk } from "next/font/google";
import { SiteNav } from "@/components/site-nav";
import "antd/dist/reset.css";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const crimsonPro = Crimson_Pro({
  variable: "--font-crimson-pro",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Open Data Lab",
  description:
    "Interactive research dashboard built with open environmental data.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${spaceGrotesk.variable} ${crimsonPro.variable}`}>
        <SiteNav />
        {children}
        <footer className="border-t border-[var(--border)] bg-[color:rgba(255,255,255,0.75)] py-4">
          <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 text-xs text-[color:rgba(16,32,35,0.7)]">
            <span>Open Data Lab • Admissions Portfolio Edition</span>
            <span>Built with Next.js, Recharts, Framer Motion, Ant Design</span>
          </div>
        </footer>
      </body>
    </html>
  );
}
