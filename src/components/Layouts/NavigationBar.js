import React from 'react'
import { NavLink } from 'react-router-dom';
import { Container, Nav, Navbar } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import logoimg from '../Images/portfolio-logo7.png'
import logotext from '../Images/portfolio-logo8.png'
import '../Styles/NavigationBar.css'
import useToggleBtn from '../hooks/useToggleBtn'
import useDropdown from '../hooks/useDropdown'
import { FaTimes } from 'react-icons/fa'
import { FaBars } from 'react-icons/fa'
import home from '../Images/home.png'
import about from '../Images/about.png'
import projects from '../Images/projects.png'
import resume from '../Images/resume.png'
import contact from '../Images/contact.png'
import centerImg from '../Images/on-fire-flames.gif'
import circleimg from '../Images/circle-img1.png'

const NavigationBar = () => {
    const { togglerRef, handlemobileDropdownItemClick } = useDropdown();
    const { isToggled, handleToggle } = useToggleBtn();

    return (
        <Navbar id='#navbar' variant="dark" expand='md' className="fs-5 fixed-top custom-navbar">
            <Container>
                <Navbar.Brand as={NavLink} to="/" >
                    <img src={logoimg} alt="Brighture logo loading" height="70" className="custom-img" />
                    <img src={logotext} alt="text loading" height="45" className="custom-img" />
                </Navbar.Brand>
                <Navbar.Toggle ref={togglerRef} aria-controls="navbar-nav" className="custom-navbar-toggler" onClick={handleToggle}>{isToggled ? <FaTimes size={24} /> : <FaBars size={24} />}
                </Navbar.Toggle>
                <Navbar.Collapse id="navbar-nav" className="navbar-collapse">
                    <div className='center-icon'>
                        <img src={centerImg} alt='center img icon' width={'100px'} height={'100px'} className='center-img' />
                        <Nav className="custom-nav-items">
                            <div className='nav-circle circle-img'>
                                <img src={circleimg} alt='circle img icon' width='250px' height='250px' />
                            </div>

                            <div className='nav-circle nav-home'>
                                <Nav.Link href="#home" className='custom-nav-link' onClick={handlemobileDropdownItemClick}><img src={home} alt='home img icon' width='50px' className='custom-design' />
                                </Nav.Link>
                            </div>

                            <div className='nav-circle nav-about'>
                                <Nav.Link href="#about-me" className='custom-nav-link' onClick={handlemobileDropdownItemClick}><img src={about} alt='about img icon' width='60px' className='custom-design' />
                                </Nav.Link>
                            </div>

                            <div className='nav-circle nav-projects'>
                                <Nav.Link href="#my-projects" className='custom-nav-link' onClick={handlemobileDropdownItemClick}><img src={projects} alt='projects img icon' width='50px' className='custom-design' />
                                </Nav.Link>
                            </div>

                            <div className='nav-circle nav-resume'>
                                <Nav.Link href="#my-resume" className='custom-nav-link' onClick={handlemobileDropdownItemClick}><img src={resume} alt='resume img icon' width='50px' className='custom-design' />
                                </Nav.Link>
                            </div>

                            <div className='nav-circle nav-contact'>
                                <Nav.Link href="#my-contacts" className='custom-nav-link' onClick={handlemobileDropdownItemClick}><img src={contact} alt='contact img icon' width='50px' className='custom-design' />
                                </Nav.Link>
                            </div>
                        </Nav>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavigationBar
