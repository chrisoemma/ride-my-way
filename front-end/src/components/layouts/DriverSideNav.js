import React, { Component } from 'react'

export class DriverSideNav extends Component {
    render() {
        return (
            <div className="sidebar">
                <button>ACCEPT RIDE</button>
                <ul>
                    <li><a href="#home"><i className="fa fa-fw fa-home"></i>Dashbord</a></li>
                    <li onClick={this.props.navDropDown}><a><i className="fa fa-fw fa-car"></i> Rides
                    <i className="fa fa-angle-right" aria-hidden="true"></i>
                    </a>
                        <div className={this.props.isOpen ? 'open-navlinks' : 'close-navlinks'}>
                            <ul>
                                <li><a href="/">Offer a ride</a></li>
                                <li><a href="/">Ride requests</a></li>
                                <li><a href="/">Offered rides</a></li>
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
