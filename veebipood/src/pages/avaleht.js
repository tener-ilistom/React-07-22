import { useState } from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function Avaleht() {
  const [muutuja, funktsioon] = useState(0);
  const [keel, muudaKeel] = useState(localStorage.getItem("language"));

  const tooted = JSON.parse(localStorage.getItem("tooted")) || [];

  const muudaKoik = () => {
    funktsioon(muutuja + 2);
  };

  /*   const muudaKeelEE = () => {
    localStorage.setItem("language", "EE");
    muudaKeel("EE");
  };
  const muudaKeelEN = () => {
    localStorage.setItem("language", "EN");
    muudaKeel("EN");
  };
  const muudaKeelRU = () => {
    localStorage.setItem("language", "RU");
    muudaKeel("RU");
  }; */

  const muudaKeelt = (lang) => {
    localStorage.setItem("language", lang);
    muudaKeel(lang);
  };

  const lisaOstukorvi = (element) => {
    let ostukorv = sessionStorage.getItem("ostukorv");
    ostukorv = JSON.parse(ostukorv) || [];
    ostukorv.push(element);
    ostukorv = JSON.stringify(ostukorv);
    sessionStorage.setItem("ostukorv", ostukorv);
  };

  return (
    <div>
      <div className="language-container">
        <Button onClick={() => muudaKeelt("EE")} variant="primary">
          EE
        </Button>
        <Button onClick={() => muudaKeelt("EN")} variant="dark">
          EN
        </Button>
        <Button onClick={() => muudaKeelt("RU")} variant="danger">
          RU
        </Button>
        {keel === "EE" && <div>Siin on avalehe leht</div>}
        {keel === "EN" && <div>This is the home page</div>}
      </div>
      <div className="product-container">
        {tooted.map((element, index) => (
          <Card key={index} style={{ width: "15rem" }}>
            <div>
              <Link to={`/toode/${element.nimi.toLowerCase()}`}>
                <Card.Header>
                  <div>{element.nimi}</div>
                </Card.Header>
                <div>{element.hind}</div>
                <div>{element.aktiivne}</div>
              </Link>
              <Button onClick={() => lisaOstukorvi(element)} variant="primary">
                Lisa ostukorvi
              </Button>
            </div>
          </Card>
        ))}
      </div>
      <div className="quantity">
        <Button onClick={() => funktsioon(muutuja - 1)} variant="danger">
          -
        </Button>
        <div className="muutuja"> {muutuja} </div>
        <Button onClick={() => funktsioon(muutuja + 1)} variant="primary">
          +
        </Button>
        {muutuja < 0 && <div>Kogus ei saa olla miinuses!</div>}
        <Button onClick={() => muudaKoik()} variant="warning">
          Lisa 2
        </Button>
      </div>
    </div>
  );
}

export default Avaleht;
