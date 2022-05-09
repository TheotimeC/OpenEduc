import React from 'react';
import userProfile from '../Connexion/Session';
import { useState, useEffect, useRef } from "react";
import axios from 'axios';

function ClassModif(){

    const [ClasseData, setClasseData] = React.useState([]);
    const [antiBoucle, setAntiBoucle] = React.useState('true');
    const [saiEffectif, setSaiEffectif] = useState('')
    const [saiNom, setSaiNom] = useState('')
    const [saiNiveau, setSaiNiveau] = useState('')
    const [Effectif, setEffectif] = useState('Effectif')
    const [Nom, setNom] = useState('Nom')
    const [Niveau, setNiveau] = useState('Niveau')
    const [verifModifClasse, setVerifModifClasse] = React.useState('false');


    const idetablissement = localStorage.getItem('idEtablissement');

    const infoClasse = () => { 
        
        axios.post('http://localhost:3001/api/info/Classe', {
            idEtablissement: idetablissement,

        }).then((response) => {

            console.log(response.data);

            if(response.data.message){

               console.log(response.data.message)

            }else{

                setClasseData(response.data)
                setAntiBoucle('false')
            }
        })
    }


    const updateClasse = () => {

        axios.post('http://localhost:3001/api/update/Classe', {
            idEtablissement: idetablissement,
            saiNomEcole: saiNom,
            nomEcole: Nom,
            Niveau: saiNiveau,
            Effectif: saiEffectif,

        }).then((response) => {

            console.log(response.data);

            if(response.data.message){

                setAntiBoucle('true') 
               
            }else{

                setAntiBoucle('true') 
            }
        })
    }

    const ajouterClasse = () => {

        axios.post('http://localhost:3001/api/ajouter/Classe', {
            idEtablissement: idetablissement,
            saiNomEcole: saiNom,
            nomEcole: Nom,
            Niveau: saiNiveau,
            Effectif: saiEffectif,

        }).then((response) => {

            console.log(response.data);

            if(response.data.message){

                setAntiBoucle('true') 

            }else{

                setAntiBoucle('true') 
            }
        })
    }

    const supprimerClasse = () => {

        axios.post('http://localhost:3001/api/Supprimer/Classe', {
            idEtablissement: idetablissement,
            nomEcole: Nom,


        }).then((response) => {

            console.log(response.data);

            if(response.data.message){

                setAntiBoucle('true') 
               
            }else{

                setAntiBoucle('true') 
            }
        })
    }

    // useEffect(() => {
    //     const timer = setTimeout(() =>  infoClasse(), 5000);
    //   }, [ClasseData]);
    if (antiBoucle === 'true') {

        infoClasse();
    }

    const RefraicheClasse = (nom, niveau, total_eleve) => {

        setEffectif(total_eleve)
        setNom(nom)
        setNiveau(niveau)

    }

    const verifClasse = () => {

        if(saiEffectif === Effectif & saiNom === Nom & saiNiveau === Niveau){

            setVerifModifClasse('false')

        }else if( (saiEffectif !== Effectif) | (saiNom !== Nom) | (saiNiveau !== Niveau) ){

            setVerifModifClasse('true')
        }
    }
    

    return (

        <div className='container_modif_classe'>

        <div className='class-containeur'>

            <ul className='class-list'>
               
                
                {Object.values(ClasseData).map(({nom, niveau,total_eleve}) =>(

                    //<li>{plant}</li>
                <li key={`${nom}-${niveau}`} className="lmj-cart" onClick={() => RefraicheClasse(nom, niveau, total_eleve)}>

                        <span>{nom}</span>
                         
                        <span>{total_eleve}</span>
                            
                </li>

                ))}

            </ul>
        </div>

        <div className='container_saisie_classe'> 
                <input placeholder={Effectif} onChange={(e) => {setSaiEffectif(e.target.value); verifClasse()}}></input>
                <input placeholder={Nom} onChange={(e) => {setSaiNom(e.target.value); verifClasse()}}></input>
                <input placeholder={Niveau} onChange={(e) => {setSaiNiveau(e.target.value); verifClasse()}}></input>
                <button onClick={() => updateClasse()}>Valider</button>
                         
        </div>


        <div className='footer_saisie_classe'> 
            <button onClick={() => ajouterClasse()}>Ajouter</button> 
            <button onClick={() => supprimerClasse()}>Supprimer</button>  
        </div>
</div>
    )
}

export default ClassModif;