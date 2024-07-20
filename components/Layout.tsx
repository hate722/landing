import React, {FC, ReactNode, useCallback, useEffect, useState} from "react";
import Footer from "@/components/Footer";
import {Box, Container} from "@mui/material";
import Navbar from "@/components/Navbar";
import ScrollToTop from "@/components/scrollToTop";

type layoutProps = {
  children: ReactNode,
}

const Layout:FC<layoutProps> = ({ children }) => {

    const [scrollY, setScrollY] = useState<number>(0);

    const onScroll = useCallback(() => {
        const { pageYOffset, scrollY } = window;

        let header:HTMLElement = document.querySelector(".appBar");

        if (scrollY >= 100) {
            header.style.boxShadow = "0 0 10px gray";
            if (window.innerWidth > 890) {
                header.style.padding = "10px 0";
            } else {
                header.style.padding = "0";
            }
        } else {
            header.style.boxShadow = "none";
            header.style.padding = "20px 0";
        }

        setScrollY(window.pageYOffset);
    }, []);

    useEffect(() => {
        window.addEventListener("scroll", onScroll, { passive: true });

        return () => {
            (window as any).window.removeEventListener("scroll", onScroll, { passive: true });
        }
    }, []);

    return (
        <>
            <ScrollToTop />
            <Container
                maxWidth={"lg"}
                sx={{ position: "relative", minHeight: "100vh", display: "grid", gridAutoRows: "auto 1fr auto" }}
            >
                <Navbar />
                {children}
                <Footer />
            </Container>
        </>

    )
};

export default Layout;
