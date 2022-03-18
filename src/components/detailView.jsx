import React, { Component } from "react";
import DetailColorView from "./detailColorView";
import SideBar from "./sideBar";

class DetailView extends Component {
  render() {
    return (
      <div className="row">
        <SideBar />
        <div className="col">
          <DetailColorView />
        </div>
      </div>
    );
  }
}

export default DetailView;
