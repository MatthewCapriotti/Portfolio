import { HashRouter, Route, Switch} from 'react-router-dom';
import React from 'react';
import Home from '../Views/Home'






export const Routes = () => {
  

    return (
      <div>
        
        <div className="container">
         <HashRouter >
          <Switch>
          {/* <Route path="/Experience" component={Experience}/>
          <Route path="/Projects" component={Projects} /> */}
          <Route exact path="/" component={Home} />
        </Switch>
        </HashRouter>
        </div>
        
      </div>
    );
  };