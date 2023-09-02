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
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import {Button} from "@mui/material";

const navigation = [
  { id: 1, title: 'Главная', path: '/' },
  { id: 2, title: 'Продукты', path: '/products' },
  { id: 3, title: 'Новости', path: '/news' },
  { id: 4, title: 'FAQ', path: '/faq' }
];

const settings = ['Аккаунт', 'Выйти'];

const Navbar:FC = () => {

    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

  return (
      <Box>
        <AppBar position="fixed" sx={{ background: "white", boxShadow: "none", padding: "10px 0" }}>
            <Container>
                        <Toolbar disableGutters>
                            <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1, color: "black" }} />
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

                            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                                <IconButton
                                    size="large"
                                    aria-label="account of current user"
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
                                        <Link key={id} href={path} onClick={handleCloseNavMenu}>
                                                {title}
                                        </Link>
                                    ))}
                                </Menu>
                            </Box>
                            <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
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
                                    color: 'inherit',
                                    textDecoration: 'none',
                                }}
                            >
                                LOGO
                            </Typography>
                                <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, alignItems: "center" }}>
                                    {navigation.map(({ id, title, path }) => (
                                        <Box sx={{
                                            "&:not(:last-child)": {
                                                marginRight: "40px"
                                            }
                                        }}>
                                            <Link key={id} href={path} onClick={handleCloseNavMenu}>
                                                {title}
                                            </Link>
                                        </Box>
                                    ))}

                                    <Button
                                        sx={{
                                            boxShadow: "0 0 15px #4c72ff"
                                        }}
                                        variant="contained"
                                    >
                                        Личный кабинет
                                    </Button>
                                </Box>

                            <Box sx={{ flexGrow: 0 }}>
                                <Tooltip title="Аккаунт">
                                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                        <Avatar src="/broken-image.jpg" />
                                    </IconButton>
                                </Tooltip>
                                    <Menu
                                        sx={{ mt: '45px' }}
                                        id="menu-appbar"
                                        anchorEl={anchorElUser}
                                        anchorOrigin={{
                                            vertical: 'top',
                                            horizontal: 'right',
                                        }}
                                        keepMounted
                                        transformOrigin={{
                                            vertical: 'top',
                                            horizontal: 'right',
                                        }}
                                        open={Boolean(anchorElUser)}
                                        onClose={handleCloseUserMenu}
                                    >
                                            {settings.map((setting) => (
                                                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                                    <Typography textAlign="center">{setting}</Typography>
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
