import React from "react";
import Cabecalho from "./Components/Header";
import FiltroContainer from "./Components/Filter";
import { GlobalStyle } from "./Components/GlobalStyle";
import ListContainer from "./Components/List";


function App() {
  return (
    <>
      <GlobalStyle />      
      <Cabecalho />
      <FiltroContainer />
      <ListContainer />

    </>
    
  ) 
};

export default App;
