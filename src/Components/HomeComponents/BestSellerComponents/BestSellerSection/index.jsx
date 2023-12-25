import React from 'react'
import './index.scss'
import { Link } from 'react-router-dom'
import BestSellerCard from '../BestSellerCard'

function BestSellerSection() {
  return (
    <div className='bestSellerSection'>

        <BestSellerCard/>
    </div>
  )
}

export default BestSellerSection