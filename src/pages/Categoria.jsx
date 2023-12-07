import React, { useState } from 'react';
import './Categoria.css';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';


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
      elemento2.classList.add("original2")
    }else{
      elemento2.classList.remove("original2")
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
            {Mobile ? <CloseIcon className="iconMenu"/> : <MenuIcon className="iconMenu"/>} <h3>CATEGORIA</h3>
          </button>
        </div>
        <nav id="meusDetalhesMobile">
          <div className={Mobile ? "menuMobile menuDesktop" : "false"} onClick={() => setMobile(false)}>
            <div className='towMenu' onClick={handleContentClick}>
              <div className="fechar">
                <CloseIcon className="closeInterno" onClick={handleButtonClick}/>
              </div> 
                <details className="menuDesk">
                  <summary id='titleMenu' className='titleMenu' onClick={trocarCor}><MenuIcon className='menuIconMobile'/><h2 >MENU</h2></summary>
                  <div className='menuDeskUl'>
                    <ul>
                      <li><a href="">Home</a></li>
                      <li><a href="">Promoções</a></li>
                      <li><a href="">Novidades</a></li>
                      <li><a href="">Sobre Nós</a></li>
                      <li><a href="">Contato</a></li>
                    </ul>
                  </div>
                </details>
                <details className='menuMob'>
                  <summary id='titleCategoria' className='titleCategoria' onClick={trocarCor2}><MenuIcon className='menuIconMobile'/><h2>CATEGORIA</h2></summary>
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
                </details>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Categoria;
