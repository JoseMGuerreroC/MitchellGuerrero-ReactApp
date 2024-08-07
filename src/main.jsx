import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: 'AIzaSyDxpGhYbvdU_APqY82FYs201wc-Dd5gj0s',
  authDomain: 'midier-makeup.firebaseapp.com',
  projectId: 'midier-makeup',
  storageBucket: 'midier-makeup.appspot.com',
  messagingSenderId: '215768681208',
  appId: '1:215768681208:web:6e281b7bcac5b6c7b0890d'
};

initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('app')).render(
  <React.StrictMode>
      <App />
  </React.StrictMode>,
)
