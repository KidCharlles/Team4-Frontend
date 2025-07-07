import React from "react";
import "./NavBarStyles.css";
import { Link } from "react-router";

const NavBar = () => {
  return (
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/signup">Sign Up</Link></li>
        <li><Link to="/logout">Logout</Link></li>
      </ul>
    </div>
   
  );
};

export default NavBar;