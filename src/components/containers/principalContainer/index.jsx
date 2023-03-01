import React from 'react'
import { Footer } from '../../footer'
import { NavBar } from '../../navBar'
import './index.css'
export const PrincipalContainer = ({children, showSquares}) => {
  return (
    <div>
        {showSquares
          ?
          <img id="squaresImg" src='https://developer.tecmm.mx/web-tsj-designs/colorsSquares.png'/>

          :null


        }

        <NavBar/>
        {children}
        <Footer/>
    </div>

    
  )
}
