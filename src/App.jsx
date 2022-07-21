import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import FlightListContainer from './components/FlightListContainer/FlightListContainer';
import FlightDetailContainer from './components/FlightDetailContainer/FlightDetailContainer';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Formulario from "./components/Formulario";
import "./pages/landing/index.css";


function App() {
  return (
   <BrowserRouter>
      <div className="App" style={{backgroundImage: `url('/assets/IFlight Logo/vuelo.jpg')`}} >
        <Header/>
      </div>
      <Routes>
        <Route path="/" element={<Formulario/>} />
        <Route path="/vuelos" element={<FlightListContainer />} />
        <Route path="/vuelos/detalle" element={<FlightDetailContainer/>} />
        <Route path ="/*" element ={<Navigate to ="/" replace/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
