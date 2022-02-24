import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyA_tnGn2H6w3RhkxvlyLvvSYW344eJKVsU",
  authDomain: "heisenberg-games-ecommerce.firebaseapp.com",
  projectId: "heisenberg-games-ecommerce",
  storageBucket: "heisenberg-games-ecommerce.appspot.com",
  messagingSenderId: "876926165628",
  appId: "1:876926165628:web:c5de4e1397e52036819ff9"
};

initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
