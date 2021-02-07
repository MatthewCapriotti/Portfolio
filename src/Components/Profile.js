import React, {Component} from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { SocialIcon } from 'react-social-icons';
import Image from 'react-bootstrap/Image'
import profilePic from '../images/profilePic2.jpg'

class Profile extends Component { 
   aboutMeText = "I am an allround web developer. I am a senior programmer with good knowledge of front-end techniques. I love structure and order and I also stand for quality. I love spending time on fixing little details and optimizing web apps. Also I like working in a team, you'll learn faster and much more. As the saying goes: 'two heads are better than one'."
    nameLabel="Name:"
    name = "Matthew Capriotti"
    activitiesLabel = "Activities/Interests:"
    activities = "Weight Lifting, Traveling, Snowboarding, Wakeboarding, Golf, Basektball, Backpacking"
    cloudLabel = "Cloud:"
    clouds = "AWS (Certified), GCP"
    frameworksLabel = "Frameworks:"
    frameworks = "Angular, Node.Js, Flask, ASP.Net, Bootstrap, React"
    languageLabel = "Languages:"
    languages= "Python, C++/C#, Swift, JavaScript, Java, HTML, CSS, SQL, MySQL, TypeScript, VB.Net, VBA, R"
    
  render() {
  
    return (
        <Container>
            <Row className="header-row">
                <Col className="text-center"><h3>About Me</h3></Col>
                <Col className="text-center" ></Col>
                <Col className="text-center" ><h3>Skills</h3></Col>
            </Row>
            <Row>
                <Col className="text-left">
                <div className="padding-bottom"> {this.aboutMeText}
                </div>
                <br />
                <div className="padding-bottom"> 
                    <b>{this.activitiesLabel}</b><br /> {this.activities}<br />
                    </div> 
                </Col>
                <Col className="text-center"><Image className="profile-image" roundedCircle src={profilePic} /></Col>
                <Col >
                    <div className="padding-bottom"> 
                    <b>{this.languageLabel}</b><br /> {this.languages}<br />
                    </div> 
                    <div className="padding-bottom"> 
                    <b>{this.frameworksLabel}</b><br /> {this.frameworks}<br />
                    </div> 
                    <div className="padding-bottom"> 
                    <b>{this.cloudLabel}</b><br /> {this.clouds}<br />
                    </div> 
                    <SocialIcon url="https://www.linkedin.com/in/matthew-capriotti-b38630b3/" style={{ height: 35, width: 35 }}/>
                    <div className="divider"/> 
                    <SocialIcon url="https://www.instagram.com/mattcap4/?hl=en" style={{ height: 35, width: 35 }}  />
                    <div className="divider"/> 
                    <SocialIcon url="https://www.facebook.com/matthew.capriotti/" style={{ height: 35, width: 35 }}  />
                    <div className="divider"/> 
                    <SocialIcon url="https://github.com/MatthewCapriotti" style={{ height: 35, width: 35 }}  />
                </Col>
            </Row>
        </Container>
    );
    }
}
  
export default Profile;