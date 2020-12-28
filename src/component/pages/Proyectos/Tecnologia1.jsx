import React, {Component} from 'react'
//imagenes
import Wordpress from "../../media/wordpress.png" 
//css
import "./css/Tecnologia.css"

export default class Tecnologia1 extends Component {
  render () {
    return (
      <div>
        <div className="conteiner">
        <div className="row">
        <div className="col-md-4 col-sm-6">
          <div className="card">

          <div className="card-header">
          <figure className="card-header">  
          <img src={Wordpress} alt="Logo" width="100%" height="180px"/>
          <div className="capa">
           <h3>Titulo</h3>
           
           <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
             Nihil non aliquam magni tenetur impedit!</p>
          </div>
          </figure>
          </div>

          <div className="card-body">
            <p>info de cada proyecto</p>
          <a href="#" className="btn btn-primary">Ver Codigo</a>
          </div>
               
           </div>
           </div>
           </div>
       </div> 
      
      </div>
           ) 
            }

  }