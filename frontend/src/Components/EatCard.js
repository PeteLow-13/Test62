import React from 'react';
import { Card, Col } from 'react-bootstrap';

const EatCard = () => {
  return (
    <>
      <Col sm={12} md={4} lg={4} xl={4}>
        <Card>
          <Card.Img src={location.image} />
          <Card.Body>
            <Card.Title>Scratch kitchen</Card.Title>
            <Card.Text className='address'>
              32420 N Rainier Ave ​ Port Gamble, WA 98364
            </Card.Text>
            <Card.Text className='phone'>(360) 297-7636</Card.Text>
            <Card.Text className='description'>
              Good food, cold beer, nice people, awesome view. Local and organic
              ingredients, offering compostable to go products too!
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};

export default EatCard;
