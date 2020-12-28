import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
//Paginas
import Home from "./pages"
import SobreMi from "./pages/SobreMi"
import Servicios from "./pages/Servicios"
import Proyectos from "./pages/Proyectos/Proyectos"
import Contacto from "./pages/Contacto"
import Error404 from "./pages/Error404"
//Css
import "./App.css"
//Imagenes
import Logo from "./media/Logo.png" 

//Funcion App


class App extends Component  {
  /*constructor(...props) {
    super(...props) 
    this.state= {
      authed:false,
      loading:true
     }

     this.handleOnClick = this.handleOnClick.bind(this)
  }

  handleOnClick() {
   document.getElementById('tuckedMenu').classList.toggle('custom-menu-tucked');
   document.getElementById('toggle').classList.toggle('x');
  }*/

  render () { 
    return (
      <div>
    <Router>
    <div>
    <header className="header">
            <div className="header__logo">
            <Link className="logo" to="/"><img src={Logo} alt="Logo" width="50"/></Link>
            </div>
                
            <div className="header__nav__option">
            <nav className="header__nav__menu mobile-menu">
            <ul>
            <li className="nav-item"><Link to="/" className="nav-link">Home</Link></li>
            <li className="nav-item"><Link to="/SobreMi" className="nav-link">Sobre Mi</Link></li>
            <li className="nav-item"><Link to="/Servicios" className="nav-link">Servicios</Link></li>
            <li className="nav-item"><Link to="/Proyectos" className="nav-link">Proyectos</Link></li>
            <li className="nav-item"><Link to="/Contacto" className="nav-link">Contacto</Link></li>
            </ul>
            </nav>
            </div>
                  
    </header>
    
    </div>
    
            <main className="main">
              <Switch>
              <Route path="/" exact component={Home}/>
              <Route path="/SobreMi" exact component={SobreMi}/>
              <Route path="/Servicios" exact component={Servicios}/>
              <Route path="/Proyectos" exact component={Proyectos}/>
              <Route path="/Contacto" exact component={Contacto}/>
              <Route exact component={Error404}/>
              </Switch>
           </main>
           
    
  </Router>
  </div>
    )
  }
}

export default App


