import '../components/iniciosesion.css';
import {NavLink} from "react-router-dom"
import { useState } from 'react';

<<<<<<< HEAD
function iniciosesion(setUser) {
  const [correo,setCorreo] = useState ("")
  const [contraseña, setContraseña] = useState ("")
  const [error, setError] = useState (false)

  const handleSubmit = (e) => {
      e.preventDefault()
      if(correo == "" || contraseña == ""){
        setError(true)
        return
      }

      setError(false)

      setUser ([correo])
  }

=======


function iniciosesion() {

  const [mostrarContrasena, setMostrarContrasena] = useState(false);
  const toggleMostrarContrasena = () => {
    setMostrarContrasena(!mostrarContrasena); 
  };
>>>>>>> 452eb2132babf5f9f4c5b4ba7aad63cf4afa7973
  return (
    <>
      <body>
        <header>
          <img alt="Buho" src="src/Img/Logo.png" />
          <h1>Bienvenidos a Instinto Académico de ayuda estudiantil</h1>
          <div>
          <NavLink to="/registro" className="enlace-registro">Regístrate</NavLink>
          </div>
        </header>
<<<<<<< HEAD

=======
>>>>>>> 452eb2132babf5f9f4c5b4ba7aad63cf4afa7973
        <div>
          <h1>Iniciar Sesión</h1>
        </div>

<<<<<<< HEAD
        <form className="formulario"
        onSubmit={handleSubmit}
        >
          <label htmlFor="correo">Correo:</label>
          <input 
          type="text"
          value={correo}  
          onChange={e => setCorreo (e.target.value)}
          />
          <label htmlFor="contraseña">Contraseña:</label>
          <input 
          type="password"
          value={contraseña}  
          onChange={e => setContraseña (e.target.value)}
          />
          <NavLink to="/opciones"><button>Iniciar sesión</button></NavLink>

          

        </form>

        {error && <p>Todos los campos son obligatorios</p>}

          <div className="nocuenta">
          <NavLink to="/registro" ><button type="button">Todavía no tienes cuenta? Regístrate</button></NavLink>
          </div>
       
          <div className="image">
          <img alt="image4" src="src/Img/image 4.png" />
          </div>
        
=======
        <div id="formulario">
          <form action="procesar_registro.php" method="post">
            <label htmlFor="correo_electronico">Correo electrónico: </label><br/>
            <input type="text"
            id="correo_electronico"
            name="correo_electronico"
            required/><br />
            <label htmlFor="contrasena">Contraseña:</label><br />
        <div className="contrasena-container">
          <input
            type={mostrarContrasena ? 'text' : 'password'}
            id="contrasena"
            name="contrasena"
            required
          />
          <span className="mostrar-ocultar" onClick={toggleMostrarContrasena}>
            {mostrarContrasena ? 'Ocultar' : 'Mostrar'}
          </span>
        </div>
        <br />
            <NavLink to="/Opciones" ><button type="submit">Iniciar Sesión</button></NavLink>
          </form>
        </div>
        <NavLink to="/registro" ><button type="button">Todavía no tienes cuenta? Regístrate</button></NavLink>  
        <div>
          <img alt="image4" src="src/Img/image 4.png" />
        </div>
>>>>>>> 452eb2132babf5f9f4c5b4ba7aad63cf4afa7973
      </body>
    </>
  );
}


export default iniciosesion;
