
import "./FlightDetail.css"

function FlightDetail({flight}) {
  return (
    <div className="detail-container">
        <h2>Tu vuelo seleccionado:</h2>
        <div className="origin-container">
          <p>Vuelo de ida: fecha de ida </p>
          <div className="flight-origin">
            <div className="origin-init-detail">
                 <div>{flight.inicio}</div>
                 <div> 20:06</div>
            </div>
            <div className="origin-route-detail">
                  <p>Duracion</p>
                  <hr/>
                  <p>Sin escalas</p>
            </div>
            <div className="origin-fin-detail">
                  <div>{flight.final}</div>
                  <div> 07:05</div>
            </div>
          </div>
        </div>
        <div className="destination-container">
            <p>Vuelo de vuelta: fecha de vuelta </p>
            <div className="flight-destination">
              <div className="destination-init-detail">
                <div>{flight.final}</div>
                <div> 18:00</div>
              </div>
            <div className="destination-route-detail">
                  <p>Duracion</p>
                  <hr/>
                  <p>Sin escalas</p>
           </div>
           <div className="destination-fin-detail">
                  <div>{flight.inicio}</div>
                  <div> 04:42</div>
          </div>
        </div>
        <div>
            <p>Precio total ${flight.price}</p>
        </div>
    </div>
    </div>
  )
}

export default FlightDetail