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
          <h2>Know the point of going {location.name}</h2>
          <ol>
            <li>
              <p>{location.point1}</p>
            </li>
            <li>
              <p>{location.point2}</p>
            </li>
            <li>
              <p>{location.point3}</p>
            </li>
          </ol>

          <p className='bonus-point'>bonus point: {location.bonusPoint}</p>
        </Col>
        <TagBar />
      </Row>
    </>
  );
};

export default Know;
