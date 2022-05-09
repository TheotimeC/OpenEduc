import Chart from 'react-apexcharts';
import React, { useEffect } from 'react'
import axios from 'axios'

export default function SampleLine() {

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

    const series = [
      {
        name: "Nombre d'élèves par classe", //will be displayed on the y-axis
        data: [Classe.total_eleve, Classe1.total_eleve, Classe2.total_eleve, Classe3.total_eleve, Classe4.total_eleve]
      }
    ];
    const options = {
      chart: {
        type: "simple-bar"
        
      },
      xaxis: {
        categories: [Classe.niveau, Classe1.niveau, Classe2.niveau, Classe3.niveau, Classe4.niveau] //will be displayed on the x-asis
      },
      yaxis: {
        title: {
          text: 'Effectif'
        }
      },
    }


    ;
    
    return (
      <div>
        <Chart options={options} type="bar" series={series} width="98%" />
      </div>
    );
  }