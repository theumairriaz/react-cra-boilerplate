import React from 'react';
import Home from 'components/Home';
import Private from 'layouts/Private';

const routes = [{ path: '/home', element: <Private element={<Home />} /> }];

export default routes;
