import React from "react"
import { useState } from 'react';
import './Categoria.css'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';


const Categoria = () =>{

  const [Mobile, setMobile] = useState(false);

  return(
    <>
      <div id="menuCategoria">
        <div className="iconCategoria">
          <button className='buttonIcon' onClick={() => setMobile(!Mobile)} >
            {Mobile ? <CloseIcon className="iconMenu"/> : <MenuIcon className="iconMenu"/>} <h3>CATEGORIA</h3>
          </button>
        </div>
        <nav id="meusDetalhesMobile">
          <div className={Mobile ? "menuMobile menuDesktop" : "false"} onClick={() => setMobile(false)}>
          <div>
            <div className="fechar">
              <CloseIcon className="closeInterno"/>  
            </div>
            
            <ul>
              <li><a href="">Computador</a></li>
              <li><a href="">smartphone</a></li>
              <li><a href="">Camera</a></li>
              <li><a href="">Headphone</a></li>
              <li><a href="">Laptop</a></li>
              <li><a href="">Speakers</a></li>
              <li><a href="">Home appliance</a></li>
              <li><a href="">Macbook</a></li>
              <li><a href="">Smart TV</a></li>
              <li><a href="">Pen drives</a></li>
              <li><a href="">Mobile</a></li>
            </ul>
          </div>
          </div>
        </nav>
      </div>
    </>
  )
}

export default Categoria

