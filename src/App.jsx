import Landing from './pages/landing/index';
import store from './redux/store';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
      <div className="App" style={{backgroundImage: `url('/src/assets/IFlight Logo/vuelo.jpg')`}} >
        <Landing />
      </div>
    </Provider>
  );
}

export default App;
