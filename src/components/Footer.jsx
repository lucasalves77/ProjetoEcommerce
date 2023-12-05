import React from "react"
import { AiFillInstagram } from "react-icons/ai";
import { IoLogoTwitter } from "react-icons/io";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaCcMastercard } from "react-icons/fa";
import { FaPix } from "react-icons/fa6";
import { FaCcPaypal } from "react-icons/fa";
import { FaBarcode } from "react-icons/fa";
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import LocalPhoneRoundedIcon from '@mui/icons-material/LocalPhoneRounded';
import PlaceRoundedIcon from '@mui/icons-material/PlaceRounded';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import './Footer.css'


const Footer = () =>{

  return(
    <>
    <div className="footerOne">
      <div className="container">
        
        <div className="footerOneFlex">
            <div className="contato">
              <h5>Contato</h5>
              <div className="line"></div>
              <div className="contact">
                <ul>
                  <EmailRoundedIcon className="iconContact"/>
                  <p>exemplo@email.com</p>
                </ul>
                <ul>
                  <LocalPhoneRoundedIcon className="iconContact"/>
                  <p>(555) 123-4567</p>
                </ul>
                <ul>
                  <PlaceRoundedIcon className="iconContact"/>
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
        <div className="linhaFooter"></div>
        <div className="newsletter">
          <div className="newsletterFlex">
            <h2>Newsletter</h2>
            <div className="line"></div>
            <p>Assine nossa Newsletter e receba as últimas novidades, dicas de moda e promoções exclusivas.</p>
            <ul>
              <input type="text" />
              <a href=""><ArrowForwardRoundedIcon className="seta"/></a>
            </ul>
          </div>
          <ul>
            <FaCcMastercard className="socialsCash"  />
            <FaCcPaypal className="socialsCash"  />
            <FaPix className="socialsCash"  />
            <FaBarcode className="socialsCash"  />
          </ul>
        </div>
      </div> 
      </div> 
      <div className="footerTwo">
        <div className="container">
        <div className="footerTwoFlex">
            <p>Powered by BigCommerce© 2023 PayeeShop</p>
          <ul>
            <a href=""><AiFillInstagram className="socialsCash" /></a>
            <a href=""><IoLogoTwitter className="socialsCash"  /></a>
            <a href=""><FaLinkedinIn className="socialsCash"  /></a>
            <a href=""><FaFacebookF className="socialsCash"  /></a>
          </ul>
        </div>
      </div>
      </div> 
    </>
  )
}

export default Footer