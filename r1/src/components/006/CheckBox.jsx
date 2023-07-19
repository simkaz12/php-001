import { useState } from "react";
// is input ateina tik stringas
function CheckBox() {
  const [cb, setCb] = useState({
    A: true,
    B: false,
    C: false,
    D: false,
  });

  const check = (a) => {
    setCb((c) => ({
      ...cb,
      [a]: !c[a],
    }));
  };
  return (
    <fieldset>
      <legend>Checkboxes</legend>

      <div>
        <label
          className={cb.A ? "checkbox checked" : "checkbox"}
          onClick={() => check("A")}
        >
          One
        </label>
        <label
          className={cb.B ? "checkbox checked" : "checkbox"}
          onClick={() => check("B")}
        >
          Two
        </label>
        <label
          className={cb.C ? "checkbox checked" : "checkbox"}
          onClick={() => check("C")}
        >
          Tree
        </label>
        <label
          className={cb.D ? "checkbox checked" : "checkbox"}
          onClick={() => check("D")}
        >
          Four
        </label>
      </div>
    </fieldset>
  );
}

export default CheckBox;
