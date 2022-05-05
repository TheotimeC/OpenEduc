import Descriptif from './DescriptifEcole';
import './styles/Descriptif.css'
import Graphique from './GraphiqueEcole2';
import Table from './TableEcole2';
import Correspondant from './CorrespondantEcole'
import Date from './DateEcole'

function FicheEcole2() {
  return (
    <div className="App">
      <Date />
      <Descriptif idetablissement={2}/>
      <Correspondant idetablissement={2}/>
      <Correspondant idetablissement={3}/>
      <Table />
      <Graphique />
    </div>
  )
}

export default FicheEcole2;