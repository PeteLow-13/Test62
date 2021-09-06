import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import TagBar from './TagBar';

const Play = () => {
  const locationDetails = useSelector((state) => state.locationDetails);
  const { location } = locationDetails;

  return (
    <>
      <Row className='play' id='play'>
        <h2>where to Play {location.name}</h2>
        <Col sm={12} md={4} lg={4} xl={4}>
          <Card>
            <Card.Img src={location.play1Image} />
            <Card.Body>
              <Card.Title>{location.play1name}</Card.Title>
              <Card.Text className='address'>{location.play1Address}</Card.Text>
              <Card.Text className='phone'>{location.play1Phone}</Card.Text>
              <Card.Text className='description'>
                {location.play1Description}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} md={4} lg={4} xl={4}>
          <Card>
            <Card.Img src={location.play2Image} />
            <Card.Body>
              <Card.Title>{location.play2name}</Card.Title>
              <Card.Text className='address'>{location.play2Address}</Card.Text>
              <Card.Text className='phone'>{location.play2Phone}</Card.Text>
              <Card.Text className='description'>
                {location.play2Description}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} md={4} lg={4} xl={4}>
          <Card>
            <Card.Img src={location.play3Image} />
            <Card.Body>
              <Card.Title>{location.play3name}</Card.Title>
              <Card.Text className='address'>{location.play3Address}</Card.Text>
              <Card.Text className='phone'>{location.play3Phone}</Card.Text>
              <Card.Text className='description'>
                {location.play3Description}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <TagBar />
      </Row>
    </>
  );
};

export default Play;
