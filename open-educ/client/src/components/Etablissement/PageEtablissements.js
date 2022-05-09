import React, { useEffect } from 'react';
import '../styles/Etablissements.css'
import axios from 'axios';
import Etabli from './CarteEtabli';

function Etablissements (){


  const [Data, setData] = React.useState([]);
  const [antiBoucle, setAntiBoucle] = React.useState('false')

  useEffect(() => {
    // ⬇ This calls my get request from the server
    etab();
  }, []);


  const etab = () => {  
      
      axios.get('http://localhost:3001/api/etab', {
      }).then((response) => {
        setData(response.data)
        setAntiBoucle('true')

      }); 

  };

//   if(antiBoucle === 'false'){

//     etab();
// }

  

    return(
        <div>
            <h1>🏫 Etablissements 🏫</h1>

            <div className='list-carte'>

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
           
            
        </div>
    )
}

export default Etablissements