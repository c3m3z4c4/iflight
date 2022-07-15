import Flight from "../Flight/Flight"


function FlightList({flights}) {
  return (
    <div>
          {flights.map(flight => <Flight id={flight.id} origin={flight.inicio} destination={flight.final} price={flight.price}/>)}
    </div>
  )
}

export default FlightList