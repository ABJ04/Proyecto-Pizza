import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { PizzaProvider } from './context/PizzaContext';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <PizzaProvider>
    <App />
    </PizzaProvider>
  </React.StrictMode>,
)
