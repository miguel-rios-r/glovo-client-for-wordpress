import React from 'react';
import {Link} from 'react-router-dom'

import GlovoLogo from '../assets/images/glovobusiness.svg'

const Navbar = (props) => {
  if ( props.logged ) {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link style={{marginBottom: 10 + 'px'}}  className="navbar-brand" to="/"><img src={GlovoLogo}></img></Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarColor02">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" href="/">Salir</a>
            </li>
          </ul>
        </div>
      </nav>
    )
  } else {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link style={{marginBottom: 10 + 'px'}}  className="navbar-brand" to="/"><img src={GlovoLogo}></img></Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      </nav>
    )
  }
}

export default Navbar;