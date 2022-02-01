import React, { useState, useContext, useEffect } from "react";
import TextField from '@material-ui/core/TextField';
import { makeStyles } from "@material-ui/core/styles";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiFilledInput-root": {
      background: "rgb(232, 241, 250)"
    }
  }
}));

export default function Signup() {
  let navigate = useNavigate();
  const classes = useStyles();

  return (
    <div className="loginContainer" id="test">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-5 col-lg-5 login-form-container">
            <div className="row justify-content-center">
              <div className="col-md-6 text-center mb-5">
                <h2 className="heading-section text-white">Login</h2>
              </div>
            </div>
            <div className="login-wrap p-0">
              <div className="form-group mt-2">
                <div className="mt-2">
                  <TextField
                    id="login_outlined-basic-email"
                    label="Email"
                    type="text"
                    variant="filled"
                    className={classes.root}
                    fullWidth
                  />
                </div>
                <div className="mt-2">
                  <TextField
                    id="login_outlined-basic-email"
                    label="Password"
                    type="password"
                    variant="filled"
                    className={classes.root}
                    fullWidth
                  />
                </div>
              </div>
              <div className="form-group mt-2 mb-4">
                <span toggle="#password-field" className="fa fa-fw fa-eye field-icon toggle-password"></span>
                </div>
                <div className="form-group">
                  <button type="submit" className="form-control btn btn-warning submit px-3">Login</button>
                </div>
                <div className="mt-3 mb-3">
                  <p className="text-white cursor-pointer">Forgot Password?</p>
                </div>
                <div className="d-flex mb-4">
                  <a className="mx-auto text-white cursor-pointer" onClick={ () => {navigate('/signup')}}>Sign Up</a>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}
