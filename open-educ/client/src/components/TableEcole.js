import './styles/Table.css'
import axios from 'axios'
import React, { useEffect } from 'react'

function Table(){

    const [Classe, SetClasse] = React.useState('');
    const [Classe1, SetClasse1] = React.useState('');
    const [Classe2, SetClasse2] = React.useState('');
    const [Classe3, SetClasse3] = React.useState('');
    const [Classe4, SetClasse4] = React.useState('');

    useEffect(() => {
        // ⬇ This calls my get request from the server
        classeBDD();
      }, []);

    const classeBDD = () => { 
        axios.get('http://localhost:3001/api/classe', {
        }).then((response) => {
            SetClasse(response.data[0]);
            SetClasse1(response.data[1]);
            SetClasse2(response.data[2]);
            SetClasse3(response.data[3]);
            SetClasse4(response.data[4]);

  
        });
    };

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
                            <tr>
                                <td className="text-left">{Classe.niveau}</td>
                                <td className="text-left">{Classe.nom}</td>
                                <td className='text-left'>{Classe.total_eleve}</td>
                            </tr>
                            <tr>
                                <td className="text-left">{Classe1.niveau}</td>
                                <td className="text-left">{Classe1.nom}</td>
                                <td className='text-left'>{Classe1.total_eleve}</td>
                            </tr>
                            <tr>
                                <td className="text-left">{Classe2.niveau}</td>
                                <td className="text-left">{Classe2.nom}</td>
                                <td className='text-left'>{Classe2.total_eleve}</td>
                            </tr>
                            <tr>
                                <td className="text-left">{Classe3.niveau}</td>
                                <td className="text-left">{Classe3.nom}</td>
                                <td className='text-left'>{Classe3.total_eleve}</td>
                            </tr>
                            <tr>
                                <td className="text-left">{Classe4.niveau}</td>
                                <td className="text-left">{Classe4.nom}</td>
                                <td className='text-left'>{Classe4.total_eleve}</td>
                            </tr>
                            <tr>
                                <td className="text-left"></td>
                                <td className="text-left">Total Effectifs</td>
                                <td className='text-left'>{total_effectif}</td>
                            </tr>
                            <tr>
                                <td className="text-left"></td>
                                <td className="text-left">Moyenne par classe</td>
                                <td className='text-left'>{moyenne}</td>
                            </tr>
                        </tbody>

                    </table>
                    
                </div>
    </div>

    ) 
       
   
    
          
    }




    
export default Table;