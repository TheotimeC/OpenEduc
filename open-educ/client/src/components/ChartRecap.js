import Chart from 'react-apexcharts';
import React, { useEffect } from 'react'
import axios from 'axios'

export default function SampleLineRe() {

   

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

    var series;
    var options;

    Classe.map((p, index) => {
     series = [
      {
        name: "Nombre d'élèves par classe", //will be displayed on the y-axis
        data: [p.total_eleve]
      }
    ];
     options = {
      chart: {
        type: "simple-bar"
        
      },
      xaxis: {
        categories: [p.niveau] //will be displayed on the x-asis
      },
      yaxis: {
        title: {
          text: 'Effectif'
        }
      },
    }


    ;
})
    return (
      <div>
        <Chart options={options} type="bar" series={series} width="98%" />
      </div>
    );
  }