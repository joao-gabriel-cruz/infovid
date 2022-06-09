import Home from './pages/home/Home';
import Casos from './pages/Casos/Casos';
import Sobre from './pages/sobre/Sobre';
import { Routes, Route } from 'react-router-dom';

import EstadoProvider from './context/EstadoContext';

function App() {
  return (
    <>
      <EstadoProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/casos" element={<Casos />} />
          <Route path="/sobre" element={<Sobre />} />
        </Routes>
      </EstadoProvider>
    </>
  );
}

export default App;
