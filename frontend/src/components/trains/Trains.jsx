import React from 'react'
import "./Trains.css"
const Trains = () => {
  return (
    <>
      <div className="train">
        <div className="train-container">
            
            <h3 className='heading'>CHENNAI EXPRESS</h3>
            <div className="train-time">
                <div className="dept">
                <span>21:30 </span>
                <span>|</span>

            <span>CSMT - Chattrapati Shivaji Maharaj Terminal</span>
                </div>
           <div className="arr">
           <span>13:30 </span>
            <span>|</span>
            <span>CHENNAI - MTR</span>
            </div> 
            
            </div>
            <div className="train-class">
                <span>Sleeper (S)</span>
                <span>AC 2 Tier (2A)</span>
                <span>First Class (F)</span>
            </div>
            
            
        </div>
        <button className='headerbtn2'>BOOK</button><br />
      </div>
    </>
  )
}

export default Trains
