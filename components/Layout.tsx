import React, {FC, ReactNode, useCallback, useEffect, useState} from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {Container} from "@mui/material";

type layoutProps = {
  children: ReactNode,
}

const Layout:FC<layoutProps> = ({ children }) => {

    const [scrollY, setScrollY] = useState(0);

    const onScroll = useCallback(() => {
        const { pageYOffset, scrollY } = window;

        let header = document.querySelector(".appBar");

        if (scrollY >= 100) {
            header.style.boxShadow = "0 0 10px gray";
            header.style.padding = "10px 0";
        } else {
            header.style.boxShadow = "none";
            header.style.padding = "20px 0";
        }

        console.log("yOffset", pageYOffset, "scrollY", scrollY);
        setScrollY(window.pageYOffset);
    }, []);

    useEffect(() => {
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => {
            window.removeEventListener("scroll", onScroll, { passive: true });
        }
    }, []);

    return (
        <Container
            maxWidth={"lg"}
            sx={{ minHeight: "100vh", display: "grid", gridAutoRows: "auto 1fr auto" }}
        >
            <Header/>
            {/*<Box sx={{
          zIndex: "-1",
          position: "fixed",
          width: "100%",
          height: "100%"
      }}>
          <Image
              src={"/bc-image.png"}
              alt={"background-image"}
              layout={"fill"}
              objectFit={"cover"}
          />
      </Box>*/}
            {children}
            <Footer/>
        </Container>
    )
};

export default Layout;
