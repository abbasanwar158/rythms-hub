import React, { useState, useContext, useEffect } from "react";
import TextField from '@material-ui/core/TextField';

export default function Login() {
  return (
    <div className="loginContainer" id="test">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6 text-center mb-5">
            <h2 className="heading-section">Login123</h2>
          </div>
        </div>
        <div className="row justify-content-center">
        <div className="col-md-6 col-lg-4">
        <div className="login-wrap p-0">
        <div className="form-group mt-2">
          <TextField
            id="login_outlined-basic-email"
            label="Email"
            type="text"
            fullWidth
          />
        </div>
        <div className="form-group mt-4 mb-4">
        <TextField
            id="login_outlined-basic-email"
            label="Password"
            type="password"
            fullWidth
          />
        <span toggle="#password-field" className="fa fa-fw fa-eye field-icon toggle-password"></span>
        </div>
        <div className="form-group">
          <button type="submit" className="form-control btn btn-primary submit px-3">Sign In</button>
        </div>
        <div>
          <span>Forget Password?</span>
        </div>
        </div>
        </div>
        </div>
        </div>
    </div>
  )
}
