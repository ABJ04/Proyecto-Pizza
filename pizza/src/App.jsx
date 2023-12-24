import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { PizzaProvider } from './context/PizzaContext';
import { CarritoProvider } from './context/carritoContext'; 
import Home from './view/Home';
import Pizza from './view/Pizza';
import CarroCompras from './view/CarroCompras';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NotFount from './view/NotFount';
import MyNav from './component/MyNav';

function App() {
  return (
    <main>
      <PizzaProvider>
        <CarritoProvider>
          <Router>
            <div className='justify-content-center'>
              <MyNav />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/pizza/:id" element={<Pizza />} />
                <Route path="/carrito" element={<CarroCompras />} />
                <Route path="*" element={<NotFount />} />
              </Routes>
            </div>
          </Router>
        </CarritoProvider>
      </PizzaProvider>
    </main>
  );
}

export default App;
