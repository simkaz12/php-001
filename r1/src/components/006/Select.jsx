import { useState } from "react";
// is input ateina tik stringas

const data = [
  { value: "1", label: "one" },
  { value: "2", label: "two" },
  { value: "3", label: "tree" },
  { value: "4", label: "four" },
];

function Select() {
  const [select, setSelect] = useState("");

  return (
    <fieldset>
      <legend>Select</legend>
      <h6>Selected: {data.find((d) => d.value === select)?.label}</h6>
      <div>
        <select value={select} onChange={(e) => setSelect(e.target.value)}>
          <option value="">Select one</option>
          {data.map((item) => (
            <option key={item.value} value={item.value}>
              {item.label}
            </option>
          ))}
        </select>
      </div>
    </fieldset>
  );
}

export default Select;
