import '../styles/Etablissements.css'
import Bischoffsheim from '../img/Bischoffsheim.jpg'
import {Link} from 'react-router-dom';
import setIdEtablissement from './click'


function Etabli ({idetablissement, nom, adresse}){

  var url="";

  switch(idetablissement){
    case 1:
      url = "/Etablissements/Ecole1";  
      break;
    case 2 :
      url = "/Etablissements/Ecole1";
      break;
    case 3 :
      url = "/Etablissements/Ecole1";
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
                <button onClick={() => setIdEtablissement(idetablissement)} className='bouton'>
                    <div className='a'>
                    <Link to={url}> Voir plus </Link>
                      
                      </div>
                </button>
              </div>

            </div>


        </div>
    )
}

export default Etabli
 