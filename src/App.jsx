
import './App.css'
import Flightimport './index.css';
import Formulario from './components/Formulario';
import Header from './components/Header';
import Footer from './components/Footer';
import DetailContainer from './Components/FlightDetailContainer/FlightDetailContainer';
import FlightListContainer from './Components/FlightListContainer/FlightListContainer';

function App() {
  return (
    <div className="App" style={{backgroundImage: `url('/src/assets/IFlight Logo/vuelo.jpg')`}} >
      <Header titulo="Tu boleto seguro al lugar que quieras" />
      <Formulario />
      <FlightListContainer/>
      <FlightDetailContainer/>
      <Footer />
    </div>
  );
}

export default App;
