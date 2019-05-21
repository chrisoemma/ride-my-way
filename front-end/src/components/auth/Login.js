import React, { Component } from 'react'

export class Login extends Component {
    render() {
        return (
            <div className="login">
                <form>
                    <label>Email</label>
                    <input type="email" placeholder="email" />
                    <label>Password</label>
                    <input type="password" placeholder="password" />
                    <button>Login</button>
                </form>
            </div>
        )
    }
}

export default Login
