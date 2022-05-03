import Descriptif from './DescriptifEcole';
import './styles/Descriptif.css'
import Graphique from './GraphiqueEcole';
import Table from './TableEcole';
import Correspondant from './CorrespondantEcole'
import Date from './DateEcole'

function FicheEcole3() {
  return (
    <div className="App">
      <Date />
      <Descriptif />
      <Correspondant />
      <Table />
      <Graphique />
    </div>
  )
}

export default FicheEcole3;