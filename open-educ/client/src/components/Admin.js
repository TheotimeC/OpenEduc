import './styles/Admin.css'
import React, { useEffect } from 'react';
import axios from 'axios';
import EtabliModif from './EtabliModif';

function Admin (){

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
            <h1>📊 Dashboard 📊</h1>

            
              {Object.values(Data).map(({ idetablissement, nom, adresse }) =>(
                
                <div key={idetablissement}>
                  
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

export default Admin