import { Link } from "react-router-dom"; 
import React from "react"
import './Menuheader.css'

const MenuHeader = () =>{
  return(
    <>
    <div className="header">
      <div className="container">
        <ul>
          <li><Link className="header-link" to="/">Home</Link></li>
        </ul>
      </div>
    </div>
      
    </>
  )
}

export default MenuHeader