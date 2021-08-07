import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Location = ({ location }) => {
  return (
    <Card className='my-3 p-3 rounded'>
      <Link to={`/location/${location._id}`}>
        <Card.Img src={location.image} variant='bottom' />
      </Link>
      <Card.Body>
        <Card.Text as='h3'>${location.name}</Card.Text>
        <Link to={`/location/${location._id}`}>
          <Card.Title as='div'>
            <strong>{location.name}</strong>
          </Card.Title>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default Location;
