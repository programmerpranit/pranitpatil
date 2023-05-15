import "@/styles/globals.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Head from "next/head";
import axios from "axios";
import Navbar from "@/components/Navbar";
import NextNProgress from "nextjs-progressbar";
import Script from "next/script";

export default function App({ Component, pageProps }) {
  axios.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem("token");
      if (token) {
        config.headers["Authorization"] = "Bearer " + token;
      }
      return config;
    },
    (error) => {
      Promise.reject(error);
    }
  );

  return (
    <>
      <Head>
        <title>Pranit Patil - Full Stack Developer</title>
        <meta
          name="description"
          content="Pranit Patil - Full Stack Developer"
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
    </>
  );
}
