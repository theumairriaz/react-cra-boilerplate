import React from 'react';
import PropTypes from 'prop-types';

function Public({ element }) {
  return (
    <>
      <div>{element}</div>
    </>
  );
}

Public.propTypes = {
  element: PropTypes.element.isRequired
};

export default Public;
