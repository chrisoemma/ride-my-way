import React, { Component } from 'react'
import Login from './auth/Login'

export class Home extends Component {
    render() {
        return (
            <div className="home_componnent">
                <h1>Ride-My-Way</h1>
                <Login />
            </div>
        )
    }
}

export default Home
