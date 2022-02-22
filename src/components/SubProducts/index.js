import React, { useState, useContext, useEffect } from "react";
import TextField from '@material-ui/core/TextField';
import { useNavigate } from "react-router-dom";
import Navbar from '../../components/Navbar';


export default function SubProducts() {
  let navigate = useNavigate();

  return (
    <div>
        <Navbar />
        <div className="productsContainer">
          <section className="product_section layout_padding">
          <div className="container">
              <div className="heading_container heading_center">
                <h2>
                    All <span>products</span>
                </h2>
              </div>
              <div className="row">
                <div className="col-sm-6 col-md-4 col-lg-4">
                    <div className="box">
                      <div className="option_container">
                          <div className="options">
                            <a href="" className="option1">
                            Sub Products
                            </a>
                          </div>
                      </div>
                      <div className="img-box">
                          <img src="https://www.transparentpng.com/thumb/acoustic-guitar/Zzmgis-ibanez-acoustic-guitar-transparent-background.png" alt="" />
                      </div>
                      <div className="detail-box">
                          <h5 className="text-center">
                            Guitars
                          </h5>
                      </div>
                    </div>
                </div>
                <div className="col-sm-6 col-md-4 col-lg-4">
                    <div className="box">
                      <div className="option_container">
                          <div className="options">
                            <a href="" className="option1">
                            Sub Products
                            </a>
                          </div>
                      </div>
                      <div className="img-box">
                          <img src="https://freepngimg.com/thumb/piano/20610-8-piano-with-transparent-background.png" alt="" />
                      </div>
                      <div className="detail-box">
                          <h5>
                            Pianos
                          </h5>
                      </div>
                    </div>
                </div>
                <div className="col-sm-6 col-md-4 col-lg-4">
                    <div className="box">
                      <div className="option_container">
                          <div className="options">
                            <a href="" className="option1">
                            Sub Products
                            </a>
                          </div>
                      </div>
                      <div className="img-box">
                          <img src="https://www.pngall.com/wp-content/uploads/2016/06/Violin-Free-Download-PNG.png" alt="" />
                      </div>
                      <div className="detail-box">
                          <h5>
                            Violins
                          </h5>
                      </div>
                    </div>
                </div>
                <div className="col-sm-6 col-md-4 col-lg-4">
                    <div className="box">
                      <div className="option_container">
                          <div className="options">
                            <a href="" className="option1">
                            Sub Products
                            </a>
                          </div>
                      </div>
                      <div className="img-box">
                          <img src="https://www.kindpng.com/picc/m/21-210375_drums-kit-png-free-drum-set-png-transparent.png" alt="" />
                      </div>
                      <div className="detail-box">
                          <h5>
                            Drum Kit
                          </h5>
                      </div>
                    </div>
                </div>
                <div className="col-sm-6 col-md-4 col-lg-4">
                    <div className="box">
                      <div className="option_container">
                          <div className="options">
                            <a href="" className="option1">
                            Sub Products
                            </a>
                          </div>
                      </div>
                      <div className="img-box">
                          <img src="https://www.pngall.com/wp-content/uploads/4/Wooden-Bongo-Drum-PNG-Download-Image.png" alt="" />
                      </div>
                      <div className="detail-box">
                          <h5>
                            Bongo Drum
                          </h5>
                      </div>
                    </div>
                </div>
                <div className="col-sm-6 col-md-4 col-lg-4">
                    <div className="box">
                      <div className="option_container">
                          <div className="options">
                            <a href="" className="option1">
                            Sub Products
                            </a>
                          </div>
                      </div>
                      <div className="img-box">
                          <img src="https://www.pngitem.com/pimgs/m/200-2008129_accord%E2%80%A6transparent-images-accordion-png-png-download.png" alt="" />
                      </div>
                      <div className="detail-box">
                          <h5>
                            Accordion
                          </h5>
                      </div>
                    </div>
                </div>
              </div>
          </div>
        </section>
        </div>
    </div>
  )
}
