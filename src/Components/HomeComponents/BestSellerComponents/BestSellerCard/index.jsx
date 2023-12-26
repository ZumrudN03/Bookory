import React, { useEffect, useState } from 'react'
import './index.scss'
import { Link } from 'react-router-dom';
function BestSellerCard() {
    const [bestSellerCard, setBestSellerCard] = useState([]);

    useEffect(() => {
        fetch("https://www.googleapis.com/books/v1/volumes?q=search+terms")
            .then((res) => res.json())
            .then((data) => {
                if (data.items) {
                    setBestSellerCard(data.items);
                }
            })

    }, []);

    return (
        <div className='bestSellerCard'>
            <div className="bestSellerCard_header">
                <p>Best Sellers</p>
                <div className='line'></div>
                <Link><button>View All <i className="fa-solid fa-angle-right"></i></button></Link>
            </div>
            {bestSellerCard.map((x) => (
                <div className='bestSellerCard_cardMain' key={x.id}>
                    <img src={x.volumeInfo.imageLinks?.thumbnail?x.volumeInfo.imageLinks.thumbnail:"https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61Zeai3qcCL._SY445_SX342_.jpg"} alt="" />
                    <div className="bestSellerCard_cardMain_textBox">
                    <h2>{x.volumeInfo.title}</h2>
                    <div className="bestSellerCard_cardMain_textBox_icon">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-regular fa-star"></i>
                    <p>{x.volumeInfo.averageRating}</p>
                    </div>
                    <h6> Authors :{x.volumeInfo.authors}</h6>
                    <p>{x.volumeInfo.authors && x.volumeInfo.authors.join(", ")}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default BestSellerCard;
