import React from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { RiShoppingCartLine } from 'react-icons/ri';
import { useParams } from 'react-router-dom';
import { usePizzaContext } from '../context/PizzaContext';
import { useCarritoContext } from '../context/carritoContext';

const Pizza = () => {
  const { pizzas } = usePizzaContext();
  const { id } = useParams();
  const pizzaDetails = pizzas.find((pizza) => pizza.id === id);
  const { agregarPizzaAlCarrito } = useCarritoContext();

  if (!pizzaDetails) {
    return <p className='notpage'>⚠️ Error: Detalles de la pizza no encontrados. ⚠️</p>;
  }

  const { img, name, desc, ingredients, price } = pizzaDetails;

  const handleAddToCart = () => {
    agregarPizzaAlCarrito(pizzaDetails);
  };

  const formattedPrice = new Intl.NumberFormat('es-CL', {
    style: 'currency',
    currency: 'CLP',
  }).format(price);

  return (
    <main className='centro'>
      <Card className='w-75 '>
        <Container className='d-flex'>
          <div>
            <img src={img} alt={name} />
          </div>
          <section className='ms-3'>
            <h2>{name}</h2>
            <hr />
            <p>{desc}</p>
            <h5>Ingredientes:</h5>
            <ul>
              {ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
            <p>Precio: <b>{formattedPrice}</b></p>
            <Button 
              variant="danger"
              onClick={handleAddToCart}
            >
              Añadir <RiShoppingCartLine className='mb-1' fontSize={17} />
            </Button>{' '}
          </section>
        </Container>
      </Card>
    </main>
  );
};

export default Pizza;
