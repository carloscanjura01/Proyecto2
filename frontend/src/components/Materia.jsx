import '../components/Materias.css'
import { NavLink } from 'react-router-dom';

function Venta () {
    
      
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

        <div className="AVM">
            <h2>Algebra Vectorial y matrices</h2>
            <NavLink to="/Tareas"><h4>Ver más...</h4></NavLink>
        </div>

        <div className="PW">
            <h2>Programación Web</h2>
            <NavLink to="/Tareas"><h4>Ver más...</h4></NavLink>
        </div>

        <div className="TEI">
            <h2>Taller Espacial I</h2>
            <NavLink to="/Tareas"><h4>Ver más...</h4></NavLink>
        </div>

        <div className="TI">
            <h2>Termodinamica I</h2>
            <NavLink to="/Tareas"><h4>Ver más...</h4></NavLink>
        </div>

        <div className="QI">
            <h2>Quimica Inorganica</h2>
            <NavLink to="/Tareas"><h4>Ver más...</h4></NavLink>
        </div>


        </div>
        );  

}
export default Venta;