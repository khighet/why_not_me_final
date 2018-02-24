import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Articles from "./pages/Articles";
import Logon from "./pages/Logon";
import Profile from "./pages/Profile";
import Matches from "./pages/Matches";
// import Nav from "./components/Nav.js"


const App = () =>
  <Router>
    <div>
      <Switch>
          <Route exact path="/" component={Articles} />
          <Route exact path="/logon" component={Logon} />
          <Route exact path="/createProfile" component={Profile} />
          <Route exact path="/findMatches" component={Matches} />
      </Switch>  
  </div>
  </Router>



export default App;
