import { useRef } from "react";
import { /* useNavigate, */ useParams } from "react-router-dom";

function MuudaToode() {
  const { tooteNimi } = useParams();
  const tooted = JSON.parse(localStorage.getItem("tooted")) || [];
  const toode = tooted.find((element) => element.nimi === tooteNimi);
  const index = tooted.indexOf(toode);
  const nimiRef = useRef();
  const hindRef = useRef();
  const aktiivneRef = useRef();
  /*   const navigate = useNavigate(); */

  const muuda = () => {
    // [{},{}][1] = {nimi: nimiRef.current.value, hind: hindRef.current.value, aktiivne: aktiivneRef.current.value}
    tooted[index] = {
      nimi: nimiRef.current.value,
      hind: hindRef.current.value,
      aktiivne: aktiivneRef.current.value,
    };
  };

  return (
    <div>
      {toode !== undefined && (
        <div>
          {/*       <div>{toode.nimi}</div>
      <div>{toode.hind}</div> */}
          <label>Toote nimi</label>
          <input ref={nimiRef} defaultValue={toode.nimi} type="text" />
          <br />
          <label>Toote hind</label>
          <input ref={hindRef} defaultValue={toode.hind} type="number" />
          <br />
          <label>Toode aktiivne</label>
          <input
            ref={aktiivneRef}
            defaultValue={toode.aktiivne}
            type="checkbox"
          />
          <br />
          <button onClick={() => muuda()}>Muuda</button>
        </div>
      )}
    </div>
  );
}

export default MuudaToode;
