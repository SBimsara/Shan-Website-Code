import React from "react";
import { Navbar } from "./components";
import { BrowserRouter } from "react-router-dom";
import GlobalStyle from "./globalStyles";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Navbar />
    </BrowserRouter>
  );
}

export default App;
