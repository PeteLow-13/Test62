import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import TagBar from './TagBar';

const Stay = () => {
  const locationDetails = useSelector((state) => state.locationDetails);
  const { location } = locationDetails;

  return (
    <>
      <Row className='stay' id='stay'>
        <h2>where to stay {location.name}</h2>
        <Col sm={12} md={4} lg={4} xl={4}>
          <Card>
            <Card.Img src={location.stay1Image} />
            <Card.Body>
              <Card.Title>{location.stay1name}</Card.Title>
              <Card.Text className='address'>{location.stay1Address}</Card.Text>
              <Card.Text className='phone'>{location.stay1Phone}</Card.Text>
              <Card.Text className='description'>
                {location.stay1Description}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} md={4} lg={4} xl={4}>
          <Card>
            <Card.Img src={location.stay2Image} />
            <Card.Body>
              <Card.Title>{location.stay2name}</Card.Title>
              <Card.Text className='address'>{location.stay2Address}</Card.Text>
              <Card.Text className='phone'>{location.stay2Phone}</Card.Text>
              <Card.Text className='description'>
                {location.stay2Description}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} md={4} lg={4} xl={4}>
          <Card>
            <Card.Img src={location.stay3Image} />
            <Card.Body>
              <Card.Title>{location.stay3name}</Card.Title>
              <Card.Text className='address'>{location.stay3Address}</Card.Text>
              <Card.Text className='phone'>{location.stay3Phone}</Card.Text>
              <Card.Text className='description'>
                {location.stay3Description}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <TagBar />
      </Row>
    </>
  );
};

export default Stay;
