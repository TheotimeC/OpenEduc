import './App.css';
import React from 'react';
import Etablissements from './components/Etablissement/PageEtablissements';
import Login from './components/Connexion/Login';
import Admin from './components/Dashbord/Admin';
import {Route, Router, Routes} from 'react-router-dom';
import NavBar from './components/Rootes/NavBar';
import FicheEcole1 from './components/Etablissement/FicheEcole1';
import MofifieEcole from './components/Dashbord/PageModifieEcole';


function App() {
  return (
    <div className="App">
        <NavBar/>
        <Routes>
          <Route exact path="/Etablissements/modif" element={<MofifieEcole />}/>  
          <Route exact path="/Etablissements/Ecole1" element={<FicheEcole1 />}/>
          <Route exact path="/Etablissements" element={<Etablissements/>}/>
          <Route exact path="/Login" element={<Login/>}/>
          <Route exact path="/Admin" element={<Admin/>}/>
        </Routes>
      
    </div>
  );
}

export default App;
