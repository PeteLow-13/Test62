import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  Row,
  Col,
  Image,
  ListGroup,
  Card,
  Button,
  Form,
} from 'react-bootstrap';
import Message from '../Components/Message';
import Loader from '../Components/Loader';
import { listLocationDetails } from '../actions/locationActions';

const LocationScreen = ({ match }) => {
  const dispatch = useDispatch();

  const locationDetails = useSelector((state) => state.locationDetails);
  const { loading, error, location } = locationDetails;

  // const userLogin = useSelector((state) => state.userLogin);
  // const { userInfo } = userLogin;

  useEffect(() => {
    dispatch(listLocationDetails(match.params.id));
  }, [dispatch, match]);

  return (
    <>
      <Link className='btn btn-light my-3' to='/locationselect'>
        back to destinations
      </Link>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <>
          <h1>What's the point of going to {location.name}?</h1>
          <Row>
            <Col md={12}>
              <Image src={location.image} alt={location.name} fluid />
            </Col>
          </Row>
          <Row>
            <Col md={2} className='py-3 p-3 center'>
              know
            </Col>
            <Col md={2} className='py-3 p-3 center'>
              go
            </Col>
            <Col md={2} className='py-3 p-3 center'>
              eat
            </Col>
            <Col md={2} className='py-3 p-3 center'>
              drink
            </Col>
            <Col md={2} className='py-3 p-3 center'>
              play
            </Col>
            <Col md={2} className='py-3 p-3 center'>
              stay
            </Col>
          </Row>
          <Row className='know'>
            <Col>
              <h2>know the point of going {location.name}</h2>
              {/* <p>{location.knowContent}</p> */}
            </Col>
          </Row>
          <Row className='go'>
            <Col>
              <h2>how to go {location.name}</h2>
              {/* <p>{location.knowContent}</p> */}
            </Col>
          </Row>
          <Row className='eat'>
            <h2>where to eat {location.name}</h2>
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
                    organic ingredients, offering compostable to go products
                    too!
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
                    A full cafe menu including sandwiches, soups, fresh baked
                    goods, ice cream, snacks, an espresso bar, and retail space
                    with gifts.
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
                    A locally sourced farmhouse restaurant, butcher shop and
                    bakery that offers small batch provisions and dining.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row className='drink'>
            <Col>
              <h2>where to drink {location.name}</h2>
              {/* <p>{location.knowContent}</p> */}
            </Col>
          </Row>
          <Row className='play'>
            <Col>
              <h2>where to play {location.name}</h2>
              {/* <p>{location.knowContent}</p> */}
            </Col>
          </Row>
          <Row className='stay'>
            <h2>where to stay {location.name}</h2>
            <Col sm={12} md={4} lg={4} xl={4}>
              <Card>
                <Card.Img src={location.image} />
                <Card.Body>
                  <Card.Title>Port Gamble Guest Houses</Card.Title>
                  <Card.Text className='address'>
                    Port Gamble, Washington
                  </Card.Text>
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
                    This hotel is 5 miles from Kingston ferry, with a casino,
                    gym, meeting space, plus a gallery of indigenous artwork, a
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
                    Historic homes in town can be rented for a special occasion
                    or weekend getaway. Guest House 1 is a 3 bedroom 3 bath that
                    sleeps 10 and Guest House 2 is a 3 bedroom 2 bath which
                    sleeps 8.
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
                    This VRBO House (Sleeps 8-12) ​ offers a nature
                    preserve-like setting by an unspoiled estuary in the Hood
                    Canal, with surrounding old-growth forest
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </>
      )}
    </>
  );
};

export default LocationScreen;
