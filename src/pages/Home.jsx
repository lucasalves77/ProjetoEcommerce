import { useEffect, useState, useRef } from 'react';
import './Home.css';
import { TiStar } from "react-icons/ti";
import { FaCartPlus } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import CardDeitado from "./CardDeitado"
import Banner from "./Banner"
import card from '../imagens/sub-01.jpg'



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
      // Realiza a ação desejada aqui
      console.log("Botão esquerdo clicado!");

      // Desativa o botão esquerdo temporariamente
      setBotaoEsquerdoAtivado(false);

      // Reativa o botão após um período de tempo (por exemplo, 1 segundo)
      setTimeout(() => {
        setBotaoEsquerdoAtivado(true);
      }, 1000);

      // Sua lógica para rolar para a esquerda
      carousel.current.scrollLeft -= 1290 / 3;
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
        carousel.current.scrollLeft += 1290 / 3;
      }
    }
  };


  if (!data || !data.length) return null;

  return (
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
        <CardDeitado/>
    </div>
  );
}

export default Home;
