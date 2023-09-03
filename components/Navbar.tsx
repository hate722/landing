import React, { FC } from "react";
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
                                                <Link className={pathname === path ? styles.nav_link + " " + styles.active : styles.nav_link} key={id} href={path} onClick={handleCloseNavMenu}>
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
                                <IconButton
                                    size="large"
                                    aria-controls="menu-appbar"
                                    aria-haspopup="true"
                                    onClick={handleOpenNavMenu}
                                    color="black"
                                >
                                    <MenuIcon />
                                </IconButton>
                                <Menu
                                    id="menu-appbar"
                                    anchorEl={anchorElNav}
                                    anchorOrigin={{
                                        vertical: 'bottom',
                                        horizontal: 'left',
                                    }}
                                    keepMounted
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'left',
                                    }}
                                    open={Boolean(anchorElNav)}
                                    onClose={handleCloseNavMenu}
                                    sx={{
                                        display: { xs: 'block', md: 'none' },
                                    }}
                                >
                                    {navigation.map(({ id, title, path }) => (
                                        <MenuItem key={path} onClick={handleCloseNavMenu}>
                                        <Link key={id} href={path} onClick={handleCloseNavMenu}>
                                            {title}
                                        </Link>
                                        </MenuItem>
                                    ))}
                                </Menu>
                            </Box>
                        </Toolbar>
            </Container>
        </AppBar>
      </Box>
  );
};

export default Navbar;
