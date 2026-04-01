import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Sahad Saleel C — MERN Stack Developer",
  description: "MERN Stack Developer building real-world web applications. Code. Improve. Repeat.",
  openGraph: {
    title: "Sahad Saleel C — MERN Stack Developer",
    description: "MERN Stack Developer building real-world web applications.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
