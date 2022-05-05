import Descriptif from './DescriptifEcole';
import './styles/Descriptif.css'
//import Graphique from './GraphiqueEcole';
import Table from './TableEcole';
import Correspondant from './CorrespondantEcole'
import Date from './DateEcole'

function FicheEcole2() {
  return (
    <div className="App">
      <Date />
      <Descriptif />
      <Correspondant />
      <Table />
     
    </div>
  )
}

export default FicheEcole2;