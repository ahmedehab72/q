import React from 'react';
import ReactDOM  from 'react-dom/client';
import App from './App';
import './index.css';
import info from `./package.json` assert { type: `json` };

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App /> 
  </React.StrictMode>
);








