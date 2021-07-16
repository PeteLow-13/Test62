import React from 'react'
import ferry2 from '../assets/ferry2.jpeg'
import pnp from '../assets/pointNoPointPH.jpeg'
import pgph from '../assets/portGamblePH.jpeg'

const LocationTest = () => {
    return (
        <div>
            <Row> 
            <Image src={ferry2}></Image>
            <Col md={3}>
            <a>
                <div className='one' style={{backgroundImage: `url(${pnp})`
            }}>
                    <div>
                        <h3>Point No Point</h3>
                    </div>
                </div>
            </a>
            </Col>
            <Col md={3}>
            <a>
                <div className='one' style={{backgroundImage: `url(${ferry2})`
            }}>
                    <div>
                        <h3>Ferries</h3>
                    </div>
                </div>
            </a>
            </Col>
            <Col md={3}>
            <a>
                <div className='one' style={{backgroundImage: `url(${pgph})`
            }}>
                    <div>
                        <h3>Port Gamble</h3>
                    </div>
                </div>
            </a>
            </Col>
            </Row>
        </div>
    )
}

export default LocationTest
