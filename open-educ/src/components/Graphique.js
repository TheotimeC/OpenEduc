import * as React from 'react';
import SampleLine from './Chart';
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