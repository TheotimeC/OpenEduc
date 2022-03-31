import './styles/Table.css'
export default function Table(){

return(
   <div className='table-contaneur'>
   
   
   <div className="table-title">
        <h3></h3> 
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
                    <td className="text-left">CP</td>
                    <td className="text-left">CP Mme Borleau</td>
                    <td className='text-left'>20</td>
                </tr>
                <tr>
                    <td className="text-left">CE1, CE2</td>
                    <td className="text-left">CE1 - CE2 Mme Hetre</td>
                    <td className='text-left'>32</td>
                </tr>
                <tr>
                    <td className="text-left">CE1, CE2</td>
                    <td className="text-left">CE1 - CE2 M Dupent</td>
                    <td className='text-left'>34</td>
                </tr>
                <tr>
                    <td className="text-left">CM1</td>
                    <td className="text-left">CM1 M Karma</td>
                    <td className='text-left'>28</td>
                </tr>
                <tr>
                    <td className="text-left">CM2</td>
                    <td className="text-left">CM2 Mme Kieffa</td>
                    <td className='text-left'>32</td>
                </tr>
                <tr>
                    <td className="text-left"></td>
                    <td className="text-left">Total Effectifs</td>
                    <td className='text-left'>148</td>
                </tr>
                <tr>
                    <td className="text-left"></td>
                    <td className="text-left">Moyenne par classe</td>
                    <td className='text-left'>29,2</td>
                </tr>
            </tbody>

        </table>
        
        </div>
        
        
   
    
          
)

}