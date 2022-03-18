import React from "react";

const SideBar = () => {
  return (
    <nav className="col-md-2 d-none d-md-block bg-secondary sidebar flex-column">
      <div className="sidebar-sticky">
        <button className="btn btn-sticky btn-light m-5 rounded">
          Random Color
        </button>
        <nav>
          <ul className="nav flex-column">
            <li className="nav-item p-2 ">
              <button className="btn text-left">Red</button>
            </li>
            <li className="nav-item p-2 ">
              <button className="btn align-center">Pink</button>
            </li>
            <li className="nav-item p-2">
              <button className="btn align-center">Yellow</button>
            </li>
            <li className="nav-item p-2 ">
              <button className="btn align-center">Green</button>
            </li>
            <li className="nav-item p-2 ">
              <button className="btn align-center">Blue</button>
            </li>
            <li className="nav-item p-2">
              <button className="btn ">Purple</button>
            </li>
            <li className="nav-item p-2">
              <button className="btn align-center">Brown</button>
            </li>
            <li className="nav-item p-2">
              <button className="btn align-center">Gray</button>
            </li>
          </ul>
        </nav>
      </div>
    </nav>
  );
};

export default SideBar;
