/* eslint-disable @next/next/no-page-custom-font */
import { type Metadata } from "next";
import "@/app/globals.css";
import React from "react";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Pranit Patil - Full Stack Developer",
  description:
    "I'm a passionate Full stack developer based in Mumbai, with expertise in both freelance projects and full-time roles. With a strong command of modern technologies and frameworks, including React, JavaScript, Next.js, and TypeScript, I have mastered the art of creating robust and dynamic web applications. I take pride in delivering high-quality code and crafting intuitive user experiences.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
