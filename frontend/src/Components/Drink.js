import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import TagBar from './TagBar';

const Drink = () => {
  const locationDetails = useSelector((state) => state.locationDetails);
  const { location } = locationDetails;

  return (
    <>
      <Row className='drink' id='drink'>
        <h2>Where to Drink {location.name}</h2>
        <Col sm={12} md={4} lg={4} xl={4}>
          <Card>
            <Card.Img src={location.drink1Image} />
            <Card.Body>
              <Card.Title>{location.drink1name}</Card.Title>
              <Card.Text className='address'>
                {location.drink1Address}
              </Card.Text>
              <Card.Text className='phone'>{location.drink1Phone}</Card.Text>
              <Card.Text className='description'>
                {location.drink1Description}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} md={4} lg={4} xl={4}>
          <Card>
            <Card.Img src={location.drink2Image} />
            <Card.Body>
              <Card.Title>{location.drink2name}</Card.Title>
              <Card.Text className='address'>
                {location.drink2Address}
              </Card.Text>
              <Card.Text className='phone'>{location.drink2Phone}</Card.Text>
              <Card.Text className='description'>
                {location.drink2Description}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} md={4} lg={4} xl={4}>
          <Card>
            <Card.Img src={location.drink3Image} />
            <Card.Body>
              <Card.Title>{location.drink3name}</Card.Title>
              <Card.Text className='address'>
                {location.drink3Address}
              </Card.Text>
              <Card.Text className='phone'>{location.drink3Phone}</Card.Text>
              <Card.Text className='description'>
                {location.drink3Description}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <TagBar />
      </Row>
    </>
  );
};

export default Drink;
