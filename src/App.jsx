
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import Contenedor from './componentes/contenedor/Contenedor';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Nav from './componentes/nav/Nav';
import PromiseContainer from './componentes/promiseContainer/PromiseContainer';
import Publicidad from './componentes/publicidad/Publicidad';


function App() {
  return (
    <BrowserRouter> 
      <Publicidad/>
      <Nav/>
      <Routes>
        {/* <Route path='/home' element={<Fecht/>} /> */}
        {/* <Route path='/' element={<Fecht/>} /> */}
        <Route path='/promesa' element={<PromiseContainer/>}/>
        {/* <Route path='/filtro/:category' element={<Fecht/>}/> /     */}
        {/* <Route path='/detalle/:id' element={<DetalleContainer/>} /> */}
        {/* <Route path='/filtroinput' element={<Buscador/>}/> */}
        {/* <Route path='/error' element={<Error/>} /> */}
        {/* <Route path='*' element={<Navigate to='/error'/>}/> */}
      </Routes>
    </BrowserRouter> 
  );
}

export default App