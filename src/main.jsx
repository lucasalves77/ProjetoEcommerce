import React from 'react';
import ReactDOM from 'react-dom/client';
import './Global.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Menuheader from './components/Menuheader';
import SobreNos from "./pages/SobreNos";
import Promocao from "./pages/Promocao";
import Novidade from "./pages/Novidade";
import Contato from "./pages/Contato";
import Home from "./pages/Home"



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>  
      <Menuheader/>
      <Routes>
        <Route path="/" element={<Home/>}/> 
        <Route path="/SobreNos" element={<SobreNos/>}/> 
        <Route path="/Promocao" element={<Promocao/>}/> 
        <Route path="/Novidade" element={<Novidade/>}/> 
        <Route path="/Contato" element={<Contato/>}/> 
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
