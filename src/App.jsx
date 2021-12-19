import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import publicRoutes from 'routes/public';
import privateRoutes from 'routes/private';
import { getUser } from 'helpers/user';

import './App.css';

const isAuthenticated = !!getUser();

function App() {
  return (
    <Routes>
      {!isAuthenticated &&
        publicRoutes.map((r) => <Route key={r.path} path={r.path} element={r.element} />)}
      {isAuthenticated &&
        privateRoutes.map((r) => <Route key={r.path} path={r.path} element={r.element} />)}
      <Route
        path="*"
        element={<Navigate to={isAuthenticated ? privateRoutes[0].path : publicRoutes[0].path} />}
      />
    </Routes>
  );
}

export default App;
