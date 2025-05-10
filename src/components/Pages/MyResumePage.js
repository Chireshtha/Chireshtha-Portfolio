import { Button, Col, Container, Row } from 'react-bootstrap'
import resumeimg from '../Images/resumeimg3.png'
import resumeimg1 from '../Images/tree.png'
import tree from '../Images/tree3.png'
import birdanimation from '../Images/bird.png'
import birdanimation1 from '../Images/bird1.png'
import '../Styles/MyResumePage.css'

const MyResumePage = () => {
  return (
    <Container fluid className='resume-container py-5'>
      <Row className='align-items-center'>
        <Col md={3} className='p-0' >
          <p className='main-text ps-3'>I began my career in a non-IT role as a Senior Scientific Analyst, where I spent over 5 years honing my research and analytical skills. With a strong passion for technology, I transitioned into IT, trained in Full Stack Development, and built multiple real-world projects. Now, I'm actively seeking opportunities as a React Frontend or Full Stack Developer.</p>
          <img src={birdanimation1} alt='Bird flying' className='img-fluid bird-img' width={'75px'} height={'75px'} />
          <img src={resumeimg1} alt='tree left' className='img-fluid tree-img' width={'250px'} height={'250px'} />
        </Col>
        <Col md={6} className='d-flex justify-content-center'>
          <h3 className='non-it-text fw-semibold'>NON-IT</h3>
          <h5 className='full-stack-text fw-semibold'>FULL STACK DEVELOPER</h5>
          <h5 className='oppotunity-text fw-semibold'>LOOKING FOR OPPORTUNITY</h5>
          <img src={resumeimg} alt='Resume visual' className='img-fluid resume-img' width={'500px'} height={'500px'}/>
        </Col>
        <Col md={3}>
          <div className='px-5'>
          <p className='main-text-1 fs-5'>You can view my resume <br/> <span className='fs-2'>Click Here!</span></p>
          </div>
          <a href='https://drive.google.com/file/d/1NTsNgZPaZ75N3Y1fUlVZz3RLvAkbFLMJ/view?usp=sharing' target='_blank' rel='noopener noreferrer' className='text-decoration-none'><Button className='btn btn-lg download-btn'>Download</Button></a>
          <img src={tree} alt='tree right' className='img-fluid tree-img1' width={'200px'} height={'100px'} />
          <img src={birdanimation} alt='Bird right' className='img-fluid tree-img2' width={'75px'} height={'75px'} />
        </Col>
      </Row>
    </Container>
  )
}

export default MyResumePage
