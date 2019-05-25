import React from 'react';
import './App.css';
import Home from './components/Home'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import PassengerProfile from './components/passenger/PassengerProfile'
import PassengerDashboard from './components/passenger/PassengerDashboard'
import NewRide from './components/passenger/NewRide'
import DriverProfile from './components/driver/DriverProfile'

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
        <Route path="/driver_profile" component={DriverProfile} />
        <Route path="/find_ride" component={NewRide} />
      </div>
    </Router>
  );
}

export default App;
