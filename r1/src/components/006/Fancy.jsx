import { useState } from "react";
// is input ateina tik stringas
function Fancy() {
  const [color, setColor] = useState("#ffffff");
  const [range, setRange] = useState("0");

  const handleChangeColor = (e) => {
    setColor(e.target.value);
  };
  const handleChangeRange = (e) => {
    setRange(e.target.value);
  };

  return (
    <fieldset>
      <legend style={{ color }}>One text input</legend>

      <div>
        <input type="color" value={color} onChange={handleChangeColor} />
      </div>
      <div>
        <label>{range.padStart(2, "0")}</label>
        <input
          type="range"
          min="0"
          max="99"
          value={range}
          onChange={handleChangeRange}
        />
      </div>
    </fieldset>
  );
}

export default Fancy;
