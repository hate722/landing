import Head from "next/head";
import {Box, Button, ButtonProps} from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import Image from 'next/image'
import React from "react";
import Link from "next/link";
import { styled } from '@mui/material/styles';
import { purple } from '@mui/material/colors';
import Advantages from "@/components/Advantages";
import Questions from "@/components/Questions";
import ScrollToTop from "@/components/scrollToTop";

const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: purple[500],
    boxShadow: "0 0 15px #9c27b0",
    '&:hover': {
        backgroundColor: purple[700],
        boxShadow: "0 0 30px #9c27b0",
        borderRadius: "6px"
    },
}));

const Home = () => (
    <>
        <Head>
            <title>Home</title>
        </Head>
        <Box sx={{
            maxWidth: { md: "none", lg: "55%" },
            display: "flex",
            flexDirection: "column",
            alignItems: {  md: "none" }
        }}>
            <Box>
                <Box sx={{
                    display: { xs: 'none', sm: "none", md: 'block' }
                }}>
                    <h1 style={{ fontSize: "35px" }}>Приветствуем на NameSite!</h1>
                </Box>
                <Box sx={{
                    display: { xs: 'block', sm: "block", md: 'none' }
                }}>
                    <h1 style={{ fontSize: "25px" }}>Приветствуем на NameSite!</h1>
                </Box>
            </Box>
            <p style={{ fontWeight: "600", lineHeight: "1.6" }}>
                    NameSite - это команда опытных ребят, разрабатывающая ПО к таким играм как CS:GO, GTA Online и других игр...
            </p>
            <hr style={{ height: "3px", background: "#1976d2", width: "100%" }}/>

        </Box>

        <Box sx={{
            display: "flex",
            alignItems: { xs: "center", sm: "flex-start" },
            marginBottom: "50px",
            marginTop: "20px",
            flexDirection: { xs: 'column', sm: "row" },
        }}>
            <Box sx={{
                marginRight: { xs: "none", sm: "35px" },
                marginBottom: { xs: "30px" }
            }}>
                <Link href={"/products"}>
                    <Button
                        sx={{
                            boxShadow: "0 0 15px #4c72ff",
                            "&:hover": {
                                boxShadow: "0 0 30px #4c72ff"
                            },
                            borderRadius: "6px"
                        }}
                        variant="contained"
                        endIcon={<SendIcon />}
                    >
                        Продукция
                    </Button>
                </Link>
            </Box>
            <Link href={"#"}>
                <ColorButton variant="contained">
                    <Image
                        src="/discord-white.png"
                        width={25}
                        height={25}
                        alt="discord channel"
                        style={{ marginRight: "10px", color: "#fff" }}
                    />
                    Наш Discord
                </ColorButton>
            </Link>
        </Box>

        <Box sx={{ marginBottom: "50px" }}>
            <h2 style={{ textAlign: "center" }}>Наши преимущества</h2>

            <Advantages />
        </Box>

        <Box sx={{ marginBottom: "50px" }}>
            <h2 style={{ textAlign: "center" }}>Вопрос / ответ</h2>

            <Questions />
        </Box>
    </>
);

export default Home;
