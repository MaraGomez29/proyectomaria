import React, { useState } from "react";

function Registro() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mensaje, setMensaje] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("http://localhost:4000/auth/registro", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();
    setMensaje(data.mensaje || "Listo");
  };

  return (
    <div className="contenedorRegistro">
      <h2>Crear cuenta</h2>

      <form className="formRegistro" onSubmit={handleSubmit}>
        <label>Correo electrónico</label>
        <input
          type="email"
          placeholder="Ingresa tu correo"
        />

        <label>Contraseña</label>
        <input
          type="password"
          placeholder="Crea una contraseña"
        />

        <button type="submit">Registrarse</button>
      </form>

      {mensaje && <p>{mensaje}</p>}
    </div>
  );
}

export default Registro;
