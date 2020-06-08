import React from 'react';
import ReactDOM from 'react-dom';
import {hello} from './App';


ReactDOM.render(
  <React.StrictMode>
    {hello}
  </React.StrictMode>,
  document.getElementById('root')
);


