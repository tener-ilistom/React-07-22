import { useState } from "react";

function Ostukorv() {
  const [ostukorv, muudaOstukorv] = useState(
    JSON.parse(sessionStorage.getItem("ostukorv")) || []
  );

  const lisaOstukorvi = (element) => {
    ostukorv.push(element);
    sessionStorage.setItem("ostukorv", JSON.stringify(ostukorv));
    muudaOstukorv(ostukorv.slice());
  };

  const eemaldaOstukorvist = (index) => {
    ostukorv.splice(index, 1); // splice - kustutamiseks
    sessionStorage.setItem("ostukorv", JSON.stringify(ostukorv)); // salvestus
    muudaOstukorv(ostukorv.slice()); // HTML muutmine
  };

  const tyhjenda = () => {
    sessionStorage.setItem("ostukorv", JSON.stringify([]));
    muudaOstukorv([]);
  };

  const arvutaKogusumma = () => {
    let kogusumma = 0;
    ostukorv.forEach((element) => (kogusumma += Number(element.hind)));
    return kogusumma;
  };

  return (
    <div>
      {ostukorv.length === 0 && <div>Ostukorv on tühi!</div>}
      {ostukorv.length > 0 && (
        <button onClick={() => tyhjenda()}>Tühjenda</button>
      )}
      <div>
        {ostukorv.map((element, index) => (
          <div key={index}>
            <span>
              {element.nimi} - {element.hind}{" "}
            </span>
            <button onClick={() => eemaldaOstukorvist(index)}>x</button>
            <button onClick={() => lisaOstukorvi(element)}>+</button>
          </div>
        ))}
      </div>
      {ostukorv.length > 0 && <div>{arvutaKogusumma()} €</div>}
    </div>
  );
}
export default Ostukorv;
