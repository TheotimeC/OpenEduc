import React from 'react';
import '../styles/Date.css'
import axios from 'axios';

// const nomEcole = "ECOLE PRIMAIRE PUBLIQUE DES FONTAINES"
// const anneeSco = "Année scolaire : 2021/22"
// const date = "Date de mise à jour : 21-nov-21"


function Date() {

    const idEtablissement = localStorage.getItem('idEtablissement');
    const [dataEcole, setDataEcole] = React.useState([])
    const  [antiBoucle, setAntiBoucle] = React.useState('false')

    const getEcole = () => {
        
        axios.post('http://localhost:3001/api/info/Etablissement', {
            idEtablissement: idEtablissement,
        }).then((response) => {

        

            if(response.data.message){

                console.log(response.data.message)

            }else{

               setDataEcole(response.data[0])
               setAntiBoucle('true')

    
              
            }
        })

    }

    if (antiBoucle === 'false'){

        getEcole();
    }


    return (
        <><section><div id="nom"><h1>{dataEcole.nom}</h1></div></section></>
    )
}

export default Date