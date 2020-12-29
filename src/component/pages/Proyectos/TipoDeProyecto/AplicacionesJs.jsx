import React, {Component} from 'react'
//json
import {JavaScript} from "../data/aplicaciones-js.json"
//Componentes
import ListaDeProyectos from "../ListaDeProyectos"

class AplicacionesJs extends Component {
    constructor(...props) {
        super (...props)

        this.state= {
            JavaScript: JavaScript
        }

    }
   
    render () {
         return (
         <div>
                
             <ListaDeProyectos ProyectosCulminados={this.state.JavaScript} />

         </div>
         

         )


    }
   
}

export default AplicacionesJs