import React from 'react'
import "./Navbar.css"
const Navbar = () => {
  return (
    <>
       <div className="navbar">
        <div className="navcontainer">
            <div className="components">
            <img src="https://upload.wikimedia.org/wikipedia/en/thumb/4/45/IRCTC_Logo.svg/800px-IRCTC_Logo.svg.png" ></img>
            <span className='logo'>IRTC</span>
            </div>
        <div className="navbtn">
            <span>User</span>
        <button className="navbutton"> Register</button>
        <button className="navbutton"> Login</button>
        </div>
        </div>
        </div> 
    </>
  )
}

export default Navbar
