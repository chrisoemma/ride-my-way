import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import axios from 'axios';

axios.defaults.baseURL = 'https://rideapps.herokuapp.com/api/v1' ;
ReactDOM.render(<App />, document.getElementById('root'));

