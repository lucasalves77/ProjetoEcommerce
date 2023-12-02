import React from 'react'
import ReactDOM from 'react-dom/client'
import './Global.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./pages/Home"
import Menuheader from './components/Menuheader';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>  
      <Menuheader/>
      <Routes>
        <Route path="/" element={<Home/>}/> 
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
