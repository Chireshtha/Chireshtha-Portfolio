import React from 'react'
import { Col, Container, Form, Row } from 'react-bootstrap'
import '../Styles/MyContactPage.css'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import leftimg from '../Images/cartoon.png'
import rightimg from '../Images/fish.png'

const MyContactPage = () => {
  return (
    <Container fluid className='mycontact-container text-light pt-5'>
      <Form>
        <Row className='align-items-center'>
          <div>
            <h1 className='text-center fw-bold pb-5'>Contact Me</h1>
          </div>

          <Col md={2}>
          <img src={leftimg} alt='cartoon left' className='img-fluid' width={'150px'} height={'150px'}/>
          </Col>

          <Col md={4} >

            <Form.Group controlId='formName'>
              <Form.Control type='text' placeholder='Name' required className='rounded-0 mb-5 form-input' />
            </Form.Group>

            <Form.Group controlId='formEmail'>
              <Form.Control type='email' placeholder='Email' className='rounded-0 mb-5 form-input' />
            </Form.Group>

            <Form.Group controlId='formSubject'>
              <Form.Control type='text' placeholder='Subject' className='rounded-0 form-input' />
            </Form.Group>

          </Col>

          <Col md={4} >
            <Form.Group controlId='formMessage'>
              <Form.Control as='textarea' rows={8} placeholder='Enter your message...' className='rounded-0 my-3 form-input1' />
            </Form.Group>
          </Col>

          <Col md={2}>
          <img src={rightimg} alt='fish right' className='img-fluid' width={'120px'} height={'120px'}/> 
          </Col>
        </Row>
      </Form>

      <Row className='align-items-center text-center py-5'>
        <Link><button className='btn btn-lg px-5 send-button'>Send</button></Link>
      </Row>

      <Row className='align-items-center'>
        <div className='d-flex flex-row justify-content-center align-items-center py-4'>
          <a href='https://www.linkedin.com/in/chireshtha-v-4186302a1/' target='_blank' rel='noopener noreferrer' className='px-2 linkedin-icon'><FaLinkedin size={35} /></a>
          <a href='https://github.com/Chireshtha?tab=repositories' target='_blank' rel='noopener noreferrer' className='px-2 github-icon'><FaGithub size={35}  /></a>
        </div>
      </Row>
    </Container>
  )
}

export default MyContactPage
