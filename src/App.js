import React from 'react';
import logo from './logo.svg';
import './App.css';
import {count ,length} from './number.js';


const text = "I'm the text";
const logic = true;
const badLogic = false;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p style = {{
          color: 'yellow'
        }}>
          <code>Hello React World</code>
        </p>
        <p>{text}</p>
        <p>{69}</p>
        <p>{100 - 99}</p>
        <p>{logic && "yeees it's truuue"}</p>
        <p>{badLogic ? 'true' : 'false'}</p>
        {undefined}
        {null}
        {false}
        {true}
        <p>count * length = {count*length}</p>
      </header>
    </div>
  );
}

export default App;
