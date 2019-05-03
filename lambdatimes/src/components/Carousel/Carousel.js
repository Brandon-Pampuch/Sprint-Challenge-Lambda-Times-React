import React, { Component } from "react";
import { carouselData } from "../../data";
// Complete this Carousel
export default class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }
  componentDidMount() {
    this.setState({ data: carouselData });
  }
  leftClick = () => {};

  rightClick = () => {};

  selectedImage = (arrayLocation) => {
    return (
      <img src={this.state.data[0]} alt="dogos" style={{ display: "block" }} />
    );
  };

  render() {
    return (
      <div className="carousel">
        <div className="left-button" onClick={this.leftClick}>
          {"<"}
        </div>
        <img src={this.state.data[0]}></img>
        <div className="right-button" onClick={this.rightClick}>
          {">"}
        </div>
      </div>
    );
  }
}
