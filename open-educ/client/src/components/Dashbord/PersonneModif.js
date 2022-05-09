import React from 'react';
import { useState, useEffect, useRef } from "react";
import axios from 'axios';

function PersonneModif(){

    const [PersonneData, setPersonneData] = React.useState([]);
    const [antiBoucle, setAntiBoucle] = React.useState('true');
    const [saiNom, setSaiNom] = React.useState('');
    const [saiPrenom, setSaiPrenom] = React.useState('');
    const [saiTel, setSaiTel] = React.useState('');
    const [saiMail, setSaiMail] = React.useState('');
    const [Nom, setNom] = React.useState('Nom');
    const [Prenom, setPrenom] = React.useState('Prenom');
    const [Tel, setTel] = React.useState('Téléphone');
    const [Mail, setMail] = React.useState('Mail');
    const [VerifModifClasse, setVerifModifClasse] = React.useState('');


    const idetablissement = localStorage.getItem('idEtablissement');

    const infoPersonne = () => { 
        
        axios.post('http://localhost:3001/api/info/Personne', {
            idEtablissement: idetablissement,

        }).then((response) => {

            console.log(response.data);

            if(response.data.message){

               console.log(response.data.message)

            }else{

                setPersonneData(response.data)
                setAntiBoucle('false')

   
            }
        })
    }

    const updatePersonne = () => {

        axios.post('http://localhost:3001/api/update/Personne', {
            idEtablissement: idetablissement,
            mail: Mail,
            saiNom: saiNom,
            saiMail: saiMail,
            saiTel: saiTel,
            saiPrenom: saiPrenom,

        }).then((response) => {

            console.log(response.data);

            if(response.data.message){

                setAntiBoucle('true') 
               

            }else{

                setAntiBoucle('true') 
            }
        })
    }

    const ajouterPersonne = () => {

        axios.post('http://localhost:3001/api/Ajouter/Personne', {
            idEtablissement: idetablissement,
            saiNom: saiNom,
            saiMail: saiMail,
            saiTel: saiTel,
            saiPrenom: saiPrenom,

        }).then((response) => {

            console.log(response.data);

            if(response.data.message){

                setAntiBoucle('true') 
               

            }else{

                setAntiBoucle('true') 
            }
        })
    }

    const supprimerPersonne = () => {

        axios.post('http://localhost:3001/api/Supprimer/Personne', {
            idEtablissement: idetablissement,
            mail: Mail

        }).then((response) => {

            console.log(response.data);

            if(response.data.message){

                setAntiBoucle('true') 
            }else{

                setAntiBoucle('true') 
            }
        })
    }


    if (antiBoucle === 'true') {

        infoPersonne();
    }

    const RefraicheClasse = (nom, prenom ,mail, tel) => {

        setNom(nom)
        setPrenom(prenom)
        setMail(mail)
        setTel(tel)
    }
    

    const verifPersonne = () => {

        if(saiMail === Mail | saiNom === Nom | saiPrenom === Prenom | saiTel === Tel){

            setVerifModifClasse('false')

        }else if( (saiMail !== Mail) & (saiNom !== Nom) & (saiPrenom !== Prenom) & (saiTel !== Tel) ){

            setVerifModifClasse('true')
        }
    }
    
    

    return (

        <div className='container_modif_classe'>

            <ul className='class-list'>
               
                
                {Object.values(PersonneData).map(({nom, prenom ,mail, tel}) =>(

                    //<li>{plant}</li>
                <li key={`${tel}-${mail}`} className="lmj-cart" onClick={() => RefraicheClasse(nom, prenom, mail, tel)}>

                        <span> {nom} {prenom}</span> 
                        <span>{mail}</span>
                        <span>{tel}</span>  
               
                </li>

                ))}

            </ul>

        <div className='container_saisie_classe'> 
                <input  placeholder={Nom} onChange={(e) => {setSaiNom(e.target.value); verifPersonne(); }}></input>
                <input  placeholder={Prenom} onChange={(e) => {setSaiPrenom(e.target.value); verifPersonne()}}></input>
                <input  placeholder={Mail} onChange={(e) => {setSaiMail(e.target.value); verifPersonne()}}></input>
                <input placeholder={Tel} onChange={(e) => {setSaiTel(e.target.value); verifPersonne()}}></input>
                <button onClick={() => updatePersonne()}>Valider</button>
                         
        </div>

        <div className='footer_saisie_classe'> 
            <button onClick={() => ajouterPersonne()}>Ajouter</button> 
            <button onClick={() => supprimerPersonne()}>Supprimer</button>  
        </div>
</div>
    )


}

export default PersonneModif;