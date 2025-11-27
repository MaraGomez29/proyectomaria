import React from "react";

function Registrarse() {
  const handleSubmit = (e) => {
    e.preventDefault(); // Previene que la página se recargue
    // Aquí iría la lógica de autenticación
    console.log("Formulario enviado");
  };

  return (
    <div>
      <h1>Crea tu cuenta</h1>
      <h2>Registro</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Apellido" />
        <input type="text" placeholder="Correo" />
        <input type="password" placeholder="Contraseña" />
        <button type="submit">Iniciar</button>
      </form> 
      <p>¿Ya tenes una cuenta?</p>
       
    </div>
  );
}

export default Registrarse;