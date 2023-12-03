import './App.css'
import InicioSesion from './components/iniciosesion'
import Registro from './components/registro'
import Opciones from './components/Opciones'
import Venta from './components/Venta'
import { Navigate, Route, Routes} from 'react-router-dom'


function App() {

  return (
    <Routes>
      <Route path='/' element={<InicioSesion />} />
      <Route path='/registro' element={<Registro/>}/>
      <Route path='/opciones' element={<Opciones/>}/>
      <Route path='/Venta' element={<Venta/>}/>
      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  )
}

export default App
