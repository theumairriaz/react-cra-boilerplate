import React from 'react';
import PropTypes from 'prop-types';
import { removeUser } from 'helpers/user';

export const Home = (props) => {
  return (
    <div>
      <button onClick={() => removeUser()}>Logout</button>
    </div>
  );
};

Home.propTypes = {
  props: PropTypes.object
};

export default Home;
