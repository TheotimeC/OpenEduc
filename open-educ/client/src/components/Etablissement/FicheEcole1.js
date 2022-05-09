import Descriptif from './DescriptifEcole';
import '../styles/Descriptif.css'
import Graphique from './GraphiqueEcole';
import Table from './TableEcole';
import Correspondant from './CorrespondantEcole'
import Date from './DateEcole'

function FicheEcole1(idetablissement) {

  let idEtablissement = localStorage.getItem('idEtablissement')

  return (

    <div className='principale'>
     <Date/>
    <section className="fihceEcoleContainer">


      <section className='side_gauche'><Correspondant idetablissement={idEtablissement}/></section>

      <section className='side_droit'>

          <section className='header'>
         
            <Descriptif idetablissement={idEtablissement}/>

          </section>

          <section>
            <Graphique/>
          </section>

      </section>

    </section>

    <Table />

  </div>
  )
}

export default FicheEcole1;