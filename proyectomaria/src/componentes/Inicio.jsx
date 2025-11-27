import React from "react";
//import Cerrar from "Cerrar";






function Inicio () {
  return  (



    <div className="contenedorInicio">
      <h2>Iniciar sesión</h2>

      <form className="formInicio">
        <label>Correo electrónico</label>
        <input type="email" placeholder="Ingresa tu correo" />

        <label>Contraseña</label>
        <input type="password" placeholder="Ingresa tu contraseña" />

        <button type="submit">Entrar</button>
      </form>
 </div>


);

   
}export default Inicio;  
 /*function Inicio() {
  return (
    <div className="contenedorInicio">
      <h2>Iniciar sesión</h2>

      <form className="formInicio">
        <label>Correo electrónico</label>
        <input type="email" placeholder="Ingresa tu correo" />

        <label>Contraseña</label>
        <input type="password" placeholder="Ingresa tu contraseña" />

        <button type="submit">Entrar</button>
      </form>
    </div>
  );
}

function Inicio() {
  return (
    <div>
      <h2>Bienvenido al sistema</h2>
      <Cerrar />
    </div>
  );
}


export default Inicio; */