import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { SurfaceInterval } from './SurfaceInterval';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <SurfaceInterval />
  </React.StrictMode>
);

reportWebVitals();