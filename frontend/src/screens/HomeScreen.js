import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Col, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Location from '../Components/Location';
import Loader from '../Components/Loader';
import Message from '../Components/Message';

import { listLocations } from '../actions/locationActions';

const HomeScreen = ({}) => {
  const locationList = useSelector((state) => state.locationList);

  const { loading, error, locations } = locationList;
  // add page and pages where pagination is needed

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listLocations);
  }, [dispatch]);

  return (
    <>
      <h1>destinations</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <Row>
          {locations.map((location) => (
            <Col key={location.id} sm={12} md={12} lg={6} xl={6}>
              <Location location={location} />
            </Col>
          ))}
        </Row>
      )}
    </>
  );
};

export default HomeScreen;
