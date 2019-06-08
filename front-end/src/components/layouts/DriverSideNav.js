import React from 'react';
import { Link } from 'react-router-dom';

function DriverSideNav(props) {

    return (

        <div className="sidebar">
            <Link to="/accept_rides"><button>ACCEPT RIDE</button></Link>
            <ul>
                <li><Link to="/dashboard"><i className="fa fa-fw fa-home"></i>Dashboard</Link></li>
                <li><Link to="/profile"><i className="fa fa-fw fa-user"></i>Profile</Link></li>
                <li onClick={props.navDropDown}><Link><i className="fa fa-fw fa-car"></i> Rides
                    <i className="fa fa-angle-right" aria-hidden="true"></i>
                </Link>
                    <div className={props.isOpen ? 'open-navlinks' : 'close-navlinks'}>
                        <ul>
                            <li><Link to="/">Offer a ride</Link></li>
                            <li><Link to="/accept_rides">Ride requests</Link></li>
                            <li><Link to="/offered_rides">Offered rides</Link></li>
                        </ul>
                    </div>
                </li>
                <li><Link to="/users"><i className="fa fa-fw fa-users"></i>Users</Link></li>
                <li><Link to="/all_rides"><i className="fa fa-fw fa-car"></i>All rides</Link></li>
            </ul>
        </div>
    )
}

export default DriverSideNav
