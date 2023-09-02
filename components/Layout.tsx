import React, { FC, ReactNode } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {Box, Container} from "@mui/material";
import Image from "next/image";

type layoutProps = {
  children: ReactNode,
}

const Layout:FC<layoutProps> = ({ children }) => (
  <Container maxWidth={"lg"} sx={{ minHeight: "100vh", display: "grid", gridAutoRows: "auto 1fr auto" }}>
    <Header />
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
    <Footer />
  </Container>
);

export default Layout;
