import React from "react"
import './Categoria.css'
import { FaListUl } from "react-icons/fa6";


const Categoria = () =>{

  document.addEventListener('click', function (event){
    let meuDetalhes = document.getElementById('meusDetalhes');

    if(!meuDetalhes.contains(event.target)){
      if(meuDetalhes.open){
        meuDetalhes.open = false;
      }
    }
  });

  return(
    <>
      <div className="categoria">
        <details id="meusDetalhes">
          <summary className="summaryDesk"><FaListUl className="menu" />Categoria</summary>
          <FaListUl className="menuMobile"/>
          <ul>
            <li><a href="">Computador</a></li>
            <li><a href="">Computador</a></li>
            <li><a href="">Computador</a></li>
            <li><a href="">Computador</a></li>
            <li><a href="">Computador</a></li>
            <li><a href="">Computador</a></li>
            <li><a href="">Computador</a></li>
            <li><a href="">Computador</a></li>
            <li><a href="">Computador</a></li>
            <li><a href="">Computador</a></li>
            <li><a href="">Computador</a></li>
          </ul>
        </details>
        <details id="meusDetalhesMobile">
          <summary className="summaryMobile"><FaListUl className="menuMobile"/></summary>
          <ul>
            <li><a href="">Computador</a></li>
            <li><a href="">Computador</a></li>
            <li><a href="">Computador</a></li>
            <li><a href="">Computador</a></li>
            <li><a href="">Computador</a></li>
            <li><a href="">Computador</a></li>
            <li><a href="">Computador</a></li>
            <li><a href="">Computador</a></li>
            <li><a href="">Computador</a></li>
            <li><a href="">Computador</a></li>
            <li><a href="">Computador</a></li>
          </ul>
        </details>
      </div>
    </>
  )
}

export default Categoria