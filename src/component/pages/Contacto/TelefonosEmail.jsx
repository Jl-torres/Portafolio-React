import React, {Component} from 'react'
//Css
import "./Css/TelefonosEmail.css"


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
        <p>ltjosmar1997@gmail.com</p>
        <p>jltorres2014@hotmail.com</p>
       </div>
       </div>
         
                
            
    
     </div> 
           ) 
            }

  }