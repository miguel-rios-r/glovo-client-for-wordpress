import React from 'react';
import {Link} from 'react-router-dom'

import GlovoLogo from '../assets/images/glovobusiness.svg'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link style={{marginBottom: 10 + 'px'}}  className="navbar-brand" to="/"><img src={GlovoLogo}></img></Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarColor02">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/users">Salir</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;