import React from "react";
import "./NavBarStyles.css";
import { Link } from "react-router";

const authenticatedNavBar = () => {
  return (
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/">Logout</Link></li>
      </ul>
    </div>
   
  );
};

export default NavBar;