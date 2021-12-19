import React from 'react';
import PropTypes from 'prop-types';
import { setUser } from 'helpers/user';

export const Index = (props) => {
  return (
    <div>
      <button
        onClick={() => {
          setUser({ email: 'test@test.com', password: 'test' });
        }}
      >
        Sign In
      </button>
    </div>
  );
};

Index.propTypes = {
  props: PropTypes.object
};

export default Index;
