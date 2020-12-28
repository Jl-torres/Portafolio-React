import React, {Component} from 'react'
//css
import "./css/Tecnologias.css"
//data
import {tecnologias} from "../Data/Tecnologias.json"




export default class Tecnologias extends Component {
     
  constructor(...props) {
    super(...props) ; 
    this.state = {
      tecnologias:tecnologias
}  
    }

  render () {

    const tecnologia = this.state.tecnologias.map((tecnologias) => {
      return (
        
        <div key={tecnologias.id}  className="col-md-4 col-sm-6">

        <div className="carta mt-4">
              
        <img src={ tecnologias.imagen } alt=""/>
            
         <div className="carta-texto">
          
         <h4>{tecnologias.titulo}</h4>

        </div>
        </div>
  
        </div> 
      )

    } )


    
    return (
      <div>
        

           
        <div className="container">
           <div className="row">

              {tecnologia}

              </div>
                </div>
      
             
      )
      
      
      
 
     </div>
  
  
           ) 
            }

  } 

  