import { useEffect, useState, useRef } from 'react';
import './Home.css';
import { TiStar } from "react-icons/ti";
import { FaCartPlus } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
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

  const handleLeftClick = (e) => {
    e.preventDefault();

    carousel.current.scrollLeft -= 1290;
  };

  const handleRightClick = (e) => {
    e.preventDefault();

    // Verifica se o carrossel atingiu o final
    if (
      carousel.current.scrollLeft + carousel.current.clientWidth ===
      carousel.current.scrollWidth
    ) {
      // Se sim, volta ao início
      carousel.current.scrollLeft = 0;
    } else {
      // Se não, rola para a direita
      carousel.current.scrollLeft += 1290;
    };
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
            <button onClick={handleLeftClick}>
              <IoIosArrowBack className='buttonBackNext'/>
            </button>
            <button onClick={handleRightClick}>
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
                  <a href=""><FaCartPlus /></a>
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    
     
    </div>
  );
}

export default Home;
