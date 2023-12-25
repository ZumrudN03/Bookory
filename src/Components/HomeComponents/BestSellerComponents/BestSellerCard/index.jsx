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
                <div key={x.id}>
                    <img src={x.thumbnail} alt=""   style={{width:"200px" , height:"200px"}}/>
                    <h2>{x.volumeInfo.title}</h2>
                    <h6> Authors :{x.volumeInfo.authors}</h6>

                    <p>{x.volumeInfo.authors && x.volumeInfo.authors.join(", ")}</p>
                </div>
            ))}
        </div>
    );
}

export default BestSellerCard;
