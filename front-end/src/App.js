import React from 'react';
import './App.css';
import Home from './components/Home'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import PassengerProfile from './components/passenger/PassengerProfile'
import PassengerDashboard from './components/passenger/PassengerDashboard'

function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" render={props => (
          <React.Fragment>
            <Home />
          </React.Fragment>
        )} />
        <Route path="/passenger_profile" component={PassengerProfile} />
        <Route path="/passenger_dashboard" component={PassengerDashboard} />
      </div>
    </Router>
  );
}

export default App;
