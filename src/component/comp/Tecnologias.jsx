import React, {Component} from 'react'

//imagenes


//css
import "./css/Tecnologias.css"
//data
import tecnologias from "../Data/Tecnologias.json"




export default class Tecnologias extends Component {
     
  constructor(...props) {
    super(...props) ; 
    this.state = {"tecnologias": [   
      {   "id":0 ,
          "titulo":"HTML",
          "imagen":"./tecnologias/html.png"
           
      },

      {
       "id":1,  
       "titulo":"CSS",
       "imagen":"./tecnologias/css.png" 
   },

   {
       "id":2,
       "titulo":"Javascript",
       "imagen":"./tecnologias/Js.png" 
   }
   
 ] 
}  
    }

  render () {

    const tecnologia = this.state.tecnologias.map((tecnologias) => {
      return (
        
        <div className="col-md-4 col-sm-6">

        <div key={tecnologias.id} className="card mt-4">
              
        <img src={ tecnologias.imagen } alt=""/>
            
         <div className="card-text">
          
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

  /*
            <div className="container">
          <div className="row">
              <div className="col-md-4 col-sm-6">
                  
                  <div className="card">
                   <img src={html} alt="html" width="50"/>
                   <div className="card-text">

                   <h4>HTML</h4>

                  </div>
                 </div>
            
            </div>

            <div className="col-md-4 col-sm-6">
                  
                  <div className="card">
                   <img src={html} alt="html" width="50"/>
                   <div className="card-text">

                   <h4>HTML</h4>

                  </div>
                 </div>
            
            </div>

            <div className="col-md-4 col-sm-6">
                  
                  <div className="card">
                   <img src={html} alt="html" width="50"/>
                   <div className="card-text">

                   <h4>HTML</h4>

                  </div>
                 </div>
            
            </div>
               
                
           </div>
      </div> */

      
      /*


constructor(...props) {
    super(...props) ; 
    this.state = {"tecnologias": [   
      {   "id":0 ,
          "titulo":"HTML",
          "imagen":"./tecnologias/html.png"
           
      },

      {
       "id":1,  
       "titulo":"CSS",
       "imagen":"./tecnologias/css.png" 
   },

   {
       "id":2,
       "titulo":"Javascript",
       "imagen":"./tecnologias/Js.png" 
   }
   
 ] 
}  
    }

  render () {


    return (
      <div className="container">
     <ul>
     {this.state.tecnologias.map((tecnologias) => {
      return (
       <div key={tecnologias.id}> 

      <li>{tecnologias.titulo}</li>
      
      <img src={ tecnologias.imagen } alt=""/>
      
      </div> 
      )
      
      ;})}
    </ul>

     </div>
  
  
           ) 
            }

  } 


  */

  /*
   <div>
     <ul>
     {this.state.tecnologias.map((tecnologias) => {
      return (
        <div className="container">
        <div className="row">
            <div key={tecnologias.id} className="col-md-4 col-sm-6">
           
            <div className="card">
                  
            <img src={ tecnologias.imagen } alt="" width="250px"/>
                
             <div className="card-text">
              
             <h4>{tecnologias.titulo}</h4>

            </div>
            </div>
      
          
      
             </div> 
           </div>
        </div>
      )
      
      ;})}
    </ul>

     </div>
  
  
           ) 
            }

  } 
  
  
  
  */