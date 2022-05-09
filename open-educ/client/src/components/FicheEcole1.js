import React, { useRef } from 'react';
import Descriptif from './DescriptifEcole';
import './styles/Descriptif.css'
import Graphique from './GraphiqueEcole';
import Table from './TableEcole';
import Correspondant from './CorrespondantEcole'
import Date from './DateEcole'
import UserProfile from './Session';



function FicheEcole1(id) {
  var id = parseInt(UserProfile.getEcole);
  console.log(id)

  return (
    <div className="App">
      <Date />
      <Descriptif idetablissement={1}/>
      <Correspondant idetablissement={1}/>
      <Table/>
      <Graphique/>
    
    </div>
  )
}

export default FicheEcole1;