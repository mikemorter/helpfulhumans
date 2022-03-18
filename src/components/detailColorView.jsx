import React, { Component } from "react";

class DetailColorView extends Component {
  render() {
    const styles = {
      width: 1000,
      borderRadius: 10,
    };

    const swatch = `#000`;

    const colorSwatch = {
      backgroundColor: swatch,
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
      height: 500,
    };
    return (
      <div className="container-fluid card">
        <div className="card mt-2" style={styles}>
          <div className="card-img-top" style={colorSwatch} />
          <div className="card-body">
            <p className="card-text">{swatch}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default DetailColorView;
