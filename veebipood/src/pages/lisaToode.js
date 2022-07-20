import { useRef, useState } from "react";

function LisaToode() {
  const nimiRef = useRef();
  const hindRef = useRef();
  const aktiivneRef = useRef();

  const [sonum, maaraSonum] = useState("");

  const sisestaToode = () => {
    /*     console.log("Töötab");
    console.log(nimiRef.current.value); */
    if (nimiRef.current.value === "") {
      maaraSonum("Toodet ei saa lisada, väli on tühi!");
    } else {
      let tooted = localStorage.getItem("tooted");
      tooted = JSON.parse(tooted) || [];
      tooted.push({
        nimi: nimiRef.current.value,
        hind: hindRef.current.value,
        aktiivne: aktiivneRef.current.checked,
      });
      tooted = JSON.stringify(tooted);
      localStorage.setItem("tooted", tooted);
      maaraSonum("Toode " + nimiRef.current.value + " edukalt lisatud");
    }
  };

  return (
    <div>
      <label>Toote nimi: </label>
      <input ref={nimiRef} type="text" placeholder="Lisa uus toode"></input>
      <br />
      <label>Toote hind: </label>
      <input ref={hindRef} type="number"></input>
      <br />
      <label>Toote aktiivsus: </label>
      <input ref={aktiivneRef} type="checkbox"></input>
      <br />
      <button onClick={() => sisestaToode()}>Sisesta</button>
      <div>{sonum}</div>
    </div>
  );
}

export default LisaToode;
