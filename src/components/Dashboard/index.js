import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";


export default function Dashboard() {

  return (
    <div>
        <div className="hero_area">
         <header className="header_section d-flex">
            <span className="logoText">Rythms Hub</span>
            <div className="container">
               <nav className="navbar navbar-expand-lg custom_nav-container">
                  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className=""> </span>
                  </button>
                  <div className="collapse navbar-collapse mt-3" id="navbarSupportedContent">
                     <ul className="navbar-nav d-flex">
                        <li className="nav-item active">
                           <a className="nav-link" href="index.html">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                           <a className="nav-link" href="product.html">Products</a>
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
                    <a className="nav-link" href="index.html">Login</a>
                </li>
              </ul>
            </nav>
         </header>

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
                                 <p>
                                    
                                 </p>
                                 <div className="btn-box">
                                    <a href="" className="btn1">
                                    Shop Now
                                    </a>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="carousel-item ">
                     <div className="container ">
                        <div className="row">
                           <div className="col-md-7 col-lg-6 ">
                              <div className="detail-box">
                                 <h1>
                                    <span>
                                    Sale 20% Off
                                    </span>
                                    On Everything
                                 </h1>
                                 <p>
                                    Explicabo esse amet tempora quibusdam laudantium, laborum eaque magnam fugiat hic? Esse dicta aliquid error repudiandae earum suscipit fugiat molestias, veniam, vel architecto veritatis delectus repellat modi impedit sequi.
                                 </p>
                                 <div className="btn-box">
                                    <a href="" className="btn1">
                                    Shop Now
                                    </a>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="carousel-item">
                     <div className="container ">
                        <div className="row">
                           <div className="col-md-7 col-lg-6 ">
                              <div className="detail-box">
                                 <h1>
                                    <span>
                                    Sale 20% Off
                                    </span>
                                    On Everything
                                 </h1>
                                 <p>
                                    Explicabo esse amet tempora quibusdam laudantium, laborum eaque magnam fugiat hic? Esse dicta aliquid error repudiandae earum suscipit fugiat molestias, veniam, vel architecto veritatis delectus repellat modi impedit sequi.
                                 </p>
                                 <div className="btn-box">
                                    <a href="" className="btn1">
                                    Shop Now
                                    </a>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="container">
                  <ol className="carousel-indicators">
                     <li data-target="#customCarousel1" data-slide-to="0" className="active"></li>
                     <li data-target="#customCarousel1" data-slide-to="1"></li>
                     <li data-target="#customCarousel1" data-slide-to="2"></li>
                  </ol>
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
                           variations of passages of Lorem Ipsum available
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
                           variations of passages of Lorem Ipsum available
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
                           variations of passages of Lorem Ipsum available
                        </p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>

      <section className="arrival_section">
         <div className="container">
            <div className="box">
               <div className="arrival_bg_box">
                  {/* <img src="images/arrival-bg.png" alt=""> */}
               </div>
               <div className="row">
                  <div className="col-md-6 ml-auto">
                     <div className="heading_container remove_line_bt">
                        <h2>
                           #NewArrivals
                        </h2>
                     </div>
                     <p>
                        Vitae fugiat laboriosam officia perferendis provident aliquid voluptatibus dolorem, fugit ullam sit earum id eaque nisi hic? Tenetur commodi, nisi rem vel, ea eaque ab ipsa, autem similique ex unde!
                     </p>
                     <a href="">
                     Shop Now
                     </a>
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
                           Men's Shirt
                           </a>
                           <a href="" className="option2">
                           Buy Now
                           </a>
                        </div>
                     </div>
                     <div className="img-box">
                        {/* <img src="images/p1.png" alt=""> */}
                     </div>
                     <div className="detail-box">
                        <h5>
                           Men's Shirt
                        </h5>
                        <h6>
                           $75
                        </h6>
                     </div>
                  </div>
               </div>
               <div className="col-sm-6 col-md-4 col-lg-4">
                  <div className="box">
                     <div className="option_container">
                        <div className="options">
                           <a href="" className="option1">
                           Add To Cart
                           </a>
                           <a href="" className="option2">
                           Buy Now
                           </a>
                        </div>
                     </div>
                     <div className="img-box">
                        {/* <img src="images/p2.png" alt=""> */}
                     </div>
                     <div className="detail-box">
                        <h5>
                           Men's Shirt
                        </h5>
                        <h6>
                           $80
                        </h6>
                     </div>
                  </div>
               </div>
               <div className="col-sm-6 col-md-4 col-lg-4">
                  <div className="box">
                     <div className="option_container">
                        <div className="options">
                           <a href="" className="option1">
                           Add To Cart
                           </a>
                           <a href="" className="option2">
                           Buy Now
                           </a>
                        </div>
                     </div>
                     <div className="img-box">
                        {/* <img src="images/p3.png" alt=""> */}
                     </div>
                     <div className="detail-box">
                        <h5>
                           Women's Dress
                        </h5>
                        <h6>
                           $68
                        </h6>
                     </div>
                  </div>
               </div>
               <div className="col-sm-6 col-md-4 col-lg-4">
                  <div className="box">
                     <div className="option_container">
                        <div className="options">
                           <a href="" className="option1">
                           Add To Cart
                           </a>
                           <a href="" className="option2">
                           Buy Now
                           </a>
                        </div>
                     </div>
                     <div className="img-box">
                        {/* <img src="images/p4.png" alt=""> */}
                     </div>
                     <div className="detail-box">
                        <h5>
                           Women's Dress
                        </h5>
                        <h6>
                           $70
                        </h6>
                     </div>
                  </div>
               </div>
               <div className="col-sm-6 col-md-4 col-lg-4">
                  <div className="box">
                     <div className="option_container">
                        <div className="options">
                           <a href="" className="option1">
                           Add To Cart
                           </a>
                           <a href="" className="option2">
                           Buy Now
                           </a>
                        </div>
                     </div>
                     <div className="img-box">
                        {/* <img src="images/p5.png" alt=""> */}
                     </div>
                     <div className="detail-box">
                        <h5>
                           Women's Dress
                        </h5>
                        <h6>
                           $75
                        </h6>
                     </div>
                  </div>
               </div>
               <div className="col-sm-6 col-md-4 col-lg-4">
                  <div className="box">
                     <div className="option_container">
                        <div className="options">
                           <a href="" className="option1">
                           Add To Cart
                           </a>
                           <a href="" className="option2">
                           Buy Now
                           </a>
                        </div>
                     </div>
                     <div className="img-box">
                        {/* <img src="images/p6.png" alt=""> */}
                     </div>
                     <div className="detail-box">
                        <h5>
                           Women's Dress
                        </h5>
                        <h6>
                           $58
                        </h6>
                     </div>
                  </div>
               </div>
               <div className="col-sm-6 col-md-4 col-lg-4">
                  <div className="box">
                     <div className="option_container">
                        <div className="options">
                           <a href="" className="option1">
                           Add To Cart
                           </a>
                           <a href="" className="option2">
                           Buy Now
                           </a>
                        </div>
                     </div>
                     <div className="img-box">
                        {/* <img src="images/p7.png" alt=""> */}
                     </div>
                     <div className="detail-box">
                        <h5>
                           Women's Dress
                        </h5>
                        <h6>
                           $80
                        </h6>
                     </div>
                  </div>
               </div>
               <div className="col-sm-6 col-md-4 col-lg-4">
                  <div className="box">
                     <div className="option_container">
                        <div className="options">
                           <a href="" className="option1">
                           Add To Cart
                           </a>
                           <a href="" className="option2">
                           Buy Now
                           </a>
                        </div>
                     </div>
                     <div className="img-box">
                        {/* <img src="images/p8.png" alt=""> */}
                     </div>
                     <div className="detail-box">
                        <h5>
                           Men's Shirt
                        </h5>
                        <h6>
                           $65
                        </h6>
                     </div>
                  </div>
               </div>
               <div className="col-sm-6 col-md-4 col-lg-4">
                  <div className="box">
                     <div className="option_container">
                        <div className="options">
                           <a href="" className="option1">
                           Add To Cart
                           </a>
                           <a href="" className="option2">
                           Buy Now
                           </a>
                        </div>
                     </div>
                     <div className="img-box">
                        {/* <img src="images/p9.png" alt=""> */}
                     </div>
                     <div className="detail-box">
                        <h5>
                           Men's Shirt
                        </h5>
                        <h6>
                           $65
                        </h6>
                     </div>
                  </div>
               </div>
               <div className="col-sm-6 col-md-4 col-lg-4">
                  <div className="box">
                     <div className="option_container">
                        <div className="options">
                           <a href="" className="option1">
                           Add To Cart
                           </a>
                           <a href="" className="option2">
                           Buy Now
                           </a>
                        </div>
                     </div>
                     <div className="img-box">
                        {/* <img src="images/p10.png" alt=""> */}
                     </div>
                     <div className="detail-box">
                        <h5>
                           Men's Shirt
                        </h5>
                        <h6>
                           $65
                        </h6>
                     </div>
                  </div>
               </div>
               <div className="col-sm-6 col-md-4 col-lg-4">
                  <div className="box">
                     <div className="option_container">
                        <div className="options">
                           <a href="" className="option1">
                           Add To Cart
                           </a>
                           <a href="" className="option2">
                           Buy Now
                           </a>
                        </div>
                     </div>
                     <div className="img-box">
                        {/* <img src="images/p11.png" alt=""> */}
                     </div>
                     <div className="detail-box">
                        <h5>
                           Men's Shirt
                        </h5>
                        <h6>
                           $65
                        </h6>
                     </div>
                  </div>
               </div>
               <div className="col-sm-6 col-md-4 col-lg-4">
                  <div className="box">
                     <div className="option_container">
                        <div className="options">
                           <a href="" className="option1">
                           Add To Cart
                           </a>
                           <a href="" className="option2">
                           Buy Now
                           </a>
                        </div>
                     </div>
                     <div className="img-box">
                        {/* <img src="images/p12.png" alt=""> */}
                     </div>
                     <div className="detail-box">
                        <h5>
                           Women's Dress
                        </h5>
                        <h6>
                           $65
                        </h6>
                     </div>
                  </div>
               </div>
            </div>
            <div className="btn-box">
               <a href="">
               View All products
               </a>
            </div>
         </div>
      </section>

      <section className="subscribe_section">
         <div className="container-fuild">
            <div className="box">
               <div className="row">
                  <div className="col-md-6 offset-md-3">
                     <div className="subscribe_form ">
                        <div className="heading_container heading_center">
                           <h3>Subscribe To Get Discount Offers</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                        <form action="">
                           {/* <input type="email" placeholder="Enter your email"> */}
                           <button>
                           subscribe
                           </button>
                        </form>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>

      <section className="client_section layout_padding">
         <div className="container">
            <div className="heading_container heading_center">
               <h2>
                  Customer's Testimonial
               </h2>
            </div>
            <div id="carouselExample3Controls" className="carousel slide" data-ride="carousel">
               <div className="carousel-inner">
                  <div className="carousel-item active">
                     <div className="box col-lg-10 mx-auto">
                        <div className="img_container">
                           <div className="img-box">
                              <div className="img_box-inner">
                                 {/* <img src="images/client.jpg" alt=""> */}
                              </div>
                           </div>
                        </div>
                        <div className="detail-box">
                           <h5>
                              Anna Trevor
                           </h5>
                           <h6>
                              Customer
                           </h6>
                           <p>
                              Dignissimos reprehenderit repellendus nobis error quibusdam? Atque animi sint unde quis reprehenderit, et, perspiciatis, debitis totam est deserunt eius officiis ipsum ducimus ad labore modi voluptatibus accusantium sapiente nam! Quaerat.
                           </p>
                        </div>
                     </div>
                  </div>
                  <div className="carousel-item">
                     <div className="box col-lg-10 mx-auto">
                        <div className="img_container">
                           <div className="img-box">
                              <div className="img_box-inner">
                                 {/* <img src="images/client.jpg" alt=""> */}
                              </div>
                           </div>
                        </div>
                        <div className="detail-box">
                           <h5>
                              Anna Trevor
                           </h5>
                           <h6>
                              Customer
                           </h6>
                           <p>
                              Dignissimos reprehenderit repellendus nobis error quibusdam? Atque animi sint unde quis reprehenderit, et, perspiciatis, debitis totam est deserunt eius officiis ipsum ducimus ad labore modi voluptatibus accusantium sapiente nam! Quaerat.
                           </p>
                        </div>
                     </div>
                  </div>
                  <div className="carousel-item">
                     <div className="box col-lg-10 mx-auto">
                        <div className="img_container">
                           <div className="img-box">
                              <div className="img_box-inner">
                                 {/* <img src="images/client.jpg" alt=""> */}
                              </div>
                           </div>
                        </div>
                        <div className="detail-box">
                           <h5>
                              Anna Trevor
                           </h5>
                           <h6>
                              Customer
                           </h6>
                           <p>
                              Dignissimos reprehenderit repellendus nobis error quibusdam? Atque animi sint unde quis reprehenderit, et, perspiciatis, debitis totam est deserunt eius officiis ipsum ducimus ad labore modi voluptatibus accusantium sapiente nam! Quaerat.
                           </p>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="carousel_btn_box">
                  <a className="carousel-control-prev" href="#carouselExample3Controls" role="button" data-slide="prev">
                  <i className="fa fa-long-arrow-left" aria-hidden="true"></i>
                  <span className="sr-only">Previous</span>
                  </a>
                  <a className="carousel-control-next" href="#carouselExample3Controls" role="button" data-slide="next">
                  <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                  <span className="sr-only">Next</span>
                  </a>
               </div>
            </div>
         </div>
      </section>
      <footer>
         <div className="container">
            <div className="row">
               <div className="col-md-4">
                   <div className="full">
                      <div className="logo_footer">
                        <a href="#"><img width="210" src="images/logo.png" alt="#" /></a>
                      </div>
                      <div className="information_f">
                        <p><strong>ADDRESS:</strong> 28 White tower, Street Name New York City, USA</p>
                        <p><strong>TELEPHONE:</strong> +91 987 654 3210</p>
                        <p><strong>EMAIL:</strong> yourmain@gmail.com</p>
                      </div>
                   </div>
               </div>
               <div className="col-md-8">
                  <div className="row">
                  <div className="col-md-7">
                     <div className="row">
                        <div className="col-md-6">
                     <div className="widget_menu">
                        <h3>Menu</h3>
                        <ul>
                           <li><a href="#">Home</a></li>
                           <li><a href="#">About</a></li>
                           <li><a href="#">Services</a></li>
                           <li><a href="#">Testimonial</a></li>
                           <li><a href="#">Blog</a></li>
                           <li><a href="#">Contact</a></li>
                        </ul>
                     </div>
                  </div>
                  <div className="col-md-6">
                     <div className="widget_menu">
                        <h3>Account</h3>
                        <ul>
                           <li><a href="#">Account</a></li>
                           <li><a href="#">Checkout</a></li>
                           <li><a href="#">Login</a></li>
                           <li><a href="#">Register</a></li>
                           <li><a href="#">Shopping</a></li>
                           <li><a href="#">Widget</a></li>
                        </ul>
                     </div>
                  </div>
                     </div>
                  </div>     
                  <div className="col-md-5">
                     <div className="widget_menu">
                        <h3>Newsletter</h3>
                        <div className="information_f">
                          <p>Subscribe by our newsletter and get update protidin.</p>
                        </div>
                        <div className="form_sub">
                           <form>
                              <fieldset>
                                 <div className="field">
                                    <input type="email" placeholder="Enter Your Mail" name="email" />
                                    <input type="submit" value="Subscribe" />
                                 </div>
                              </fieldset>
                           </form>
                        </div>
                     </div>
                  </div>
                  </div>
               </div>
            </div>
         </div>
      </footer>
      <div className="cpy_">
         <p className="mx-auto">© 2021 All Rights Reserved By <a href="https://html.design/">Free Html Templates</a>
         
            Distributed By <a href="https://themewagon.com/" target="_blank">ThemeWagon</a>
         
         </p>
      </div>
    </div>
  )
}
