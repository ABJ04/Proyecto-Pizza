import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import carousel1 from '../assets/img/carousel1.jpg';
import carousel2 from '../assets/img/carousel2.jpg';
import carousel3 from '../assets/img/carousel3.jpg';
import Cards from '../component/Cards';
import MyNav from '../component/MyNav'; 

const Home = () => {
  return (
    <div>
   
      <MyNav /> 

      <div className='mt-2' style={{ paddingTop: '80px' }}> 
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={carousel1}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>Pizza Extra Queso y Jamón</h3>
              <p>Sabrosa pizza con queso abundante y jamón..</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={carousel2}
              alt="Second slide"
            />
            <Carousel.Caption>
              <h3>Pizza Vegetariana</h3>
              <p>Deliciosa pizza sin carne.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={carousel3}
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3>Pepperoni Festivo</h3>
              <p>Seductora pizza con pepperoni irresistible.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>

        <section className='m-3'>
          <Cards/>
        </section>
      </div>
    </div>
  );
};

export default Home;
