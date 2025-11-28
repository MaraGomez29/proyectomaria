import { useState } from 'react';
import "./App.css";

import Inicio from './Componentes/Inicio';
import Header from './Componentes/Header'; 
import Footer from'./componentes/Footer';
import Registrarse from './componentes/Registrarse';
 
function App() {
  const [count, setCount] = useState(1) 

  return (
    <>
      <div>
      <Header></Header>
      <Inicio></Inicio> 
      <Registrarse> </Registrarse>
      <Footer></Footer>
      </div>
      
    </>
  )
}

export default App;
