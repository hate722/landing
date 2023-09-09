import React, {FC, useState} from "react";
import Link from "next/link";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import AdbIcon from '@mui/icons-material/Adb';
import {Avatar, Button, MenuItem, Tooltip} from "@mui/material";
import {useRouter} from "next/router";
import styles from "../styles/Navbar.module.css";
import style from "../styles/Navbar.module.css";
import {AiOutlineClose, AiOutlineMenu} from "react-icons/ai";

const navigation = [
  { id: 1, title: 'Главная', path: '/' },
  { id: 2, title: 'Продукты', path: '/products' },
  { id: 3, title: 'Новости', path: '/news' },
  { id: 4, title: 'FAQ', path: '/faq' }
];

const pages = ['Products', 'Pricing', 'Blog'];

const Navbar:FC = () => {

    const { pathname } = useRouter();

    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

  return (
      <Box>
        <AppBar className={"appBar"} position="fixed" sx={{ background: "white", boxShadow: "none", padding: "20px 0", transition: "all .4s ease-out" }}>
            <Container>
                        <Toolbar disableGutters>
                            <Typography
                                variant="h6"
                                noWrap
                                component="a"
                                href="/"
                                sx={{
                                    mr: 2,
                                    display: { xs: 'none', md: 'flex' },
                                    fontFamily: 'monospace',
                                    fontWeight: 700,
                                    letterSpacing: '.3rem',
                                    color: 'black',
                                    textDecoration: 'none',
                                }}
                            >
                                LOGO
                            </Typography>
                            <Typography
                                variant="h5"
                                noWrap
                                component="a"
                                href="/"
                                sx={{
                                    mr: 2,
                                    display: { xs: 'flex', md: 'none' },
                                    flexGrow: 1,
                                    fontFamily: 'monospace',
                                    fontWeight: 700,
                                    letterSpacing: '.3rem',
                                    color: 'black',
                                    textDecoration: 'none',
                                }}
                            >
                                LOGO
                            </Typography>
                                <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex', justifyContent: "space-evenly" }, alignItems: "center" }}>
                                    {navigation.map(({ id, title, path }) => (
                                        <Link className={pathname === path ? [styles.nav_link, styles.active].join(' ') : styles.nav_link} key={id} href={path}>
                                            {title}
                                        </Link>
                                    ))}
                                    <Button
                                        sx={{
                                            boxShadow: "0 0 15px #4c72ff",
                                            "&:hover": {
                                                boxShadow: "0 0 30px #4c72ff"
                                            },
                                            borderRadius: "6px"
                                        }}
                                        variant="contained"
                                    >
                                        Личный кабинет
                                    </Button>
                                </Box>
                            <Box sx={{ flexGrow: 0, display: { xs: 'flex', md: 'none' } }}>
                                    <Box>
                                        <Box sx={{
                                            height: "80px",
                                            display: "flex",
                                            justifyContent: "space-between",
                                            borderBottom: "1px solid gray"
                                        }}>
                                            <Box sx={{
                                                display: "flex",
                                                flexDirection: "column",
                                                justifyContent: "center",
                                                alignItems: "center",
                                                position: "fixed",
                                                left: anchorElNav ? "0" : "-100%",
                                                right: 0,
                                                top: 0,
                                                bottom: 0,
                                                width: "100%",
                                                height: "100vh",
                                                backgroundColor: "#fff",
                                                transition: "left .5s"
                                            }}>
                                                {navigation.map(({ id, title, path }) => (
                                                    <Link
                                                        onClick={() => setAnchorElNav(false)}
                                                        className={pathname === path ? [styles.nav_link, styles.active, styles.nav_link_mobile].join(' ') : '' + styles.nav_link_mobile}
                                                        key={id}
                                                        href={path}
                                                    >
                                                        {title}
                                                    </Link>
                                                ))}
                                                <Button
                                                    sx={{
                                                        boxShadow: "0 0 15px #4c72ff",
                                                        borderRadius: "6px",
                                                        fontSize: "21px"
                                                    }}
                                                    variant="contained"
                                                >
                                                    Личный кабинет
                                                </Button>
                                            </Box>
                                            <Box
                                                sx={{
                                                    display: "block",
                                                    position: "absolute",
                                                    right: "10px",
                                                    top: "27px",
                                                    cursor: "pointer",
                                                    zIndex: 10,
                                                    color: "black"
                                                }}
                                                onClick={() => setAnchorElNav(!anchorElNav)}
                                            >
                                                {anchorElNav ? <AiOutlineClose size={35} /> : <AiOutlineMenu size={35} />}
                                            </Box>
                                        </Box>
                                    </Box>
                            </Box>
                        </Toolbar>
            </Container>
        </AppBar>
      </Box>
  );
};

export default Navbar;
