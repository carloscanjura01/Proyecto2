import '../components/guardados.css';
import { NavLink } from 'react-router-dom';

function guardados (){
    return (
        <div>
            <header>
            <img alt="Buho" src="src/Img/Logo.png"/>
            <h1>Instinto Académico</h1>
            <div className="cerrarsesion">
            <NavLink to="/cerrarsesion"><img alt="Cerrarsesion" src="src/Img/salida.png"/></NavLink>
            <h2>Cerrar Sesion</h2>
        </div>
        </header>

        <div className="main-container">
        <aside className="sidebar">
          <div className="inicio">
            <NavLink to="/opciones"><img src="src/Img/inicio.png" alt="inicio" /></NavLink>
            <p>Inicio</p>
          </div>

          <div className="explorar">
            <img src="src/Img/busqueda.png" alt="busqueda" />
            <p>Explorar</p>
            <div className="boton">
            <NavLink to= "/Ventas"><button>Productos</button></NavLink>
          </div>
          <div className="boton">
            <NavLink to= "/Consultas"><button>Consultas</button></NavLink>
          </div>
          </div>

          <div className="guardado">
            <NavLink to= "/guardados"><img src="src/Img/guardado.png" alt="guardados" /></NavLink>
            <p>Guardados</p>
          </div>

          <div className="perfil">
            <p>Perfil</p>
          </div>
        </aside>

        <h1>Estas son las publicaciones que has guardado</h1>
        </div>
        <div className="Cuadr">
            <h1>Libro de Precálculo</h1>
            <img src="src/Img/Libro 2.png" alt="Precalculo"/>
            <h3>$10.00</h3>
        </div>
        </div>
    );
}

export default guardados;