import React, { useState } from 'react'
import '../Styles/MyProjectsPage.css'
import { Card, Col, Container, Row } from 'react-bootstrap'
import projectData from '../API/projectdata'
import * as SiIcons from "react-icons/si";
import { FaChevronDown, FaChevronUp, FaExternalLinkSquareAlt, FaPodcast } from 'react-icons/fa';
import live from '../Images/live.gif'


const MyProjectsPage = () => {
  const [expandedProjectId, setExpandedProjectId] = useState(null);
  const iconColors = {
    SiReact: "#61DAFB",
    SiBootstrap: "#7952B3",
    SiNodedotjs: "#339933",
    SiMongodb: "#47A248",
    SiPython: "#3776AB",
    SiFlask: "#000000",
    SiMysql: "#4479A1",
    SiHtml5: "#E34F26",
    SiCss3: "#1572B6",
    SiJavascript: "#F7DF1E",
  }

  const toggleDescription = (id) => {
    setExpandedProjectId(PrevId => (PrevId === id ? null : id));
  };

  return (
    <Container fluid className='project-container'>
      <Row className='g-5 align-items-center px-lg-5 pb-5'>
        {
          projectData.map((project) => {
            const isExpanded = expandedProjectId === project.id;
            return (
              <Col lg={4} md={6} sm={12} key={project.id}>
                <Card className='d-flex flex-column justify-content-center project-card'>
                  <Card.Img src={project.image} alt={`${project.title} screenshot`} className='fluid-img p-1 rounded-3' height={'300px'} />
                  <Card.Body >
                    <Card.Title className='fw-bold project-title'>{project.title}</Card.Title>
                    <Card.Subtitle className={`project-description fw-semibold text-muted ${isExpanded ? 'expanded' : 'collapsed'}`}>{project.description}</Card.Subtitle>
                    <div className='expand-toggle d-flex justify-content-end align-items-center' onClick={() => { toggleDescription(project.id) }}>
                      {
                        isExpanded ? (
                          <span className='fw-normal'>showless <FaChevronUp color='#26547c' /> </span>
                        ) : (
                          <span className='fw-normal'>showmore <FaChevronDown color='#26547c' /> </span>
                        )
                      }
                    </div>
                    <div className='stack-icons d-flex flex-row justify-content-left align-items-center pt-5'>
                      {project.stack.map((stackIcon, index) => {
                        const IconComponent = SiIcons[stackIcon.icon]
                        return (
                          <div key={index} className='stack-item d-flex flex-column justify-content-left align-items-center pt-2'>
                            {IconComponent && <IconComponent className='stack-icon' color={iconColors[stackIcon.icon]} />}
                            <span className='stack-name'>{stackIcon.name}</span>
                          </div>
                        );
                      })}
                    </div>
                    <div className='d-flex flex-row justify-content-between align-items-center mx-2'>
                      <FaPodcast size={30} color='#06d6a0' className='podcast-animation' />
                      <img src={live} alt='live streaming gif' width={'130px'} height={'100px'} />
                      <a href={project.demo} target='_blank' rel='noopener noreferrer'><button className='explore-btn btn btn-lg fw-bold'>Live Demo <FaExternalLinkSquareAlt size={15} /></button></a>
                    </div>
                  </Card.Body>  
                </Card>
              </Col>
            );
          })
        }
      </Row>
    </Container>
  )
}

export default MyProjectsPage
