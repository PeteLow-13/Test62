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
            <Card.Img src={location.image} />
            <Card.Body>
              <Card.Title>Port Gamble Guest Houses</Card.Title>
              <Card.Text className='address'>Port Gamble, Washington</Card.Text>
              <Card.Link
                className='link'
                target='blank'
                href='portgambleguesthouse.com'
              >
                {/* <a href='portgambleguesthouse.com' target='blank'> */}
                www.portgambleguesthouse.com/
                {/* </a> */}
              </Card.Link>
              <Card.Text className='phone'>(360)-688-4441</Card.Text>
              <Card.Text className='description'>
                This hotel is 5 miles from Kingston ferry, with a casino, gym,
                meeting space, plus a gallery of indigenous artwork, a
                courtyard, multiple eateries and bars, and a nightclub/music
                venue. A ferry shuttle, and parking for RVs and cars are
                available.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} md={4} lg={4} xl={4}>
          <Card>
            <Card.Img src={location.image} />
            <Card.Body>
              <Card.Title>The Point Hotel</Card.Title>
              <Card.Text className='address'>
                7989 NE Salish Lane, ​ Kingston, WA 98346
              </Card.Text>
              <Card.Link className='link'>
                <a href='www.thepointcasinoandhotel.com' target='blank'>
                  www.thepointcasinoandhotel.com
                </a>
              </Card.Link>
              <Card.Text className='phone'>(360) 447-8473</Card.Text>
              <Card.Text className='description'>
                Historic homes in town can be rented for a special occasion or
                weekend getaway. Guest House 1 is a 3 bedroom 3 bath that sleeps
                10 and Guest House 2 is a 3 bedroom 2 bath which sleeps 8.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} md={4} lg={4} xl={4}>
          <Card>
            <Card.Img src={location.image} />
            <Card.Body>
              <Card.Title>Thorndyke Lodge</Card.Title>
              <Card.Text className='address'>Poulsbo, Washington</Card.Text>
              <Card.Link className='link'>
                <a href='www.vrbo.com/355706' target='blank'>
                  www.vrbo.com/355706
                </a>
              </Card.Link>
              {/* <Card.Text className='phone'>(360) 447-8473</Card.Text> */}
              <Card.Text className='description'>
                This VRBO House (Sleeps 8-12) ​ offers a nature preserve-like
                setting by an unspoiled estuary in the Hood Canal, with
                surrounding old-growth forest
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
