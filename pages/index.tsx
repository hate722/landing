import Head from "next/head";
import Image from 'next/image';
import { Box } from "@mui/material";

const Home = () => (
    <>
        <Head>
            <title>Home</title>
        </Head>
        <Box sx={{
            maxWidth: "55%",
            display: "flex",
            flexDirection: "column"
        }}>
            <h1 style={{ fontSize: "50px" }}>Приветствуем на NameSite!</h1>
            <p style={{ fontWeight: "600", lineHeight: "1.6" }}>
                    NameSite - это команда опытных ребят, разрабатывающая ПО к таким играм как CS:GO, GTA Online и других игр...
            </p>
            <hr style={{ height: "3px", background: "linear-gradient(99deg, #4c72ff 0%, #324589 100%)", width: "100%" }}/>

        </Box>
    </>
);

export default Home;
