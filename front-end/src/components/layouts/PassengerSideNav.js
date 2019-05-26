import React from 'react'
import { Link } from 'react-router-dom'

function PassengerSideNav(props) {

    return (
        <div className="sidebar">
            <Link to="/find_ride"><button>FIND A RIDE</button></Link>
            <ul>
                <li><Link to="/passenger_dashboard"><i className="fa fa-fw fa-home"></i>Dashbord</Link></li>
                <li onClick={props.navDropDown}><Link><i className="fa fa-fw fa-car"></i> Rides
                    <i className="fa fa-angle-right" aria-hidden="true"></i>
                </Link>
                    <div className={props.isOpen ? 'open-navlinks' : 'close-navlinks'}>
                        <ul>
                            <li><Link to="/find_ride">Ride Offer</Link></li>
                            <li><Link to="/previous_rides">Previous rides</Link></li>
                        </ul>
                    </div>
                </li>
                <li><a href="#services"><i className="fa fa-fw fa-wrench"></i> Settings</a></li>
            </ul>
        </div>
    )
}

export default PassengerSideNav
