import { Link } from "react-router-dom"; 
import React from "react"
import './Menuheader.css'
import { AiFillInstagram } from "react-icons/ai";
import { IoLogoTwitter } from "react-icons/io";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaShoppingBag } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import Categoria from '../pages/Categoria';


const MenuHeader = () =>{
  return(
    <>
    <div className="headerOne">
      <div className="containertwo">
        <div className="container">  
      <div className="meuHeaderOne">
          <h2>Ecommerce</h2>
          <ul>
            <li><Link className="header-link" to="/">Home</Link></li>
            <li><Link className="header-link" to="/Promocao">Promoções</Link></li>
            <li><Link className="header-link" to="/Novidade">Novidades</Link></li>
            <li><Link className="header-link" to="/SobreNos">Sobre Nós</Link></li>
            <li><Link className="header-link" to="/Contato">Contato</Link></li>
          </ul>
          <div className="carUserLogin">
            <a href=""><FaShoppingBag className="carUser" /></a>
            <a href=""><FaUser className="carUser" /></a>
          </div>
        </div>
     </div>
      </div>
    </div>
    <div className="header">
      <div className="containertwo">
        <div className="container">
          <div className="meuHeader">
              <Categoria/>
            <div className="input">
              <input type="text" />
              <a href=""><IoIosSearch className="search"/></a>
            </div>
            <div className="socials">
              <a href=""><AiFillInstagram /></a>
              <a href=""><IoLogoTwitter /></a>
              <a href=""><FaLinkedinIn /></a>
              <a href=""><FaFacebookF /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default MenuHeader