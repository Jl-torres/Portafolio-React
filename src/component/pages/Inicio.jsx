import React, { Component } from 'react'
//css
import "../css/inicio.css"
//imagenes
import ImgPerfil from "../media/home/ImgPerfil.jpg" 


export default class Inicio extends Component {
  render() {
    return (
      <div>
        <div className="contenedor">
        <div className="subtitulo">
        <p>La Exelencia no es un Acto, es un Hàbito.</p>
        </div>
        <h2 className="gn">JOSMAR TORRES</h2>
       <a href="#" className="btn-home">
        <span id="span1"></span>
        <span id="span2"></span>
        <span id="span3"></span>
        <span id="span4"></span>
           Ver mis Proyectos</a>
       </div>

       <div className="img1"><img src={ImgPerfil} alt="Logo" width="350px" height="200px"/></div>

      </div>
    )
  }

}