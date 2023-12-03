import { NavLink } from 'react-router-dom';
import '../components/Push.css'



function Push () {
  const confirmarPublic = () => {
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
      
      <h1>¿Estás seguro de publicar el Producto?</h1>

      
      <NavLink to="/Ventas"><button onClick={confirmarPublic}>Publicar</button></NavLink>
      <button onClick={volverPaginaActual}>Cancelar</button>
    </div>
  );
}

export default Push;