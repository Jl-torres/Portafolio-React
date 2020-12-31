import React, {Component} from 'react'
//Css
import "./Css/Contacto.css"
//Componentes
import TelefonosEmail from './TelefonosEmail'
import Formulario from './Formulario'

export default class Contacto extends Component {
  render () {
    return (
      <div>
      <div className="contenedor1" id="SobreMi">
        <h3 className="titulo">Contacto</h3>
        <div className="contenedor2">
        <main id="main1">
        
        <TelefonosEmail/>

       </main>
        <main id="main2"> 
      
        <br></br>
        <br></br>

        <Formulario />

       </main>   
          
        

        </div>
        </div>
    </div> 
           ) 
            }

  }