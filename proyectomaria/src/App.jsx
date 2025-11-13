import { useState } from "react";
import Header from "./componentes/Header";
import Footer from "./componentes/Footer";
import Inicio from "./componentes/inicio";
import Cerrar from "./componentes/Cerrar";
import '../src/App.css'

function App() {

  return (
    <div>
     <Header></Header>
     <Inicio></Inicio>

     <Footer></Footer>
    </div>
  );
}

export default App;
