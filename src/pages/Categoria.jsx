import React, { useState } from 'react';
import { Link } from "react-router-dom"; 
import './Categoria.css';
import { IoMdMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import { AiFillInstagram } from "react-icons/ai";
import { IoLogoTwitter } from "react-icons/io";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";



const Categoria = () => {

  function trocarCor() {

    const elemento = document.getElementById("titleMenu")
  
    const corOriginal = elemento.classList.contains("titleMenu")

    if(corOriginal) {
      elemento.classList.remove("titleMenu")
      elemento.classList.add("original")
    }else{
      elemento.classList.remove("original")
      elemento.classList.add("titleMenu")
    }
  }

  function trocarCor2() {

    const elemento2 = document.getElementById("titleCategoria")

    const corOriginal2 = elemento2.classList.contains("titleCategoria")

    if(corOriginal2) {
      elemento2.classList.remove("titleCategoria")
      elemento2.classList.add("original")
    }else{
      elemento2.classList.remove("original")
      elemento2.classList.add("titleCategoria")
    }
  }
  
  
  const [Mobile, setMobile] = useState(false);
  

  const handleButtonClick = () => {
    setMobile(!Mobile);
  };

  const handleContentClick = (e) => {
    e.stopPropagation(); // Impede que o clique propague para o elemento pai (o botão)
  };

  return (
    <>
      <div id="menuCategoria">
        <div className="iconCategoria">
          <button className='buttonIcon' onClick={handleButtonClick}>
            {Mobile ? <IoMdClose className="iconMenu"/> : <IoMdMenu className="iconMenu"/>} <h3>CATEGORIA</h3>
          </button>
        </div>
        <div id="meusDetalhesMobile">
          <div className={Mobile ? "menuMobile menuDesktop" : "false"} onClick={() => setMobile(false)}>
            <div className='towMenu' onClick={handleContentClick}>
              <div className="fechar">
                <IoMdClose className="closeInterno" onClick={handleButtonClick}/>
              </div> 
                <details className="menuDesk">
                  <summary id="titleMenu" className="titleMenu" onClick={trocarCor}><IoMdMenu className="menuIconMobile"/><h2>MENU</h2></summary>
                  <div className="menuDeskUl">
                    <ul>
                      <li><Link className="linkMenuMobile" to="/">Home</Link></li>
                      <li><Link className="linkMenuMobile" to="/Promocao">Promoções</Link></li>
                      <li><Link className="linkMenuMobile" to="/Novidade">Novidades</Link></li>
                      <li><Link className="linkMenuMobile" to="/SobreNos">Sobre Nós</Link></li>
                      <li><Link className="linkMenuMobile" to="/Contato">Contato</Link></li>
                    </ul>
                  </div>
                </details>
                <div className="menuMob">
                  <div>
                    <ul>
                    <li><a href="">Eletrônicos</a></li>
                    <li><a href="">Moda</a></li>
                    <li><a href="">Casa e Decoração</a></li>
                    <li><a href="">Saúde e Beleza</a></li>
                    <li><a href="">Alimentação e Bebidas</a></li>
                    <li><a href="">Livros e Entretenimento</a></li>
                    <li><a href="">Esportes e Atividades ao Ar Livre</a></li>
                    <li><a href="">Jogos e Brinquedos</a></li>
                    <li><a href="">Animais de Estimação</a></li>
                    <li><a href="">Pen drives</a></li>
                    <li><a href="">Artes e Artesanato</a></li>
                    <li><a href="">Automotivo</a></li>
                    <li><a href="">Viagens e Bagagens</a></li>
                    <li><a href="">Casa Inteligente</a></li>
                    <li><a href="">Presentes e Ocasiões Especiais</a></li>
                  </ul>
                  </div>
                </div>
                <details className="menuMob2">
                  <summary id="titleCategoria" className="titleCategoria" onClick={trocarCor2}><IoMdMenu className="menuIconMobile"/><h2>CATEGORIA</h2></summary>
                  <div>
                    <ul>
                      <li><a href="">Eletrônicos</a></li>
                      <li><a href="">Moda</a></li>
                      <li><a href="">Casa e Decoração</a></li>
                      <li><a href="">Saúde e Beleza</a></li>
                      <li><a href="">Alimentação e Bebidas</a></li>
                      <li><a href="">Livros e Entretenimento</a></li>
                      <li><a href="">Esportes e Atividades ao Ar Livre</a></li>
                      <li><a href="">Jogos e Brinquedos</a></li>
                      <li><a href="">Animais de Estimação</a></li>
                      <li><a href="">Pen drives</a></li>
                      <li><a href="">Artes e Artesanato</a></li>
                      <li><a href="">Automotivo</a></li>
                      <li><a href="">Viagens e Bagagens</a></li>
                      <li><a href="">Casa Inteligente</a></li>
                      <li><a href="">Presentes e Ocasiões Especiais</a></li>
                    </ul>
                  </div>
                </details>
                <div className="socialsMenu">
                  <a href=""><AiFillInstagram className="iconSocials" /></a>
                  <a href=""><IoLogoTwitter className="iconSocials"/></a>
                  <a href=""><FaLinkedinIn className="iconSocials"/></a>
                  <a href=""><FaFacebookF className="iconSocials"/></a>
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Categoria;
