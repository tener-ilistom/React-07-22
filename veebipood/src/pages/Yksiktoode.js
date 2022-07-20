import { useParams } from "react-router-dom";

function YksikToode() {
  const params = useParams();
  const tooted = JSON.parse(localStorage.getItem("tooted")) || [];
  const { nimi } = useParams();

  const toode = tooted.find((element) => element.nimi.toLowerCase() === nimi);

  return (
    <div>
      {toode !== undefined && (
        <div>
          <div>{toode.nimi}</div>
          <div>{toode.hind}</div>
        </div>
      )}
      {toode === undefined && <div>Toodet ei leitud!</div>}
    </div>
  );
}

export default YksikToode;
