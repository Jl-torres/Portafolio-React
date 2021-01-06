import React, { Component } from 'react'
//React Router
import {Link} from "react-router-dom";
//css
import "./css/inicio.css"
//imagenes
import ImgPerfil from "./media/ImgPerfil.jpg" 


export default class Inicio extends Component {
  render() {
    return (
      <div className="contenedor-total">
        
        <div className="contenedor ">
        <div className="subtitulo">
        <p>LA EXELENCIA NO ES UN ACTO, ES UN HÁBITO.</p>
        </div>
        <h2 className="gn">JOSMAR TORRES</h2>
        <Link to="/Proyectos" className="btn-home">
        <span id="span1"></span>
        <span id="span2"></span>
        <span id="span3"></span>
        <span id="span4"></span>
           Ver mis Proyectos</Link>
       </div>
       
       <div className="img1 "><img src={ImgPerfil} alt="Logo" width="350px" height="200px"/></div>
      
      </div>
    )
  }

}