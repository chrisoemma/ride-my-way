import React, { Component } from 'react'
import Navbar from '../layouts/Navbar'
import Sidenav from '../layouts/Sidenav'
import Passenger_profile from '../passenger/Passenger_profile'

export class Profile extends Component {
    constructor() {
        super()
        this.state = {
            isOpen: false
        }
        this.navDropDown = this.navDropDown.bind(this)
    }

    navDropDown() {
        this.setState(prev => {
            return {
                isOpen: !prev.isOpen
            }
        })
    }
    render() {
        return (
            <div>
                <Navbar />
                <Sidenav navDropDown={this.navDropDown} isOpen={this.state.isOpen} />
                <Passenger_profile />
            </div>
        )
    }
}

export default Profile
