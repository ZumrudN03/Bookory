import React from "react";
import Slider from "react-slick";
import "./index.scss";

function HeaderSlider() {
  var settings = {
    infinite: true,
    autoplay: false,
    speed: 2000,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div id="headerSlider">
      <Slider {...settings}>
        <div className="editorChoice">
          <div className="editorChoice_textBox">
            <p>EDITOR CHOICE</p>
            <h2>Top 10 Books Of Year</h2>
            <button>
              Shop Now <i className="fa-solid fa-angle-right"></i>
            </button>
          </div>
          <img
            src="https://demo2.pavothemes.com/bookory/wp-content/uploads/2022/02/revslider_book-4.png"
            alt=""
          />
        </div>
        <div className="ourBigestSale">
          <div className="ourBigestSale_textBox">
            <p>OUR BIGEST SALE</p>
            <h2>Buy 2 Get 3 Free</h2>
            <h6>Limited Time Only.While Supplies Last!</h6>
            <button>
              Shop Now <i className="fa-solid fa-angle-right"></i>
            </button>
          </div>
          <img
            src="https://demo2.pavothemes.com/bookory/wp-content/uploads/2022/02/revslider_book-1.png"
            alt=""
          />
        </div>
      </Slider>
    </div>
  );
}

export default HeaderSlider;
