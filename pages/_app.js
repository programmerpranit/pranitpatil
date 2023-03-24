import "@/styles/globals.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
    <Head>
        <title>Pranit Patil - Full Stack Developer</title>
        <meta name="description" content="Pranit Patil - Full Stack Developer" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ToastContainer pauseOnFocusLoss draggable pauseOnHover />
      <ToastContainer />
      <Component {...pageProps} />
    </>
  );
}
