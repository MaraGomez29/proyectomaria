//import axios from "axios";
//import {useNavigate} from "react-router-dom";

function Cerrar(){
    const navigate = useNavigate();
    const cerrar = async () => {
        try{
            await axios.post("http://localhost:3000/logout", {}, {
                withCreadentials: true });
                alert("Sesion cerrada correctamente");
                navigate("/"); // volver al login
        } catch (error) {
            alert("Error al cerrar sesion");
        }
    };
    return(
        <button onClick={cerrar}>Cerrar Sesion</button>
    );
}
export default Cerrar;