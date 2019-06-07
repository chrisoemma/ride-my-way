import React from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios'

class Register extends React.Component {


    constructor() {
        super();
        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            roleId: 1

        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        });
    }

    submit(e) {
        e.preventDefault();
        axios.post('/api/v1/users/register', {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            password: this.state.password,
            roleId: this.state.roleId
        }).then(res => {
            localStorage.setItem('jwt', res.data.token);
            this.props.history.push('/dashboard');
        }
        );
    }

    render(props) {
        return (

            <div className="register">
                <form onSubmit={e => this.submit(e)}>
                    <label>First Name</label>
                    <input
                        type="text"
                        value={this.state.firstName}
                        name="firstName"
                        onChange={this.handleChange}
                    />
                    <label>Last Name</label>
                    <input
                        type="text"
                        value={this.state.lastName}
                        name="lastName"
                        onChange={this.handleChange}
                    />
                    <label>Email</label>
                    <input
                        type="email"
                        value={this.state.email}
                        name="email"
                        onChange={this.handleChange}
                    />
                    <label>Password</label>
                    <input
                        type="password"
                        name="password"
                        value={this.state.password}
                        onChange={this.handleChange}
                    />
                    <label>Select Category</label>
                    <select
                        value={this.state.roleId}
                        name="roleId"
                        onChange={this.handleChange
                        }>
                        <option value="1">Passenger</option>
                        <option value="2">Driver</option>
                    </select>
                    <button type="submit">Register</button>
                    <div className="nav-links">
                        <li
                            onClick={this.props.checkRegisterUser}>
                            Sign In
                       </li>
                    </div>
                </form>
            </div>
        );
    }

}

export default withRouter(Register);
