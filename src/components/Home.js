import React from "react";
import Header from "./Header";
import Card from "./Card";
import Footer from "./Footer";
import { Container } from "./styles/Container.styled";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/Global";
import content from "./styles/content";


const theme = {
  colors: {
    header: "#b5a1dc",
    body: "#fff",
    footer: "#202124",
  },
  mobile: "768px",
};

const Home = () => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Header />
        <Container>
          {content.map((item, index) => (
            <Card key={index} item={item} />
          ))}
        </Container>
        <Footer />
      </>
    </ThemeProvider>
  );
};

export default Home;
