import { useRef, useState } from "react";

const Poed = () => {
  /*     const [poed, muudaPoed] = useState(
    [
      {keskus: "Kristiine",
      aeg: "9-21"}
      {keskus: "Mustamäe",
      aeg: "9-21"}
      {keskus: "Ülemiste",
      aeg: "9-21"}
    ]); */

  const [poed, muudaPoed] = useState(
    JSON.parse(localStorage.getItem("poed")) || []
  );
  const poodRef = useRef();
  const aegRef = useRef();

  const kustuta = (index) => {
    poed.splice(index, 1);
    muudaPoed(poed.slice());
    localStorage.setItem("poed", JSON.stringify(poed));
  };

  const lisa = () => {
    poed.push({ keskus: poodRef.current.value, aeg: aegRef.current.value });
    muudaPoed(poed.slice());
    localStorage.setItem("poed", JSON.stringify(poed));
  };

  const sorteeriAZ = () => {
    poed.sort((a, b) => a.keskus.localeCompare(b.keskus));
    muudaPoed(poed.slice());
  };

  const sorteeriZA = () => {
    poed.sort((a, b) => b.keskus.localeCompare(a.keskus));
    muudaPoed(poed.slice());
  };

  return (
    <div>
      <label>Uue poe nimetus</label>
      <input ref={poodRef} type="text" />
      <label>Lahti oleku aeg</label>
      <input ref={aegRef} type="text" />
      <button onClick={() => lisa()}>Lisa</button>

      <button onClick={() => sorteeriAZ()}>Sorteeri A-Z</button>
      <button onClick={() => sorteeriZA()}>Sorteeri Z-A</button>

      <div>
        {poed.map((element, index) => (
          <div key={element.keskus}>
            {element.keskus} {element.aeg}
            <button onClick={() => kustuta(index)}>X</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Poed;
