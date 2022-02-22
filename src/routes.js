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
import Products from './components/Products';
import SubProducts from './components/SubProducts';
import Dashboard from '@material-ui/icons';


function RoutesHandle() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
        </Routes>
        <Routes>
          <Route path="/signup" element={<Signup/>} />
        </Routes>
        <Routes>
          <Route path="/" element={<Dashboard/>} />
        </Routes>
        <Routes>
          <Route path="/products" element={<Products/>} />
        </Routes>
        <Routes>
          <Route path="/sub_products" element={<SubProducts/>} />
        </Routes>
      </BrowserRouter>
  );
}

export default RoutesHandle;

