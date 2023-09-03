import React, { FC } from "react";
import {Box} from "@mui/material";
import Link from "next/link";
import styles from  "../styles/Footer.module.css"

const Footer:FC = () => (
  <footer style={{ padding: "10px" }}>
    <Box sx={{
        display: "flex",
        justifyContent: "space-between"
    }}>
        <Link className={styles.footerLink} href={"/"}>Условия использования</Link>
        <Link className={styles.footerLink} href={"/"}>Политика конфиденциальности</Link>
    </Box>
  </footer>
);

export default Footer;
