import React from "react";
import {Link} from 'react-router-dom';
import { useState, useEffect, useRef } from "react";

import '../styles/NavBar.css';

function NavBar(){




    return(
        <div className="bar">

        <div className="logo"><Link to="/Etablissements" className="a"> Open Educ</Link></div>

            <div className="navbar-menu">
                <ul className="navbar-nav">
                    
                    <li>
                        <Link to="/Etablissements" className="a"> 🏫 Etablissements</Link>
                    </li>

                     <li>
                        <Link to="/Admin"className="a"> 📊 Dashboard</Link>
                    </li> : <span></span> 

                    <li>
                        <Link to="/Login"className="a"> 👋 Connexion</Link>
                    </li>
                </ul>
            </div>  
        </div>
    );
}

export default NavBar