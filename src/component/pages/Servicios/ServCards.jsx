import React, {Component} from 'react'

//Css
import "./css/ServCards.css"


export default class ServCards extends Component {
  render () {
    return (
      <div>
       

            <div className="services__item mt-3">
            <div className="services__item__icon mb-3 row align-items-center justify-content-center">
            {this.props.icono}
            </div>
            <h4 className="text-center">{this.props.titulo}</h4>
            <p className="text-center">{this.props.contenido}</p>
            </div>
            
       </div> 
  
  
           ) 
            }

  }  

  
