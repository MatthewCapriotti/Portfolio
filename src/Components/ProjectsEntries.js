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
import { RiMoneyDollarCircleLine} from "react-icons/ri";


const ProjectEntry = (props) => {   

return (
<Card bg='light'>
  <Card.Body>
    <Card.Title>{props.projectInfo.title}</Card.Title>
    <Card.Subtitle className="mb-2 text-muted">{props.projectInfo.subtitle}</Card.Subtitle>
    <Card.Text>
      {props.projectInfo.description}
    </Card.Text>
     <Button target="_blank" href={props.projectInfo.gitHubLink} variant="primary">GitHub Code</Button>
  </Card.Body>
</Card>
);

}

class ProjectEntries extends Component {
  
   
 
    render() {
      const entry4 = {
        title: "Investment Account Allocation",
        subtitle: "R | NLP",
        description: "Created a model in R to examine where you should house different investments.  The model takes into account stocks, bonds, and reits and has base assumptions that can be easily changed regarding tax rate and ROI of different investments. The overall finding is that you should put tax-inefficient investments (bonds, REITs) in a traditional IRA and you should put high growth investments (stocks) in a Roth IRA.",
        gitHubLink: "https://github.com/MatthewCapriotti/IraAccountAllocation"
      }

      const entry3 = {
        title: "Nuthouse iOS App",
        subtitle: "Swift | Firebase | AWS | MailChimp API | Giphy API",
        description: "Developed and launched a social media app using Xcode and Google Cloud functions and databases as well as AWS databases. Integrated the Giphy and MailChimp API's into the app and generated over 1800+ downloads and 100+ daily active users for multiple months.",
        gitHubLink:"https://github.com/MatthewCapriotti/AnonApp"
      }

      const entry2 = {
        title: "Betting Odds API",
        subtitle: "Python | Flask | Wordpress | Heroku | Google Cloud",
        description: "Programmed a web scraper to identify arbritage opportunities between multiple sports betting websites.  Later converted this script into an API to display the odds of all upcoming sporting events on my website.",
        gitHubLink:"https://github.com/MatthewCapriotti/BetAPI"
      }

      const entry1 = {
        title: "Personal Website",
        subtitle: "React | JavaScript | Bootstrap | Github",
        description: "Built personal website in order to gain experience with React as well as to showcase past experience and projects.",
        gitHubLink: "https://github.com/MatthewCapriotti/Portfolio"
      }

      return(
        <Container>
          <Row >
                <Col md={{span: 3}}><RiMoneyDollarCircleLine size={250}/></Col>
                <Col className="my-auto"><ProjectEntry projectInfo={entry4} /></Col>
          </Row>
        
        <br />
        <br />
            <Row >
                <Col className="my-auto"><ProjectEntry projectInfo={entry3} /></Col>
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
                <Col className="my-auto"><ProjectEntry projectInfo={entry1}/></Col>
                <Col md={{span: 4}}><Image style={{height:'auto',width:'100%'}} rounded src={reactLogo} /></Col>
            </Row>
        

        </ Container>
    );
 
  }
}

export default ProjectEntries;