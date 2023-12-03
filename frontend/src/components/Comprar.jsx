import { NavLink } from 'react-router-dom';
import '../components/Comprar.css'



function comprar () {
  const confirmarCierreSesion = () => {
    var respuesta = window.confirm("¿Estás seguro de comprar el producto?");
    if (respuesta) {
      // Aquí puedes agregar el código para cerrar sesión
      alert("Compra realizada exitosamente");
    } else {
      // Aquí puedes agregar el código en caso de que el usuario cancele
      alert("compra no fue realizada");
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
      <h1>¿Estás seguro de comprar el Producto?</h1>
      <p>Esta acción es irreversible</p>

      {/* Botón para cerrar sesión */}
      <NavLink to="/Ventas"><button onClick={confirmarCierreSesion}>Continuar</button></NavLink>
      <button onClick={volverPaginaActual}>Cancelar</button>
    </div>
  );
}

export default comprar;
