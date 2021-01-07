import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
//Paginas
import Home from "./pages/index"
import SobreMi from "./pages/SobreMi/SobreMi"
import Servicios from "./pages/Servicios/Servicios"
import SimpleTabs from "./pages/Proyectos/Proyectos"
import Contacto from "./pages/Contacto/Contacto"
import Error404 from "./pages/Error404/Error404"
//Css
import "./App.css"
//Imagenes
import logoMenu from "./media/logoMenu.png" 

//Funcion App


class App extends Component  {

    state= {clicked:false}

    handleClick= () => {
      this.setState({clicked: !this.state.clicked})
    }

  render () { 
    return (
      <div>
    <Router>
    <div>
    <header className="header">
            <div className="header__logo">
            <Link to="/"><img className="logo" src={logoMenu} alt="Logo" width="50"/></Link>
            </div>
            <div className="menu-icon" onClick={this.handleClick}>
            
            <i className={this.state.clicked ? 'fas fa-times' : 
            'fas fa-bars'}></i>

            </div>
                
            <div className="header__nav__option">
            <nav className="header__nav__menu">
           
            <ul className={this.state.clicked ? 'nav-menu active' :
             'nav-menu'}>
            <li onClick={this.handleClick} className="nav-item">
            <Link to="/" className="nav-link"><i className=" icono-app fas fa-home"></i>Home</Link></li>
            <li onClick={this.handleClick} className="nav-item">
            <Link to="/SobreMi" className="nav-link mgt"><i className="icono-app fas fa-user"></i>Sobre Mi</Link></li>
            <li onClick={this.handleClick} className="nav-item"><Link to="/Servicios" className="nav-link mgt">
            <i className="icono-app fa fa-globe-asia"></i>Servicios</Link></li>
            <li onClick={this.handleClick} className="nav-item">
              <Link to="/Proyectos" className="nav-link mgt">
            <i className="icono-app fas  fa-suitcase"></i>Proyectos</Link></li>
            <li onClick={this.handleClick} className="nav-item">
            <Link to="/Contacto" className="nav-link mgt"><i className="icono-app fa fa-envelope">
              </i>Contacto</Link></li>
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
              <Route path="/Proyectos" exact component={SimpleTabs}/>
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


