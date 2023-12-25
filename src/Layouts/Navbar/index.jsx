import React from "react";
import "./index.scss";

function Navbar() {
  return (
    <div id="navbar_container">
      <div className="navbar_upside_container">
        <div className="navbar_upside">
          <div className="findBookStore">
            <a href="#">Find a Book Store</a>
            <div className="navbar_phoneNum">
              <i className="fa-solid fa-phone-volume"></i>
              <p>+1 840 - 841 25 69</p>
            </div>
          </div>
          <div className="navbar_upside_icon">
            <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-twitter"></i>
            <i className="fa-brands fa-instagram"></i>
            <i className="fa-brands fa-pinterest"></i>
          </div>
        </div>
      </div>
      <div className="navbar">
        <div className="navbar_logo">
          <img
            src="https://demo2.pavothemes.com/bookory/wp-content/uploads/2022/02/logo-1.svg"
            alt=""
          />
        </div>
        <div className="navbar_navMenu">
          <p> Home</p>
          <p>
            Shop<i className="fa-solid fa-angle-down"></i>
          </p>
          <p>
            Vendor<i className="fa-solid fa-angle-down"></i>
          </p>
          <p>
            Pages<i className="fa-solid fa-angle-down"></i>
          </p>
          <p>
            Blog<i className="fa-solid fa-angle-down"></i>
          </p>
          <p>Contact</p>
        </div>
        <div className="navbar_icons">
          <i className="fa-solid fa-magnifying-glass"></i>
          <i className="fa-regular fa-user"></i>
          <i className="fa-regular fa-heart"></i>
          <i className="fa-solid fa-basket-shopping"></i>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
