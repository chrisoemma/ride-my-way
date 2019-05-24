import React, { Component } from 'react'
import Navbar from '../layouts/Navbar'
import SideNav from '../layouts/SideNav'

export class PassengerDashboard extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <SideNav />
                <div class="main">

                </div>
            </div>
        )
    }
}

export default PassengerDashboard
