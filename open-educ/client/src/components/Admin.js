import './styles/Admin.css'
import React, { useEffect } from 'react';
import axios from 'axios';
import EtabliModif from './EtabliModif';
import UserProfile from './Session';
import Bischoffsheim from './img/Bischoffsheim.jpg'
import {Link} from 'react-router-dom';

function Admin (){

  const [Data, setData] = React.useState([]);
  let url;

  switch(UserProfile.getToken()){
    case "39mCF3^WR7pr#8e3qP!&WnE5ck5u=N-uU#8vx5zUjB39m#$k3hx&vC^$-ukt":
      url = 0;
      break;
    case "lol" :
      url = 1;
      break;
    case "test":
      url = 2;
      break;
    case "mdr" :
      url = 3;
  }

  useEffect(() => {
    // ⬇ This calls my get request from the server
    etab();
  }, []);

  const etab = () => {  
      
      axios.get('http://localhost:3001/api/etab', {
      }).then((response) => {
        setData(response.data)
        

      }); 
     
  };

if (url==0){
  return(
    <div>
        <h1>📊 Dashboard 📊</h1>
        <h4>Voici les écoles dont vous avez la charge</h4>

        
        <div>
            
            <div className='card-container'>
              <div className='image-container'>
                <img src={Bischoffsheim} alt=''/>
              </div>
              <div className='card-content'>

                <div className='card-title'>
                     <h3>ECOLE PRIMAIRE PUBLIQUE DES FONTAINES</h3>
                </div>
                <div className='card-body'>
                  <p>2 rue des Ecoles, 67870 BISCHOFFSHEIM</p>
                </div>

              </div>
                
              <div className='btn'>
                <button>
                    <div className='a'>
                    <Link to={"/Etablissements/Ecole1"}> Modifier </Link>
                      
                      </div>
                </button>
              </div>

            </div>
       
        
    </div>
  </div>
)
}

if (url==1){
  return(
    <div>
        <h1>📊 Dashboard 📊</h1>
        <h4>Voici les écoles dont vous avez la charge</h4>
        
        <div>
            
            <div className='card-container'>
              <div className='image-container'>
                <img src={Bischoffsheim} alt=''/>
              </div>
              <div className='card-content'>

                <div className='card-title'>
                     <h3>ECOLE ELEMENTAIRE PUBLIQUE CHARLES SPINDLER</h3>
                </div>
                <div className='card-body'>
                  <p>21 rue Mgr Médard Barth, 67530 BOERSCH</p>
                </div>

              </div>
                
              <div className='btn'>
                <button>
                    <div className='a'>
                    <Link to={"/Etablissements/Ecole2"}> Modifier </Link>
                      
                      </div>
                </button>
              </div>

            </div>
       
        
    </div>
  </div>
)
}

if (url==2){
  return(
    <div>
        <h1>📊 Dashboard 📊</h1>
        <h4>Voici les écoles dont vous avez la charge</h4>
        
        <div>
            
            <div className='card-container'>
              <div className='image-container'>
                <img src={Bischoffsheim} alt=''/>
              </div>
              <div className='card-content'>

                <div className='card-title'>
                     <h3>ECOLE ELEMENTAIRE PUBLIQUE GROUPE SCOLAIRE DU ROSENMEER</h3>
                </div>
                <div className='card-body'>
                  <p>11 rue de l'Eglise, 67560 ROSHEIM</p>
                </div>

              </div>
                
              <div className='btn'>
                <button>
                    <div className='a'>
                    <Link to={"/Etablissements/Ecole3"}> Modifier </Link>
                      
                      </div>
                </button>
              </div>

            </div>
       
        
    </div>
  </div>
)
}


if(url==3){
  return(
  <div>
        

        <h1>📊 Dashboard 📊</h1>
        <h4>Voici les écoles dont vous avez la charge</h4>
        
          {Object.values(Data).map(({ idetablissement, nom, adresse }) =>(
            
            <div key={idetablissement} className="test">

              <EtabliModif 
                nom={nom} 
                adresse={adresse}
                idetablissement={idetablissement}
              />
            </div>
      ))}
       
        
  </div>
  )
}
  

return null;
}

  

   

export default Admin