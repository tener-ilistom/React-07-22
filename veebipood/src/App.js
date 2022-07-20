import Button from "react-bootstrap/Button";
import { Container, Navbar } from "react-bootstrap";
import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import Avaleht from "./pages/avaleht";
import HaldaTooteid from "./pages/HaldaTooteid";
import LisaToode from "./pages/lisaToode";
import MuudaToode from "./pages/MuudaToode";
import Ostukorv from "./pages/ostukorv";
import Poed from "./pages/Poed";
import YksikToode from "./pages/Yksiktoode";

function App() {
  return (
    <>
      <div className="App">
        <img
          className="pilt"
          src={require("./Assets/Images/logo512.png")}
          alt="pilt"
        />
        <Navbar bg="dark" variant="dark">
          <Container>
            <Link to="/avaleht">
              <Button variant="dark">Avalehele</Button>
            </Link>
            <Link to="/ostukorv">
              <Button variant="dark">Ostukorvi</Button>
            </Link>
            <Link to="/lisa-toode">
              <Button variant="dark">Lisa toode</Button>
            </Link>
            <Link to="/poed">
              <Button variant="dark">Poed</Button>
            </Link>
            <Link to="/halda">
              <Button variant="dark">Halda</Button>
            </Link>
          </Container>
        </Navbar>

        <Routes>
          <Route path="avaleht" element={<Avaleht />} />
          <Route path="ostukorv" element={<Ostukorv />} />
          <Route path="lisa-toode" element={<LisaToode />} />
          <Route path="poed" element={<Poed />} />
          <Route path="toode/:nimi" element={<YksikToode />} />
          <Route path="halda" element={<HaldaTooteid />} />
          <Route path="muuda/:tooteNimi" element={<MuudaToode />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
