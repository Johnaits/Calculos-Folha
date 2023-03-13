import React from "react";
import ReactDOM from "react-dom";

function RGPS() {
  ReactDOM.render(
    <label placeholder="campo porcentagem" id="31"></label>,
    document.getElementById("30")
  );
}

function RPPS() {
  ReactDOM.render(
    <div>
      <label>
        Valor contribuição<div></div>
        <input type="number" id="30" />
      </label>
    </div>,
    document.getElementById("31")
  );
}
function Select() {
  return (
    <div>
      <label>
        Qual o regime?<div></div>
        RGPS
        <input
          type="radio"
          id="28"
          defaultChecked
          name="abono"
          value="S"
          onClick={RGPS}
        />
        {"  "}
        RPPS
        <input type="radio" id="29" name="abono" onClick={RPPS} />
      </label>
      <label placeholder="campo porcentagem" id="31"></label>
    </div>
  );
}

export default Select;
