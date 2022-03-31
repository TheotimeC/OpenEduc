const nomEcole = "ECOLE PRIMAIRE PUBLIQUE DES FONTAINES"
const idEcole = "Identifiant : 0671236E"
const anneeSco = "Année scolaire : 2021/22"
const adresse = "Adresse : 2 rue des Ecoles 67870, BISCHOFFSHEIM"
const date = "Date de mise à jour : 21-nov-21"
const tel = "Téléphone : 03 88 50 21 24"
const mail = "Email : ce.0671236E@ac-strasbourg.fr"

function descriptif() {
    return (
        <section class="bandeau">
            <section><div id="nom"><h1>{nomEcole}</h1></div></section>
            <section id="bandeauDate"> 
                <div id="anneeSco">{anneeSco}</div>
                <div id="dateMAJ">{date} </div>
            </section>
            <br/>
            <section id="infoEcole"> 
                <div className="img">
                    <img src={Bischoffsheim} alt=''/>
                </div>
                <div id="lieu">
                    <div id="idEcole"> {idEcole} </div>
                    <div id="adresseEcole">{adresse}</div>
                </div>
                <div id="contact">  
                    <div id="telEcole"> {tel}</div>
                    <div id="mailEcole">{mail}</div>
                </div>
            </section>
        </section> 
    );
}

function graphique(){

    return (
<div className='leBody'>
        <div className='graph-Contaneur'>
            <SampleLine/>
        </div>
</div>
    )
}


function table(){

return(
   <div className='table-contaneur'>
   
   <div class="table-title">
        <h3>Data Table</h3>
    </div>
    
    <table class="table-fill">

            <thead>
                <tr>
                    <th class="text-left">Month</th>
                    <th class="text-left">Sales</th>
                </tr>
            </thead>

            <tbody class="table-hover">
                <tr>
                    <td class="text-left">January</td>
                    <td class="text-left">$ 50,000.00</td>
                </tr>
                <tr>
                    <td class="text-left">February</td>
                    <td class="text-left">$ 10,000.00</td>
                </tr>
                <tr>
                    <td class="text-left">March</td>
                    <td class="text-left">$ 85,000.00</td>
                </tr>
                <tr>
                    <td class="text-left">April</td>
                    <td class="text-left">$ 56,000.00</td>
                </tr>
                <tr>
                    <td class="text-left">May</td>
                    <td class="text-left">$ 98,000.00</td>
                </tr>
            </tbody>

        </table>
        
        </div>
          
)

}