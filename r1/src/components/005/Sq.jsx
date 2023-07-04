import { useRef, useState } from "react";
import rand from "../../functions/rand";
import randColor from "../../functions/randColor";

function Sq() {
  const [sq, setSq] = useState([]);
  const [dir, setDir] = useState(1);
  const sortPress = useRef(0);

  const addOne = (_) => {
    setSq((s) => [
      ...s,
      { d: rand(1000, 9999), c: randColor(), row: s.length, show: true },
    ]);
  };
  const sort = (_) => {
    setSq((s) => [...s].sort((a, b) => dir * (a.d - b.d)));
    setDir((d) => d * -1);
    console.log("send to mi6:", ++sortPress.current);
  };
  const sortDefault = (_) => {
    setSq((s) => [...s].sort((a, b) => a.row - b.row));
  };
  const filterMore5000 = (_) => {
    setSq((s) =>
      s.map((sq) =>
        sq.d > 5000 ? { ...sq, show: true } : { ...sq, show: false }
      )
    );
  };
  const resetFilter = (_) => {
    setSq((s) => s.map((sq) => ({ ...sq, show: true })));
  };

  return (
    <div>
      <h1>SQ</h1>
      <div className="sq-bin">
        {sq.map((s, i) =>
          s.show ? (
            <div
              key={i}
              className="sq small"
              style={{ backgroundColor: s.c + "70", borderColor: s.c }}
            >
              {s.d}
            </div>
          ) : null
        )}
      </div>
      <button className="red" onClick={addOne}>
        Add Square
      </button>
      <button className="red" onClick={(_) => setSq([])}>
        Clear
      </button>
      <button className="yellow" onClick={sort}>
        sort
      </button>
      <button className="yellow" onClick={sortDefault}>
        default sort
      </button>
      <button className="green" onClick={filterMore5000}>
        filter
      </button>
      <button className="green" onClick={resetFilter}>
        reset filter
      </button>
    </div>
  );
}
export default Sq;
