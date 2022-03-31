import Chart from 'react-apexcharts'
import React from 'react';

export default function SampleLine() {
    const series = [
      {
        name: "Nombre d'émève par classe", //will be displayed on the y-axis
        data: [43, 53, 50, 57, 49]
      }
    ];
    const options = {
      chart: {
        type: "simple-bar"
        
      },
      xaxis: {
        categories: ["CP", "CE1", "CE2", "CM1", "CM2"] //will be displayed on the x-asis
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