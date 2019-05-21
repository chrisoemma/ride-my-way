import React, { Component } from 'react'
import Login from './auth/Login'
import Register from './auth/Register'

export class Home extends Component {
    constructor() {
        super()
        this.state = {
            isUser: true
        }
    }

    checkRegisterUser() {
        this.setState(prev => {
            return {
                isUser: !prev.isUser
            }
        })
    }
    render() {
        return (
            <div className="home_componnent">
                <h1>Ride-My-Way</h1>
                {this.state.isUser ? <Login /> : <Register />}
            </div>
        )
    }
}

export default Home
