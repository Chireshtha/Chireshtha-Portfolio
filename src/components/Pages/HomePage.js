import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import '../Styles/HomePage.css'
import myImage from '../Images/myImage2.png'
import bgImg1 from '../Images/star1.png'
import bgImg2 from '../Images/star4.png'
import bgImg3 from '../Images/star5.png'
import bgImg4 from '../Images/github.png'
import bgImg5 from '../Images/linkedin.png'
import linkedinpreview from '../Images/linkedin-preview.png'
import githubpreview from '../Images/github-preview.png'
import star from '../Images/star7.png'
import star1 from '../Images/star10.png'


const HomePage = () => {
  return (
    <Container fluid className='home-container text-light d-flex justify-content-center align-items-center px-5'>
      <div className='bg-design'>
        <img src={bgImg1} alt='bg-img animation' className='img-fluid bg-img1' />
        <img src={bgImg2} alt='bg-img animation' className='img-fluid bg-img2' />
        <img src={bgImg3} alt='bg-img animation' className='img-fluid bg-img3' />

        <div className='github-wrapper'>
          <a href='https://github.com/Chireshtha?tab=repositories' target='_blank' rel='noopener noreferrer'> <img src={bgImg4} alt='bg-img animation' className='img-fluid bg-img4' /></a>
          <div className='github-hover-preview'>
            <img src={githubpreview} alt='github preview' />
          </div>
        </div>

        <div className='linkedin-wrapper'>
          <a href='https://www.linkedin.com/in/chireshtha-v-4186302a1/' target='_blank' rel='noopener noreferrer'><img src={bgImg5} alt='bg-img animation' className='img-fluid bg-img5' /></a>
          <div className='linkedin-hover-preview'>
            <img src={linkedinpreview} alt='linkedin preview' />
          </div>
        </div>
        <img src={star} alt='bg-img animation' className='img-fluid bg-img6' />
        <img src={star1} alt='bg-img animation' className='img-fluid bg-img7' />
      </div>

      <Row className='align-items-center'>
        <Col md={6}>
          <h5 className='pb-3' >Hello, it's me! </h5>
          <h1 className='display-2 fw-semibold py-3 text-info'>Chireshtha V</h1>
          <h3 className='pb-3 fw-semibold'>Full Stack Developer | React.js Enthusiast</h3>
          <p className='pb-3 fw-light lh-lg'>I'm a passionate Full Stack Developer with a strong focus on building responsive, high-performance websites and web apps. I specialize in React.js - crafting clean, scalable solutions with a user-first approach.</p>
        </Col>
        <Col md={6} className='px-5 text-center'>
          <img src={myImage} alt='my img loading' className='img-fluid custom-my-image mx-auto' />
        </Col>
      </Row>
    </Container>
  )
}

export default HomePage
