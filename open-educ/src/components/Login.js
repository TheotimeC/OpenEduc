import React from 'react';
import './styles/Login.css'

function Login (){
    return(
        <div>
            <h1>👋CONNEXION👋</h1>
            <div className='card'>

                <div className='user'>
                    <input type='text' required placeholder='identifiant'/> 
                </div>

                <div className='mdp'>
                <input type='password' required placeholder='mot de passe'/>
                </div>

                <div className='btn'>
                <button>
                  <a>
                    Connexion
                  </a>
                </button>
                </div>

            </div>
        </div>
    )
}

export default Login
