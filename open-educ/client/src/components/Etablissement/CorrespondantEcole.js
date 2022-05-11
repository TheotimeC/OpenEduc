import React, { useEffect } from 'react';
import '../styles/Correspondant.css'
import Photo from '../img/Jeff.jpg'
import axios from 'axios';


function Correspondant(idetablissement) {
    
    const id = parseInt(Object.values(idetablissement));
    const idEtablissement = localStorage.getItem('idEtablissement')
    const [antiBoucle, setAntiBoucle] = React.useState('false')

    
    const [Correspondant, getCorrespondant] = React.useState([]);

    // useEffect(() => {
    //     // ⬇ This calls my get request from the server
    //     Corres();
    //   }, []);
      
    // const Corres = () => { 
      
    //     axios.get('http://localhost:3001/api/corres', {
    //     }).then((response) => {
    //         getCorrespondant(response.data[id]);
    //         setAntiBoucle('true')
            
    //     });
    // };

    const infoPersonne = () => { 
        
        axios.post('http://localhost:3001/api/info/Personne', {
            idEtablissement: idEtablissement,

        }).then((response) => {

            console.log(response.data);

            if(response.data.message){

               console.log(response.data.message)

            }else{

                getCorrespondant(response.data)
                console.log(response.data)
                setAntiBoucle('true')

   
            }
        })
    }

    if (antiBoucle === 'false') {

        infoPersonne();
    }



    return (

    <div className='contaneur_bandeau'>
        
    {Object.values(Correspondant).map(({fonction, civilité ,nom, prenom, mail, tel}) =>(


        <section className="bandeau" key={`${fonction}-${mail}`}>

            <section className="bandeauTitre">
                <div id="titre">{fonction}</div>
            </section>

            <section className="bandeauCorrespondant">
                    <div className="img" id="photo">
                        <img src={Photo} alt=''/>
                    </div> 

                    <div className='info_contact'>

                        <div>{civilité} </div>
                        <div>{nom} {prenom}</div>    
                        <div>{mail}</div>
                        <div>{tel}</div>

                    </div>

            </section>

        </section>
    ))}

    </div>


    )
}

export default Correspondant