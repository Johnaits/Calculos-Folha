import React from "react";
import Pensao from "./calculo-pensao";
import Select from "./RGPS-RPPS";

function Front() {
  return (
    <div id="conteudo" className="term">
      <dt>
        <h3>
          <span>Pensão IR</span>
        </h3>
      </dt>
      <div className="conteudo-principal">
        <dd>
          <Select />

          <div>
            <label>Quantidade dependentes</label>
          </div>
          <input type="number" id="22" />
          <div>
            <label>
              Valor salário<div></div>
              <input type="number" id="23" />
            </label>
          </div>
          <div>
            <label>
              Porcentagem pensão<div></div>
              <input type="number" id="27" />
            </label>
          </div>

          <div></div>

          <button id="24" type="submit" onClick={Pensao}>
            Calcular
          </button>
        </dd>
      </div>

      <div id="conteudo-secundario">
        <label placeholder="Resultado" id="25"></label>
        <label placeholder="tabela" id="26"></label>
      </div>
    </div>
  );
}
export default Front;
