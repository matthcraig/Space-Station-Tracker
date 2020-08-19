import React from 'react';
import './App.css';
import Map from "./Map"

function App() {
  return (
    <div className="App">
      <h1>ISS Tracker</h1>
      <h3>Red dot represents the International Space Station's current location</h3><h3>Coordinates listed below:</h3>
      <Map />
    </div>
  );
}

export default App;
