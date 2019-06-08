import React from 'react';
import './App.css';
import Home from './components/Home';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Profile from './components/profile/Profile';
import Dashboard from './components/dashboard/Dashboard';
import NewRide from './components/passenger/NewRide';
import PreviousRides from './components/passenger/PreviousRides';
import OfferedRides from './components/driver/OfferedRides';
import RideRequests from './components/driver/RideRequests';
import Authenticated from './components/auth/Authenticated';
import Rides from './components/admin/Rides';

function App() {

  return (

    <Router>
      <React.Fragment>
        <Route exact path="/" component={Home} />
        <Authenticated>
          <Route path="/profile" component={Profile} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/find_ride" component={NewRide} />
          <Route path="/previous_rides" component={PreviousRides} />
          <Route path="/offered_rides" component={OfferedRides} />
          <Route path="/accept_rides" component={RideRequests} />
          <Route path="/all_rides" component={Rides} />
        </Authenticated>
      </React.Fragment>
    </Router>

  );
}

export default App;
