import React, {Fragment,} from 'react'
//Css
import "./Css/Formulario.css"
//emailjs
import emailjs from "emailjs-com"

const Formulario = () => {
   
  
function sendEmail(e) {
  e.preventDefault();

  emailjs.sendForm('gmail', 'portafolio', e.target, 'user_w6L3YlQlQAQlUSAfNEjC0')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
    e.target.reset()
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
          
         />
       </div>
       <br></br>
       <div>
       <input className="telefono" placeholder="Telefono"
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
          
         />
      </div>
      <br></br>
       
      <textarea className="asunto" placeholder="Asunto"></textarea>
       
         <button className="btn btn1 -btn-primary" 
         type="submit"
         >Enviar</button>
         
       
       
     </form>
     

     </Fragment>     
        

  
       ) 
        

}

  export default Formulario

  /*const [datos, setDatos]  =  useState ({
        
        nombre:'',
        apellido:''     

    })

    const handleInputChange = (event) => {
      
      setDatos({
        ...datos,
        [event.target.name]: event.target.value
      })
    } 

    const enviarDatos= (event) => {
      event.preventDefault();
      console.log (datos.nombre + ' ' + datos.apellido)
    }

    return (
      
         <Fragment>
         <h1>Formulario</h1>
         <form className="row" onSubmit={enviarDatos}>
           <div>
             <input 
              placeholder="Nombre"
              className="form-control"
              type="text"
              name="nombre"
              onChange={handleInputChange}
             />
           </div>
           <div>
             <input placeholder="Apellido"
              className="form-control"
              type="text"
              name="apellido"
              onChange={handleInputChange}
             />
           </div>
           <div className="boton">
             <button className="btn -btn-primary" 
             type="submit"
             >Enviar</button>
           </div>
           
         </form>
         

         </Fragment>     
            
    
      
           ) 
            

  }*/