import React from 'react';
import { Link } from 'react-router-dom';

function DriverSideNav(props) {

    return (

        <div className="sidebar">
            <Link to="/accept_rides"><button>ACCEPT RIDE</button></Link>
            <ul>
                <li><Link to="/driver_dashboard"><i className="fa fa-fw fa-home"></i>Dashbord</Link></li>
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
                <li><a href="#services"><i className="fa fa-fw fa-wrench"></i> Settings</a></li>
            </ul>
        </div>
    )
}

export default DriverSideNav
