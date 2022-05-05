import React, { useEffect } from 'react';
import './styles/Correspondant.css'
import Photo from './img/Jeff.jpg'
import axios from 'axios';


function Correspondant(idetablissement) {
    
    const id = parseInt(Object.values(idetablissement));
    
    const [Correspondant, getCorrespondant] = React.useState([]);

    useEffect(() => {
        // ⬇ This calls my get request from the server
        Corres();
      }, []);
      
    const Corres = () => { 
      
        axios.get('http://localhost:3001/api/corres', {
        }).then((response) => {
            getCorrespondant(response.data[id]);
            
        });
    };

    return (
        <section className="bandeau">
            <section className="bandeauTitre">
                <div id="titre">{Correspondant.fonction}</div>
            </section>
            <section className="bandeauCorrespondant">
                    <div className="img" id="photo">
                        <img src={Photo} alt=''/>
                    </div> 
                    <div id="civilité"> {Correspondant.civilité} </div>
                    <div id="nomMAJ">{Correspondant.nom}</div>
                    <div id="prenom"> {Correspondant.prenom}</div>
                    <div id="mailCorrespondant">{Correspondant.mail}</div>
            </section>
        </section>
    )
}

export default Correspondant