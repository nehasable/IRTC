import React from 'react'
import { FaLocationArrow } from "react-icons/fa";
import { FaMapMarker } from "react-icons/fa";
import { BsFillCalendarDateFill } from "react-icons/bs";

const Header = () => {
  return (
    <>
    <div className="header">
        <div className="header-container">
        <h1>BOOK TICKET</h1>
        <div className="header-loc"></div>
        <FaLocationArrow className='header-icon'/>
        <input type="text"  placeholder='From'/>
      <FaMapMarker className='header-icon' />
      <input type="text"  placeholder='To'/>
      <div className="header-date">
      <BsFillCalendarDateFill />
      <input type="text"  />

      </div>
        </div>
    </div>
        
    </>
  )
}

export default Header
