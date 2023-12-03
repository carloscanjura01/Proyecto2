import '../components/Tareas.css'
import { NavLink } from 'react-router-dom';

function Tareas () {
    
      
  return(
    <div>
       <header>
        <img alt="Buho" src="src/Img/Logo.png"/>
        <h1>Instinto Academico</h1>
        <div className="cerrarsesion">
            <NavLink to="/cerrarsesion"><img alt="Cerrarsesion" src="src/Img/salida.png"/></NavLink>
            <h2>Cerrar Sesion</h2>
        </div>
       
       </header> 

    <div className="busqueda">
    <input
      type="text"
      placeholder="Buscar..."/>
    <button>Buscar</button>
    </div>

    <div className="Product">
    <NavLink to="/PublicarTar"><button className="boton-publicar">Publicar Tarea</button></NavLink>
</div>


<div className="main-container">
        <aside className="sidebar2">
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

        <div className="Progra">
            <h1>Tarea sobre web</h1>
            <img alt="progra" src="src/Img/Cuaderno 2.png"/>
            <button>Responder</button>
        </div>

        <div className="Algebra">
            <h1>Tarea sobre Matrices</h1>
            <img alt="algebra" src="src/Img/image 11.png"/>
            <button>Responder</button>
        </div>
    
         

    </div> 

    );

}
export default Tareas;