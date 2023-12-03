import '../components/registro.css'
import {NavLink} from "react-router-dom"
import { useState } from 'react';

<<<<<<< HEAD
function registro() {

  const [nombre,setNombre] = useState ("")
  const [Apellido,setApellido] = useState ("")
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

      setUser ([nombre])
      setUser ([Apellido])
      setUser ([correo])
      setUser ([contraseña])
  }
=======
const Registro = () => {
  const [mostrarContrasena, setMostrarContrasena] = useState(false);
  

  const toggleMostrarContrasena = () => {
    setMostrarContrasena(!mostrarContrasena);

    
  };
>>>>>>> 452eb2132babf5f9f4c5b4ba7aad63cf4afa7973

  return (
    <div>
      <header>
        <img alt="Buho" src="src/Img/Logo.png" />
        <h1>Bienvenidos a Instinto Académico de ayuda estudiantil</h1>
        <div>
        <NavLink to="/iniciosesion" className="enlace-iniciosesion">Iniciar Sesión</NavLink>
        </div>
      </header>

<<<<<<< HEAD
      <form className="formulario"
        onSubmit={handleSubmit}
        >
          <label htmlFor="nombre">Nombre:</label>
          <input 
          type="text"
          value={nombre}  
          onChange={e => setNombre (e.target.value)}
          />
          <label htmlFor="apellido">Apellido:</label>
          <input 
          type="text"
          value={Apellido}  
          onChange={e => setApellido (e.target.value)}
          />
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
          <label htmlFor="confirmarcontraseña">Confirmar Contraseña:</label>
          <input 
          type="password"
          value={contraseña}  
          onChange={e => setContraseña (e.target.value)}
          />
          <NavLink to="/iniciosesion"><button>Regístrate</button></NavLink>

          

        </form>
=======
      <div id="formulario">
        <form action="procesar_registro.php" method="post">
          <label htmlFor="nombre">Nombre:</label><br />
          <input type="text" id="nombre" name="nombre" required /><br />

          <label htmlFor="apellidos">Apellidos:</label><br />
          <input type="text" id="apellidos" name="apellidos" required /><br />

          <label htmlFor="correo">Correo Electrónico:</label><br />
          <input type="email" id="correo" name="correo" required /><br />

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

        <label htmlFor="confirmarContrasena">Confirmar Contraseña:</label><br />
        <div className="contrasena-container">
          <input
            type={mostrarContrasena ? 'text' : 'password'}
            id="confirmarContrasena"
            name="confirmarContrasena"
            required
          />
          <span className="mostrar-ocultar" onClick={toggleMostrarContrasena}>
            {mostrarContrasena ? 'Ocultar' : 'Mostrar'}
          </span>
        </div>
        <br />
        
          <NavLink to="/registro" ><button type="submit">Registrarse</button></NavLink>
          
        </form>
      </div>
>>>>>>> 452eb2132babf5f9f4c5b4ba7aad63cf4afa7973

      <div>
        <img alt="inicio_sesion" src="src/Img/Inicio_sesion.jpeg" />
      </div>
    </div>
  );
<<<<<<< HEAD
}

export default registro;
=======
};

export default Registro;
>>>>>>> 452eb2132babf5f9f4c5b4ba7aad63cf4afa7973
