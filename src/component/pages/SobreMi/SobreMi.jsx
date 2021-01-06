import React, {Component} from 'react'
//React Router
import {Link} from "react-router-dom";
//css
import "./css/SobreMi.css"
//Imagenes
import ImgPerfil from "../Inicio/media/ImgPerfil.jpg" 


export default class SobreMi extends Component {
  render () {
    return (
      <div>
        <div className="contenedor1" id="SobreMi">
          <h3 className="titulo">Sobre Mi.</h3>
          <div className="contenedor2-sb">
          <main id="main1" className="main1-sm" >
        
          <img className="img-fluid " src={ImgPerfil} alt="Logo" width="100%" height="350px" />
        
         </main>
          
          <main id="main2" className="main2-sm"> 
          <br></br>
          <p>Mi nombre es Josmar Leonardo Torres, diseñador web con un año de experiencia,soy de Venezuela, 
           mi formacion en el área de la informatica es totalmente autodidacta, cada proyecto es un nuevo reto para aprender 
          y crecer profesionalmente.</p>
          
          <p> En la actualidad realizo mi trabajo como Freelance, tanto en proyectos personales como para otras
          empresas. </p>
         
         <div className="boton-SobreMi">

          <Link to="/Proyectos" className="btn-SobreMi">
        <span id="span1"></span>
        <span id="span2"></span>
        <span id="span3"></span>
        <span id="span4"></span>
           <i class="icono-Sm fab fa-linkedin-in"></i> Linkedin  </Link>
       </div>
         </main> 
         
          
         </div>
            </div>
      </div> 
           ) 
            }

  }