import React from 'react';
import { useState, useEffect, useRef } from "react";
import '../styles/modif.css'
import axios from 'axios';
import ClasseModif from './ClasseModif'
import PersonneModif from './PersonneModif'



function ModifieEcole (){

 
    const classList = useRef("classeListe");
    const [ClasseData, setClasseData] = React.useState([]);
    const [EtabData, setEtabData] = React.useState([]);
    const [PersData, setPersData] = React.useState([]);
    const [antiBoucle, setAntiBoucle] = React.useState('true');
    const [verifModifEcole, setVerifModifEcole] = React.useState('false');
    const [nomEcole, setNomEcole] = React.useState('');
    const [saiNom, setSaiNom] = useState('');

    const idetablissement = localStorage.getItem('idEtablissement')

    //appel API 

    const infoEtablissement = () => { 
        
        axios.post('http://localhost:3001/api/info/Etablissement', {
            idEtablissement: idetablissement,

        }).then((response) => {

            console.log(response.data);

            if(response.data.message){

               console.log(response.data.message)

            }else{

                setEtabData(response.data)
                setAntiBoucle('false')
                setNomEcole(response.data[0].nom)
   
            }
        })
    }
//ECOLE ELEMENTAIRE PUBLIQUE CHARLES SPINDLER
    const updateEtablissement = () => { 

            axios.post('http://localhost:3001/api/update/Etablissement', {
                idEtablissement: idetablissement,
                saiNomEtablissement: saiNom
    
            }).then((response) => { 
              
                if(response.data.message){
    
                    setAntiBoucle('true')
    
                }else{
            
                    setAntiBoucle('true')  
                }
            }) 
        
        }



    const verifEcole  = (e) => {


        if(saiNom === nomEcole){

            setVerifModifEcole('false')

        }else{

            setVerifModifEcole('true')
        }

        setSaiNom(e)
        console.log(verifModifEcole)

        
    }
 

    if (antiBoucle === 'true') {

        infoEtablissement()
    }
    


    return (

      
        <div className='faux-body'>

            <div className='container_modif_suppr'>

                 <button>Supprimer</button>

            </div>
        

            <div className='container_modif'> 

                <h2> {nomEcole}</h2>

                <ClasseModif/>
                <PersonneModif/>
            

                <div  className='footer-modif'>

                    <input className='saisieEcole' placeholder={nomEcole} onChange={(e) => {verifEcole(e.target.value)}}></input>
                    <button onClick={() => updateEtablissement()}>Modifier</button>

                </div>

            </div>


            <div className='container_modif'></div>

        </div>
        
    )


}
//classList.current.value
//   <CareScale careType='water' scaleValue={classe.water} />
//<CareScale careType='light' scaleValue={classe.light} />
//{plant.isBestSale ?  <span> ❤ | </span> : <span> 😒 | </span>}


// function selectClasse(){

//     for(let i = 0; i < 6; i++){
//        // const classRef = useRef("the value");
//         classeOptions.push({
//             label:   "keyName",
//             value: "the value" + i,
//             key: i
//         });


//     }
// }


export default ModifieEcole;


