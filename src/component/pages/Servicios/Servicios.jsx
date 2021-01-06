import React, {Component} from 'react'
//css
import "./css/Servicios.css"

//Componentes
import ServCards from "./ServCards"
import Tecnologias from './Tecnologias'

export default class Servicios extends Component {
  render () {
    return (
     
      <div>

       <h3 className="titulo mt-5">Servicios</h3>
   
              <div className="row">

                <div className="col-lg-4 col-md-6 col-sm-6">
                   
                     <ServCards
                     titulo="Diseño Web"
                     contenido="Se crean paginas web a tu medida usando tecnologias como HTML, CSS y Javascrip."
                     icono = {<i className=" icono1 fas fa-laptop-code"></i> }                  
                     />
                    
              </div>
            
                <div className="col-lg-4 col-md-6 col-sm-6">    
                     
                      <ServCards
                      titulo="Full Responsive"
                      contenido="Podras ver tu sitio web desde cualquier dispositivo, incluyendo computadoras tablets y telefonos
                      inteligentes."
                      icono = {<i className=" icono1 fas fa-tablet-alt"></i> } 
                      />
                      
                </div>
                
                <div className="col-lg-4 col-md-6 col-sm-6">
                   
                      <ServCards
                      titulo="Aplicaciones moviles"
                      contenido="Desarrollo de aplicaciones que permitan al cliente realizar actividades profesionales por medio de  
                      telefonos inteligentes."
                      icono = {<i className=" icono1 fas fa-mobile-alt"></i>} 
                      />

                </div>

                </div>

                <h3 className="titulo">Tecnologias</h3>
                <Tecnologias/>      
              
               </div>
               
           ) 
            }

  }


  