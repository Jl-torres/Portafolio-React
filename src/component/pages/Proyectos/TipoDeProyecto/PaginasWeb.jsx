import React, {Component} from 'react'
//json
import {paginasWeb} from "../data/paginasWeb.json"
//Componentes
import ListaDeProyectos from "../ListaDeProyectos"

class PaginasWeb extends Component {
    constructor(...props) {
        super (...props)

        this.state= {
          paginasWeb: paginasWeb
        }

    }
   
    render () {
         return (
         <div>
                
             <ListaDeProyectos ProyectosCulminados={this.state.paginasWeb} />

         </div>
         

         )


    }
   
}

export default PaginasWeb

