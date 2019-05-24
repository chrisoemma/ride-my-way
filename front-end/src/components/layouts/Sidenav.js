import React, { Component } from 'react'

export class Sidenav extends Component {
    render() {
        return (
            <div className="sidebar">
                <button>FIND A RIDE</button>
                <ul>
                    <li><a href="#home"><i className="fa fa-fw fa-home"></i>Dashbord</a></li>
                    <li><a><i className="fa fa-fw fa-car"></i> Rides
                    <i className="fa fa-angle-right" aria-hidden="true"></i>
                    </a>
                        <div className="inside-navlinks">
                            <ul>
                                <li><a href="/">New ride</a></li>
                                <li><a href="/">Previous ride</a></li>
                            </ul>
                        </div>
                    </li>
                    <li><a href="#services"><i className="fa fa-fw fa-wrench"></i> Settings</a></li>
                </ul>
            </div>

        )
    }
}

export default Sidenav
