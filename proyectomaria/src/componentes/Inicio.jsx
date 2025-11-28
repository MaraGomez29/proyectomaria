import React from "react";

function Inicio() {
  const handleSubmit = (e) => {
    e.preventDefault(); // Previene que la página se recargue
    // Aquí iría la lógica de autenticación
    console.log("Formulario enviado");
  };

  return (
    <div>
      <h1>¿Tenés Cuenta?</h1>
      <h2>Inicio de sesión</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Correo" />
        <input type="password" placeholder="Contraseña" />
        <button type="submit">Iniciar</button>
      </form> 
    </div>
  );
}

export default Inicio;
