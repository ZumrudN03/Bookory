import React from "react";
import "./index.scss";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <div className="footer_container">
      <div className="footer">
        <div className="footer_logo">
          <img
            src="https://demo2.pavothemes.com/bookory/wp-content/uploads/2022/02/logo.svg"
            alt=""
          />
          <p className="footer_location">
            1418 River Drive, Suite 35 Cottonhall, CA 9622
          </p>
          <Link to={"#"}>SHOW ON MAP</Link>
          <div className="footer_icons">
            <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-twitter"></i>
            <i className="fa-brands fa-instagram"></i>
            <i className="fa-brands fa-pinterest"></i>
          </div>
        </div>
        <div className="footer_contact">
          <p>Need Help</p>
          <h4>+(84) - 1800 - 4635</h4>
          <div className="footer_workTime">
            <p className="footer_time">Monday - Friday: 9:00-20:00</p>
            <p className="footer_time">Saturday: 11:00 - 15:00</p>
          </div>
          <p className="footer_mail">contact@example.com</p>
        </div>
        <div className="footer_explore">
          <p>Explore</p>
          <ul>
            <li>About us</li>
            <li>Sitemap</li>
            <li>Bookmarks</li>
            <li>Sign in/Join</li>
          </ul>
        </div>
        <div className="footer_service">
          <p>Our Service</p>
          <ul>
            <li>Help Center</li>
            <li>Returns</li>
            <li>Product Recalls</li>
            <li>Accessibility</li>
            <li>Contact Us</li>
            <li>Store Pickup</li>
          </ul>
        </div>
        <div className="footer_category">
          <p>Categories</p>
          <ul>
            <li>Action</li>
            <li>Comedy</li>
            <li>Drama</li>
            <li>Horror</li>
            <li>Kids</li>
          </ul>
        </div>
      </div>
      <div className="footer_underside_container">
      <div className="footer_underside">
        <p>
          Copyright © 2022 <a href="#">Bookory.</a> All rights reserved.
        </p>
        <img
          src="https://demo2.pavothemes.com/bookory/wp-content/uploads/2022/02/footer_img.png"
          alt=""
        />
      </div>
      </div>
      
    </div>
  );
}

export default Footer;
