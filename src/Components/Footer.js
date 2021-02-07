
import React, {Component} from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const ColoredLine = ({ color }) => (
  <hr
      style={{
          color: color,
          backgroundColor: color,
          height: 1
      }}
  />
);


class Footer extends Component {
  
  render() {
    const description = "Made by Matthew Capriotti"
    
    return (
      <div className="footer">
        <ColoredLine color="black" />
      <Container>
        <Row className="justify-content-md-center">
          <Col xs lg="2">904-434-6685</Col>
          <Col xs lg="2"><a href="mailto:matthewcapriotti4@gmail.com" className="emailLink">matthewcapriotti4@gmail.com</a></Col>
        </Row>
      </Container>
      <p className="mt-2">{description}</p></div>
        
    );
    }
}
  
export default Footer;
