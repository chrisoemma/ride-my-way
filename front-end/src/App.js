import React from 'react';
import './App.css';
import Home from './components/Home';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import PassengerProfile from './components/passenger/PassengerProfile';
import PassengerDashboard from './components/passenger/PassengerDashboard';
import NewRide from './components/passenger/NewRide';
import DriverProfile from './components/driver/DriverProfile';
import PreviousRides from './components/passenger/PreviousRides';
import OfferedRides from './components/driver/OfferedRides';
import RideRequests from './components/driver/RideRequests';

function App() {
  return (
    <Router>
      <React.Fragment>
        <Route exact path="/" component={Home} />
        <Route path="/passenger_profile" component={PassengerProfile} />
        <Route path="/passenger_dashboard" component={PassengerDashboard} />
        <Route path="/driver_profile" component={DriverProfile} />
        <Route path="/find_ride" component={NewRide} />
        <Route path="/previous_rides" component={PreviousRides} />
        <Route path="/offered_rides" component={OfferedRides} />
        <Route path="/accept_rides" component={RideRequests} />
      </React.Fragment>
    </Router>
  );
}

export default App;
