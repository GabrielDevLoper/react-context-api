import React, { useContext } from "react";

import { ContadorContext } from "../../context/ContadorContext";

function Contador() {
  const [count, setCount] = useContext(ContadorContext);

  const handleAdd = (e) => {
    setCount(count + 1);
  };

  return (
    <>
      <h1>Contador: {count}</h1>
      <button onClick={handleAdd}>Adicionar</button>
    </>
  );
}

export default Contador;
