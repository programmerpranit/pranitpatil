import "@/app/globals.css";
import "highlight.js/styles/vs2015.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Head from "next/head";
import axios from "axios";
import Navbar from "@/components/Navbar";
import NextNProgress from "nextjs-progressbar";
import Script from "next/script";
import Footer from "@/app/(home)/Footer";
import React from "react";

export default function App({ Component, pageProps }: any): JSX.Element {
  axios.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem("token");
      if (token !== null) {
        config.headers.Authorization = "Bearer " + token;
      } else {
        console.log("not authenticated");
      }
      return config;
    },
    (error) => {
      void Promise.reject(error);
    }
  );

  return (
    <>
      <Head>
        <title>Pranit Patil - Full Stack Developer</title>
        <meta
          key="desc"
          name="description"
          content="I'm a passionate Full stack developer based in Mumbai, with
          expertise in both freelance projects and full-time roles. With a
          strong command of modern technologies and frameworks, including React,
          JavaScript, Next.js, and TypeScript, I have mastered the art of
          creating robust and dynamic web applications. I take pride in
          delivering high-quality code and crafting intuitive user experiences."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NextNProgress color="#0070f3" />
      <Navbar />
      <ToastContainer pauseOnFocusLoss draggable pauseOnHover />

      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-326KGTZH86"
        strategy="afterInteractive"
      />

      <Script id="google-tag" strategy="afterInteractive">
        {`  window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-326KGTZH86');`}
      </Script>
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
