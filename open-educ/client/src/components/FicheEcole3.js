import Descriptif from './DescriptifEcole';
import './styles/Descriptif.css'
import Graphique from './GraphiqueEcole3';
import Table from './TableEcole3';
import Correspondant from './CorrespondantEcole'
import Date from './DateEcole'

function FicheEcole3() {
  return (
    <div className="App">
      <Date />
      <Descriptif idetablissement={3}/>
      <Correspondant idetablissement={4}/>
      <Table />
      <Graphique />
    </div>
  )
}

export default FicheEcole3;