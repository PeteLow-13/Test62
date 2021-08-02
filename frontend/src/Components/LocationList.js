import React from 'react'

import { Row, Col } from 'react-bootstrap';
import Location from './Location' 

const LocationList = () => {
    return (
        <>
        <Row>
            {locations.map((location) => (
                <Col key={location._id} sm={12} md={6} lg={4} xl={3}>
                <Location location={location} />
              </Col>
            ))}
        </Row>
        </>
    )
}

export default LocationList
