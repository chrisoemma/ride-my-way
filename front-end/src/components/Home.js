import React, { Component } from 'react'
import Login from './auth/Login'
import Register from './auth/Register'

class Home extends Component {
    constructor() {
        super()
        this.state = {
            isUser: true
        }
        this.checkRegisterUser = this.checkRegisterUser.bind(this)
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
            <div>
                <div className="home_componnent">
                    <h1>Ride-My-Way</h1>
                    {this.state.isUser ?
                        <Login checkRegisterUser={this.checkRegisterUser} /> :
                        <Register checkRegisterUser={this.checkRegisterUser} />}
                </div>
            </div>
        )
    }
}

export default Home
