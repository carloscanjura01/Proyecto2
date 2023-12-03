import { NavLink } from 'react-router-dom';
import '../components/publicarlo.css'



function publicarlo () {
  const confirmarCierreSesion = () => {
    var respuesta = window.confirm("¿Estás seguro de Publicar el producto?");
    if (respuesta) {
      // Aquí puedes agregar el código para cerrar sesión
      alert("Producto Publicado");
    } else {
      // Aquí puedes agregar el código en caso de que el usuario cancele
      alert("Producto no publicado");
    }
  };

  const volverAlInicio = () => {
    // Puedes cambiar la URL a la que deseas redireccionar
    window.location.href = "Ventas.jsx";
  };

  const volverPaginaActual = () => {
    // Utiliza window.history para volver a la página anterior
    window.history.back();
  };

  return (
    <div>
      {/* Contenido de la página */}
      <h1>¿Estás seguro de publicar el producto?</h1>

      {/* Botón para cerrar sesión */}
      <NavLink to="/Ventas"><button onClick={confirmarCierreSesion}>Publicar</button></NavLink>
      <button onClick={volverPaginaActual}>Cancelar</button>
    </div>
  );
}

export default publicarlo;