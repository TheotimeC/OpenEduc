import React, { useEffect } from 'react';
import './styles/Etablissements.css'
import Bischoffsheim from './img/Bischoffsheim.jpg'


function Carte ({nom, adresse}){
    return(

        <div>
            <h1>🏫 Etablissements 🏫</h1>
            <div className='card-container'>
              <div className='image-container'>
                <img src={Bischoffsheim} alt=''/>
              </div>
              <div className='card-content'>

                <div className='card-title'>
                     <h3>{nom}</h3>
                </div>
                <div className='card-body'>
                  <p>{adresse}</p>
                </div>

              </div>

              <div className='btn'>
                <button>
                  <a>
                    Voir plus
                  </a>
                </button>
              </div>

            </div>
        </div>
    )
}

export default Carte