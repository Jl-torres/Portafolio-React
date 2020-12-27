import React, { Component } from 'react'
//Componentes
import Inicio from "./Inicio"
import Servicios from './Servicios'
import SobreMi from "./SobreMi"
//css
import "../css/index.css"



export default class Home extends Component {
  render() {
    return (
      <div>
        
        <Inicio/>
        <div className="body">
        <SobreMi/>
        <Servicios/>
        <br></br>
        <br></br>
        <br></br>
        </div>

      </div>
    )
  }

}