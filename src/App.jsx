import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import FlightListContainer from './components/FlightListContainer/FlightListContainer';
import FlightDetailContainer from './components/FlightDetailContainer/FlightDetailContainer';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Landing from "./components/Landing/Landing";



function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header titulo="Tu boleto seguro al lugar que quieras" />

        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/vuelos" element={<FlightListContainer />} />
          <Route path="/detail/:id" element={<FlightDetailContainer />} />
          <Route path="/*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
