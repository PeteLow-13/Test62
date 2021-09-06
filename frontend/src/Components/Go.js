import React from 'react';
import { Row, Col, Image } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import TagBar from './TagBar';

const Go = () => {
  const locationDetails = useSelector((state) => state.locationDetails);
  const { location } = locationDetails;
  return (
    <>
      <Row className='go' id='go'>
        <Col md={12}>
          <h2>how to go {location.name}</h2>

          <Image src={location.goImage} alt={location.name} fluid />
          <h3>{location.go1h3}</h3>
          <p>{location.go1all}</p>
          <h3>{location.go2h3}</h3>
          <p>{location.go2all}</p>
          <h3>{location.go3h3}</h3>
          <p>{location.go3all}</p>
          {/* <ul>
            <li>
              <p>{location.go1li1}</p>
            </li>
            <li>{location.go1li2}</li>
            <li>{location.go1li3}</li>
          </ul> */}
        </Col>
        <TagBar />
      </Row>
    </>
  );
};

export default Go;
