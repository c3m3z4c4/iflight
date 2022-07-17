import './index.css';
import Formulario from './components/Formulario';
import Header from './components/Header';
import Footer from './components/Footer';


import store from './redux/store';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
      <div className="App" style={{backgroundImage: `url('/src/assets/IFlight Logo/vuelo.jpg')`}} >
        <Header titulo="Tu boleto seguro al lugar que quieras" />
        <Formulario />
        <Footer />
        </div>
    </Provider>
  );
}

export default App;
