import React from "react";
import GlobalStyle from "./styles/global.style";
import Navbar from "./components/navbar.component";
import { BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";

import MainContent from "./components/main.component";
const App: React.FC = () => {
  return (
    <RecoilRoot>
      <GlobalStyle />
      <BrowserRouter>
        <Navbar />
        <MainContent />
      </BrowserRouter>
    </RecoilRoot>
  );
};

export default App;
