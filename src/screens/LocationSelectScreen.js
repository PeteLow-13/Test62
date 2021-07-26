import React from 'react'
import { Col, Row } from 'react-bootstrap'
import './LocationScreen.css'

const LocationSelectScreen = () => {
    return (
        <div>
            <h1>Whats the point of going to:</h1>
           <Row>
               <Col sm={12} md={6} lg={4} xl={3}>
            <a className='' href='/pnp'>
                <div className='destinationChoice1'>
                    <div className='title-wrapper'>
                        <h3>Point No Point</h3>
                        <span></span>
                    </div>
                </div>
            </a>
            </Col>
            <Col sm={12} md={6} lg={4} xl={3}>
            <a className='' href='portGamble'>
                <div className='destinationChoice2'>
                    <div className='title-wrapper'>
                        <h3>Port Gamble</h3>
                        <span></span>
                    </div>
                </div>
            </a>
            </Col>
            <Col sm={12} md={6} lg={4} xl={3}>
            <a className='' href='orcasIsland'>
                <div className='destinationChoice3'>
                    <div className='title-wrapper'>
                        <h3>Orcas Island</h3>
                        <span></span>
                    </div>
                </div>
            </a>
            </Col>
            </Row>
            <Row>
               <Col sm={12} md={6} lg={4} xl={3}>
            <a className='' href='paulsboro'>
                <div className='destinationChoice4'>
                    <div className='title-wrapper'>
                        <h3>Paulsboro</h3>
                        <span></span>
                    </div>
                </div>
            </a>
            </Col>
            <Col sm={12} md={6} lg={4} xl={3}>
            <a className='' href='kingston'>
                <div className='destinationChoice5'>
                    <div className='title-wrapper'>
                        <h3>Kingston</h3>
                        <span></span>
                    </div>
                </div>
            </a>
            </Col>
            <Col sm={12} md={6} lg={4} xl={3}>
            <a className='' href='camanoIsland'>
                <div className='destinationChoice6'>
                    <div className='title-wrapper'>
                        <h3>Camano Island</h3>
                        <span></span>
                    </div>
                </div>
            </a>
            </Col>
            </Row>
        </div>
    )
}

export default LocationSelectScreen
