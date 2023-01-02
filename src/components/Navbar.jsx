import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="navbar">
      <ul>
        <li>
          <NavLink to="/">About-me</NavLink>
        </li>
        <li>
          <NavLink to="/skills">My Skills</NavLink>
        </li>
        <li>
          <NavLink to="/portfolio">Portfolio</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
    </div>
  );
};
export default Navbar;
