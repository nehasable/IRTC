import React, { useState } from 'react'
import Trains from '../components/trains/Trains'
import useFetch from '../custom hook/useFetch'
import axios from "axios";

const List = () => {
  const [departureStation, setDepartureStation] = useState('');
  const [arrivalStation, setArrivalStation] = useState('');
  const [name, setName] = useState([]);
  const {data,loading,error,reFetch}=useFetch(`/trains?668139a00094e2cb7d5c6d89}`)

  const  handleSearch = async() => {
  const data=await   axios.get(`http://localhost:8000/trains?from=${departureStation}&to=${arrivalStation}`)
  setName(data.data);
  console.log(data.data)
  
  };

  return (
    <div className="list">
      <div className="list-header">
        <input
          type="text"
          placeholder="Departure Station"
          value={departureStation}
          onChange={(e) => setDepartureStation(e.target.value)}
        />
        <input
          type="text"
          placeholder="Arrival Station"
          value={arrivalStation}
          onChange={(e) => setArrivalStation(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      {/* <div className="list-results">
        {loading && <p>Loading...</p>}
        {error && <p>Error fetching data: {error.message}</p>}
        {Object.keys(data) && data.length > 0 ? (
         Object.keys(data).map((train) => (
            <Trains key={train._id} train={train} />
          ))
        ) : (
          !loading && <p>No results found</p>
        )}
        {/* {name.map((train)=>{
          return <div>{train}
          </div>
        }
          
        )} */}
    
    <div className="list-results">
        {loading && <p>Loading...</p>}
        {error && <p>Error fetching data: {error.message}</p>}
        {data && data.length > 0 ? (
          data.map((item) => (
            <Trains key={item._id} item={item} />
          ))
        ) : (
          !loading && <p>No results found</p>
        )}
        {name.length > 0 &&
          name.map((item) => (
            <Trains key={item._id} item={item} />
          ))}
      </div>
    </div>
  );
};

export default List;


