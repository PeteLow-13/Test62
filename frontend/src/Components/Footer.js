import React from 'react';
import './Footer.css';
import * as FaIcons from 'react-icons/fa';
import { Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <>
      <footer class='mainfooter' role='contentinfo'>
        {/* <div class="footer-middle"> */}
        <div class='container'>
          <Row>
            <Col className='col-md-3 col-sm-6'>
              {/* <!--Column1--> */}
              <a href='/locations'>destinations</a>
            </Col>

            <Col className='col-md-3 col-sm-6'>
              {/* <!--Column1--> */}
              <a href='/about'>About us</a>
            </Col>
            <Col className='col-md-3 col-sm-6'>
              {/* <!--Column1--> */}
              <a href='/contact'>Contact us</a>
            </Col>
            <Col class='col-md-3 col-sm-6'>
              {/* <!--Column1--> */}

              <h4>Follow Us</h4>
              <ul class='social-network social-circle'>
                <li>
                  <a href='#' class='icoFacebook' title='Facebook'>
                    <i class='fa fa-facebook'></i>
                  </a>
                </li>
                <li>
                  <a href='#' class='icoLinkedin' title='Linkedin'>
                    <i class='fa fa-linkedin'></i>
                  </a>
                </li>
              </ul>
            </Col>
          </Row>
          <Row>
            <Col className='col-md-12 copy'>
              <p className='text-center'>
                &copy; Copyright 2021 - The Point of Going. All rights reserved.
              </p>
            </Col>
          </Row>
        </div>
      </footer>
    </>
  );
};

export default Footer;
