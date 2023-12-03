import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Image from 'next/image'
import GtaOnlineIcon from "public/games/gta_online_icon.png"
import RageMpIcon from "public/games/icon_rage_y.png"
import CsIcon from "public/games/cs_icon.png"
import Link from "next/link";
import {Button} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function Games() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={{ xs: 2, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    <Grid item xs={4} sm={4} md={4}>
                        <Link href={"/products/cs"}>
                            <Item sx={{
                                borderRadius: "10px",
                                boxShadow: "0 0 15px rgb(0 0 0 / 20%)",
                                transition: ".20s",
                                "&:hover": {
                                    transform: "scale(1.05)"
                                }
                            }}
                            >
                                <Box sx={{ display: "flex", alignItems: "center", height: "140px", padding: "10px" }}>
                                    <Box sx={{ marginRight: "25px" }}>
                                        <Image
                                            src={CsIcon}
                                            width={75}
                                            height={75}
                                            alt="counter strike icon"
                                        />
                                    </Box>
                                    <Box sx={{ maxWidth: "75%", display: "flex", flexDirection: "column", height: "130px", textAlign: "start" }}>
                                        <span style={{ fontWeight: 600, fontSize: "17px" }}>Counter Strike 2</span>
                                        <p>
                                            <span><b>Статус:</b> в разработке</span><br/>
                                            <span><b>Обновлено:</b> 25.11.2023</span><br/>
                                            <span><b>Стоимость:</b> от 250 <b>₽</b></span>
                                        </p>
                                    </Box>
                                </Box>
                            </Item>
                        </Link>
                    </Grid>
                <Grid item xs={4} sm={4} md={4}>
                    <Link href={"/products/gta-online"}>
                        <Item sx={{
                            borderRadius: "10px",
                            boxShadow: "0 0 15px rgb(0 0 0 / 20%)",
                            transition: ".20s",
                            "&:hover": {
                                transform: "scale(1.05)"
                            }
                        }}
                        >
                            <Box sx={{ display: "flex", alignItems: "center", height: "140px", padding: "10px" }}>
                                <Box sx={{ marginRight: "25px" }}>
                                    <Image
                                        src={GtaOnlineIcon}
                                        width={75}
                                        height={75}
                                        alt="gta online icon"
                                    />
                                </Box>
                                <Box sx={{ maxWidth: "75%", display: "flex", flexDirection: "column", height: "130px", textAlign: "start" }}>
                                    <span style={{ fontWeight: 600, fontSize: "17px" }}>GTA Online</span>
                                        <p>
                                            <span><b>Статус:</b> в разработке</span><br/>
                                            <span><b>Обновлено:</b> 10.12.2023</span><br/>
                                            <span><b>Стоимость:</b> от 250 <b>₽</b></span>
                                        </p>
                                </Box>
                            </Box>
                        </Item>
                    </Link>
                </Grid>
                <Grid item xs={4} sm={4} md={4}>
                    <Link href={"/products/rage-mp"}>
                        <Item sx={{
                            borderRadius: "10px",
                            boxShadow: "0 0 15px rgb(0 0 0 / 20%)",
                            transition: ".20s",
                            "&:hover": {
                                transform: "scale(1.05)"
                            }
                        }}
                        >
                            <Box sx={{ display: "flex", alignItems: "center", height: "140px", padding: "10px" }}>
                                <Box sx={{ marginRight: "25px" }}>
                                    <Image
                                        src={RageMpIcon}
                                        width={75}
                                        height={75}
                                        alt="rage mp icon"
                                    />
                                </Box>
                                <Box sx={{ maxWidth: "75%", display: "flex", flexDirection: "column", height: "130px", textAlign: "start" }}>
                                    <span style={{ fontWeight: 600, fontSize: "17px" }}>RAGE MP</span>
                                    <p>
                                        <span><b>Статус:</b> в разработке</span><br/>
                                        <span><b>Обновлено:</b> 03.12.2023</span><br/>
                                        <span><b>Стоимость:</b> от 300 <b>₽</b></span>
                                    </p>
                                </Box>
                            </Box>
                        </Item>
                    </Link>
                </Grid>
            </Grid>
        </Box>
    );
}