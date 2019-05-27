import React from 'react'
import { withRouter } from 'react-router-dom';

function Login(props) {

    return (
        <div className="login">
            <form>
                <label>Email</label>
                <input type="email" placeholder="email" />
                <label>Password</label>
                <input type="password" placeholder="************" />
                <button type="submit">Login</button>
                <div className="nav-links">
                    <li>Forgot Password?</li>
                    <li className="signup" onClick={props.checkRegisterUser}>Sign Up</li>
                </div>
            </form>
        </div>
    )
}

export default withRouter(Login)
