import React, {Component} from 'react'
//css
import "./css/SobreMi.css"
//Imagenes
import JosmarFoto from "../index/media/JosmarFoto.png" 
//PDF
import JosmarCv from "./JosmarCv.pdf"


export default class SobreMi extends Component {
  render () {
    return (
      <div>
        <div className="contenedor1" id="SobreMi">
          
          <div className="contenedor2-sb">
          <main id="main1" className="main1-sm" >
        
          <img className="img-fluid " src={JosmarFoto} alt="Logo" width="100%" />
        
         </main>
          
          <main id="main2" className="main2-sm"> 
          <h3 className="titulo">Sobre Mi.</h3>
          <br></br>
          <p>Mi nombre es Josmar Leonardo Torres, programador Frontend Junior, soy de Venezuela, 
           mi formacion en el área de la informatica es totalmente autodidacta, cada proyecto es un nuevo reto para aprender 
          y crecer profesionalmente.</p>
          
          <p> En la actualidad realizo mi trabajo como Freelance, tanto en proyectos personales como para otras
          empresas. </p>
         
         <div className="boton-SobreMi">

          <a href="https://www.linkedin.com/in/josmar-torres-desarrollador-frontend/" 
          className="btn-SobreMi" target="blank">
        <span id="span1"></span>
        <span id="span2"></span>
        <span id="span3"></span>
        <span id="span4"></span>
           <i className="icono-Sm fab fa-linkedin-in"></i> Linkedin  </a>
        </div>
        <div className="boton-SobreMi2">
           <a href={JosmarCv} 
          className="btn-SobreMi bt2" target="blank">
        <span id="span1"></span>
        <span id="span2"></span>
        <span id="span3"></span>
        <span id="span4"></span>
        <i className="icono-Sm far fa-address-card"></i> curriculum  </a>
       </div>
         </main> 
         
          
         </div>
            </div>
      </div> 
           ) 
            }

  }