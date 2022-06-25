import React from "react";
import About from "./components/Main/about";
import Header from "./components/header";
import Recipes from "./components/Main/recipes";
import Footer from "./components/footer";
import Subscribe from "./components/Main/subscribe";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
`;

export default function App() {
  return (
    <>
    <GlobalStyle />
    <Header />
    <Recipes />
    <About />
    <Subscribe />
    <Footer />
    </>
  )
}