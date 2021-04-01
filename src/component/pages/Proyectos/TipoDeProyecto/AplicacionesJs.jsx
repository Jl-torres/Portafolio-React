import React, {Component} from 'react'
//json
import {Angular} from "../data/aplicaciones-js.json"
//Componentes
import ListaDeProyectos from "../ListaDeProyectos"
//Material-UI


class AplicacionesJs extends Component {
    constructor(...props) {
        super (...props)

        this.state= {
            Angular: Angular
        }

    }
   
    render () {
         return (
             
            <div>
                
             <ListaDeProyectos ProyectosCulminados={this.state.Angular} />

             </div>
         

         )


    }
   
}

export default AplicacionesJs