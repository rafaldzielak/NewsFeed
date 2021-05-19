import React from "react";
import { Link } from "react-router-dom";
import logo from "../img/megaphone.svg";
import CategoriesDropdown from "./CategoriesDropdown";
import "./navbar.scss";
import SearchComponent from "./SearchComponent";
import { categories } from "../mocks/categories";

const Navbar: React.FC = () => {
  return (
    <nav id='navbar'>
      <div className='container'>
        <Link style={{ display: "flex" }} to='/'>
          <img className='logo' src={logo} alt='logo' />
          <h1>MegaPhone</h1>
        </Link>
        <SearchComponent />
        <CategoriesDropdown categories={categories} />
      </div>
    </nav>
  );
};

export default Navbar;
