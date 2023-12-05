import React from "react"
import { useEffect, useState, useRef } from 'react';
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import './Banner.css'


const Banner = () =>{

  const [data, setData] = useState([]);
  const carousel = useRef(null);

  useEffect(() => {
    fetch('http://localhost:5173/static/Banner.json')
      .then((response) => response.json())
      .then(setData);
  }, []);

  const [botaoEsquerdoAtivado, setBotaoEsquerdoAtivado] = useState(true);
  const [botaoDireitoAtivado, setBotaoDireitoAtivado] = useState(true);

  const handleLeftClick = (e) => {
    e.preventDefault();

    if (botaoEsquerdoAtivado) {
      // Realiza a ação desejada aqui
      console.log("Botão esquerdo clicado!");

      // Desativa o botão esquerdo temporariamente
      setBotaoEsquerdoAtivado(false);

      // Reativa o botão após um período de tempo (por exemplo, 1 segundo)
      setTimeout(() => {
        setBotaoEsquerdoAtivado(true);
      }, 1000);

      // Sua lógica para rolar para a esquerda
      carousel.current.scrollLeft -= 1290;
    }
  };

  const handleRightClick = (e) => {
    e.preventDefault();

    if (botaoDireitoAtivado) {
      // Realiza a ação desejada aqui
      console.log("Botão direito clicado!");

      // Desativa o botão direito temporariamente
      setBotaoDireitoAtivado(false);

      // Reativa o botão após um período de tempo (por exemplo, 1 segundo)
      setTimeout(() => {
        setBotaoDireitoAtivado(true);
      }, 1000);

      // Sua lógica para rolar para a direita
      if (carousel.current.scrollLeft + carousel.current.clientWidth === carousel.current.scrollWidth) {
        carousel.current.scrollLeft = 0;
      } else {
        carousel.current.scrollLeft += 1290;
      }
    }
  };

  if (!data || !data.length) return null;

  return(
    <>
      <div className="container">
        <div className="bannerOne">
          <div className='banner' ref={carousel}>
              {data.map((item) => {
              const { id, image } = item;
              return(
            <div className="bannerImg" key={id}>
              <img src={image} alt="" />
              <div className="circulo">
                <div ></div>
                <div ></div>
                <div ></div>
              </div>   
            </div>
            )
            })}
          </div>
          <div className="buttonsBanner">
              <button onClick={handleLeftClick} disabled={!botaoEsquerdoAtivado}>
                <IoIosArrowBack className='buttonIconBanner'/>
              </button>
              <button onClick={handleRightClick} disabled={!botaoDireitoAtivado}>
                <IoIosArrowForward className='buttonIconBanner'/>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Banner