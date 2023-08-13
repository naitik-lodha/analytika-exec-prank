import "@/styles/globals.css";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
    
        <title>Analytika Executive Suprise</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
