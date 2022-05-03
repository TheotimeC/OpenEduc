import Descriptif from './DescriptifEcole';
import './styles/Descriptif.css'
import Graphique from './GraphiqueEcole';
import Table from './TableEcole';
import Correspondant from './CorrespondantEcole'
import Date from './DateEcole'

function FicheEcole1(idetablissement) {
  return (
    <div className="App">
      <Date />
      <Descriptif />
      <Correspondant idetablissement={1}/>
      <Table />
    </div>
  )
}

export default FicheEcole1;