import React, { Component } from 'react'
import { Redirect } from 'react-router-dom';

export class Login extends Component {

    handleSubmit() {
        return <Redirect />;
    }
    render() {
        return (
            <div className="login">
                <form onSubmit={this.handleSubmit}>
                    <label>Email</label>
                    <input type="email" placeholder="email" />
                    <label>Password</label>
                    <input type="password" placeholder="************" />
                    <button type="submit">Login</button>
                    <div className="nav-links">
                        <li>Forgot Password?</li>
                        <li className="signup" onClick={this.props.checkRegisterUser}>Sign Up</li>
                    </div>
                </form>
            </div>
        )
    }
}

export default Login
