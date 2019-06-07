import React from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios'

class Login extends React.Component {

    constructor() {
        super();
        this.state = {
            email: "",
            password: ""
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
        axios.post('/api/v1/users/login', {
            email: this.state.email,
            password: this.state.password
        }).then(res => {
            localStorage.setItem('jwt', res.data.token);

            this.props.history.push('/profile');
        }
        );
    }

    render(props) {

        return (
            <div className="login" >
                <form onSubmit={e => this.submit(e)}>
                    <label>Email</label>
                    <input
                        type="email"
                        value={this.state.email}
                        name="email"
                        placeholder="email"
                        onChange={this.handleChange}
                    />
                    <label>Password</label>
                    <input
                        type="password"
                        value={this.state.password}
                        name="password"
                        placeholder="************"
                        onChange={this.handleChange}
                    />
                    <button type="submit">Login</button>
                    <div className="nav-links">
                        <li>Forgot Password?</li>
                        <li
                            className="signup"
                            onClick={this.props.checkRegisterUser}>
                            Sign Up</li>
                    </div>
                </form>
            </div>
        )
    }
}

export default withRouter(Login);
