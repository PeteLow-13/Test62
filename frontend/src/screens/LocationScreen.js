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
import Know from '../Components/Know';
import TagBar from '../Components/TagBar';
import Go from '../Components/Go';
import Eat from '../Components/Eat';
import Drink from '../Components/Drink';
import Play from '../Components/Play';
import Stay from '../Components/Stay';

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
          <TagBar />
          <Know />
          <Go />
          <Eat />
          <Drink />
          <Play />
          <Stay />
        </>
      )}
    </>
  );
};

export default LocationScreen;
