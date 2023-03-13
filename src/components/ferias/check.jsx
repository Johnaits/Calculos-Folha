import React from "react";

function Check() {
  let sim = document.getElementById("12");
  let nao = document.getElementById("13");
  let prox = document.getElementById("17");

  function Toggle() {
    sim.checked = false;
    nao.checked = true;
    sim.disabled = true;
    prox.focus();
  }

  function Untoggle() {
    sim.checked = true;
    nao.checked = false;
    sim.disabled = false;
  }

  document.getElementById("11").value == 30 ? Toggle() : Untoggle();
  /* i == 30 ? console.log("recognize") : null */
}

export default Check;
