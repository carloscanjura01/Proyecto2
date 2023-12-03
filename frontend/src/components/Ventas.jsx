import '../components/Ventas.css'
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

    <div className="busqueda">
    <input
      type="text"
      placeholder="Buscar..."/>
    <button>Buscar</button>
    </div>

    <div className="Product1">
    <NavLink to="/PublicarProducto"><button className="boton-publicar1">Publicar Producto</button></NavLink>
</div>


<div className="main-container">
        <aside className="sidebar1">
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

        <div className="Cuadro">
            <h1>Libro de Precálculo</h1>
            <img src="src/Img/Libro 2.png" alt="Precalculo"/>
            <h3>$10.00</h3>
            <button type="submit">Comprar</button>
        </div>

        <div className="imagen">
        <NavLink to="/Guardados"><img src="src/Img/Vector.png" alt="guardar"/></NavLink>
        </div>

        <div className="Cuadro1">
            <h1>Regla T</h1>
            <img src="src/Img/regla t 2.png" alt="reglat"/>
            <h3>$8.00</h3>
            <NavLink to="/Compraprodu"><button type="submit">Comprar</button></NavLink>
        </div>

        <div className="imagen1">
        <NavLink to="/Guardados"><img src="src/Img/Vector.png" alt="guardar"/></NavLink>
        </div>

    
         

    </div> 

    );

}
export default Venta;