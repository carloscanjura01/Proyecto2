import '../components/Compraprodu.css'
import { NavLink } from 'react-router-dom';

function compraprodu (){
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
        </div>

    <div className="regla">
    <img src="src/Img/regla t 2.png" alt="Imagenregla" />
    </div>

    <div className="tema1">
        <h1>Regla T</h1>
    </div>

    <div className="cuadradu">
        <h2> Se vende Regla T, en buen estado. Se entrega dentro de campus.
            Contactar al número: 7554-2885</h2>
            <p>$8.00</p>
    </div>

    <div className="circu">
        <NavLink to="/Comprar"><button>Comprar</button></NavLink>
    </div>

      
        </div>
    );
}

export default compraprodu;