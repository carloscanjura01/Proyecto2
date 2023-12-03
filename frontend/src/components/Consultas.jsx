import '../components/Consultas.css'
import { NavLink } from 'react-router-dom';

function Consultas (){
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

        <div className="Titulo"><h1>Encuentra las respuestas a tus Tareas</h1></div>
        
        <div className="Arq">
          <NavLink to="/Materia"><img alt="Arquitectura" src="src/Img/arquitectura.png"/></NavLink>
          <h4>Arquitectura</h4>
        </div>

        <div className="Quim">
          <NavLink to="/Materia"><img alt="Quimica" src="src/Img/Quimica.png"/></NavLink>
          <h4>Ingeniería Quimica</h4>
        </div>

        <div className="Info">
          <NavLink to="/Materia"><img alt="Informatica" src="src/Img/Informatica.png"/></NavLink>
          <h4>Ingeniería Informatica</h4>        
        </div>

        <div className="Meca">
          <NavLink to="/Materia"><img alt="mecanica" src="src/Img/mecanica.png"/></NavLink>
          <h4>Ingenieria Mecanica</h4>
        </div>






        </div>
       

            
    );
}

export default Consultas;