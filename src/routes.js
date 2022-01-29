import {
  Route,
  Redirect,
  BrowserRouter,
  Routes,
  Switch
} from 'react-router-dom';
import Login from './components/Login';
import React from 'react';


function RoutesHandle() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
  );
}

export default RoutesHandle;

