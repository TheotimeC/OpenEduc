import React from 'react';
import './styles/Login.css'
import { useState } from 'react';
import axios from 'axios';
import UserProfile from './Session';

function Login (){


    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const [loginStatus, setLoginStatus] = useState('');;

    const login = () => { 
        
        axios.post('http://localhost:3001/api/login', {
            login: userName,
            psw:   password,
        }).then((response) => {

            console.log(response.data[0]);

            if(response.data.message){

                setLoginStatus(response.data.message)

            }else{

               UserProfile.setToken(response.data[0].token)
               setLoginStatus(UserProfile.getToken())
               verifieRole(UserProfile.getToken())
            }
        })


        const verifieRole = (UserToken) => {
    
            axios.post('http://localhost:3001/api/roleVerifie', {
                UserToken: UserToken,
            }).then((response) => {
  
               console.log(response.data)
        
                if(response.data.message){
        
                    console.log(response.data.message)
                }else{
                    
                    console.log(response.data[0].role)  
                }
            })
        };


    }


    return(
        <div>
            <h1>👋CONNEXION👋</h1>
            <div className='card'>

                <div className='user'>
                    <input type='text' required placeholder='identifiant'
                    onChange={(e) => {setUserName(e.target.value)}}/> 
                </div>

                <div className='mdp'>
                <input type='password' required placeholder='mot de passe'
                onChange={(e) => {setPassword(e.target.value)}}/>
                </div>

                <div className='btn'>
                <button onClick={login}>
                  <a>
                    Connexion
                  </a>
                </button>
                </div>

            </div>
                         <h6>{loginStatus}</h6>
        </div>
    )
}

export default Login;
