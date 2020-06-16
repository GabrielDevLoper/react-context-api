import React, { useContext } from "react";

import { ContadorContext } from "../../context/ContadorContext";

function ScreenContador() {
  const [count, setCount] = useContext(ContadorContext);

  const handleDiminuir = () => {
    setCount(count - 1);
  };

  return (
    <>
      <h1>Tela 2 contador: {count}</h1>
      <button onClick={handleDiminuir}>Diminuir</button>
    </>
  );
}

export default ScreenContador;
