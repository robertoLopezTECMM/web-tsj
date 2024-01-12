import React from 'react'
import { Link } from 'react-router-dom'
import './index.css'

export const PrimaryButton = ({color, onClick, text, link}) => {
  return (
    <button
      
      onClick={
        link ? 
          event => window.location.href=link
          // window.location.href=link
          
        :
          onClick
      }
      className='primaryButton' 
      style={{backgroundColor:color}}
    >
      {text}
    </button>

  )
}
