 import React from "react";

 function Header (){
    return(
        <div>
            <nav class="Nav">
             <div className="logo" > </div>   
             <h4 className= "nombre" >Salon de Belleza</h4>
             <ul className="navLink">
               <a href="">Inicio</a>
               <a href="">Cortes</a>
               <a href="">Horarios</a>
               <a href="">Turnos</a>
               <a href="">Inicio de sesion</a>
             </ul>
            </nav>
       </div>

    )
 }export default Header;