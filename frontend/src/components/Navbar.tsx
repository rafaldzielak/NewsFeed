import React from "react";
import { Link } from "react-router-dom";
import logo from "../img/megaphone.svg";
import "./navbar.scss";

const Navbar: React.FC = () => {
  return (
    <nav id='navbar'>
      <div className='container'>
        <img className='logo' src={logo} alt='logo' />
        <Link to='/'>
          <h1>MegaPhone</h1>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
