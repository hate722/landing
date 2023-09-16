import React, {FC} from "react";
import Link from "next/link";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import {Button} from "@mui/material";
import {useRouter} from "next/router";
import {AiOutlineClose, AiOutlineMenu} from "react-icons/ai";

const navigation = [
  { id: 1, title: 'Главная', path: '/' },
  { id: 2, title: 'Продукты', path: '/products' },
  { id: 3, title: 'Новости', path: '/news' },
  { id: 4, title: 'FAQ', path: '/#faq' }
];

const pages = ['Products', 'Pricing', 'Blog'];

const Navbar:FC = () => {

    const router = useRouter();
    const [anchorElNav, setAnchorElNav] = React.useState<boolean>(false);

  return (
      <Box>
        <AppBar className={"appBar"} position="fixed" sx={{ background: "white", boxShadow: "none", padding: { sm: "0", md: "20px 0" }, transition: "all .4s ease-out" }}>
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
                                        <Box sx={{
                                            "& > a": {
                                                color: "#000",
                                                textDecoration: "none",
                                                fontSize: "15px",
                                                fontWeight: "500",
                                                position: "relative"
                                            },
                                            "& > a::before": {
                                                content: '""',
                                                position: "absolute",
                                                display: "block",
                                                width: "100%",
                                                height: "2px",
                                                bottom: "-2px",
                                                left: "0",
                                                background: "#1976d2",
                                                transform: router.pathname === path ? "scaleX(1)" : "scaleX(0)",
                                                transition: "transform 0.3s ease"
                                            },
                                            "& > a:hover::before": {
                                                transform: "scaleX(1)"
                                            }
                                        }}>
                                            <Link
                                                key={id}
                                                href={path}
                                                scroll={title !== "FAQ"}
                                            >
                                                {title}
                                            </Link>
                                        </Box>
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
                                                    <Box sx={{
                                                        "& > a": {
                                                            fontSize: "35px",
                                                            color: "#000",
                                                            textDecoration: "none",
                                                            fontWeight: "500",
                                                            position: "relative"
                                                        },
                                                        "&:not(:last-child)": {
                                                            marginBottom: "20px"
                                                        },
                                                        "& > a::before": {
                                                            content: '""',
                                                            position: "absolute",
                                                            display: "block",
                                                            width: "100%",
                                                            height: "2px",
                                                            bottom: "-2px",
                                                            left: "0",
                                                            background: "#1976d2",
                                                            transform: router.pathname === path ? "scaleX(1)" : "scaleX(0)",
                                                            transition: "transform 0.3s ease"
                                                        }
                                                    }}>
                                                        <Link
                                                            onClick={() => setAnchorElNav(false)}
                                                            key={id}
                                                            href={path}
                                                        >
                                                            {title}
                                                        </Link>
                                                    </Box>
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
                                                    top: "20px",
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
