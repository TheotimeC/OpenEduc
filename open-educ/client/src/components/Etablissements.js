import React, { useEffect } from 'react';
import './styles/Etablissements.css'
import axios from 'axios';
import Etabli from './Etabli';

function Etablissements (){


  const [Data, setData] = React.useState([]);

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

    return(
        <div>
            <h1>🏫 Etablissements 🏫</h1>

            
              {Object.values(Data).map(({ idetablissement, nom, adresse }) =>(

                <div key={idetablissement}>
                  <Etabli 
                    nom={nom} 
                    adresse={adresse}
                    idetablissement={idetablissement}
                  />
                </div>
					))}
           
            
        </div>
    )
}

export default Etablissements