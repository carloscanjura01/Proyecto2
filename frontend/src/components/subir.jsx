import { NavLink } from 'react-router-dom';
import '../components/subir.css'



function Subir () {
  const confirmarPublic = () => {
    var respuesta = window.confirm("¿Estás seguro de Publicar la tarea?");
    if (respuesta) {
      // Aquí puedes agregar el código para cerrar sesión
      alert("Tarea Publicada");
    } else {
      // Aquí puedes agregar el código en caso de que el usuario cancele
      alert("Tarea no publicada");
    }
  };

  const volverAlInicio = () => {
    // Puedes cambiar la URL a la que deseas redireccionar
    window.location.href = "Tareas.jsx";
  };

  const volverPaginaActual = () => {
    // Utiliza window.history para volver a la página anterior
    window.history.back();
  };

  return (
    <div>
      
      <h1>¿Estás seguro de publicar la tarea?</h1>

      
      <NavLink to="/Tareas"><button onClick={confirmarPublic}>Publicar</button></NavLink>
      <button onClick={volverPaginaActual}>Cancelar</button>
    </div>
  );
}

export default Subir;