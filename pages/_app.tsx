import "styles/globals.css";
import "styles/layout.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Codevolution</title>
        <meta name="Gabriel" content="Awesome guy" />
      </Head>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
