import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import {NavLink} from "react-router-dom";
const Navbar=()=>
{
    return(
       <>
         <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="#">CaarWaale</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav m-auto">
      <li className="nav-item active">
        <NavLink className="nav-link" to="/home" style={{padding:'35px'}}>Home <span className="sr-only"></span></NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/login" style={{padding:'35px'}}>Login</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/signup" style={{padding:'35px'}}>SignUp</NavLink>
       
      </li>
     
    </ul>
    
  </div>
</nav>
       </>
    )
}

export default Navbar;
