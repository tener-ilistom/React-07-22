import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import Avaleht from "./pages/avaleht";
import Ostukorv from "./pages/ostukorv";

function App() {
  return (
    <div className="App">
      <img
        className="pilt"
        src="https://geenius.ee/app/uploads/sites/4/2018/06/3150df1ed3a118814f15a956c54c1eab.jpeg"
        alt="Auto"
      />
      <Link to="/avaleht">
        <button>Avalehele</button>
      </Link>
      <Link to="/ostukorv">
        <button>Ostukorvi</button>
      </Link>

      <button className="nupp">Vajuta mind</button>
      <Routes>
        <Route path="avaleht" element={<Avaleht />} />
        <Route path="ostukorv" element={<Ostukorv />} />
      </Routes>
    </div>
  );
}

export default App;
