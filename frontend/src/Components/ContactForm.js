import React from 'react';
import { Form, Button, Image } from 'react-bootstrap';
import IconBar from '../images/travelicons.jpg';

const ContactForm = () => {
  return (
    <>
      <Form>
        <Form.Group controlId='name'>
          <Form.Label>Your Name</Form.Label>
          <Form.Control type='name' placeholder='Your name' />
        </Form.Group>

        <Form.Group controlId='formBasicEmail'>
          <Form.Label>Your Email</Form.Label>
          <Form.Control type='email' placeholder='Your email' />
          <Form.Text className='text-muted'>
            {/* We'll never share your email with anyone else. */}
          </Form.Text>
        </Form.Group>

        <Form.Group controlId='exampleForm.ControlTextarea1'>
          <Form.Label>Message</Form.Label>
          <Form.Control as='textarea' rows={3} placeholder='Your Message' />
        </Form.Group>

        <Form.Group controlId='emailList'>
          <Form.Check type='checkbox' label='Subscribe to our Email updates' />
        </Form.Group>

        <Button variant='primary' type='submit'>
          Send
        </Button>
      </Form>
      <Image src={IconBar} alt='icon bar' fluid />
    </>
  );
};

export default ContactForm;
