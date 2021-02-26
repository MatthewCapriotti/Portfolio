import React, {Component} from 'react'
import ProjectEntries from '../Components/ProjectsEntries.js'

class Projects extends Component {
 
  render() {
  
    return (
        <>
        <br />
        <br />
        <br />
        <h1 className="profileHeader">Projects</h1>
        <ProjectEntries />
        </>
    );
    }
}
  
export default Projects;