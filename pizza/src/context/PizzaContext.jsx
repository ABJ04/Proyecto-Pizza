import React, { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';

const PizzaContext = createContext();

const PizzaProvider = ({ children }) => {
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('../public/pizzas.json'); 
        console.log('Data from pizza.json:', response.data);
        setPizzas(response.data);
      } catch (error) {
        console.error('Error al obtener los datos de las pizzas', error);
      }
    };
  
    fetchData();
  }, []);
  

  return (
    <PizzaContext.Provider value={{ pizzas }}>
      {children}
    </PizzaContext.Provider>
  );
};

const usePizzaContext = () => {
  const context = useContext(PizzaContext);
  if (!context) {
    throw new Error('usePizzaContext debe ser utilizado dentro de un PizzaProvider');
  }
  return context;
};

export { PizzaProvider, usePizzaContext };
