import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from '../../components/Navbar';

export default function Dashboard() {

   let navigate = useNavigate();

  return (
    <div>
         <Navbar />
        <div className="hero_area">
         <section className="slider_section ">
            <div className="slider_bg_box">
               <img src="https://images.unsplash.com/photo-1421217336522-861978fdf33a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGd1aXRhcnxlbnwwfHwwfHw%3D&w=1000&q=80" alt="" />
            </div>
            <div id="customCarousel1" className="carousel slide" data-ride="carousel">
               <div className="carousel-inner">
                  <div className="carousel-item active">
                     <div className="container ">
                        <div className="row">
                           <div className="col-md-7 col-lg-8 ">
                              <div className="detail-box">
                                 <h1>
                                    <p className="spantext">
                                    Rythms Hub
                                    </p>
                                    Online Services
                                 </h1>
                                 <p className="text-white">
                                    We allow people to buy musical instrument, services, and digital products over the internet rather than at a brick-and-mortar location.
                                 </p>
                                 <div className="btn-box">
                                    <a className="btn1 cursor-pointer" onClick={()=>{navigate('/products')}}>
                                    Shop Now
                                    </a>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </div>
      <section className="why_section layout_padding">
         <div className="container">
            <div className="heading_container heading_center">
               <h2>
                  Why Shop With Us
               </h2>
            </div>
            <div className="row">
               <div className="col-md-4">
                  <div className="box ">
                     <div className="img-box">
                     </div>
                     <div className="detail-box">
                        <h5>
                           Fast Delivery
                        </h5>
                        <p>
                           Musical instruments same Day Delivery offers quick (instant) in Lahore.
                        </p>
                     </div>
                  </div>
               </div>
               <div className="col-md-4">
                  <div className="box ">
                     <div className="img-box">
                     </div>
                     <div className="detail-box">
                        <h5>
                           Free Shiping
                        </h5>
                        <p>
                           Free shipping is an important factor for consumer online shopping.
                        </p>
                     </div>
                  </div>
               </div>
               <div className="col-md-4">
                  <div className="box ">
                     <div className="img-box">
                     </div>
                     <div className="detail-box">
                        <h5>
                           Best Quality
                        </h5>
                        <p>
                           We provide best quality of musical instruments.
                        </p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>

      <section className="product_section layout_padding">
         <div className="container">
            <div className="heading_container heading_center">
               <h2>
                  Our <span>products</span>
               </h2>
            </div>
            <div className="row">
               <div className="col-sm-6 col-md-4 col-lg-4">
                  <div className="box">
                     <div className="option_container">
                        <div className="options">
                           <a href="" className="option1">
                           View More
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
                           View More
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
                           View More
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
               <div className="btn-box">
                  <a className="cursor-pointer" onClick={() => {navigate("/products")}}>
                  View All products

                  </a>
               </div>
            </div>
         </div>
      </section>
      <footer>
         <div className="container">
            <div className="row">
               <div className="col-md-7">
                   <div className="full">
                      <div className="logo_footer">
                        <a href="#"><img width="210" src="images/logo.png" alt="#" /></a>
                      </div>
                      <div className="information_f">
                        <p><strong>ADDRESS:</strong> 256-F1 Wapda town, Lahore </p>
                        <p><strong>TELEPHONE:</strong> 03034015601 </p>
                        <p><strong>EMAIL:</strong> rythmshub@gmail.com</p>
                      </div>
                   </div>
               </div>
               <div className="col-md-5">
                  <div className="row">
                  <div className="col-md-7">
                     <div className="row">
                        <div className="col-md-6">
                     <div className="widget_menu">
                        <h3>Menu</h3>
                        <ul>
                           <li><a href="#">Home</a></li>
                           <li><a href="#">Products</a></li>
                           <li><a href="#">Contact</a></li>
                           <li><a href="#">Login</a></li>
                        </ul>
                     </div>
                  </div>
                     </div>
                  </div>
                  </div>
               </div>
            </div>
         </div>
      </footer>
      <div className="cpy_">
         <p className="mx-auto">© 2021 All Rights Reserved By <a>Rythms Hub </a> Created By <a>Abbas and Wajeeha.</a>
         </p>
      </div>
    </div>
  )
}
