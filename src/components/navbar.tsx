import React from 'react'
import { NavLink } from "react-router-dom";
import Logo from "../Assets/logo/bimaLogo.svg";

export default function navbar() {
  return (
    
    <>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-3">
  <div className="container-fluid">
    <img src={Logo} alt="Company logo" className='ms-5' />
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
       
      </ul>
      <div className="d-flex me-5">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                  to="/About"
                >
                  Home
                </NavLink>
              </li>
        <li className="nav-item">
        <NavLink
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                  to="/About"
                >
                 Insurance Products
                </NavLink>
        </li>
        <li className="nav-item">
        <NavLink
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                  to="/About"
                >
                  Renew Policy
                </NavLink>
        </li>

        <li className="nav-item">
        <NavLink
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                  to="/About"
                >
                 Claims
                </NavLink>
        </li>

        <li className="nav-item">
        <NavLink
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                  to="/About"
                >
                 Support
                </NavLink>
        </li>

        <li className="nav-item">
         <button className='btn btn-primary'>Login</button>
        </li>
      </ul>
      </div>
    </div>
  </div>
</nav>
    </>
  )
}
