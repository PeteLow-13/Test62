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
          <ol>
            <li>
              1. <p>{location.point1}</p>
            </li>
            <li>
              2. <p>{location.point2}</p>
            </li>
            <li>
              3. <p>{location.point3}</p>
            </li>
          </ol>

          <p>bonus point: {location.bonusPoint}</p>
        </Col>
        <TagBar />
      </Row>
    </>
  );
};

export default Know;
