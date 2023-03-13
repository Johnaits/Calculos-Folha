import React from "react";
import DescontaINSS from "../ferias/descontos";

function Descontos() {
  function Valores() {
    let dependente = parseFloat(document.getElementById("18").value);
    let soma = parseFloat(document.getElementById("19").value);
    let id = 21;
    DescontaINSS(soma, dependente, id);
  }

  return (
    <div id="conteudo" className="term">
      <dt>
        <h3>
          <span>INSS e IRRF</span>
        </h3>
      </dt>
      <div className="conteudo-principal">
        <dd>
          <div>
            <label>Quantidade dependentes</label>
          </div>
          <input type="number" id="18" />
          <div>
            <label>
              Valor salário<div></div>
              <input type="number" id="19" />
            </label>
          </div>
          <div></div>

          <button id="20" type="submit" onClick={Valores}>
            Calcular
          </button>
        </dd>
      </div>

      <div id="conteudo-secundario">
        <label placeholder="Resultado" id="21"></label>
      </div>
    </div>
  );
}

export default Descontos;
