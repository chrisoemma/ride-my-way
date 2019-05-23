import React, { Component } from 'react'
import Navbar from '../layouts/Navbar'
import Sidenav from '../layouts/Sidenav'

export class Profile extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <Sidenav />
            </div>
        )
    }
}

export default Profile
