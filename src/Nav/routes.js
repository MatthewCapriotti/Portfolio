import { Route, Switch, Redirect } from 'react-router-dom';
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
        <Switch>
          <Route exact path="/Profile" component={Home} />
          <Route exact path="/Portfolio">
            <Redirect to="/Profile" />
          </Route>
          <Route exact path="/Experience" component={Experience} />
          <Route exact path="/Projects" component={Projects} />
        </Switch>
        </div>
        <Footer />
      </div>
    );
  };