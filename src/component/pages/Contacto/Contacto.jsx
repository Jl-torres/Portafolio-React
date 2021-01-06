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
        <h3 className="titulo">Contacto</h3>

        <div className="contenedor-cont">
        <main className="main1-cont">
        
        <TelefonosEmail/>

       </main>
        <main className="main2-cont"> 
      
        <br></br>
        <br></br>

        <Formulario />

       </main>   
          
        

        </div>
        
    </div> 
           ) 
            }

  }