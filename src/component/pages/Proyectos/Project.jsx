import React from 'react'
//Css
import "./css/Tecnologia.css"
//imagenes
import Wordpress from "../../media/wordpress.png"

const Projects = (props) => (
         
         <div className="col-md-4 col-sm-6">
          <div className="card">

          <div className="card-header">
          <figure className="card-header">  
          <img src={Wordpress} alt="Logo" width="100%" height="180px"/>
          <div className="capa">
           <h3>{props.titulo}</h3>
             <p>{props.tecnologias}</p>
          </div>
          </figure>
          </div>

          <div className="card-body">
            <p>{props.Contenido}</p>
            <a href={props.links} target="blank" className="btn btn-pt btn-primary">{props.boton}</a>
          </div>
               
           </div>
           </div>



)

export default Projects


