import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './components/About';
import LocationDetails from './components/LocationDetails';
import UserDashboard from './components/UserDashboard';

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={About} />
          <Route path="/location/:id" component={LocationDetails} />
          <Route path="/dashboard" component={UserDashboard} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;