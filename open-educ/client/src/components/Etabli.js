import './styles/Etablissements.css'
import Bischoffsheim from './img/Bischoffsheim.jpg'
import {Link} from 'react-router-dom';
import { useState } from 'react';
import FicheEcole1 from './FicheEcole1';
import UserProfile from './Session';


function Etabli ({idetablissement, nom, adresse}){

  var url="";

  switch(idetablissement){
    case 1:
      url = "/Etablissements/Ecole1";
      break;
    case 2 :
      url = "/Etablissements/Ecole2";
      break;
    case 3 :
      url = "/Etablissements/Ecole3";
      break;
  }

   

    return(
        <div>
            
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
                      <Link to={url}>
                        Voir plus
                      </Link>
                      </button>

              </div>

            </div>


        </div>
    )
}

export default Etabli