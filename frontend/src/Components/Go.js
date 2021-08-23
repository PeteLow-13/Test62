import React from 'react';
import { Row, Col, Img } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import TagBar from './TagBar';

const Go = () => {
  const locationDetails = useSelector((state) => state.locationDetails);
  const { location } = locationDetails;
  return (
    <>
      <Row className='go' id='go'>
        <Col>
          <h2>how to go {location.name}</h2>
          <Img src={location.image} />
          <h3>{location.go1.h3}</h3>
          <ul>{location.go1.li.map()}</ul>
          {/* <p>{location.knowContent}</p> */}
        </Col>
        <TagBar />
      </Row>
    </>
  );
};

export default Go;
