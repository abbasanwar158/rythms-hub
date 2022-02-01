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

  let navigate = useNavigate ();
  const classes = useStyles();

  return (
    <div className="signupContainer" id="test">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-5 col-lg-5 signup-form-container">
            <div className="row justify-content-center">
              <div className="col-md-6 text-center mb-5">
                <h2 className="heading-section text-white">Signup</h2>
              </div>
            </div>
            <div className="login-wrap p-0">
              <div className="form-group mt-2">
                <div className="row">
                  <div className="col-6"> 
                    <TextField
                      id="login_outlined-basic-email"
                      label="First Name"
                      type="text"
                      variant="filled"
                      className={classes.root}
                      fullWidth
                    />
                  </div>
                  <div className="col-6"> 
                    <TextField
                      id="login_outlined-basic-email"
                      label="Last Name"
                      type="text"
                      variant="filled"
                      className={classes.root}
                      fullWidth
                    />
                  </div>
                </div>
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
              </div>
              <div className="form-group mt-2 mb-4">
                <div className="row">
                  <div className="col-6"> 
                    <TextField
                      id="login_outlined-basic-email"
                      label="Password"
                      type="password"
                      variant="filled"
                      className={classes.root}
                      fullWidth
                    />
                  </div>
                  <div className="col-6"> 
                    <TextField
                      id="login_outlined-basic-email"
                      label="Confirm Password"
                      type="password"
                      variant="filled"
                      className={classes.root}
                      fullWidth
                    />
                  </div>
                </div>
                <span toggle="#password-field" className="fa fa-fw fa-eye field-icon toggle-password"></span>
                </div>
                <div className="form-group">
                  <button type="submit" className="form-control btn btn-primary submit px-3">Sign up</button>
                </div>
                <div className="mt-3 mb-4">
                  <a className="text-white cursor-pointer" onClick={() => {navigate('/login')}}>Already have an account?</a>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}
