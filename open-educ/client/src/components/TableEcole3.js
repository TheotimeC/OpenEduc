import './styles/Table.css'
import axios from 'axios'
import React, { useEffect } from 'react'

function Table(){

    const [Classe, SetClasse] = React.useState('');
    const [Classe1, SetClasse1] = React.useState('');
    const [Classe2, SetClasse2] = React.useState('');
    const [Classe3, SetClasse3] = React.useState('');
    const [Classe4, SetClasse4] = React.useState('');
    const [Classe5, SetClasse5] = React.useState('');
    const [Classe6, SetClasse6] = React.useState('');
    const [Classe7, SetClasse7] = React.useState('');
    const [Classe8, SetClasse8] = React.useState('');
    const [Classe9, SetClasse9] = React.useState('');
    const [Classe10, SetClasse10] = React.useState('');
    const [Classe11, SetClasse11] = React.useState('');
    const [Classe12, SetClasse12] = React.useState('');

    useEffect(() => {
        // ⬇ This calls my get request from the server
        classeBDD();
      }, []);

    const classeBDD = () => { 
        axios.get('http://localhost:3001/api/classe', {
        }).then((response) => {
            SetClasse(response.data[10]);
            SetClasse1(response.data[11]);
            SetClasse2(response.data[12]);
            SetClasse3(response.data[13]);
            SetClasse4(response.data[14]);
            SetClasse5(response.data[15]);
            SetClasse6(response.data[16]);
            SetClasse7(response.data[17]);
            SetClasse8(response.data[18]);
            SetClasse9(response.data[19]);
            SetClasse10(response.data[20]);
            SetClasse11(response.data[21]);
            SetClasse12(response.data[22]);


  
        });
    };

    let total_effectif=Classe.total_eleve+Classe1.total_eleve+Classe2.total_eleve+Classe3.total_eleve+Classe4.total_eleve+Classe5.total_eleve+Classe6.total_eleve+Classe7.total_eleve+Classe8.total_eleve+Classe9.total_eleve+Classe10.total_eleve+Classe11.total_eleve+Classe12.total_eleve
    let moyenne = Math.round(total_effectif/12)

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
                                <td className="text-left">{Classe5.niveau}</td>
                                <td className="text-left">{Classe5.nom}</td>
                                <td className='text-left'>{Classe5.total_eleve}</td>
                            </tr>
                            <tr>
                                <td className="text-left">{Classe6.niveau}</td>
                                <td className="text-left">{Classe6.nom}</td>
                                <td className='text-left'>{Classe6.total_eleve}</td>
                            </tr>
                            <tr>
                                <td className="text-left">{Classe7.niveau}</td>
                                <td className="text-left">{Classe7.nom}</td>
                                <td className='text-left'>{Classe7.total_eleve}</td>
                            </tr>
                            <tr>
                                <td className="text-left">{Classe8.niveau}</td>
                                <td className="text-left">{Classe8.nom}</td>
                                <td className='text-left'>{Classe8.total_eleve}</td>
                            </tr>
                            <tr>
                                <td className="text-left">{Classe9.niveau}</td>
                                <td className="text-left">{Classe9.nom}</td>
                                <td className='text-left'>{Classe9.total_eleve}</td>
                            </tr>
                            <tr>
                                <td className="text-left">{Classe10.niveau}</td>
                                <td className="text-left">{Classe10.nom}</td>
                                <td className='text-left'>{Classe10.total_eleve}</td>
                            </tr>
                            <tr>
                                <td className="text-left">{Classe11.niveau}</td>
                                <td className="text-left">{Classe11.nom}</td>
                                <td className='text-left'>{Classe11.total_eleve}</td>
                            </tr>
                            <tr>
                                <td className="text-left">{Classe12.niveau}</td>
                                <td className="text-left">{Classe12.nom}</td>
                                <td className='text-left'>{Classe12.total_eleve}</td>
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