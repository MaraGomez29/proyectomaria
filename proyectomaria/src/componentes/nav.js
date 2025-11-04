import React from "react";
import { Link } from "react-router-dom";


const Navegador = props => {
    return (
        <nav>
            <ul>
                <li><Link to="/">inicio</Link></li>
                <li><Link to="/Servicios">Servicios</Link></li>
                <li><Link to="/Turnos">Turnos</Link></li>
                <li><Link to="/Contactos">Contactos</Link></li>
            </ul>
        </nav>
    )
}



export default Navegador;