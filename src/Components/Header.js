import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'


const Header = (props) => {
    return (
      <Container fluid>
      
       <Navbar bg="white" variant="light" fixed="top">
        <Navbar.Brand onClick={props.scrollFunctions.profile}>MATTHEW CAPRIOTTI</Navbar.Brand>
        <Nav className="mr-auto">
         {/*  <Nav.Item className="pl-5"><Nav.Link href={process.env.PUBLIC_URL + "/#"}>Profile</Nav.Link></Nav.Item>
          <Nav.Item className="pl-5"><Nav.Link href={process.env.PUBLIC_URL + "/#/Projects"}>Projects</Nav.Link></Nav.Item>
          <Nav.Item className="pl-5"><Nav.Link href={process.env.PUBLIC_URL + "/#/Experience"}>Experience</Nav.Link></Nav.Item> */}
          <Nav.Item className="pl-5"><Nav.Link onClick={props.scrollFunctions.profile}>Profile</Nav.Link></Nav.Item>
          <Nav.Item className="pl-5"><Nav.Link onClick={props.scrollFunctions.projects}>Projects</Nav.Link></Nav.Item>
          <Nav.Item className="pl-5"><Nav.Link onClick={props.scrollFunctions.experience}>Experience</Nav.Link></Nav.Item>
          <Nav.Item className="pl-5"><Nav.Link onClick={props.scrollFunctions.contact}>Contact</Nav.Link></Nav.Item>
        </Nav>
      </Navbar> 
      </Container>
       )
    }
 export default Header