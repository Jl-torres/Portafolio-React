import React, {Component} from 'react'
//json
import {AppReact} from "../data/aplicaciones-react.json"
//Componentes
import ListaDeProyectos from "../ListaDeProyectos"

class AplicacionesReact extends Component {
    constructor(...props) {
        super (...props)

        this.state= {
          AppReact: AppReact
        }

    }
   
    render () {
         return (
         <div>
                
             <ListaDeProyectos ProyectosCulminados={this.state.AppReact} />

         </div>
         

         )


    }
   
}

export default AplicacionesReact