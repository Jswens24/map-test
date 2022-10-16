
import logo from './logo.svg';
import './App.css';
// import { Wrapper, Status } from '@googlemaps/react-wrapper';
import Map from './component/Map';
// const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY 

function App() {

  return (
    <div className="App">
      <h1>Enter Coordinates</h1>
      {/* <Wrapper apiKey={API_KEY} > */}
      <div>
        <input type='text' placeholder='enter coordinates' />
        <button type='submit'>Submit</button>
        <Map />
      </div>
      {/* </Wrapper> */}
    </div>
  );
}

export default App;
