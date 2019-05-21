import React, { Component } from 'react'

export class Register extends Component {
    render() {
        return (
            <div className="register">
                <form>
                    <label>Username</label>
                    <input type="text" placeholder="username" />
                    <label>Email</label>
                    <input type="email" placeholder="email" />
                    <label>Password</label>
                    <input type="password" placeholder="************" />
                    <label>Select Category</label>
                    <select>
                        <option>Driver</option>
                        <option>Passenger</option>
                    </select>
                    <button>Register</button>
                </form>
            </div>
        )
    }
}

export default Register
