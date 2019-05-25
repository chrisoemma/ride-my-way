import React, { Component } from 'react'
import Navbar from '../layouts/Navbar'
import SideNav from '../layouts/SideNav'
import CurrentMap from './CurrentMap'


export class NewRide extends Component {

    render() {
        return (
            <div>
                <Navbar />
                <SideNav />
                <div class="main">
                    <CurrentMap />
                </div>
            </div>
        )
    }
}

export default NewRide
