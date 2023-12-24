import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import { RiShoppingCartLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import { usePizzaContext } from '../context/PizzaContext';
import { useCarritoContext } from '../context/carritoContext';

const Cards = () => {
  const { pizzas } = usePizzaContext();
  const { agregarPizzaAlCarrito } = useCarritoContext();

  return (
    <main className="d-flex flex-wrap justify-content-around">
      {pizzas.map((pizza) => (
        <Card key={pizza.id} style={{ width: '18rem', margin: '10px' }}>
          <Link to={`/pizza/${pizza.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
            <Card.Img variant="top" src={pizza.img} />
            <Card.Body>
              <Card.Title>{pizza.name}</Card.Title>
              <Card.Text>{pizza.desc}</Card.Text>
            </Card.Body>
          </Link>
          <ListGroup className="list-group-flush">
            {pizza.ingredients.map((ingredient, index) => (
              <ListGroup.Item key={index}>{ingredient}</ListGroup.Item>
            ))}
          </ListGroup>
          <Card.Body>
            <Card.Text>Precio: <b>{formatCurrency(pizza.price)}</b></Card.Text>
            <Button variant="danger" onClick={() => agregarPizzaAlCarrito(pizza)}>
              Añadir <RiShoppingCartLine className='mb-1' fontSize={17} />
            </Button>{' '}
            {pizza.cantidad && (
              <span className="ms-2">Cantidad: {pizza.cantidad}</span>
            )}
          </Card.Body>
        </Card>
      ))}
    </main>
  );
};

const formatCurrency = (value) => {
  return value.toLocaleString('es-CL', { style: 'currency', currency: 'CLP' });
};

export default Cards;
