import React, { Component }  from 'react';
import Bischoffsheim from './img/Bischoffsheim.jpg';
import Rosheim from './img/Rosheim.jpg';
import './styles/Descriptif.css';
import { useState } from 'react';

const idEcole = "Identifiant : 0671236E"
const adresse = "Adresse : 2 rue des Ecoles 67870, BISCHOFFSHEIM"
const tel = "Téléphone : 03 88 50 21 24"
const mail = "Email : ce.0671236E@ac-strasbourg.fr"

function Descriptif() {
    return (
        <section className="bandeauEcole">
            <div className="img">
                <img id="imageEcole" src={Bischoffsheim} alt='' />
            </div>
            <div id="lieu">
                <div id="idEcole"> {idEcole} </div>
                <div id="adresseEcole">{adresse}</div>
            </div>
            <div id="contact">
                <div id="telEcole"> {tel}</div>
                <div id="mailEcole">{mail}</div>
            </div>
        </section>
    )
}

export default Descriptif