import React from "react";

import Contador from "./components/Contador";
import ScreenContador from "./components/ScreenContador";
import { ContadorProvider } from "./context/ContadorContext";

function App() {
  return (
    <ContadorProvider>
      <Contador />
      <ScreenContador />
    </ContadorProvider>
  );
}

export default App;
