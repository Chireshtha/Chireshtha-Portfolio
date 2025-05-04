import React, { useState } from 'react'
import { Col, Container, Form, Row, Spinner } from 'react-bootstrap'
import '../Styles/MyContactPage.css'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import leftimg from '../Images/cartoon.png'
import rightimg from '../Images/fish.png'
import Validation from '../Forms/ContactFormValidation'

const MyContactPage = () => {
  const [values, setValues] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({})
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors(Validation(values));
    setLoading(true);
    // http://localhost:5000/contact
    try {
      const response = await fetch('https://contact-backend.onrender.com/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      });
      if (response.ok) {
        alert("Message sent successfully");
        setValues({ name: '', email: '', subject: '', message: '' });
      }
      else {
        alert("Failed to send. Please try again.")
      }
    }
    catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Check console.');
    }
    finally {
      setLoading(false);
    }
  };

  return (
    <Container fluid className='mycontact-container text-light pt-5'>
      <Form onSubmit={handleSubmit} noValidate>
        <Row className='align-items-center'>
          <div>
            <h1 className='text-center fw-bold pb-5'>Contact Me</h1>
          </div>

          <Col md={2} >
            <img src={leftimg} alt='cartoon left' className='img-fluid' width={'150px'} height={'150px'} />
          </Col>

          <Col md={4} >

            <Form.Group controlId='formName'>
              <Form.Control type='text' name='name' value={values.name} onChange={handleChange} placeholder='Name' required className='rounded-0 mb-5 form-input' />
              {errors.name && <span className='text-danger name-error'>{errors.name}</span>}
            </Form.Group>

            <Form.Group controlId='formEmail'>
              <Form.Control type='email' name='email' value={values.email} onChange={handleChange} placeholder='Email' required className='rounded-0 mb-5 form-input' />
              {errors.email && <span className='text-danger email-error'>{errors.email}</span>}
            </Form.Group>

            <Form.Group controlId='formSubject'>
              <Form.Control type='text' name='subject' value={values.subject} onChange={handleChange} placeholder='Subject' required className='rounded-0 form-input' />
              {errors.subject && <span className='text-danger subject-error'>{errors.subject}</span>}
            </Form.Group>

          </Col>

          <Col md={4} >
            <Form.Group controlId='formMessage'>
              <Form.Control as='textarea' name='message' value={values.message} onChange={handleChange} rows={8} placeholder='Enter your message...' required className='rounded-0 my-3 form-input1' />
              {errors.message && <span className='text-danger message-error'>{errors.message}</span>}
            </Form.Group>
          </Col>

          <Col md={2}>
            <img src={rightimg} alt='fish right' className='img-fluid' width={'120px'} height={'120px'} />
          </Col>
        </Row>

        <Row className='text-center py-5 d-flex justify-content-center align-items-center'>
          <Col md={3} >
          <button type='submit' className='btn btn-lg px-5 send-button' disabled={loading}>
            {loading ? <Spinner animation='border' size='sm' /> : 'Send'}
          </button>
          </Col>
        </Row>
      </Form>


      <Row className='align-items-center'>
        <div className='d-flex flex-row justify-content-center align-items-center py-4'>
          <a href='https://www.linkedin.com/in/chireshtha-v-4186302a1/' target='_blank' rel='noopener noreferrer' className='px-2 linkedin-icon'><FaLinkedin size={35} /></a>
          <a href='https://github.com/Chireshtha?tab=repositories' target='_blank' rel='noopener noreferrer' className='px-2 github-icon'><FaGithub size={35} /></a>
        </div>
      </Row>
    </Container>
  )
}

export default MyContactPage
