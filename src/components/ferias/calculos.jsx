import React from "react";
import DescontaINSS from "./descontos";

function Calcula() {
  let id = 16;
  let a = parseFloat(document.getElementById("11").value);
  let b = document.getElementById("12").checked;
  let c = parseFloat(document.getElementById("14").value);
  let d = parseFloat(document.getElementById("17").value);
  let diasferias = (a / 30) * c;
  let valorabono = Number;

  b ? (valorabono = (c / 30) * (30 - a)) : (valorabono = 0);
  const somadesconto = diasferias + diasferias / 3;

  /* const soma = DescontaINSS(somadesconto, d) + valorabono * 2 + valorabono / 3 */ console.log(
    DescontaINSS(somadesconto, d, id)
  );
  /* document.getElementById("16").innerHTML = soma.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL"
  }); */
}

export default Calcula;
