"use client";

import { useState } from "react";
import { darkTheme, lightTheme } from "./theme/theme";
import { ThemeProvider } from "styled-components";
import { Header } from "./components/header/header";
import { Carousel } from "./components/carrousel/carousel";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


export default function Home() {
  const [theme, setTheme] = useState(lightTheme);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === lightTheme ? darkTheme : lightTheme));
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <ThemeProvider theme={theme}>
      <div style={{ backgroundColor: theme.colors.background }}>
        <Header toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
        <Carousel>

        </Carousel>
      </div>
    </ThemeProvider>
  );
}
