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

                <div className="col-lg-6 col-md-6 col-sm-6">
                   
                     <ServCards
                     titulo="Diseño Web"
                     contenido="Desarrollo de paginas web a tu medida usando tecnologias como HTML, CSS , 
                     Javascrip, entre otros."
                     icono = {<i className=" icono1 fas fa-laptop-code"></i> }                  
                     />
                    
              </div>
            
                <div className="col-lg-6 col-md-6 col-sm-6">    
                     
                      <ServCards
                      titulo="Desarrollo de Aplicaciones Frontend"
                      contenido="Mantenimiento y optimizacion de sitios web.
                      Creacion de herramientas y elementos que mejoren la interacción 
                      con el sitio en cualquier dispositivo. "
                
                      icono = {<i class=" icono1 fas fa-code"></i>} 
                      />
                      
                </div>
                

                </div>

                <h3 className="titulo">Tecnologias</h3>
                <Tecnologias/>      
              
               </div>
               
           ) 
            }

  }


  