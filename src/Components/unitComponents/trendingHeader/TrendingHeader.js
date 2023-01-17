import React from 'react'
import './trendingHeader.css'

function TrendingHeader() {
    return (
        <div className='trendingHeader'>
            <img src='/assets/activity.svg' className='trendingIcon' />
            <span className='trendingText'>Trending Assets </span>
        </div>
    )
}

export default TrendingHeader