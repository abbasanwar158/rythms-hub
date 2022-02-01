import {
  Route,
  Redirect,
  BrowserRouter,
  Routes,
  Switch
} from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import React from 'react';


function RoutesHandle() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
        </Routes>
        <Routes>
          <Route path="/signup" element={<Signup/>} />
        </Routes>
      </BrowserRouter>
  );
}

export default RoutesHandle;

