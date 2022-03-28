import React from 'react';
import './styles/Etablissements.css'
import Bischoffsheim from './img/Bischoffsheim.jpg'
import Boersch from './img/Boersch_011.jpg'
import {Link} from 'react-router-dom';
import { MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText, MDBRow, MDBCol } from 'mdb-react-ui-kit';

function Etablissements (){
    return(
        <div>
            <h1>🏫 Etablissements 🏫</h1>
            <div className='card-container'>
              <div className='image-container'>
                <img src={Bischoffsheim} alt=''/>
              </div>
              <div className='card-content'>

                <div className='card-title'>
                  <h3>Bischoffsheim</h3>
                </div>
                <div className='card-body'>
                  <p>Bischoffsheim grosse école sa mère</p>
                </div>

              </div>

              <div className='btn'>
                <button>
                  <a>
                    Voir plus
                  </a>
                </button>
              </div>

            </div>

            <div className='card-container'>
              <div className='image-container'>
                <img src={Bischoffsheim} alt=''/>
              </div>
              <div className='card-content'>

                <div className='card-title'>
                  <h3>Boersch</h3>
                </div>
                <div className='card-body'>
                  <p>Boersch grosse école sa mère</p>
                </div>

              </div>

              <div className='btn'>
                <button>
                  <a>
                    Voir plus
                  </a>
                </button>
              </div>

            </div>

            <div className='card-container'>
              <div className='image-container'>
                <img src={Bischoffsheim} alt=''/>
              </div>
              <div className='card-content'>

                <div className='card-title'>
                  <h3>Rosheim</h3>
                </div>
                <div className='card-body'>
                  <p>Rosheim grosse école sa mère</p>
                </div>

              </div>

              <div className='btn'>
                <button>
                  <a>
                    Voir plus
                  </a>
                </button>
              </div>

            </div>

            



        </div>
    )
}

export default Etablissements