import React from 'react';

const AddedFeature = props => {
  const { feature, handleDelete } = props;
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button onClick={handleDelete}className="button">X</button>
      {feature.name}
    </li>
  );
};

export default AddedFeature;
