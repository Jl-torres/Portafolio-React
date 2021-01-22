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
                  tecnologias={Project.tecnologias}
                  links={Project.links}
                  links2={Project.links2}
                  links2Class={Project.links2Class}
                  boton={Project.boton}
                  imagen={Project.imagen}
                />
            ))
        }
        
    </div>
        
       
    </div>
)

export default ListaDeProyectos

