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
import Logo from "./media/Logo.png" 

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
            <Link className="logo" to="/"><img src={Logo} alt="Logo" width="50"/></Link>
            </div>
            <div className="menu-icon" onClick={this.handleClick}>
            
            <i className={this.state.clicked ? 'fas fa-times' : 
            'fas fa-bars'}></i>

            </div>
                
            <div className="header__nav__option">
            <nav className="header__nav__menu">
           
            <ul className={this.state.clicked ? 'nav-menu active' :
             'nav-menu'}>
            <li className="nav-item"><Link to="/" className="nav-link">
              <i className=" icono-app fas fa-home"></i>Home</Link></li>
            <li className="nav-item"><Link to="/SobreMi" className="nav-link mgt">
            <i class="icono-app fas fa-user"></i>Sobre Mi</Link></li>
            <li className="nav-item"><Link to="/Servicios" className="nav-link mgt">
            <i class="icono-app fa fa-globe-asia"></i>Servicios</Link></li>
            <li className="nav-item"><Link to="/Proyectos" className="nav-link mgt">
            <i class="icono-app fas  fa-suitcase"></i>Proyectos</Link></li>
            <li className="nav-item"><Link to="/Contacto" className="nav-link mgt">
            <i class="icono-app fa fa-envelope"></i>Contacto</Link></li>
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


/*con purecss
class App extends Component  {

  constructor(...props) {
    super(...props) 
    this.state= {
      
     }

     this.handleOnClick = this.handleOnClick.bind(this)
  }

  handleOnClick() {
   document.getElementById('tuckedMenu').classList.toggle('custom-menu-tucked');
   document.getElementById('toggle').classList.toggle('x');
  }

  render () { 
    return (
      <div>
    <Router>
    <div>
    <header class="custom-menu-wrapper">
          <div class="pure-menu custom-menu custom-menu-top">
          <Link className="pure-menu-heading custom-menu-brand" to="/">
            <img src={Logo} alt="Logo" width="50"/></Link>
            <a href="#" class="custom-menu-toggle" id="toggle" onClick={this.handleOnClick}>
              <s class="bar"></s><s class="bar"></s></a>
          </div>
          <nav class="pure-menu pure-menu-horizontal pure-menu-scrollable custom-menu 
          custom-menu-bottom custom-menu-tucked" id="tuckedMenu">
              <div class="custom-menu-screen"></div>
              <ul class="pure-menu-list">
              <li className="pure-menu-item"><Link to="/" className="pure-menu-link">
                <i className=" icono-app fas fa-home"></i>Home</Link></li>
              <li className="pure-menu-item"><Link to="/SobreMi" className="pure-menu-link">
               <i class="icono-app fas fa-user"></i>Sobre Mi</Link></li>
              <li className="pure-menu-item"><Link to="/Servicios" className="pure-menu-link">
               <i class="icono-app fa fa-globe-asia"></i>Servicios</Link></li>
              <li className="pure-menu-item"><Link to="/Proyectos" className="pure-menu-link">
               <i class="icono-app fas  fa-suitcase"></i>Proyectos</Link></li>
              <li className="pure-menu-item"><Link to="/Contacto" className="pure-menu-link">
               <i class="icono-app fa fa-envelope"></i>Contacto</Link></li>
              </ul>
          </nav>
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
*/

/*Con boostrap*/
/*class App extends Component  {

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
            <nav className="header__nav__menu">
            <div>
            <ul className="list">
            <li className="nav-item"><Link to="/" className="nav-link">
              <i className=" icono-app fas fa-home"></i>Home</Link></li>
            <li className="nav-item"><Link to="/SobreMi" className="nav-link">
            <i class="icono-app fas fa-user"></i>Sobre Mi</Link></li>
            <li className="nav-item"><Link to="/Servicios" className="nav-link">
            <i class="icono-app fa fa-globe-asia"></i>Servicios</Link></li>
            <li className="nav-item"><Link to="/Proyectos" className="nav-link">
            <i class="icono-app fas  fa-suitcase"></i>Proyectos</Link></li>
            <li className="nav-item"><Link to="/Contacto" className="nav-link">
            <i class="icono-app fa fa-envelope"></i>Contacto</Link></li>
            </ul>
            </div>
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

export default App*/



