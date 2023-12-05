import React from "react"
import { useEffect, useState, useRef } from 'react';
import './CardDeitado.css'
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { TiStar } from "react-icons/ti";
import { FaCartPlus } from "react-icons/fa";



const CardDeitado = () =>{

  const [data, setData] = useState([]);
  const CardDeitadoOne = useRef(null);
  const CardDeitadoTwo = useRef(null);

  useEffect(() => {
    fetch('http://localhost:5173/static/CardDeitado.json')
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
      CardDeitadoOne.current.scrollLeft -= 1290;
      CardDeitadoTwo.current.scrollLeft -= 1290;
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
      if (CardDeitadoOne.current.scrollLeft && CardDeitadoTwo.current.scrollLeft 
        + CardDeitadoOne.current.clientWidth && CardDeitadoTwo.current.clientWidth 
        === CardDeitadoOne.current.scrollWidth && CardDeitadoTwo.current.scrollWidth) {
        CardDeitadoOne.current.scrollLeft = 0;
        CardDeitadoTwo.current.scrollLeft = 0;
      } else {
        CardDeitadoOne.current.scrollLeft += 1290;
        CardDeitadoTwo.current.scrollLeft += 1290;
      }
    }
  };

  if (!data || !data.length) return null;


  return(
    <>
      <div className="container">
        <div>
          <div className="buttons"><h1>ggggg</h1>
          <button onClick={handleLeftClick} disabled={!botaoEsquerdoAtivado}>
            <IoIosArrowBack className='buttonBackNext'/>
          </button>
          <button onClick={handleRightClick} disabled={!botaoDireitoAtivado}>
            <IoIosArrowForward className='buttonBackNext'/>
          </button>
        </div>
        </div>
        <div className="displayFlex">
          <div className="CardDeitado" ref={CardDeitadoOne}>
         {data.map((item) => {
          const { id, name, price, categoria, image } = item;
          return (
            <div className="CardDeitado-flex" key={id}>
              <div className="image">
                <img src={image} alt={name} />
              </div>
              <div className="CardDeitado-Info">
                <p>{categoria}</p>
                <h3>{name}</h3>
                <ul>
                  <span><TiStar /></span>
                  <span><TiStar /></span>
                  <span><TiStar /></span>
                  <span><TiStar /></span>
                  <span><TiStar /></span>
                </ul>
                <ul className="CardDeitado-valor">
                  <h4>R${price}</h4>
                  <a href=""><FaCartPlus /></a>
                </ul>
              </div>
            </div>
          );
          })}
        </div>
        <div className="CardDeitado" ref={CardDeitadoTwo}>
        {data.map((item) => {
          const { id, name, price, categoria, image } = item;
          return (
            <div className="CardDeitado-flex" key={id}>
              <div className="image">
                <img src={image} alt={name} />
              </div>
              <div className="CardDeitado-Info">
                <p>{categoria}</p>
                <h3>{name}</h3>
                <ul>
                  <span><TiStar /></span>
                  <span><TiStar /></span>
                  <span><TiStar /></span>
                  <span><TiStar /></span>
                  <span><TiStar /></span>
                </ul>
                <ul className="CardDeitado-valor">
                  <h4>R${price}</h4>
                  <a href=""><FaCartPlus /></a>
                </ul>
              </div>
            </div>
          );
          })}
        </div>
        </div>
        
      </div>
    </>
  )
}

export default CardDeitado
