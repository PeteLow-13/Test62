import React from 'react';
import { Row, Col } from 'react-bootstrap';

const TagBar = () => {
  return (
    <>
      <Row>
        <Col md={2} className='py-3 p-3 center'>
          <a href='#know'>know</a>
        </Col>
        <Col md={2} className='py-3 p-3 center'>
          <a href='#go'>go</a>
        </Col>
        <Col md={2} className='py-3 p-3 center'>
          <a href='#eat'>eat</a>
        </Col>
        <Col md={2} className='py-3 p-3 center'>
          <a href='#drink'>drink</a>
        </Col>
        <Col md={2} className='py-3 p-3 center'>
          <a href='#play'>play</a>
        </Col>
        <Col md={2} className='py-3 p-3 center'>
          <a href='#stay'>stay</a>
        </Col>
      </Row>
    </>
  );
};

export default TagBar;
