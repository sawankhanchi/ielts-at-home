import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <NavLink className="navbar-brand" to="/">IAH</NavLink>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
          
          <li className="nav-item active">
          <NavLink activeClassName="menu_active" exact className="nav-link" to="/">Home <span className="sr-only"></span></NavLink>
          </li>

          <li className="nav-item">
          <NavLink activeClassName="menu_active" className="nav-link" to="/discover">Speaking</NavLink>
          </li>
          
          <li className="nav-item">
          <NavLink activeClassName="menu_active" className="nav-link" to="/message">Listening</NavLink>
          </li>

          <li className="nav-item">
          <NavLink activeClassName="menu_active" className="nav-link" to="/setting">Reading</NavLink>
          </li>

          <li className="nav-item">
          <NavLink activeClassName="menu_active" className="nav-link" to="/setting">Writing</NavLink>
          </li>

          </ul>
         </div>
         </nav>
        </>
    );
};

export default Navbar;