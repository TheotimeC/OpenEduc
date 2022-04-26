import React from 'react';
import { useState } from 'react';
import './styles/Login.css';
import axios from 'axios';




function Login (){

    // const [userNameReg, setUserNameReg] = useState('');
    // const [pswReg, setPswReg] = useState('');

    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const [loginStatus, setLoginStatus] = useState('');



    // const register = () => { 
        
    //     axios.post('http://localhost:3001/api/register', {
    //         login: userNameReg,
    //         psw:   pswReg,
    //     }).then((response) => {
    //         console.log(response);
    //     })
    // }

    const login = () => { 
        
        axios.post('http://localhost:3001/api/login', {
            login: userName,
            psw:   password,
        }).then((response) => {
            console.log(response.data);

            if(response.data.message){

                setLoginStatus(response.data.message)

            }else{

                setLoginStatus(response.data[0].id)
            }
        })
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

export default Login
