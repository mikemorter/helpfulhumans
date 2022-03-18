import React from "react";
import logo from "../logo-symbol.svg";

const NavBar = () => {
  return (
    <nav className="navbar navbar-light bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand m-2" href="#">
          <img src={logo} alt="Logo" />
        </a>
        <form className="d-flex">
          <input
            className="form-control me-4"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
        </form>
      </div>
    </nav>
  );
};

export default NavBar;
