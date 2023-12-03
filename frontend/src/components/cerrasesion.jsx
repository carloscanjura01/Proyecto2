import { NavLink } from 'react-router-dom';
import '../components/cerrarsesion.css'



function cerrarsesion() {
  const confirmarCierreSesion = () => {
    var respuesta = window.confirm("¿Estás seguro de cerrar sesión?");
    if (respuesta) {
      // Aquí puedes agregar el código para cerrar sesión
      alert("Sesión cerrada exitosamente");
    } else {
      // Aquí puedes agregar el código en caso de que el usuario cancele
      alert("Sesión no cerrada");
    }
  };

  const volverAlInicio = () => {
    // Puedes cambiar la URL a la que deseas redireccionar
    window.location.href = "iniciosesion.jsx";
  };

  const volverPaginaActual = () => {
    // Utiliza window.history para volver a la página anterior
    window.history.back();
  };

  return (
    <div>
      {/* Contenido de la página */}
      <h1>¿Estás seguro de cerrar sesión?</h1>
      <p>Esta acción te llevará de vuelta al inicio</p>

      {/* Botón para cerrar sesión */}
      <NavLink to="/iniciosesion"><button onClick={confirmarCierreSesion}>Cerrar Sesión</button></NavLink>
      <button onClick={volverPaginaActual}>Cancelar</button>
    </div>
  );
}

export default cerrarsesion;


