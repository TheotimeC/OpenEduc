import * as React from 'react';
import './components/styles/App.css';
import Descriptif from './components/DescriptifEcole';
import './components/styles/Descriptif.css'
import Graphique from './components/Graphique';
import Table from './components/Table';
import Correspondant from './components/Correspondant'
import Date from './components/Date'

function App() {
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

export default App;


