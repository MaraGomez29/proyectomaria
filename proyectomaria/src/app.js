import Navegador from './componentes/layauot/nav';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
     <Navegador/>
     <Routes>
     <Route path="/" element ={<Inicio />}/>
      <Route path="/Contacto" element ={<Contacto/>}/>
       <Route path="/Turnos" element ={<Turnos/>}/>
        <Route path="/Servicios" element ={<Servicios/>}/>
    
     </Routes>
    
    </BrowserRouter>
   


     <Header/>
     
   
    <Footer/>
    
    </div>
  );
}

export default App;