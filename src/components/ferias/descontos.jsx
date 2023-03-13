import React from "react";
import ReactDOM from "react-dom";

function DescontaINSS(soma, dependente, id) {
  let faixainss = 0.075;
  let somadescontoINSS = 1302 * faixainss;
  soma <= 1302 ? (somadescontoINSS = soma * faixainss) : null;
  soma > 1302 && soma <= 2571.29 ? faixa2() : null;
  soma > 2571.29 && soma <= 3856.94 ? faixa3() : null;
  soma > 3856.94 && soma <= 7567.49 ? faixa4() : null;

  function faixa2() {
    /* console.log("faixa 2"); */
    faixainss = 0.09;
    somadescontoINSS = 97.65 + (soma - 1302) * faixainss;
  }

  function faixa3() {
    /* console.log("faixa 3"); */
    faixainss = 0.12;
    somadescontoINSS = 97.65 + 114.23 + (soma - 2571.29) * faixainss;
  }

  function faixa4() {
    /* console.log("faixa 4"); */
    faixainss = 0.14;
    somadescontoINSS = 97.65 + 114.23 + 154.27 + (soma - 3650.04) * faixainss;
  }

  /* console.log("soma: " + soma);
  console.log("descontos INSS: " + somadescontoINSS); */
  const resultINSS = soma - somadescontoINSS;
  DescontaIRRF(resultINSS, somadescontoINSS, dependente, soma, id);

  function DescontaIRRF(resultINSS, somadescontoINSS, dependente, soma, id) {
    let baseIRRF = resultINSS - dependente * 189.59;
    let faixairrf;
    let valordeduzir;

    baseIRRF <= 1903.98 ? faixa1IR() : null;
    baseIRRF > 1903.99 && baseIRRF <= 2826.65 ? faixa2IR() : null;
    baseIRRF > 2826.66 && baseIRRF <= 3751.05 ? faixa3IR() : null;
    baseIRRF > 3751.06 && baseIRRF <= 4664.68 ? faixa4IR() : null;
    baseIRRF > 4664.68 ? faixa5IR() : null;

    function faixa1IR() {
      /* console.log("faixa 1 IR"); */
      faixairrf = 0;
      valordeduzir = 0;
      baseIRRF = "0";

      alert("ISENTO de Imposto de Renda!");
    }

    function faixa2IR() {
      /* console.log("faixa 2 IR"); */
      faixairrf = 0.075;
      valordeduzir = 142.8;
    }

    function faixa3IR() {
      /* console.log("faixa 3 IR"); */
      faixairrf = 0.15;
      valordeduzir = 354.8;
    }

    function faixa4IR() {
      /* console.log("faixa 4 IR"); */
      faixairrf = 0.225;
      valordeduzir = 636.13;
    }

    function faixa5IR() {
      /* console.log("faixa 5 IR"); */
      faixairrf = 0.275;
      valordeduzir = 869.36;
    }

    let resultIRRF = baseIRRF * faixairrf - valordeduzir;

    let resultado = soma - somadescontoINSS - resultIRRF;

    Adiciona();

    function transMoeda(props) {
      return props.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
      });
    }
    function Adiciona() {
      return ReactDOM.render(
        <div>
          <p>Valor Base INSS: {transMoeda(soma)}</p>
          <p>Desconto INSS: {transMoeda(somadescontoINSS)}</p>
          <p>Valor Base IRRF: {transMoeda(baseIRRF)}</p>
          <p>Desconto IRRF: {faixairrf == 0 ? "-" : transMoeda(resultIRRF)}</p>
          {console.log(resultIRRF)}
          <p>Valor c/ descontos: {transMoeda(resultado)}</p>
        </div>,
        document.getElementById(id)
      );
    }

    /* return (document.getElementById(id).innerHTML =
      "Valor c/ descontos: " +
      resultado.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
      })); */
  }
}

export default DescontaINSS;
