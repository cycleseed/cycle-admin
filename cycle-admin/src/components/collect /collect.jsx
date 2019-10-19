import React, { Component } from "react";
import BasicCard from "./cardCollect";
import QuantityInput from "./quantitySelector";
import PointsContainer from "./pointsToAssign";

class CollectStep extends Component {
  state = {
    age  : "",
    points : 0
  }

  render(){

    return (
      <div>
        <BasicCard/>
        <QuantityInput age = {this.state}/>
        <PointsContainer/>
      </div>
    )
  }
}


export default CollectStep;