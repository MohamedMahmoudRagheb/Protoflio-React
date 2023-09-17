import React, { useRef } from 'react';
import './Email.css'
import emailjs from '@emailjs/browser';
import { Container,Row,Col} from 'react-bootstrap'

const EmailSection = () => {

    const form = useRef();
    const sendEmail = (e) => {

    e.preventDefault();


    // let YOUR_SERVICE_ID=' service_09ejcif';
    // let YOUR_TEMPLATE_ID ='template_wzlqehs';
    // let YOUR_PUBLIC_KEY ='T938iDQghNuAuJwyg';

    emailjs.sendForm('service_09ejcif', 'template_wzlqehs', form.current, 'T938iDQghNuAuJwyg')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      
      e.target.reset()
  };
  return (
    <div className='Sectoin6' id='contact'>
    <Container>
        <h1>Contant Us</h1>
      <Row className='Contact'>
        <Col md={6} sm={12} className='data'>
        <p><span>Email: </span>mohamedragheb@gmail.com</p>
        <p><span>Phone: </span>01246451405</p>
        <p><span>Address: </span>Al-Mansora</p>
        </Col>
        <Col  md={6} sm={12} >
          <form ref={form} onSubmit={sendEmail}>
            <input type="text" name="user_name" placeholder='Name' />
            <input type="email" name="user_email" placeholder='Email' />
            <textarea name="message" placeholder='Massage' />
            <input type="submit" value="Send Massage" placeholder='Message' />
          </form>
        </Col>
      </Row>
    </Container>
    </div>
  )
}

export default EmailSection
