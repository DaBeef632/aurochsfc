//import logo from './public/aurochslogo.png';
import React from "react";
import './App.css';

import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import { formatRelative} from "date-fns";

import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";

import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
} from "@reach/combobox";
import "@reach/combobox/styles.css";

import mapStyles from "./mapStyles";






const libraries = ["places"];
const mapContainerStyle = {
  width: "100vw",
  height: "100vh",
};
const center = {
  lat: 40.440624,
  lng: -79.995888,
};

const options = {
   styles: mapStyles,
  disableDefaultUI: true,
  zoomControl: true,
};


export default function App()  {

  const { isLoaded, loadError} = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_KEY,
    libraries,
  });

  const [markers, setMarkers] = React.useState([]);
  const[selected, setSelected] = React.useState(null);

  const onMapClick = React.useCallback((event)=>{
    setMarkers((current) => [
          ...current,
          {
            lat: event.latLng.lat(),
            lng: event.latLng.lng(),
            time: new Date(),
          },
        ]);
  }, []);

  const mapRef = React.useRef();
  const onMapLoad = React.useCallback((map)=>{
    mapRef.current = map;
  }, []);

  const panTo = React.useCallback(({lat, lng}) => {
    mapRef.current.panTo({lat, lng});
    mapRef.current.setZoom(14);
  }, []);

  if(loadError) return "Error loading maps";
  if(!isLoaded) return "Loading Maps";

  return (
    <div>
      <h1>
        <span role="img" aria-label="tent">
           <img src="logo-full.png" alt="home"/>
        </span>
      </h1>

      <Search panTo={panTo} />
      <Locate panTo={panTo}/>
      <GoogleMap
      mapContainerStyle={mapContainerStyle}
      zoom={8}
      center={center}
      options={options}
      onClick={onMapClick}
      onLoad={onMapLoad}
      >
        {markers.map((marker) => (
         <Marker
         key={marker.time.toISOString()}
        position= {{lat: marker.lat, lng: marker.lng}}
        icon={{
          url: "/logo192.png",
          scaledSize: new window.google.maps.Point(30,30),
          origin: new window.google.maps.Point(0,-0),
          anchor: new window.google.maps.Point(15, 15),

        }}
        onClick={()=> {
        setSelected(marker);
}}
        />
        ))}

        {selected ? (
        <InfoWindow
        position ={{lat: selected.lat, lng: selected.lng}}
        onCloseClick={()=>{
          setSelected(null);
        }}
        >
          <div>
            <h2> Game On! </h2>
            <p> Game Started {formatRelative(selected.time, new Date())}</p>
          </div>
        </InfoWindow>
        ) : null}
      </GoogleMap>
    </div>
        );

}

function Locate({panTo}) {
  return (
  <button
  className="locate"
  onClick={() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        panTo({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      },
      () => null
      );
  }}
  >
    <img src="" alt="compass - locate me"/>
  </button>
  );

}

function Search({ panTo }) {
  const {
    ready,
    value,
    suggestions:{ status, data },
    setValue,
    clearSuggestions,
   } = usePlacesAutocomplete({
    requestOptions: {
      location: { lat: () => 40.440624, lng: () => -79.995888},
  radius: 200 * 1000,
    },
  });

  const handleInput = (e) => {
    setValue(e.target.value);
  };

  const handleSelect = async (address) => {
    setValue(address, false);
    clearSuggestions();

    try {
      const results = await getGeocode({ address });
      const { lat, lng } = await getLatLng(results[0]);
      panTo({ lat, lng});
    } catch (error) {
      console.log("Error:", error);
    }
  };

  return (
  <div className="search">
  <Combobox onSelect={ handleSelect }>

    <ComboboxInput
    value={value}
    onChange = {handleInput}
    disabled={!ready}
    placeholder="Enter an address"
    />

    <ComboboxPopover>
      <ComboboxList>
      {status === "OK" &&
      data.map(({id, description}) => (
        <ComboboxOption key={id} value={description} />
      ))}
      </ComboboxList>
    </ComboboxPopover>
  </Combobox>
  </div>
  );
}
