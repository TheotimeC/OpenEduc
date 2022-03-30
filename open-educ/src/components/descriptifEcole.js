import React, { Component }  from 'react';
import Bischoffsheim from './img/Bischoffsheim.jpg';
import Rosheim from './img/Rosheim.jpg';
const nomEcole = "ECOLE PRIMAIRE PUBLIQUE DES FONTAINES"
const idEcole = "Identifiant : 0671236E"
const anneeSco = "Année scolaire : 2021/22"
const adresse = "Adresse : 2 rue des Ecoles 67870, BISCHOFFSHEIM"
const date = "Date de mise à jour : 21-nov-21"
const tel = "Téléphone : 03 88 50 21 24"
const mail = "Email : ce.0671236E@ac-strasbourg.fr"

function descriptif() {
    return (
        <section class="bandeau">
            <section><div id="nom"><h1>{nomEcole}</h1></div></section>
            <section id="bandeauDate"> 
                <div id="anneeSco">{anneeSco}</div>
                <div id="dateMAJ">{date} </div>
            </section>
            <br/>
            <section id="infoEcole"> 
                <div className="img">
                    <img src={Bischoffsheim} alt=''/>
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
        </section> 
    );
}

export default descriptif;