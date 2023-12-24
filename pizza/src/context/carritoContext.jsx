import React, { createContext, useContext, useState } from 'react';

const CarritoContext = createContext();

export const useCarritoContext = () => {
  const context = useContext(CarritoContext);
  if (!context) {
    throw new Error('useCarritoContext debe usarse dentro de un CarritoProvider');
  }
  return context;
};

export const CarritoProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([]);

  const agregarPizzaAlCarrito = (pizza) => {
    const pizzaEnCarrito = carrito.find((p) => p.id === pizza.id);

    if (pizzaEnCarrito) {
      setCarrito((prevCarrito) =>
        prevCarrito.map((p) =>
          p.id === pizza.id ? { ...p, cantidad: p.cantidad + 1 } : p
        )
      );
    } else {
      setCarrito((prevCarrito) => [
        ...prevCarrito,
        { ...pizza, cantidad: 1, img: pizza.img },
      ]);
    }
  };

  const eliminarPizzaDelCarrito = (pizzaId) => {
    setCarrito((prevCarrito) =>
      prevCarrito.filter((pizza) => pizza.id !== pizzaId)
    );
  };

  const vaciarCarrito = () => {
    setCarrito([]);
  };

  const restarCantidad = (pizzaId) => {
    setCarrito((prevCarrito) =>
      prevCarrito.map((pizza) =>
        pizza.id === pizzaId ? { ...pizza, cantidad: pizza.cantidad - 1 } : pizza
      )
    );
  };

  return (
    <CarritoContext.Provider
      value={{
        carrito,
        agregarPizzaAlCarrito,
        eliminarPizzaDelCarrito,
        vaciarCarrito,
        restarCantidad,
        setCarrito,
      }}
    >
      {children}
    </CarritoContext.Provider>
  );
};
