import React from "react";
import Ferias from "./ferias/ferias";
import Descontos from "./descontos/INSS-IRRF";
import Front from "./loop-pensao/front";

function Info() {
  const actualdate = new Date().getFullYear();
  return (
    <div>
      <div id="cabecalho">
        <h1>Cálculos</h1>
        <div id="menu-principal" className="dictionary">
          <Ferias />
          <Descontos />
          <Front />
        </div>
      </div>

      <div id="rodape"></div>
      <footer>
        <p>Developer Johny Kerstin - {actualdate}</p>
      </footer>
    </div>
  );
}

export default Info;
