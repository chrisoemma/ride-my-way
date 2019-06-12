import React from 'react';
import Navbar from '../layouts/Navbar';
import SideNav from '../layouts/SideNav';
import axios from 'axios'
import { getJwt } from '../auth/Authinfo';

class Rides extends React.Component {

    state = { rides: [] };

    componentDidMount() {
        const jwt = getJwt();
        axios.get('/api/v1/rides', { headers: { Authorization: `Bearer ${jwt}` } })
            .then(res => {
                this.setState({ rides: res.data.data });
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
                            <center><h4>All Rides</h4></center>
                            <div className="search">
                                <label>Search: </label>
                                <input type="text" />
                            </div>
                        </div>
                        <table>
                            <thead>
                                <tr>
                                    <th>Passenger</th>
                                    <th>From</th>
                                    <th>Destination</th>
                                    <th>Driver</th>
                                    <th>Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.rides.map(ride => {

                                        return (<tr>
                                            <td>John Frank</td>
                                            <td>{ride.pickupArea}</td>
                                            <td>{ride.Destination}</td>
                                            <td>Zacharia Chani</td>
                                            <td>{ride.createdAt}</td>
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

export default Rides;
