import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./components/GobalStyles";
import { darkTheme, lightTheme } from "./components/theme";

import Header from "./components/Header/Header";
import Body from "./components/Body/Body";

function App() {
  const [theme, setTheme] = useState("dark");
  const themeToggler = () => {
    theme === "dark" ? setTheme("light") : setTheme("dark");
  };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <Header theme={theme} toggler={themeToggler} />
      <Body />
    </ThemeProvider>
  );
}

export default App;
