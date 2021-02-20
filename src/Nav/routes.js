import { HashRouter, Route, Switch} from 'react-router-dom';
import React from 'react';
import Experience from '../Views/Experience'
import Home from '../Views/Home'
import Projects from '../Views/Projects'
import Header from '../Components/Header'
import Footer from '../Components/Footer'




export const Routes = () => {
  

    return (
      <div>
        <Header />
        <div className="container">
         <HashRouter >
          <Switch>
          <Route path="/Experience" component={Experience}/>
          <Route path="/Projects" component={Projects} />
          <Route exact path="/" component={Home} />
        </Switch>
        </HashRouter>
        </div>
        <Footer />
      </div>
    );
  };