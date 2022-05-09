import Chart from 'react-apexcharts';
import React, { useEffect } from 'react'
import axios from 'axios'

export default function SampleLine() {

  
    const [antiBoucle, setAntiboucle] = React.useState('false');
    const [dataNiveau, setDataNiveau] = React.useState([]);
    const [dataEffectif, setDataEffectif] = React.useState([]);
    const idEtablissement = localStorage.getItem('idEtablissement')

    
    const splitDataNiveau = (data) => {
      let res = []
      data.forEach(element => res.push(element.niveau));
      return res
    }

    const splitDataEffectif = (data) => {
      let res = []
      data.forEach(element => res.push(element.total_eleve));
      return res
    }
    
    useEffect(() => {
      // ⬇ This calls my get request from the server
      infoClasse();
    }, []);

  const infoClasse = () => { 
      
      axios.post('http://localhost:3001/api/info/Classe', {
          idEtablissement: idEtablissement,

      }).then((response) => {

          console.log(response.data);

          if(response.data.message){

             console.log(response.data.message)

          }else{

              setDataNiveau(splitDataNiveau(response.data)) 
              setDataEffectif(splitDataEffectif(response.data)) 
              setAntiboucle('false')
          }
      })
  }

    
    const series = [
      {
        name: "Nombre d'élèves par classe", //will be displayed on the y-axis
        data: dataEffectif
      }
    ];
    const options = {
      chart: {
        type: "simple-bar"
        
      },
      xaxis: {
        categories: dataNiveau //will be displayed on the x-asis
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