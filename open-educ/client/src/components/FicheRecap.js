import './styles/Table.css'
import axios from 'axios'
import React, { useEffect, useRef } from 'react'
import Graphique from './GraphiqueRecap';



function FicheRecap(){



    const [Classe, SetClasse] = React.useState([]);

    useEffect(() => {
        // ⬇ This calls my get request from the server
        classeBDD();
      }, []);

    const classeBDD = () => { 
        axios.get('http://localhost:3001/api/classe', {
        }).then((response) => {
            SetClasse(response.data);

        });
    };
    return(

        <div className='table-contaneur'>
            
        
                <div className="table-title">
                    <h3> Fiche Recap</h3> 
                    <thead className='table-fill2'>
                            <tr className='table-fill22'>
                                <th className="text-center"><button className='btn'> Trier</button></th>
                                <th className="text-center"><button className='btn'> Trier</button></th>
                                <th className="text-center"><button className='btn'> Trier</button></th>
                            </tr>
                        </thead>
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
                        {  
                                               Classe.map((p, index) => {  
                                                        return <tr key={index}>  
                                                                <td className="text-left">{p.niveau}</td>
                                                                <td className="text-left">{p.nom}</td>
                                                                <td className='text-left'>{p.total_eleve}</td>
                                                                 
                                                        </tr>  
                                                })  
                                        }  

                            
                        
                            
                        </tbody>

                    </table>

                

                    
                </div>
        

    )
       
   
    
          
}




    
export default FicheRecap;