import React from 'react';
import Navbar from '../layouts/Navbar';
import SideNav from '../layouts/SideNav';
import axios from 'axios'
import { getJwt } from '../auth/Authinfo';

class Users extends React.Component {

    state = { users: [] };

    componentDidMount() {
        const jwt = getJwt();
        axios.get('/users', { headers: { Authorization: `Bearer ${jwt}` } })
            .then(res => {
                console.log(res);
                this.setState({ users: res.data.users });
            })
    }
    render() {
        return (

            <React.Fragment>
                <Navbar />
                <SideNav />
                <div className="main">
                    <div className="table">
                        <div className="heading_content">
                            <button>Back</button>
                            <center><h4>All Users</h4></center>
                            <div className="search">
                                <label>Search: </label>
                                <input type="text" />
                            </div>
                        </div>
                        <table>
                            <thead>
                                <tr>
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th>Email</th>
                                    <th>Category</th>
                                    <th>Registered Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.users.map(user => {

                                        return (<tr>
                                            <td>{user.firstName}</td>
                                            <td>{user.lastName}</td>
                                            <td>{user.email}</td>
                                            <td>{user.roleId}</td>
                                            <td>{user.createdAt}</td>
                                        </tr>
                                        );
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </React.Fragment>

        );
    }

}

export default Users;
