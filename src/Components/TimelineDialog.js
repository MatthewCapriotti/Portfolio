import Modal from 'react-bootstrap/Modal'
import React from 'react'
import Button from 'react-bootstrap/Button'
import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            {props.title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Container>
            <Row >
                <Col ><p>
            {props.text}
          </p></Col>
                <Col md={{span: 6}}>
                <div className="mb-4">
                <Image style={{height:'auto',width:'100%'}} rounded src={props.pic1} />
                </div>
                <Image style={{height:'auto',width:'100%'}} rounded src={props.pic2} />
                </Col>
            </Row>
        </Container>
          
          
          
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
  
  export default MyVerticallyCenteredModal