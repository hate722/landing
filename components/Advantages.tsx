import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import ComputerIcon from '@mui/icons-material/Computer';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import DeveloperBoardIcon from '@mui/icons-material/DeveloperBoard';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import VpnLockIcon from '@mui/icons-material/VpnLock';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function ResponsiveGrid() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={{ xs: 2, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                <Grid item xs={4} sm={4} md={4}>
                    <Item sx={{ borderRadius: "10px", boxShadow: "0 0 15px rgb(0 0 0 / 20%)" }}>
                        <Box sx={{ display: "flex", alignItems: "center", height: "140px", padding: "10px" }}>
                            <Box sx={{ marginRight: "25px" }}>
                                <ComputerIcon sx={{ fontSize: "50px", color: "#1976d2" }} />
                            </Box>
                            <Box sx={{ maxWidth: "75%", display: "flex", flexDirection: "column", height: "130px", textAlign: "start" }}>
                                <span style={{ fontWeight: 600, fontSize: "17px" }}>Программное обеспечение</span>
                                <p>Наша команда разрабатывает ПО вкладывая все свои знания и навыки</p>
                            </Box>
                        </Box>
                    </Item>
                </Grid>
                <Grid item xs={4} sm={4} md={4}>
                    <Item sx={{ borderRadius: "10px", boxShadow: "0 0 15px rgb(0 0 0 / 20%)" }}>
                        <Box sx={{ display: "flex", alignItems: "center", height: "140px", padding: "10px" }}>
                            <Box sx={{ marginRight: "25px" }}>
                                <RocketLaunchIcon sx={{ fontSize: "50px", color: "#1976d2" }} />
                            </Box>
                            <Box sx={{ maxWidth: "75%", display: "flex", flexDirection: "column", height: "130px", textAlign: "start" }}>
                                <span style={{ fontWeight: 600, fontSize: "17px" }}>Оптимизация</span>
                                <p>Наш продукт не влияет на производительность системы</p>
                            </Box>
                        </Box>
                    </Item>
                </Grid>
                <Grid item xs={4} sm={4} md={4}>
                    <Item sx={{ borderRadius: "10px", boxShadow: "0 0 15px rgb(0 0 0 / 20%)" }}>
                        <Box sx={{ display: "flex", alignItems: "center", height: "140px", padding: "10px" }}>
                            <Box sx={{ marginRight: "25px" }}>
                                <DeveloperBoardIcon sx={{ fontSize: "50px", color: "#1976d2" }} />
                            </Box>
                            <Box sx={{ maxWidth: "75%", display: "flex", flexDirection: "column", height: "130px", textAlign: "start" }}>
                                <span style={{ fontWeight: 600, fontSize: "17px" }}>Разработка</span>
                                <p>Вы можете принять активное участие в разработке предлагая свои идеи</p>
                            </Box>
                        </Box>
                    </Item>
                </Grid>
                <Grid item xs={4} sm={4} md={4}>
                    <Item sx={{ borderRadius: "10px", boxShadow: "0 0 15px rgb(0 0 0 / 20%)" }}>
                        <Box sx={{ display: "flex", alignItems: "center", height: "140px", padding: "10px" }}>
                            <Box sx={{ marginRight: "25px" }}>
                                <SupportAgentIcon sx={{ fontSize: "50px", color: "#1976d2" }} />
                            </Box>
                            <Box sx={{ maxWidth: "75%", display: "flex", flexDirection: "column", height: "130px", textAlign: "start" }}>
                                <span style={{ fontWeight: 600, fontSize: "17px" }}>Поддержка</span>
                                <p>Наша служба поддержки поможет решить любые Ваши проблемы</p>
                            </Box>
                        </Box>
                    </Item>
                </Grid>
                <Grid item xs={4} sm={4} md={4}>
                    <Item sx={{ borderRadius: "10px", boxShadow: "0 0 15px rgb(0 0 0 / 20%)" }}>
                        <Box sx={{ display: "flex", alignItems: "center", height: "140px", padding: "10px" }}>
                            <Box sx={{ marginRight: "25px" }}>
                                <VpnLockIcon sx={{ fontSize: "50px", color: "#1976d2" }} />
                            </Box>
                            <Box sx={{ maxWidth: "75%", display: "flex", flexDirection: "column", height: "130px", textAlign: "start" }}>
                                <span style={{ fontWeight: 600, fontSize: "17px" }}>Безопасность</span>
                                <p>Мы заботимся о состоянии продукта, что бы предотвратить любые детекты ПО</p>
                            </Box>
                        </Box>
                    </Item>
                </Grid>
                <Grid item xs={4} sm={4} md={4}>
                    <Item sx={{ borderRadius: "10px", boxShadow: "0 0 15px rgb(0 0 0 / 20%)" }}>
                        <Box sx={{ display: "flex", alignItems: "center", height: "140px", padding: "10px" }}>
                            <Box sx={{ marginRight: "25px" }}>
                                <CheckCircleOutlineIcon sx={{ fontSize: "50px", color: "#1976d2" }} />
                            </Box>
                            <Box sx={{ maxWidth: "75%", display: "flex", flexDirection: "column", height: "130px", textAlign: "start" }}>
                                <span style={{ fontWeight: 600, fontSize: "17px" }}>Цена и качество</span>
                                <p>За предоставленную функциональность цена ниже чем у конкурентов</p>
                            </Box>
                        </Box>
                    </Item>
                </Grid>
            </Grid>
        </Box>
    );
}