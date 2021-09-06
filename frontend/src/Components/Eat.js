import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import TagBar from './TagBar';

const Eat = () => {
  const locationDetails = useSelector((state) => state.locationDetails);
  const { location } = locationDetails;

  return (
    <>
      <Row className='eat' id='eat'>
        <h2>where to eat {location.name}</h2>
        <Col sm={12} md={4} lg={4} xl={4}>
          <Card>
            <Card.Img src={location.eat1Image} />
            <Card.Body>
              <Card.Title>{location.eat1name}</Card.Title>
              <Card.Text className='address'>
                {location.eat1Address}
              </Card.Text>
              <Card.Text className='phone'>{location.eat1Phone}</Card.Text>
              <Card.Text className='description'>
                {location.eat1Description}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} md={4} lg={4} xl={4}3
          <Card>
            <Card.Img src={location.eat2Image} />
            <Card.Body>
              <Card.Title>{location.eat2name}</Card.Title>
              <Card.Text className='address'>
                {location.eat2Address}
              </Card.Text>
              <Card.Text className='phone'>{location.eat2Phone}</Card.Text>
              <Card.Text className='description'>
                {location.eat2Description}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} md={4} lg={4} xl={4}>
          <Card>
            <Card.Img src={location.eat3Image} />
            <Card.Body>
              <Card.Title>{location.eat3name}</Card.Title>
              <Card.Text className='address'>
                {location.eat3Address}
              </Card.Text>
              <Card.Text className='phone'>{location.eat3Phone}</Card.Text>
              <Card.Text className='description'>
                {location.eat3Description}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} md={4} lg={4} xl={4}>
          <Card>
            <Card.Img src={location.image} />
            <Card.Body>
              <Card.Title>Scratch kitchen</Card.Title>
              <Card.Text className='address'>
                32420 N Rainier Ave ​ Port Gamble, WA 98364
              </Card.Text>
              <Card.Text className='phone'>(360) 297-7636</Card.Text>
              <Card.Text className='description'>
                Good food, cold beer, nice people, awesome view. Local and
                organic ingredients, offering compostable to go products too!
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} md={4} lg={4} xl={4}>
          <Card>
            <Card.Img src={location.image} />
            <Card.Body>
              <Card.Title>Port Gamble General Store</Card.Title>
              <Card.Text className='address'>
                32400 N Rainier Ave ​Port Gamble, WA 98364{' '}
              </Card.Text>
              <Card.Text className='phone'>(360) 297-7636</Card.Text>
              <Card.Text className='description'>
                A full cafe menu including sandwiches, soups, fresh baked goods,
                ice cream, snacks, an espresso bar, and retail space with gifts.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} md={4} lg={4} xl={4}>
          <Card>
            <Card.Img src={location.image} />
            <Card.Body>
              <Card.Title>Butcher & Baker</Card.Title>
              <Card.Text className='address'>
                4719 NE State Highway 104, Port Gamble WA 98364
              </Card.Text>
              <Card.Text className='phone'>(360) 297-9500</Card.Text>
              <Card.Text className='description'>
                
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <TagBar />
      </Row>
    </>
  );
};

export default Eat;
