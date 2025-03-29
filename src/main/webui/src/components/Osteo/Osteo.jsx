import React from 'react';
import "./Osteo.scss"
import { Card } from 'react-bootstrap';
import { useGlobalContext } from '../../ThemeHook';

function Osteo() {
 
  const { theme } = useGlobalContext();

  return (
        <Card bg={theme} text={theme === 'light' ? 'dark' : 'white'} className='align-card card-background' >
        <Card.Body  className="d-flex flex-column justify-content-between card-body">
          <Card.Title  className="card-title-bold text-center">Osteopatia</Card.Title>
          <Card.Text className='card-text-bold text-center'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis aperiam magnam nobis nesciunt amet, soluta quod error aut facere sed veritatis corporis recusandae mollitia similique ad nam iste, asperiores dolores?
          </Card.Text>
        </Card.Body>
      </Card>
  );
}
export default Osteo;