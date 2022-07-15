import './index.css';
import Formulario from './components/Formulario';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App" style={{backgroundImage: `url('/src/assets/IFlight Logo/vuelo.jpg')`}} >
      <Header titulo="Tu boleto seguro al lugar que quieras" />
      <Formulario />
      <Footer />
    </div>
  );
}

export default App;
