import React, {Component} from 'react'

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
          <div className="contenedor2">
          <main id="main1">
          
          <div className="imgSobreMi"><img src={ImgPerfil} alt="Logo" width="80%"/></div>

         </main>
          <main id="main2"> 
        
          <br></br>
          <br></br>
          <p>Mi nombre es Josmar Leonardo Torres, diseñador web con un año de experiencia,soy de Venezuela, 
           mi formacion en el área de la informatica es totalmente autodidacta, cada proyecto es un nuevo reto para aprender 
          y crecer profesionalmente</p>
          
          <p> En la actualidad realizo mi trabajo como Freelance, tanto en proyectos personales como para otras
          empresas. </p>

         </main>   
            


          </div>
          </div>
      </div> 
           ) 
            }

  }