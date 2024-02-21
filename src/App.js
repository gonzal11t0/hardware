import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Notebook from './Pages/Tecnologia/Notebook';
import Pcs from './Pages/Tecnologia/Pcs';
import Celulares from './Pages/Tecnologia/Celulares';
import Monitores from './Pages/Tecnologia/Monitores';
import CamarasDigitales from './Pages/Tecnologia/CamarasDigitales';
import Parlantes from './Pages/Tecnologia/Parlantes';
import Smartwatch from './Pages/Tecnologia/Smartwatch';
import Componentes from './Pages/Componentes/Componentes';
import Mother from './Pages/Componentes/Mother';
import Pendrive from './Pages/Componentes/Pendrive';
import Gabinetes from './Pages/Componentes/Gabinetes';
import Perisfericos from './Pages/Perisfericos/Perisfericos';
import MouseTecladosPad from './Pages/Perisfericos/MouseTecladosPad';
import Audios from './Pages/Perisfericos/Audios';
import Gaming from './Pages/Perisfericos/Gaming';
import Energia from './Pages/Perisfericos/Energia';
import Auriculares from './Pages/Perisfericos/Auriculares';
import Conectividad from './Pages/Conectividad/Conectividad';
import RedesInternet from './Pages/Conectividad/RedesInternet';
import Interfaces from './Pages/Conectividad/Interfaces';
import Cables from './Pages/Conectividad/Cables';
import Menu from './Component/Menu';
import Home from './Pages/Home';
import Footer from '../src/Component/Footer';
import ContrastOutlinedIcon from '@mui/icons-material/ContrastOutlined';
import './styles/style.css';
import Search from './Component/Search';

function App() {
  const storeDark = JSON.parse(localStorage.getItem("darkMode")) || false;
  const [darkMode, setDarkMode] = useState(storeDark);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    const storedDarkMode = JSON.parse(localStorage.getItem('darkMode'));
    if (storedDarkMode !== null) {
      setDarkMode(storedDarkMode);
    }
  }, []);

  return (
    <>
      <div className={darkMode ? 'dark-mode' : ''}>
        <div>
          <button onClick={toggleDarkMode}>
            <ContrastOutlinedIcon />
          </button>
        </div>
        <div className='container-search'>
          <Search/>
        </div>
        <Router>
          <Menu />
          <Routes>
            <Route path="/Home" element={<Navigate to="/Home" />} />
            <Route path="/Home" element={<Home/>}/>
            <Route path="/Notebook" element={<Notebook />} />
            <Route path="/Pcs" element={<Pcs />} />
            <Route path="/Celulares" element={<Celulares />} />
            <Route path="/Monitores" element={<Monitores />} />
            <Route path="/CamarasDigitales" element={<CamarasDigitales />} />
            <Route path="/Parlantes" element={<Parlantes />} />
            <Route path="/Smartwatch" element={<Smartwatch />} />
            <Route path="/Componentes" element={<Componentes />} />
            <Route path="/Mother" element={<Mother />} />
            <Route path="/Pendrive" element={<Pendrive />} />
            <Route path="/Gabinetes" element={<Gabinetes />} />
            <Route path="/Perisfericos" element={<Perisfericos />} />
            <Route path="/MouseTecladosPad" element={<MouseTecladosPad />} />
            <Route path="/Audios" element={<Audios />} />
            <Route path="/Gaming" element={<Gaming />} />
            <Route path="/Energia" element={<Energia />} />
            <Route path="/Auriculares" element={<Auriculares />} />
            <Route path="/Conectividad" element={<Conectividad />} />
            <Route path="/RedesInternet" element={<RedesInternet />} />
            <Route path="/Interfaces" element={<Interfaces />} />
            <Route path="/Cables" element={<Cables />} />
          </Routes>
        </Router>
        <Footer />
      </div>
    </>
  );
}

export default App;
