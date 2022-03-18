import React from "react";
import "../design/sideBar.css";

function SideBarTest(props) {
  return (
    <div className="container">
      <ul className="sidebar">
        <li>
          <button className="btn btn-light">Random Color</button>
        </li>
        <li>
          <span>
            <i className="fa fa-home"></i>
          </span>
          <span>Home</span>
        </li>
        <li>
          <span>
            <i className="fa fa-dashboard"></i>
          </span>
          <span>Dashboard</span>
        </li>
        <li>
          <span>
            <i className="fa fa-users"></i>
          </span>
          <span>Users</span>
        </li>
        <li>
          <span>
            <i className="fa fa-shopping-cart"></i>
          </span>
          <span>Products</span>
        </li>
        <li>
          <span>
            <i className="fa fa-bookmark"></i>
          </span>
          <span>Bookmarks</span>
        </li>
        <li>
          <span>
            <i className="fa fa-gear"></i>
          </span>
          <span>Settings</span>
        </li>
      </ul>

      <div className="content"></div>
    </div>
  );
}

export default SideBarTest;
