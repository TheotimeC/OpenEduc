import '../styles/Etablissements.css'
import Bischoffsheim from '../img/Bischoffsheim.jpg'
import {Link} from 'react-router-dom';
import handleclick from '../Etablissement/click'


function EtabliModif ({idetablissement, nom, adresse}){



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
                <button onClick={() => handleclick(idetablissement)}>

                    
                    <div className='a'>
                    <Link to={"/Etablissements/modif"}> Modifier </Link>
                      
                      </div>
                </button>
              </div>

            </div>


        </div>
    )
}

export default EtabliModif