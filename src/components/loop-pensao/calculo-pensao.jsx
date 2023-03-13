import React from "react";
import ReactDOM from "react-dom";

function DescontaINSS(soma) {
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
  /* DescontaIRRF(resultINSS, somadescontoINSS, dependente, soma, id); */
  let resultINSS = soma - somadescontoINSS;
  return resultINSS;
}

function DescontaIRRF(resultINSS, dependente) {
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
    baseIRRF = 0;

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
  /* console.log("baseIRRF: " + baseIRRF);
  console.log("faixairrf: " + faixairrf);
  console.log("valordeduzir: " + valordeduzir); */

  let resultIRRF = baseIRRF * faixairrf - valordeduzir;

  return resultIRRF;
}

function ValorPENSAO(base, valorINSS, valorIRRF, porcentagem) {
  return (base - valorINSS - valorIRRF) * porcentagem;
}

function transMoeda(props) {
  return props.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL"
  });
}

function tabela(dadostabela) {
  ReactDOM.render(
    <div>
      <table>
        <thead>
          <tr>
            <th>Líquido</th>
            <th>IR</th>
            <th>Pensão</th>
          </tr>
        </thead>
        <tbody>
          {dadostabela.map((valor) => (
            <tr>
              <td>{transMoeda(parseFloat(valor.valorliq))}</td>
              <td>{transMoeda(parseFloat(valor.valorimp))}</td>
              <td>{transMoeda(parseFloat(valor.valorpen))}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>,
    document.getElementById("26")
  );
}

function Pensao() {
  let b = parseFloat(document.getElementById("22").value);
  let a = parseFloat(document.getElementById("23").value);
  let c = parseFloat(document.getElementById("27").value) / 100;
  let dadostabela = {};
  let datstabela = [];
  let valorINSS = DescontaINSS(a).toFixed(2);
  let descontoINSS = a - valorINSS;
  let valordependente = 189.59 * b;
  let valorliquido1, valorliquido2;
  let valorIRRF = DescontaIRRF(valorINSS, b).toFixed(2);
  let retorno,
    valorpens = 0;

  valorliquido1 = a - descontoINSS - valordependente;
  valorpens = ValorPENSAO(a, descontoINSS, valorIRRF, c).toFixed(2);

  for (let i = 1; i !== 10; i++) {
    dadostabela[i] = {
      id: i,
      valorliq: valorliquido1.toFixed(2),
      valorimp: parseFloat(valorIRRF).toFixed(2),
      valorpen: valorpens
    };
    datstabela.push(dadostabela[i]);

    valorliquido1 = a - descontoINSS - valordependente;
    valorpens = ValorPENSAO(a, descontoINSS, valorIRRF, c).toFixed(2);

    valorliquido1 = valorliquido1 - valorpens;
    valorliquido2 = valorliquido1;

    valorIRRF = DescontaIRRF(valorliquido2, b);

    retorno === valorpens ? (i = 9) : 0;
    retorno = valorpens;
  }

  tabela(datstabela);

  ReactDOM.render(
    <div>
      <p>Líquido:{transMoeda(valorliquido1)}</p>
      <p>Valor Pensão:{transMoeda(parseFloat(valorpens))}</p>
      <p>Valor IR: {transMoeda(valorIRRF)}</p>
    </div>,
    document.getElementById("25")
  );
}

export default Pensao;
