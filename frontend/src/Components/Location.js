import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Location = ({ location }) => {
  return (
    <Card className='my-3 p-3'>
      <Card.Body>
        {/* <Card.Text as='h3'>{location.name}</Card.Text> */}
        <Link to={`/locations/${location._id}`}>
          <Card.Text as='h3'>{location.name}</Card.Text>
        </Link>
      </Card.Body>
      <Link to={`/locations/${location._id}`}>
        <Card.Img src={location.image} variant='bottom' />
      </Link>
    </Card>
  );
};

export default Location;
