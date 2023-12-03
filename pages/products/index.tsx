import Head from "next/head";
import {Box} from "@mui/material";
import React from "react";
import Games from "@/components/Games";

export const getStaticProps = async () => {
    const response = await fetch('https://jsonplaceholder.typecode.com/users/1');
    const data = await response.json();

    if (!data) {
        return {
            notFound: true
        }
    }

    return {
        props: { products: data }
    }
}

const Products = () => {
  return (
    <>
      <Head>
        <title>Игры</title>
      </Head>
        <Box>
            <h1 style={{ textAlign: "center" }}>Игры</h1>

            <Games />
        </Box>
    </>
  );
};

export default Products;
