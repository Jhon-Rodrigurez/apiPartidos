import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css'
import { Navegacion } from './layouts/Navegacion';
import { Footer } from './layouts/Footer';
import { PartidosCreados } from './pages/PartidosCreados';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'moment/locale/es'
import { PartidoDetalle } from './pages/PartidoDetalle';
import { Signup } from './pages/Signup';
import { Provider } from 'react-redux';
import { store } from './states/store';
import { Signin } from './pages/Signin';
import { getAutenticacionToken } from './connections/helpers/token';
import { RutaPrivada } from './routes/RutaPrivada';
import { MisPartidos } from './pages/MisPartidos';
import { CrearPartido } from './pages/CrearPartido';
import { EditarPartido } from './pages/EditarPartido';

getAutenticacionToken()

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navegacion />
        <Routes>
          <Route path='/' element={<PartidosCreados/>}/>
          <Route path='/partido/:id' element={<PartidoDetalle/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/signin' element={<Signin/>}/>
          <Route element={<RutaPrivada/>}>
            <Route path='/mispartidos' element={<MisPartidos/>}/>
            <Route path='/crearpartido' element={<CrearPartido/>}/>
            <Route path='/editarpartido/:id' element={<EditarPartido/>}/>
          </Route>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
