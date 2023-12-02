import { Link } from "react-router-dom"; 
import React from "react"
import './Menuheader.css'
import { AiFillInstagram } from "react-icons/ai";
import { IoLogoTwitter } from "react-icons/io";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";


const MenuHeader = () =>{
  return(
    <>
    <div className="header">
      <div className="container">
        <div className="meuHeader">
            <h3><Link className="header-link" to="/Categoria">Categorias</Link></h3>
           <ul>
            <li><Link className="header-link" to="/">Home</Link></li>
            <li><Link className="header-link" to="/Promocao">Promoções</Link></li>
            <li><Link className="header-link" to="/Novidade">Novidades</Link></li>
            <li><Link className="header-link" to="/SobreNos">Sobre Nós</Link></li>
            <li><Link className="header-link" to="/Contato">Contato</Link></li>
          </ul>
          <div className="socials">
            <a href=""><AiFillInstagram /></a>
            <a href=""><IoLogoTwitter /></a>
            <a href=""><FaLinkedinIn /></a>
            <a href=""><FaFacebookF /></a>
          </div>
        </div>
      </div>
    </div>
      
    </>
  )
}

export default MenuHeader