import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'

const Header = () => {
    return (
      <Container fluid>
      <Navbar bg="white" variant="light" sticky="top">
        <Navbar.Brand href={process.env.PUBLIC_URL + "/#"}>MATTHEW CAPRIOTTI</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Item className="pl-5"><Nav.Link href={process.env.PUBLIC_URL + "/#"}>Profile</Nav.Link></Nav.Item>
          <Nav.Item className="pl-5"><Nav.Link href={process.env.PUBLIC_URL + "/#/Projects"}>Projects</Nav.Link></Nav.Item>
          <Nav.Item className="pl-5"><Nav.Link href={process.env.PUBLIC_URL + "/#/Experience"}>Experience</Nav.Link></Nav.Item>
        </Nav>
      </Navbar>
      </Container>
       )
 }
 export default Header