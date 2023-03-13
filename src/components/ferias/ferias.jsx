import React from "react";
import Calcula from "./calculos";
import Check from "./check";

function Ferias() {
  return (
    <div id="conteudo" className="term">
      <dt>
        <h3>
          <span>Férias</span>
        </h3>
      </dt>
      <div className="conteudo-principal">
        <dd>
          <label>
            Quantidade dias de férias <div></div>
            <input type="number" id="11" width="10px" min="0" onBlur={Check} />
          </label>
          <div>
            <label>
              Haverá abono?<div></div>
              S
              <input
                type="radio"
                id="12"
                defaultChecked
                name="abono"
                value="S"
              />
              {"  "}
              N<input type="radio" id="13" name="abono" />
            </label>
          </div>
          <div>
            <label>
              Quantidade dependentes<div></div>
              <input type="number" id="17" min="0" />
            </label>
          </div>

          <label>
            Valor salário <div></div>
            <input type="number" id="14" min="0" />
          </label>
          <div></div>
          <button id="15" type="submit" onClick={Calcula}>
            Calcular
          </button>
        </dd>
      </div>

      <div id="conteudo-secundario">
        <label placeholder="Resultado" id="16"></label>
      </div>
    </div>
  );
}

export default Ferias;
