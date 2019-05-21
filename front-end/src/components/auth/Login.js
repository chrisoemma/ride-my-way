import React, { Component } from 'react'

export class Login extends Component {
    render() {
        return (
            <div className="login">
                <form>
                    <label>Email</label>
                    <input type="email" placeholder="email" />
                    <label>Password</label>
                    <input type="password" placeholder="************" />
                    <button>Login</button>
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
