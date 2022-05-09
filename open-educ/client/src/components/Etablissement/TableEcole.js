import '../styles/Table.css'
import axios from 'axios'
import React, { useEffect } from 'react'

function Table(){
    const idEtablissement = localStorage.getItem('idEtablissement')
    const [Classe, SetClasse] = React.useState('');
    const [Classe1, SetClasse1] = React.useState('');
    const [Classe2, SetClasse2] = React.useState('');
    const [Classe3, SetClasse3] = React.useState('');
    const [Classe4, SetClasse4] = React.useState('');
    const [antiBoucle, setAntiboucle] = React.useState('false');
    const [data, setData] = React.useState([]);




    useEffect(() => {
        // ⬇ This calls my get request from the server
        infoClasse();
      }, []);

    const infoClasse = () => { 
        
        axios.post('http://localhost:3001/api/info/Classe', {
            idEtablissement: idEtablissement,

        }).then((response) => {

            console.log(response.data);

            if(response.data.message){

               console.log(response.data.message)

            }else{

                setData(response.data)
                setAntiboucle('false')
            }
        })
    }


    let total_effectif=Classe.total_eleve+Classe1.total_eleve+Classe2.total_eleve+Classe3.total_eleve+Classe4.total_eleve
    let moyenne = total_effectif/5

    return(

        <div>
            <div className='table-contaneur'>
        
        
                <div className="table-title">
                    <h3> </h3> 
                </div>
                
                <table className="table-fill">

                        <thead>
                            <tr>
                                <th className="text-left">Niveaux</th>
                                <th className="text-left">Nom de classes</th>
                                <th className="text-left">Effectif</th>
                            </tr>
                        </thead>

                        <tbody className="table-hover">

                            {Object.values(data).map(({niveau, nom,total_eleve}) =>(

                               

                                <tr>
                                <td key={`${nom}-${niveau}-1`} className="text-left">{niveau} </td>
                                <td key={`${nom}-${niveau}-2`} className="text-left">{nom}</td>
                                <td key={`${nom}-${niveau}-3`} className='text-left'>{total_eleve}</td>
                                </tr>
                            ))}

                           
                        </tbody>

                    </table>
                    
                </div>
    </div>

    ) 
       
   
    
          
    }




    
export default Table;