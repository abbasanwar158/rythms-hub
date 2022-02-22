import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  let navigate = useNavigate();

  return (
   <div>
     <header className="header_section d-flex">
        <span className="logoText cursor-pointer" onClick={()=>{navigate('/')}} >Rythms Hub</span>
        <div className="container">
            <nav className="navbar navbar-expand-lg custom_nav-container">
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className=""> </span>
              </button>
              <div className="collapse navbar-collapse mt-3" id="navbarSupportedContent">
                  <ul className="navbar-nav d-flex">
                    <li className="nav-item active">
                        <a className="nav-link cursor-pointer" onClick={()=>{navigate('/')}} >Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link cursor-pointer"  onClick={()=>{navigate('/products')}} >Products</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="contact.html">Contact</a>
                    </li>
                    <form className="form-inline">
                        <button className="btn  my-2 my-sm-0 nav_search-btn" type="submit">
                        <i className="fa fa-search" aria-hidden="true"></i>
                        </button>
                    </form>
                  </ul>
              </div>
            </nav>
        </div>
        <nav className="navbar navbar-expand-lg custom_nav-container">
          <ul className="navbar-nav">
            <li className="nav-item">
                <a className="nav-link cursor-pointer" onClick={()=>{navigate('/login')}} >Login</a>
            </li>
          </ul>
        </nav>
      </header>
   </div>
  )
}
