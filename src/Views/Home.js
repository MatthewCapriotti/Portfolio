import React, {Component, createRef} from 'react'
import Profile from '../Components/Profile'
import Footer from '../Components/Footer'
import Projects from '../Views/Projects'
import Experience from '../Views/Experience'
import Header from '../Components/Header'

class Home extends Component {

    constructor(props) {
        super(props);
        this.scrollProfile = createRef();
        this.scrollProjects = createRef();
        this.scrollExperience = createRef();
        this.scrollContact = createRef();
      }

      scrollSmoothProfile = () => {
        this.scrollProfile.current.scrollIntoView({ behavior: "smooth" });
      };
      scrollSmoothProjects= () => {
        this.scrollProjects.current.scrollIntoView({ behavior: "smooth" });
      };
      scrollSmoothExperience = () => {
        this.scrollExperience.current.scrollIntoView({ behavior: "smooth" });
      };
      scrollSmoothContact = () => {
        this.scrollContact.current.scrollIntoView({ behavior: "smooth" });
      };
      
 
  render() {
    const scrollFunctions = {
        profile: this.scrollSmoothProfile,
        projects: this.scrollSmoothProjects,
        experience: this.scrollSmoothExperience,
        contact: this.scrollSmoothContact
    }
  
    return (
        <>
        <Header scrollFunctions={scrollFunctions}/>
        <div ref={this.scrollProfile}>
        <Profile></Profile>
        </div>
       
        <br />
        <br />
        <div ref={this.scrollProjects}>
        <Projects></Projects>
        </div>
        
        <div ref={this.scrollExperience}>
        <Experience></Experience>
        </div>
        <div ref={this.scrollContact}>
        <Footer />
       </div>
        </>
    );
    }
}
  
export default Home;