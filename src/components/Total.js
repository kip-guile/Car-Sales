import React from 'react';
import { connect } from "react-redux";

const Total = props => {
  return (
    <div className="content">
      <h4>Total Amount: ${props.price + props.additionalPrice}</h4>
    </div>
  );
};

export default connect(
  state => ({
    price: state.car.price,
    additionalPrice: state.additionalPrice
  })
)(Total);
