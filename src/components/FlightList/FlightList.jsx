import Flight from "../Flight/Flight"


function FlightList({flights}) {
  return (
    <div>
          {flights.map(flight => <Flight id={flight.id} flight={flight}/>)}
    </div>
  )
}

export default FlightList