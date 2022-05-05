import './styles/Etablissements.css'
import Bischoffsheim from './img/Bischoffsheim.jpg'
import FicheEcole1 from './FicheEcole1'
import {Link} from 'react-router-dom';


function Etabli ({idetablissement, nom, adresse}){
  var redirect;
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
                    <div className='a' onClick={<FicheEcole1 
                    idetablissement={idetablissement}
                    />}>
                      Voir plus 
                      </div>
                </button>
              </div>

            </div>


        </div>
    )
}

export default Etabli