// 1. võtame localStorage-st KÕIK tooted
// 2. võtame localStorage toodetelt jutumärgid VÕI anname tühja massiivi kui ta saab jutumärke ära võttes errori
// 3. kuvame HTMLs .map() abil
// 4. teeme igaühe osas kaks nuppu - kustuta ja muuda
// 5. ühe nupuga sidumine - kustuta funktsioon
// 6. kustutame localStorages - HTML uueneb pärast refreshi
// 7. muudame muutuja ära useState peale
// 8. pärast kustutamist uuendaTooted();   uuendame ka HTMLi
// 9. muuda nupule paneme Link ümber ja võimaldame minna muutma - saadame nime URLi
// 10. MUUDA FAIL, MUUDA SEOSED URL OSAS jne
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useState } from "react";
import { Link } from "react-router-dom";

function HaldaTooteid() {
  const [tooted, uuendaTooted] = useState(
    JSON.parse(localStorage.getItem("tooted")) || []
  );
  const [aktiivseteNaitamine, setAktiivseteNaitamine] = useState(false);

  const kustuta = (index) => {
    tooted.splice(index, 1);
    localStorage.setItem("tooted", JSON.stringify(tooted));
    uuendaTooted(tooted.slice());
  };

  const aktiivsed = () => {
    let filtreeritudTooted = tooted.filter(
      (element) => element.aktiivne === true
    );
    uuendaTooted(filtreeritudTooted);
    setAktiivseteNaitamine(true);
  };

  const naitaKoiki = () => {
    uuendaTooted(JSON.parse(localStorage.getItem("tooted")));
    setAktiivseteNaitamine(false);
  };

  return (
    <>
      <div>
        {aktiivseteNaitamine === false && (
          <Button onClick={() => aktiivsed()} variant="success">
            Näita vaid aktiivseid
          </Button>
        )}
        {aktiivseteNaitamine === true && (
          <Button onClick={() => naitaKoiki()}>Näita kõiki</Button>
        )}
        {tooted.map((element, index) => (
          <Card key={index}>
            <div className="manage-product-container">
              <Card.Header>
                <div>{element.nimi} </div>
              </Card.Header>
              <div>Hinnaga: {element.hind} </div>
              <div className="halda-btns">
                <Button onClick={() => kustuta(index)} variant="danger">
                  X
                </Button>{" "}
                <Link to={`/muuda/${element.nimi}`}>
                  <Button variant="warning">Muuda</Button>
                </Link>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </>
  );
}
export default HaldaTooteid;
