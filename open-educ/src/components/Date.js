import React, { Component }  from 'react';
import './styles/Date.css'

const nomEcole = "ECOLE PRIMAIRE PUBLIQUE DES FONTAINES"
const anneeSco = "Année scolaire : 2021/22"
const date = "Date de mise à jour : 21-nov-21"

function Date() {
    return (
        <><section><div id="nom"><h1>{nomEcole}</h1></div></section><section id="bandeauDate">
            <section className="bandeauDate">
                <div id="anneeSco">{anneeSco}</div>
                <div id="dateMAJ">{date} </div>
                </section>
        </section></>
    )
}

export default Date
