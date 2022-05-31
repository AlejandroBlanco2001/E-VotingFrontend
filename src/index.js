import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './client/styles/index.scss'
import axios from 'axios'

axios.defaults.baseURL = "https://vot-e.herokuapp.com/";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);