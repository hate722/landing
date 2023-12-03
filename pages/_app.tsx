import { AppProps } from "next/app";
import Head from "next/head";
import Layout from "@/components/Layout";
import '../styles/globals.css';
import React from "react";
import {Box} from "@mui/material";

const App = ({ Component, pageProps }: AppProps) => (
    <Layout>
      <Head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&family=Source+Sans+Pro:wght@200;300;400;600;700;900&display=swap" />
      </Head>
      <Box sx={{ marginTop: { sm: "20px", md: "50px" } }}>
          <main>
              <Component {...pageProps} />
          </main>
      </Box>
    </Layout>
);

export default App;
