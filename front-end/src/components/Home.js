import React, { Component } from 'react'
import Login from './auth/Login'
import Register from './auth/Register'

export class Home extends Component {
    render() {
        return (
            <div className="home_componnent">
                <h1>Ride-My-Way</h1>
                <Login />
                <Register />
            </div>
        )
    }
}

export default Home
