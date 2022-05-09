import * as React from 'react';
import SampleLine from './ChartRecap';
import './styles/Graphique.css'


export default function Graphique(){

    return (
<div className='leBody'>
        <div className='graph-Contaneur'>
            <SampleLine/>
        </div>
</div>
    )
}