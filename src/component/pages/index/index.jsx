import React, { Component } from 'react'
//React Router
import {Link} from "react-router-dom";
//css
import "./css/index.css"
//imagenes
import logoInicio from "./media/logoInicio.png" 


export default class Home extends Component {
  render() {
    return (    
        <div className="contenedor row align-items-center justify-content-center vh-100 ">
         <div className="col-sm-12 contenido"> 
         <div className="centrar">
         <img className="img-fluid" src={logoInicio} alt="Logo" width="350px"/>
         </div>

        <div className="subtitulo">
        <p>LA EXELENCIA NO ES UN ACTO, ES UN HÁBITO.</p>
        </div>
        <div className="centrar">
        <Link to="/Proyectos" className="btn-home">
        <span id="span1"></span>
        <span id="span2"></span>
        <span id="span3"></span>
        <span id="span4"></span>
           Ver mis Proyectos</Link>
       </div>
         </div>
           </div>
      
      
      
    )
  }

}