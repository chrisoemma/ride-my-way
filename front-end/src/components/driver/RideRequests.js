import React from 'react'
import Navbar from '../layouts/Navbar'
import SideNav from '../layouts/SideNav'
import CurrentMap from '../passenger/CurrentMap'

function RideRequests() {

    return (
        <div>
            <Navbar />
            <SideNav />
            <div class="main">
                <CurrentMap />
                <div class="passenger_info">
                    <button>Accept</button>
                </div>
            </div>
        </div>
    )
}


export default RideRequests