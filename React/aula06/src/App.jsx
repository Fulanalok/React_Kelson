import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Inicial from './pages/Inicial';
import Faculdade from './pages/Faculdade';
import DpoLgpd from './pages/DpoLgpd'; 
import Noticias from './pages/Noticias';
import NavBar from './components/NavBar';

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <br/>
      <Routes>
        <Route path='/' element={<Inicial />} />
        <Route path='/faculdade' element={<Faculdade />} />
        <Route path='/dpo' element={<DpoLgpd />} />
        <Route path='/noticias' element={<Noticias />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
