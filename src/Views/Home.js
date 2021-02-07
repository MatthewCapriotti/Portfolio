import React, {Component} from 'react'
import Profile from '../Components/Profile'

class Home extends Component {
 
  render() {
  
    return (
        <>
        <h1 className="profileHeader">Profile</h1>
        <Profile></Profile>
        </>
    );
    }
}
  
export default Home;