import '../styles/Admin.css'
import React, { useEffect } from 'react';
import axios from 'axios';
import EtabliModif from './CarteEtabliModif';

function Admin (){

  const [Data, setData] = React.useState([]);
  const [antiBoucle, setAntiboucle] = React.useState('false');


  // useEffect(() => {
  //   // ⬇ This calls my get request from the server
  //   etab();
  // }, []);


  const etab = () => {  
      
      axios.get('http://localhost:3001/api/etab', {
      }).then((response) => {
        setData(response.data)
        setAntiboucle('true')

      }); 

  };

  if(antiBoucle === 'false'){
    etab();
  }


  

    return(
        <div>
            <h1>📊 Dashboard 📊</h1>

            <div className='list-carte'>
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
           
            
        </div>
    )
}

export default Admin