import React from 'react';
import './styles/Admin.css'
import Bischoffsheim from './img/Bischoffsheim.jpg'

function Admin (){
    return(
        <div>
            <h1>📊Dashboard📊</h1>
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
                    Modifier
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
                    Modifier
                  </a>
                </button>
              </div>

            </div>
        </div>
    )
}

export default Admin