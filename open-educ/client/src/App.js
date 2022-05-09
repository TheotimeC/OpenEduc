import './App.css';
import React from 'react';
import Home from './components/Home';
import Etablissements from './components/Etablissements';
import Login from './components/Login';
import Admin from './components/Admin';
import {Route, Router, Routes} from 'react-router-dom';
import NavBar from './components/NavBar';
import Carte from './components/Carte';
import FicheEcole1 from './components/FicheEcole1';
import FicheEcole2 from './components/FicheEcole2';
import FicheEcole3 from './components/FicheEcole3';
import FicheRecap from './components/FicheRecap';
import Graphique from './components/GraphiqueRecap';


function App() {
  return (
    <div className="App">
        <NavBar/>
        <Routes>
          <Route exact path="/Etablissements/Ecole1" element={<FicheEcole1 />}/>
          <Route exact path="/Etablissements/Ecole2" element={<FicheEcole2 />}/>
          <Route exact path="/Etablissements/Ecole3" element={<FicheEcole3 />}/>
          <Route exact path="/Etablissements" element={<Etablissements/>}/>
          <Route exact path="/" element={<FicheRecap/>}/>
          <Route exact path="/Login" element={<Login/>}/>
          <Route exact path="/Admin" element={<Admin/>}/>
        </Routes>
    </div>
  );
}

export default App;
