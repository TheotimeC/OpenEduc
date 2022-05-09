import React from 'react';
import './styles/Login.css'
import { useEffect, useState } from 'react';
import axios from 'axios';
import UserProfile from './Session';

function Login (){


    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const [loginStatus, setLoginStatus] = useState('');
    const [loginStatus1, setLoginStatus1] = useState('');;

    const login = () => { 
        
        axios.post('http://localhost:3001/api/login', {
            login: userName,
            psw:   password,
        }).then((response) => {

            console.log(response.data[0]);

            if(response.data.message){

                setLoginStatus("Identifiant ou mot de passe incorrect")


            }else{

               UserProfile.setToken(response.data[0].token)
               setLoginStatus("Vous êtes connectés !")
               setLoginStatus1(1)
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
while(loginStatus1!=1){
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
            
            <h2>{loginStatus}</h2>
        </div>
    )
    }

if(loginStatus1==1){
    return(
        <div>
            <h1>👋BIENVENUE👋</h1>
            <div className='card'>

            <h2>{loginStatus}</h2>

            </div>
                         
        </div>
    )
}
    return null;
}

export default Login;
