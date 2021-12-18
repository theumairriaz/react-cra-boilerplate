import React from 'react';
import PropTypes from 'prop-types';

function Private({ element }) {
  return (
    <>
      {/* Header will come here!! */}
      <div>{element}</div>
    </>
  );
}

Private.propTypes = {
  element: PropTypes.element.isRequired
};

export default Private;
