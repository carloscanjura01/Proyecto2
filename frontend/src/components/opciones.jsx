import { NavLink } from 'react-router-dom';
import '../components/opciones.css'

function Opciones (){
    return(
      <div>
        <header>
            <img alt="Buho" src="src/Img/Logo.png"/>
            <h1>Bienvenidos a Instinto Académico de ayuda estudiantil</h1>
            <div className="cerrarsesion">
            <NavLink to="/cerrarsesion"><img alt="Cerrarsesion" src="src/Img/salida.png"/></NavLink>
            <h2>Cerrar Sesion</h2>
        </div>
        </header>

    <div className="cuadrado5">
        <h2>Productos y más...</h2>
        <img alt="Compra1" src="src/Img/Compra 1.png"/><br/>
        <NavLink to="/Ventas"><button type="submit">Entrar</button></NavLink>
    </div>

    <div className="cuadrado1">
            <h4>
                En la sesión de Producto y más,
                podrás encontrar distintos materiales,
                libros, etc. Que te pueden servir a lo 
                largo de la carrera.
            </h4>
        </div>

        <div className="cuadrad2">
            <h4>
                En la sesión de Consultas de Tareas,
                podrás consultar y solicitar ayuda 
                sobre alguna tarea o tema que no
                hayas comprendido.
            </h4>
        </div>

        <div className="cuadrad3">
            <h2>Consultas de Tareas</h2>
            <img alt="Lista1" src="src/Img/Lista 1.png"/><br/>
            <NavLink to="/Consultas"><button type="submit">Entrar</button></NavLink>
        </div>


       </div>

    );
}

export default Opciones;