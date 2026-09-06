import { type Metadata } from "next";
import "@/app/globals.css";
import React from "react";
import { GeistSans } from "geist/font/sans";
import Navbar from "@/components/Navbar";
import Footer from "./(home)/Footer";
import { GoogleAnalytics } from '@next/third-parties/google'

export const metadata: Metadata = {
  title: "Pranit Patil - Full Stack Developer",
  description:
    "Pranit Patil is a software engineer based in Mumbai, India, building web and mobile products with React, Next.js, and TypeScript.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="en">
      <head>
        <GoogleAnalytics gaId="G-326KGTZH86" />
      </head>
      <body className={GeistSans.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
