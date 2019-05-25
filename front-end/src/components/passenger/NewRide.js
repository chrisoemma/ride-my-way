import React, { Component } from 'react'
import Navbar from '../layouts/Navbar'
import SideNav from '../layouts/SideNav'
import Destination from './Destination'
import CurrentMap from './CurrentMap'


export class NewRide extends Component {

    render() {
        return (
            <div>
                <Navbar />
                <SideNav />
                <div class="main">
                    <CurrentMap />
                    <Destination />
                </div>
            </div>
        )
    }
}

export default NewRide
