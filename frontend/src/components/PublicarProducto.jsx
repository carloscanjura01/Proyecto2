import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../components/PublicarTar.css'

function PublicarProducto() {
  const [imagen, setImagen] = useState('');
  const [nombreProducto, setNombreProducto] = useState('');
  const [precio, setPrecio] = useState('');
  const [descripcion, setDescripcion] = useState('');

  const manejarEnvio = (event) => {
    event.preventDefault();
    // Aquí puedes manejar la lógica para enviar la imagen, nombre de la tarea, materia y descripción a tu backend o realizar otras acciones
    console.log('Imagen:', imagen);
    console.log('Nombre del Producto:', nombreProducto);
    console.log('Precio:', precio);
    console.log('Descripción:', descripcion);
    // Reiniciar los estados después de enviar la información
    setImagen('');
    setNombreProducto('');
    setPrecio('');
    setDescripcion('');
  };

  return (
    <div>
      <header>
        <img alt="Buho" src="src/Img/Logo.png" />
        <h1>Instinto Académico</h1>
        <div className="cerrarsesion">
          <NavLink to="/cerrarsesion">
            <img alt="Cerrarsesion" src="src/Img/salida.png" />
          </NavLink>
          <h2>Cerrar Sesion</h2>
        </div>
      </header>

      <div className="main-container">
        <aside className="sidebar">
          <div className="inicio">
            <NavLink to="/opciones">
              <img src="src/Img/inicio.png" alt="inicio" />
            </NavLink>
            <p>Inicio</p>
          </div>

          <div className="explorar">
            <img src="src/Img/busqueda.png" alt="busqueda" />
            <p>Explorar</p>
            <div className="boton">
              <NavLink to="/Ventas">
                <button>Productos</button>
              </NavLink>
            </div>
            <div className="boton">
              <NavLink to="/Consultas">
                <button>Consultas</button>
              </NavLink>
            </div>
          </div>

          <div className="guardado">
            <NavLink to="/guardados">
              <img src="src/Img/guardado.png" alt="guardados" />
            </NavLink>
            <p>Guardados</p>
          </div>

          <div className="perfil">
            <p>Perfil</p>
          </div>
        </aside>
        <div className="formulario-publicacion">
        <h1>Información del Producto</h1>
        <form onSubmit={manejarEnvio}>
          <label htmlFor="imagen">Imagen:</label>
          <input
            type="file"
            id="imagen"
            accept="image/*"
            onChange={(e) => setImagen(e.target.value)}
          />

          <label htmlFor="nombreTarea">Nombre del Producto:</label>
          <input
            type="text"
            id="nombreTarea"
            value={nombreProducto}
            onChange={(e) => setNombreProducto(e.target.value)}
          />

          <label htmlFor="materia">Precio:</label>
          <input
            type="text"
            id="materia"
            value={precio}
            onChange={(e) => setPrecio(e.target.value)}
          />

          <label htmlFor="descripcion">Descripción:</label>
          <textarea
            id="descripcion"
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
          />

          <NavLink to="/subir"><button type="submit" className="publicar1">
            Publicar
          </button></NavLink>
        </form>
      </div>
    </div>
    </div>
  );
  }
export default PublicarProducto;