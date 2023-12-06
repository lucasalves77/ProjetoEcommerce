

import React, { useEffect, useState, useRef } from 'react';
import './Home.css';
import { TiStar } from "react-icons/ti";
import { FaCartPlus } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import CardDeitado from "./CardDeitado";
import TopCategoria from "./TopCategoria"
import Banner from "./Banner";
import card from '../imagens/sub-01.jpg';

function Home() {
  const [data, setData] = useState([]);
  const carousel = useRef(null);

  useEffect(() => {
    fetch('http://localhost:5173/static/shoes.json')
      .then((response) => response.json())
      .then(setData);
  }, []);

  const [botaoEsquerdoAtivado, setBotaoEsquerdoAtivado] = useState(true);
  const [botaoDireitoAtivado, setBotaoDireitoAtivado] = useState(true);

  const handleLeftClick = (e) => {
    e.preventDefault();

    if (botaoEsquerdoAtivado) {
      console.log("Botão esquerdo clicado!");
      setBotaoEsquerdoAtivado(false);

      setTimeout(() => {
        setBotaoEsquerdoAtivado(true);
      }, 1000);

      // Lógica de rolagem adaptada para diferentes tamanhos de tela
      if (window.innerWidth >= 1290) {
        carousel.current.scrollLeft -= 1290 / 3;
      } else if (window.innerWidth >= 768) {
        carousel.current.scrollLeft -= window.innerWidth / 2;
      } else if (window.innerWidth <= 400){
        carousel.current.scrollLeft -= window.innerWidth / 2;
      }
    }
  };

  const handleRightClick = (e) => {
    e.preventDefault();

    if (botaoDireitoAtivado) {
      console.log("Botão direito clicado!");
      setBotaoDireitoAtivado(false);

      setTimeout(() => {
        setBotaoDireitoAtivado(true);
      }, 1000);

      // Lógica de rolagem adaptada para diferentes tamanhos de tela
      if (window.innerWidth >= 1290) {
        carousel.current.scrollLeft += 1290 / 3;
      } else if (window.innerWidth >= 768) {
        carousel.current.scrollLeft += window.innerWidth / 2;
      } else if (window.innerWidth <= 400) {
        carousel.current.scrollLeft += window.innerWidth / 2;
      }
    }
  };

  if (!data || !data.length) return null;

  return (
    <>
    <div className='containertwo'>
      <div className="container">
            <Banner />
            <div className='box'>
            <div>
                <img src={card} alt="" />
              </div>
              <div>
                <img src={card} alt="" />
              </div>
              <div>
                <img src={card} alt="" />
              </div>
              <div>
                <img src={card} alt="" />
              </div>
              <div>
                <img src={card} alt="" />
              </div>
            </div>
            <div className="produtos">
              <h1>NEW ARRIVALS</h1>
              <div className='categoriasProdutos'>
              <div className="category">
                    <a href="">HOME APPLIANCES</a>
                    <a href="">COMPUTER</a>
                    <a href="">ELETRONICS</a>
                    <a href="">SMARTPHONE & TABLET</a>
                    <a href="">CAMERA</a>
                </div>   
                <div className="buttons">
                  <button onClick={handleLeftClick} disabled={!botaoEsquerdoAtivado}>
                    <IoIosArrowBack className='buttonBackNext'/>
                  </button>
                  <button onClick={handleRightClick} disabled={!botaoDireitoAtivado}>
                    <IoIosArrowForward className='buttonBackNext'/>
                  </button>
                </div>
              </div>
            </div>
            <div className="carousel" ref={carousel}>
              {data.map((item) => {
                const { id, name, price, categoria, image } = item;
                return (
                  <div className="flexCardBox" key={id}>
                    <div className="image">
                      <img src={image} alt={name} />
                    </div>
                    <div className="flexCardBoxInfo">
                      <p>{categoria}</p>
                      <h3>{name}</h3>
                      <ul>
                        <span><TiStar /></span>
                        <span><TiStar /></span>
                        <span><TiStar /></span>
                        <span><TiStar /></span>
                        <span><TiStar /></span>
                      </ul>
                      <ul className="valorCar">
                        <h4>R${price}</h4>
                        <a href=""><FaCartPlus className='addCar'/></a>
                      </ul>
                    </div>
                  </div>
                );
              })}
            </div>
            <CardDeitado />
            <TopCategoria/>
          </div>
    </div>
    
    
    </>
    
  );
}

export default Home;

