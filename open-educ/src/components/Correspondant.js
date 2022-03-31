import React, { Component }  from 'react';
import './styles/Correspondant.css'
import Photo from './img/Photo.png'

const titre = "Correspondant local APEA :"
const civilité ="Monsieur"
const nom = "meyer"
const nomMAJ =  nom.toUpperCase(); 
const prenom = "Luc"
const mail = "luc.meyer@orange.fr"

function Correspondant() {
    return (
        <section className="bandeau">
            <section className="bandeauTitre">
                <div id="titre">{titre}</div>
            </section>
            <section className="bandeauCorrespondant">
                    <div className="img" id="photo">
                        <img src={Photo} alt=''/>
                    </div> 
                    <div id="civilité"> {civilité} </div>
                    <div id="nomMAJ">{nomMAJ}</div>
                    <div id="prenom"> {prenom}</div>
                    <div id="mailCorrespondant">{mail}</div>
            </section>
        </section>
    )
}

export default Correspondant