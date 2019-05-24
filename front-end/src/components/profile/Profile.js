import React, { Component } from 'react'
import Navbar from '../layouts/Navbar'
import Sidenav from '../layouts/Sidenav'
import Passenger_profile from '../passenger/Passenger_profile'

export class Profile extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <Sidenav />
                <Passenger_profile />
            </div>
        )
    }
}

export default Profile
