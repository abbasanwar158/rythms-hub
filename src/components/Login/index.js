import React, { useState, useContext, useEffect } from "react";
import TextField from '@material-ui/core/TextField';
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiFilledInput-root": {
      background: "rgb(232, 241, 250)"
    }
  }
}));

export default function Login() {
  const classes = useStyles();
  return (
    <div className="loginContainer" id="test">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6 text-center mb-5">
            <h2 className="heading-section text-white">Login</h2>
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
            variant="filled"
            className={classes.root}
            fullWidth
          />
        </div>
        <div className="form-group mt-4 mb-4">
        <TextField
            id="login_outlined-basic-email"
            label="Password"
            type="password"
            variant="filled"
            className={classes.root}
            fullWidth
          />
        <span toggle="#password-field" className="fa fa-fw fa-eye field-icon toggle-password"></span>
        </div>
        <div className="form-group">
          <button type="submit" className="form-control btn btn-primary submit px-3">Sign In</button>
        </div>
        <div className="mt-3">
          <a className="text-white cursor-pointer">Forget Password?</a>
          <div className="d-flex">
            <a className="text-white mt-1 cursor-pointer mx-auto">Sign Up</a>
          </div>
        </div>
        </div>
        </div>
        </div>
        </div>
    </div>
  )
}
