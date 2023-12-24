import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import pizzaGif from "../assets/img/pizzagif.gif";
import '../NavBar.css';
import { RiShoppingCartLine } from "react-icons/ri";
import { NavLink } from "react-router-dom";
import { useCarritoContext } from '../context/carritoContext'; 

const MyNav = () => {
  const { carrito } = useCarritoContext(); 

  const activeclass = ({ isActive }) => (isActive ? "active" : "inactive");

  const cantidadEnCarrito = carrito.reduce((total, pizza) => total + pizza.cantidad, 0);

  return (
    <>
      <Navbar expand="lg" fixed="top" className="bg">
        <Container>
          <NavLink className={activeclass} style={{ textDecoration: 'none', display: "flex" }} to="/">
            <img className='imgPizza' src={pizzaGif} alt="Pizza Gif" />
            <h4 style={{ marginTop: "8px"}}>Pizzería Mamma Mia!</h4>
          </NavLink>
          <Navbar.Toggle  />
          <Navbar.Collapse className="justify-content-end">
            <Nav>
              <NavLink className={activeclass} style={{ textDecoration: 'none', display: "flex", marginTop: "15px"}} to="/carrito">
                <RiShoppingCartLine fontSize={25}  />
                <p className='ms-2'>{cantidadEnCarrito}</p>
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default MyNav;
