import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Accueil from "./les page/Accueil";
import Stagiaire from "./les page/Stagiaire";
import Formateur from "./les page/Formateur";
import Administrateur from "./les page/Administrateur";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/stagiaire" element={<Stagiaire />} />
        <Route path="/formateur" element={<Formateur />} />
        <Route path="/administrateur" element={<Administrateur />} />
      </Routes>
    </Router>
  );
}

export default App;
