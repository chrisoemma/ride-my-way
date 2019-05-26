import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class DriverSideNav extends Component {
    render() {
        return (
            <div className="sidebar">
                <button>ACCEPT RIDE</button>
                <ul>
                    <li><Link to="/driver_dashboard"><i className="fa fa-fw fa-home"></i>Dashbord</Link></li>
                    <li onClick={this.props.navDropDown}><Link><i className="fa fa-fw fa-car"></i> Rides
                    <i className="fa fa-angle-right" aria-hidden="true"></i>
                    </Link>
                        <div className={this.props.isOpen ? 'open-navlinks' : 'close-navlinks'}>
                            <ul>
                                <li><Link to="/">Offer a ride</Link></li>
                                <li><Link to="/">Ride requests</Link></li>
                                <li><Link to="/">Offered rides</Link></li>
                            </ul>
                        </div>
                    </li>
                    <li><a href="#services"><i className="fa fa-fw fa-wrench"></i> Settings</a></li>
                </ul>
            </div>

        )
    }
}

export default DriverSideNav