import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/index.scss'
import axios from 'axios'

axios.defaults.baseURL = "https://vot-e-backend.herokuapp.com/";
//axios.defaults.baseURL = "http://localhost:3000/"
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);