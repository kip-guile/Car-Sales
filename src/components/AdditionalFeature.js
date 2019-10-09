import React from 'react';
import {connect} from 'react-redux';
import {addFeature} from '../state/actionCreators'

export const AdditionalFeature = props => {
  const { feature, addFeature, addedFeatures } = props;

  const buyItem = item => {
    // dipsatch an action here to add an item
    const idArray = addedFeatures.map(item => item.id);
    if (idArray.includes(feature.id)) return;
    addFeature(feature);
  };

  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button onClick={buyItem} className="button">Add</button>
      {feature.name} (+{feature.price})
    </li>
  );
};

export default connect(
  state => ({addedFeatures: state.car.features}),
  dispatch => ({addFeature: item => dispatch(addFeature(item))})
)(AdditionalFeature);
