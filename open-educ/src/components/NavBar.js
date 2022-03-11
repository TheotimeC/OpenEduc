import React from "react";
import {Link} from 'react-router-dom';

function NavBar(){
    return(
        <ul>
            <li>
                <Link to="/"> OpenEduc</Link>
            </li>

            <li>
                <Link to="/Etablissements"> Etablissements</Link>
            </li>

            <li>
                <Link to="/Admin"> Dashboard</Link>
            </li>

            <li>
                <Link to="/Login"> Connexion</Link>
            </li>
        </ul>
    );
}

export default NavBar