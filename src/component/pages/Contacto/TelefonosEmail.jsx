import React, {Component} from 'react'
//Css
import "./Css/TelefonosEmail.css"
import CorreoJl from "./media/correoJl.png"


export default class TelefonosEmail extends Component {
  render () {
    return (
      <div className="contenedor-conct">
      
      
      <div className="contact">
          <div className="contact-icon">
          <i className="icono fab fa-whatsapp"></i>
          </div>
      <div className="contact-text">
          <h4>WhatsApp</h4>
          <p></p> 
          <p>0424-186-9150</p>     
     </div>
     </div>
     <br></br>   
        <div className="contact">
        <div className="contact-icon">
        <i className=" icono far fa-envelope"></i>
        </div>
      <div className="contact-text">
        <h4>Email</h4>
        <img className="img-fluid" src={CorreoJl} alt="Logo" width="65%" />
       </div>
       </div>
         
                
            
    
     </div> 
           ) 
            }

  }