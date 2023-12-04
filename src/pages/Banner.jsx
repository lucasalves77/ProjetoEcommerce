import React from "react"
import { useEffect, useState, useRef } from 'react';
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import './Banner.css'


const Banner = () =>{

  const [data, setData] = useState([]);
  const [selectedItem, setSelectedItem] = useState(0);
  const carousel = useRef(null);

  useEffect(() => {
    fetch('http://localhost:5173/static/Banner.json')
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
              <button onClick={handleLeftClick}>
                <IoIosArrowBack className='buttonIconBanner'/>
              </button>
              <button onClick={handleRightClick}>
                <IoIosArrowForward className='buttonIconBanner'/>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Banner