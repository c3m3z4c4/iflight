import { BrowserRouter } from "react-router-dom";
import Landing from './pages/landing/index';


function App() {
  return (
   <BrowserRouter>
      <div className="App" style={{backgroundImage: `url('/src/assets/IFlight Logo/vuelo.jpg')`}} >
        <Landing />
      </div>
    </BrowserRouter>
  );
}

export default App;
