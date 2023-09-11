import React, { FC } from "react";
import {Box} from "@mui/material";
import Link from "next/link";

const Footer:FC = () => (
  <footer style={{ padding: "10px" }}>
    <Box sx={{
        display: "flex",
        justifyContent: { sm: "space-between" },
        flexDirection: { xs: "column", sm: "row" },
        alignItems: { xs: "center", sm: "unset" }
    }}>
        <Box sx={{
            "& > a": {
                transition: ".45s all"
            },
            "&:hover > a": {
                color: "#1976d2"
            },
            marginBottom: { xs: "10px", sm: "unset" }
        }}>
            <Link href={"/terms/"}>Пользовательское соглашение</Link>
        </Box>
        <Box sx={{
            "& > a": {
                transition: ".45s all"
            },
            "&:hover > a": {
                color: "#1976d2"
            }
        }}>
            <Link href={"/privacy/"}>Политика конфиденциальности</Link>
        </Box>
    </Box>
  </footer>
);

export default Footer;
