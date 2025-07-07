import React from "react";
import "./NavBarStyles.css";
import { Link } from "react-router";

const NavBar = () => {
  return (
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/CampusSearch">Login</Link></li>
        <li><Link to="/students">Sign Up</Link></li>
      </ul>
    </div>
   
  );
};

export default NavBar;
