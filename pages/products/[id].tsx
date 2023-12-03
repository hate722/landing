import Head from "next/head";
import {Box} from "@mui/material";
import ProductInfo from "@/components/ProductInfo";

export const getStaticPaths = async () => {
    const response = await fetch('https://jsonplaceholder.typecode.com/users/');
    const data = await response.json();

    const paths = data.map(({ id }) => ({
        params: { id: id.toString() }
    }))

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async (context) => {
    const { id } = context.params;
    const response = await fetch(`https://jsonplaceholder.typecode.com/users/${id}`);
    const data = await response.json();

    if (!data) {
        return {
            notFound: true
        }
    }

    return {
        props: { product: data }
    }
}

const Product = ({ product }) => (
    <>
        <Head>
            <title>Product</title>
        </Head>

        <Box>
            <ProductInfo />
        </Box>
    </>
);

export default Product;