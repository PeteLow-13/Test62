import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import TagBar from './TagBar';

const Know = () => {
  const locationDetails = useSelector((state) => state.locationDetails);
  const { location } = locationDetails;

  return (
    <>
      <Row className='know' id='know'>
        <Col>
          <h2>know the point of going {location.name}</h2>
          {/* <p>{location.knowContent}</p> */}
        </Col>
        <TagBar />
      </Row>
    </>
  );
};

export default Know;
