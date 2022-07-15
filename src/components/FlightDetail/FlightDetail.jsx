
function FlightDetail({origin, destination, price}) {
  return (
    <div>
        <h2>Informacion del vuelo</h2>
        <div>
            <div>Itinerario: {origin}-{destination}</div>
            <div>
                <p>Precio ${price}</p>
            </div>
        </div>
    </div>
  )
}

export default FlightDetail