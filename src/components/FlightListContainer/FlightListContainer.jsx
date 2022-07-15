
 import { useState, useEffect } from "react"

import {flights} from "../../data/data"
import FlightList from "../FlightList/FlightList"

const list = new Promise((resolve) => {
    setTimeout(() => {
      resolve(flights);
    }, 2000);
  });

function FlightListContainer() {
    const [flights, setFlights] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        list
        .then (resp => {setFlights(resp)})
        .catch(err => {console.log(err)})
        .finally(() => {setLoading(false)})
    }, [])

  return (
    <div>
        {loading ? <h2>Cargando...</h2> : (<FlightList flights ={flights}/>)}
    </div>
  )
}

export default FlightListContainer 



 
/* import { useEffect, useState } from "react";




  const fetchFlights = async() => {
    try{
      const response = await fetch('./src/data/datos.json');
      const data = await response.json();

      console.log(data)

      return data;
    }
    catch(error){
      return {error: 'Error fetching data'}; 
    }
  }
  
  
    function FlightListContainer() {
  
      const [flight, setflight] = useState([]);
  
    useEffect(()=>{
      const fetchData = async () => {
        const flight = await fetchFlights()
        setflight(flight?.data)
      }
  
      fetchData().catch(null);
    }, [])
  
    return (
      <div>
          <h1>Vuelos</h1>
          {flight.map(flight => 
            <div key={`flight-item-${flight.id}`}>
              <p>{flight.id}</p>
              <p>{flight.price.grandTotal}</p>
              <p>{flight.itineraries.duration}</p>
              <p>{flight.price.currency}</p>
            </div>)} 
      </div>
    )}
      
      export default FlightListContainer */
      
    
