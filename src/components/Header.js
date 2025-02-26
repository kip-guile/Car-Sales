import React from 'react';
import {connect} from 'react-redux';

const Header = props => {
  const {car} = props;
  return (
    <>
      <figure className="image is-128x128">
        <img src={car.image} alt={car.name} />
      </figure>
      <h2>{car.name}</h2>
      <p>Amount: ${car.price}</p>
    </>
  );
};

export default connect(
  state => ({car: state.car}),
)(Header);
