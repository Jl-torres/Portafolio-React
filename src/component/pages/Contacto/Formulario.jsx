import React, {Fragment,} from 'react'
//Css
import "./Css/Formulario.css"
//emailjs
import emailjs from "emailjs-com"

const Formulario = () => {
   
  
function sendEmail(e) {
  e.preventDefault();

  emailjs.sendForm('portafolio', 'template_dfzcsrf', e.target, 'user_w6L3YlQlQAQlUSAfNEjC0')
    .then((result) => {
        console.log(result.text);
        alert('Su mensaje fue Enviado')
     }, (error) => {
        console.log(error.text);
        alert('Error de envio. Porfavor intente de nuevo')
    });
    e.target.reset();
    
}

return (
  
     <Fragment>
     <form className="formulario"  onSubmit={sendEmail}>
       <h4 className="titulo-fm">¿Como puedo ayudarte?</h4>
       <div className="casilla">
         <input 
          placeholder="Nombre y Apellido"
          className="form-control"
          type="text"
          name="nombre"
          required
         />
       </div>
       <br></br>
       <div>
       <input className="telefono" placeholder="Telefono (No es obligatorio)"
          className="form-control"
          type="number"
          name="telefono"
          
         />
      </div>
      <br></br>
      <div>
         <input placeholder="Email"
          className="form-control"
          type="email"
          name="email"
          required
         />
      </div>
      <br></br>
       
      <textarea 
      name="asunto"
      className="asunto" 
      placeholder="Asunto"
      required
      >
        
      </textarea>
       
         <button className="btn btn1 -btn-primary" 
         type="submit"
         >Enviar</button>
         
       
       
     </form>
     

     </Fragment>     
        

  
       ) 
        

}

  export default Formulario

 