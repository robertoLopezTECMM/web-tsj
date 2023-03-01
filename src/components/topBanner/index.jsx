import React from 'react'
import './index.css'

export const TopBanner = ({source}) => {
  return (
    <div className='topBannerContainer'>
        <div className='squaresTopBannerContainer'>
            <img src={source}/>
        </div>
    </div>
  )
}
