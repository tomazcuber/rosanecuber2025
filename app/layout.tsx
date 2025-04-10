import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import {myriadPro, BRLNSDB} from './fonts'
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Campanha Rosane Cuber 2025",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${myriadPro.className} ${BRLNSDB.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
