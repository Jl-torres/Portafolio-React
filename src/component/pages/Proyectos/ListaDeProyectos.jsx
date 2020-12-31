import React from 'react'

//componentes
import Projects from './Project'

const ListaDeProyectos = ( props ) => (
    <div>
        
        <div className="row">
        {
            props.ProyectosCulminados.map(Project =>(
                
                <Projects
                  key={Project.id}
                  id={Project.id}
                  titulo={Project.titulo}
                  Contenido={Project.Contenido}
                />
            ))
        }
        
    </div>
        
       
    </div>
)

export default ListaDeProyectos

