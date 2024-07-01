import React from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'
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
           
        <Link to="/signup"><button className="navbutton"> Register</button></Link>
        <Link to="login"> <button className="navbutton" > Login</button></Link>
        </div>
        </div>
        </div> 
    </>
  )
}

export default Navbar
