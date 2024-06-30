import React from 'react'
import "./Trains.css"
const Trains = ({item}) => {
  return (
    <>
      <div className="train">
        <div className="train-container">
            
            <h3 className='heading'>{item.trainName}</h3>
            <div className="train-time">
                <div className="dept">
                <span>{item.departureTime} </span>
                <span>|</span>

            <span>{item.departureStation}</span>
                </div>
           <div className="arr">
           <span>{item.arrivalTime} </span>
            <span>|</span>
            <span>{item.arrivalStation}</span>
            </div> 
            
            </div>
            <div className="train-class">
            <span>Sleeper: {item.classes.sleeper ? 'Available' : 'Not Available'}</span>
          <span>AC 2 Tier: {item.classes.ac2Tier ? 'Available' : 'Not Available'}</span>
          <span>First Class: {item.classes.firstClass ? 'Available' : 'Not Available'}</span>
            </div>
            
            
        </div>
        <button className='headerbtn2'>BOOK</button><br />
      </div>
    </>
  )
}

export default Trains
