import Chart from 'react-apexcharts';
import React, { useEffect } from 'react'
import axios from 'axios'

export default function SampleLine() {

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

    
    const series = [
      {
        name: "Nombre d'élèves par classe", //will be displayed on the y-axis
        data: [Classe.total_eleve, Classe1.total_eleve, Classe2.total_eleve, Classe3.total_eleve, Classe4.total_eleve, Classe5.total_eleve, Classe6.total_eleve, Classe7.total_eleve , Classe8.total_eleve, Classe9.total_eleve, Classe10.total_eleve, Classe11.total_eleve, Classe12.total_eleve]
      }
    ];
    const options = {
      chart: {
        type: "simple-bar"
        
      },
      xaxis: {
        categories: [Classe.niveau, Classe1.niveau, Classe2.niveau, Classe3.niveau, Classe4.niveau, Classe5.niveau, Classe6.niveau, Classe7.niveau , Classe8.niveau, Classe9.niveau, Classe10.niveau, Classe11.niveau, Classe12.niveau] //will be displayed on the x-asis
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