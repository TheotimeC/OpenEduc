import './styles/Table.css'
import axios from 'axios'
import React, { useEffect } from 'react'

function Ligne(niveau, nom, total_eleve){

    return(

                        <tbody className="table-hover">
                            <tr>
                                <td className="text-left">{niveau}</td>
                                <td className="text-left">{nom}</td>
                                <td className='text-left'>{total_eleve}</td>
                            </tr>
                            
                        </tbody>


       
   
    )
          
    }




    
export default Ligne;