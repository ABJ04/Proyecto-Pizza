import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/esm/Container';
import { useCarritoContext } from '../context/carritoContext';

const CarroCompras = () => {
  const { carrito, eliminarPizzaDelCarrito, agregarPizzaAlCarrito, restarCantidad } = useCarritoContext();

  const handleRestar = (pizzaId, cantidad) => {
    if (cantidad > 1) {
      restarCantidad(pizzaId);
    } else {
      eliminarPizzaDelCarrito(pizzaId);
    }
  };

  const handleSumar = (pizzaId) => {
    agregarPizzaAlCarrito(carrito.find((pizza) => pizza.id === pizzaId));
  };

  const formatCurrency = (value) => {
    return value.toLocaleString('es-CL', { style: 'currency', currency: 'CLP' });
  };

  return (
    <main className='carrito'>
      <Card className='w-100 cajas'>
        <Container>
          <h3 className='mt-3'>Detalles Del Pedido:</h3>
          <section className='justify-content-evenly  d-flex'>
            {carrito.map((pizza) => (
              <Card className='mt-3'>
              <div className='caja' key={pizza.id}>
                <div>
                  <img src={pizza.img} alt={pizza.name} style={{ width: '198px', height: '150px' }} />
                  <p className='ms-1'>{pizza.name}</p>
                  <p className='ms-1'>Precio: <b> {formatCurrency(pizza.price)}</b></p>
                  <div className='d-flex justify-content-center'>
                    <Button
                      className='ms-1'
                      variant="danger"
                      onClick={() => handleRestar(pizza.id, pizza.cantidad)}
                    >
                      -
                    </Button>{' '}
                    <p className='ms-1'>{pizza.cantidad}</p>
                    <Button
                      className='ms-1'
                      variant="primary"
                      onClick={() => handleSumar(pizza.id)}
                    >
                      +
                    </Button>{' '}
                  </div>
                </div>
              </div>
              </Card>
            ))}
          </section>
          <p className='mt-4'>Total: {formatCurrency(calcularTotal(carrito))}</p>
          <Button variant="success">Ir a Pagar</Button>{' '}
        </Container>
      </Card>
    </main>
  );
};

const calcularTotal = (carrito) => {
  return carrito.reduce((total, pizza) => total + pizza.price * pizza.cantidad, 0);
};

export default CarroCompras;
