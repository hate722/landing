import { AppProps } from "next/app";
import Head from "next/head";
import Layout from "@/components/Layout";
import '../styles/globals.css';

const App = ({ Component, pageProps }: AppProps) => (
    <Layout>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&family=Source+Sans+Pro:wght@200;300;400;600;700;900&display=swap" rel="stylesheet" />
      </Head>
      <main style={{ marginTop: "100px" }}>
        <Component {...pageProps} />
      </main>
    </Layout>
);

export default App;
