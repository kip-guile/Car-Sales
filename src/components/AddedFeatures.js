import React from 'react';
import {connect} from 'react-redux'

import AddedFeature from './AddedFeature';
import {deleteFeature} from '../state/actionCreators';

export const AddedFeatures = props => {
  const {carFeatures} = props;

  const removeFeature = item => {
    // dispatch an action here to remove an item
    deleteFeature(item);
  };

  return (
    <div className="content">
      <h6>Added features:</h6>
      {carFeatures.length ? (
        <ol type="1">
          {carFeatures.map(item => (
            <AddedFeature key={item.id} feature={item} handleDelete={removeFeature(item)}/>
          ))}
        </ol>
      ) : (
        <p>You can purchase items from the store.</p>
      )}
    </div>
  );
};

export default connect(
  state => ({carFeatures: state.car.features}),
  dispatch => ({deleteFeature: (id, price) => dispatch(deleteFeature(id, price))})
)(AddedFeatures);
