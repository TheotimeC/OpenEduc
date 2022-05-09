import React, { useEffect } from 'react';
import Bischoffsheim from '../img/Bischoffsheim.jpg';
import '../styles/Descriptif.css';
import axios from 'axios';

function Descriptif(idetablissement) {

    const id = (parseInt(Object.values(idetablissement))-1);

    console.log(id)

    const [Description , getDescription] = React.useState([]);
    const [antiBoucle, setAntiBoucle] = React.useState('false')


    useEffect(() => {
        // ⬇ This calls my get request from the server
        Desc();
      }, []);



    const Desc = () => { 
      
        axios.get('http://localhost:3001/api/desc', {
        }).then((response) => {
            getDescription(response.data[id]);
            setAntiBoucle('true')
            

        });
    };


    // if(antiBoucle === 'false'){

    //     Desc();
    //  }


    return (
        <section className="bandeauEcole">
            <div className="img">
                <img id="imageEcole" src={Bischoffsheim} alt='' />
            </div>
            <div id="lieu">
                <div id="idEcole"> {Description.matricule} </div>
                <div id="adresseEcole">{Description.adresse}</div>
            </div>
            <div id="contact">
                <div id="telEcole"> {Description.tel}</div> 
                <div id="mailEcole">{Description.mail}</div>
                
            </div>
        </section>
    )
}

export default Descriptif