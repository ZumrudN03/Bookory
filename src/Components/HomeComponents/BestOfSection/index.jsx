import React from 'react'
import './index.scss'
import { Link } from 'react-router-dom'

function BestOfSection() {
    return (
        <div className='bestOfSection'>
            <div className="bestOfSection_textBox">
                <p>THE BEST OF 2021</p>
                <h3>UP TO 30% OFF TOP READS</h3>
                <Link to={"/"}><button>See More<i className="fa-solid fa-angle-right"></i></button></Link>
            </div>
        </div>
    )
}

export default BestOfSection