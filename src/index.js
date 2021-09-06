import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
// import { SurfaceInterval } from './SurfaceInterval';
import { BrowserRouter } from 'react-router-dom'
import { Login } from './components/auth/Login';


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Login />
      {/* <SurfaceInterval /> */}
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();