import './App.css';
import React from 'react';
import Home from './components/Home';
import Etablissements from './components/Etablissements';
import Login from './components/Login';
import Admin from './components/Admin';
import {Route, Router, Routes} from 'react-router-dom';
import NavBar from './components/NavBar';


function App() {
  return (
    <div className="App">
        <NavBar/>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/Etablissements" element={<Etablissements/>}/>
          <Route exact path="/Login" element={<Login/>}/>
          <Route exact path="/Admin" element={<Admin/>}/>
        </Routes>
      
    </div>
  );
}

export default App;
