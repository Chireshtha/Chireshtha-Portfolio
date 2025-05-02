import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import roadmap from '../Images/roadmap1.png'
import cloud from '../Images/cloud.png'
import girl from '../Images/girl.png'
import '../Styles/AboutMePage.css'


const AboutMePage = () => {
  return (
    <Container fluid className='about-container py-5 d-flex  justify-content-center align-items-center'>
      <Row>
        <Col lg={7} md={12}  className='p-0 flex-column'>
          <div className='roadmap text-light text-center'>
          <img src={roadmap} alt='roadmap loading' className='img-fluid road-img px-5' />
          <img src={girl} alt='girl walking' className='img-fluid girl-img'/>
          <img src={cloud} alt='bg-cloud' className='img-fluid cloud-img'/>
            <div className='roadmap-item-1'>
              <strong>2013 – 2017</strong> 
            Graduated B.E. in Computer Science (CSE)
            </div>
            <div className='roadmap-item-2'>
            <strong>2017 – 2018</strong> 
            Completed Java Training
            </div>
            <div className='roadmap-item-3'>
            <strong>2018 – 2023</strong> 
            Worked in Non-IT (Senior Scientific Analyst)
            </div>
            <div className='roadmap-item-4'>
            <strong>2023 – 2024</strong> 
            Completed Full Stack Development Courses & job searching
            </div>
            <div className='roadmap-item-5'>
            <strong>2024 – Present</strong> 
            Developing personal projects & searching opportunities
            </div>
          </div>
        </Col>
        <Col lg={5} md={12} className='text-light px-5'>
          <p className='pb-2 lh-lg'>
            Hello! I’m <strong>Chireshtha</strong>, a dedicated and self-driven <strong>Full Stack Developer</strong> with a strong passion for building modern, responsive, and user-focused web applications. I specialize in <strong>React.js</strong>.
          </p>
          <p className='pb-2 lh-lg'>
            My journey into tech began after 4+ years working as a <strong>Senior Scientific Analyst</strong> and 10 months as a <strong>Consultant</strong>. Inspired by the power of web development, I made a career switch and completed a <strong>one-year Full Stack Development course.</strong> </p>
          <p className='pb-2 lh-lg'>
            I’m currently seeking opportunities as a <strong>React.js</strong>, <strong>Frontend or Full Stack Developer</strong> — open to remote or onsite roles in <strong>Chennai or Bangalore</strong>.
          </p>
        </Col>
      </Row>
    </Container>
  )
}

export default AboutMePage
