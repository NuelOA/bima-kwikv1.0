import React from 'react'
import { Link, NavLink } from "react-router-dom";
import Logo from "../assets/logo/bimaLogo.svg";


export default function navbar() {
  return (
    
    <>
   <nav className="navbar navbar-expand-sm navbar-light bg-transparent py-3">
          <Link className="navbar-brand ms-5" to="#">
            <img src={Logo} alt="BigCo Inc. logo" />{" "}
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end nav-wrapper"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-5">
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                  to={"product-step1"}
                >
                  Insurance Products
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                  to="contact"
                >
                  Renew Policy
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                  to="promotion"
                >
                Claims
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                  to="promotion"
                >
                Support
                </NavLink>
              </li>


              <li className="nav-item">
                <a
                  className="btn btn-primary border--sharp "
                  href="login"
                >   
                 Login
                  </a>
              
              </li>
            </ul>
        </div>
      </nav>
    </>
  )
}
