import { useState } from "react";
import Header from "./componentes/Header";
import Footer from "./componentes/Footer";
import Inicio from "./componentes/Inicio";
import Registro from "./componentes/Registro";
import Cerrar from "./componentes/Cerrar";
import '../src/App.css'

function App() {

  return (
    <div>
     <Header></Header>
     <Inicio></Inicio> 
      <Registro></Registro>
     <Footer></Footer>
    </div>
  );
}

export default App;
