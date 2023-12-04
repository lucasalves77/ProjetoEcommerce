import React from "react"
import { AiFillInstagram } from "react-icons/ai";
import { IoLogoTwitter } from "react-icons/io";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaCcMastercard } from "react-icons/fa";
import { FaPix } from "react-icons/fa6";
import { FaCcPaypal } from "react-icons/fa";
import { FaBarcode } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import './Footer.css'


const Footer = () =>{

  return(
    <>
    <div className="footerOne">
      <div className="container">
        <div className="footerOneFlex">
            <div>
              <h5>Contato</h5>
              <div className="line"></div>
              <div className="contact">
                <ul>
                <MdEmail className="iconContact"/>
                <p>exemplo@email.com</p>
              </ul>
              <ul>
              <FaPhone className="iconContact"/>
                <p>(555) 123-4567</p>
              </ul>
              <ul>
              <FaLocationDot className="iconContact"/>
              <p>Rua das Ilusões, 123, Cidade dos Sonhos, Estado Imaginário, CEP: 12345-678</p>
              </ul>
              </div>
            </div>
          <div>
            <h5>Navegue Conosco</h5>
            <div className="line"></div>
              <ul>
                <li>Home</li>
                <li>Catálogo</li>
                <li>Ofertas</li>
                <li>Marcas Exclusivas</li>
                <li>Novidades</li>
                <li>Promoções</li>
              </ul>
            </div>
            <div>
              <h5>Atendimento ao Cliente</h5>
              <div className="line"></div>
              <ul>
                <li>Central de Ajuda</li>
                <li>Política de Trocas e Devoluções</li>
                <li>Perguntas Frequentes</li>
                <li>Chat Online</li>
              </ul>
            </div>
            <div>
              <h5>Segurança e Privacidade</h5>
              <div className="line"></div>
              <ul>
                <li>Termos de Uso</li>
                <li>Política de Privacidade</li>
                <li>Certificados de Segurança</li>
                <li>Processo de Pagamento Seguro</li>
                <li>Garantia de Proteção de Dados</li>
                <li>Cookies</li>
              </ul>
            </div>
        </div> 
      </div> 
      </div> 
      <div className="footerTwo">
        <div className="container">
        <div className="footerTwoFlex">
          <ul>
            <a href=""><AiFillInstagram className="socialsCash" /></a>
            <a href=""><IoLogoTwitter className="socialsCash"  /></a>
            <a href=""><FaLinkedinIn className="socialsCash"  /></a>
            <a href=""><FaFacebookF className="socialsCash"  /></a>
          </ul>
          <ul>
            <p>Powered by BigCommerce© 2023 PayeeShop</p>
            <FaCcMastercard className="socialsCash"  />
            <FaCcPaypal className="socialsCash"  />
            <FaPix className="socialsCash"  />
            <FaBarcode className="socialsCash"  />
          </ul>
        </div>
      </div>
      </div> 
    </>
  )
}

export default Footer