import logo from './logo.svg';
import './App.css';
import {GoogleMap, withScriptjs, withGoogleMap} from "react-google-maps";

function Map(){
  return (<GoogleMap defaultZoom={10}
  defaultCenter={{ lat: 40.440624, lng:-79.995888}}
  />
  );
}

const WrappedMap = withScriptjs(withGoogleMap(Map));

function App() {
  return (
    <div>
      <WrappedMap googleMapUrl = {`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${
          process.env.REACT_APP_GOOGLE_KEY
        }`}
      loadingElement={div style={{height: "100%"}} />}
      containerElement={<div style={{height: "100%"}}/>>}
      mapElement = {<div style={{height:"100%"}}/>>}
      />
    </div>
  );
}

export default App;
