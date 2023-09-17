import React from 'react'
import { Container,Nav,Navbar } from 'react-bootstrap'
import { HashLink } from 'react-router-hash-link'
import './App.css'
const NavBar = () => {
  return (
    <>
        <Navbar collapseOnSelect expand="lg" className="navbar">
                <Container>
                    <Navbar.Brand to="/"><img src="images/618b5b33c589e179c2c8b27c_Shiloh New Logo-01-p-3200.png" alt="#" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="navlinks ms-auto">
                                <HashLink to="/" className='Home'> Home</HashLink>
                                <HashLink to="/#lstest">Latest Builds</HashLink>
                                <HashLink to="/#process">Process</HashLink>
                                <HashLink to="/#services">Services</HashLink>
                                <HashLink to="/#contact">Contact Us</HashLink>
                                <HashLink to="/project">Projects</HashLink>
                            </Nav>
                    </Navbar.Collapse>
                </Container>
        </Navbar>
    </>
  )
}

export default NavBar
