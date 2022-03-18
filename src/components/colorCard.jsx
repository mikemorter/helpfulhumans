import React, { Component } from "react";

class ColorCard extends Component {
  render() {
    const styles = {
      width: 175,
      borderRadius: 10,
    };

    const swatch = `${this.props.color}`;

    const colorSwatch = {
      backgroundColor: swatch,
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
      height: 150,
    };
    return (
      <div className="container-fluid">
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

export default ColorCard;
