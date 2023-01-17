import React from 'react'
import './popularPair.css';

function PopularPair({ arr }) {
  return (
    <div className='popularPair'>{arr.map((ele) =>
      <img src={`/assets/${ele}`} className='poplarPairIcon' />
    )}</div>
  )
}

export default PopularPair