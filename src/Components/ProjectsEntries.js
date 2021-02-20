import Card from 'react-bootstrap/Card'
import React, {Component} from 'react'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import nuthouseLogo from '../images/nuthouseLogo.png'
import betApi from '../images/betAPI.png'
import reactLogo from '../images/reactLogo.svg'


const ProjectEntry = (props) => {   

return (
<Card bg='light'>
  <Card.Body>
    <Card.Title>{props.projectInfo.title}</Card.Title>
    <Card.Subtitle className="mb-2 text-muted">{props.projectInfo.subtitle}</Card.Subtitle>
    <Card.Text>
      {props.projectInfo.description}
    </Card.Text>
    <Button variant="primary">More Info</Button>
  </Card.Body>
</Card>
);

}

class ProjectEntries extends Component {
  
   
 
    render() {
      const entry1 = {
        title: "Nuthouse iOS App",
        subtitle: "Swift | Firebase | AWS | MailChimp API | Giphy API",
        description: "Developed and launched a social media app using Xcode and Google Cloud functions and databases as well as AWS databases. Integrated the Giphy and MailChimp API's into the app and generated over 1800+ downloads and 100+ daily active users for multiple months."
      }

      const entry2 = {
        title: "Betting Odds API",
        subtitle: "Python | Flask | Wordpress | Heroku | Google Cloud",
        description: "Programmed a web scraper to identify arbritage opportunities between multiple sports betting websites.  Later converted this script into an API to display the odds of all upcoming sporting events on my website."
      }

      const entry3 = {
        title: "Personal Website",
        subtitle: "React | JavaScript | Bootstrap | Github",
        description: "Built personal website in order to gain experience with React as well as to showcase past experience and projects."
      }

      return(
        <Container>
            <Row >
                <Col className="my-auto"><ProjectEntry projectInfo={entry1} /></Col>
                <Col md={{span: 3}}><Image className="profile-image" rounded src={nuthouseLogo} /></Col>
            </Row>
        
        <br />
        <br />
        <Row >
                <Col md={{span: 7}}><Image style={{height:'auto',width:'100%'}} rounded src={betApi} /></Col>
                <Col className="my-auto"><ProjectEntry projectInfo={entry2}/></Col>
            </Row>
            <br />
        <br />
        <Row >
                <Col className="my-auto"><ProjectEntry projectInfo={entry3}/></Col>
                <Col md={{span: 4}}><Image style={{height:'auto',width:'100%'}} rounded src={reactLogo} /></Col>
            </Row>
        

        </ Container>
    );
 
  }
}

export default ProjectEntries;