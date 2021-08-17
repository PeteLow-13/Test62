import React from 'react';
import { Card, Col } from 'react-bootstrap';
import Drink from './Drink';

const DrinkCard = () => {
  return (
    <>
      <Col sm={12} md={4} lg={4} xl={4}>
        <Card>
          <Card.Img src={location.image} />
          <Card.Body>
            <Card.Title as='div' className='drink-buisness-name'>
              Scratch kitchen
            </Card.Title>
            <Card.Title as='div' className='drink-buisness-name'>
              {location.drink.business.name}
            </Card.Title>
            <Card.Text as='div' className='drink-business-address'>
              32420 N Rainier Ave ​ Port Gamble, WA 98364
            </Card.Text>
            <Card.Text as='div' className='drink-business-address'>
              {location.drink.business.address}
            </Card.Text>
            <Card.Text as='div' className='drink-business-phone'>
              (360) 297-7636
            </Card.Text>
            <Card.Text as='div' className='drink-business-phone'>
              {location.drink.business.phone}
            </Card.Text>
            <Card.Text as='div' className='drink-business-description'>
              Good food, cold beer, nice people, awesome view. Local and organic
              ingredients, offering compostable to go products too!
            </Card.Text>
            <Card.Text as='div' className='drink-business-description'>
              {drink.description}
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};

export default DrinkCard;
