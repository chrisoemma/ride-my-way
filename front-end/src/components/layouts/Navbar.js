import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Navbar extends Component {
    render() {
        return (
            <div className="navbar">
                <header>
                    <nav>
                        <ul>
                            <li className="brand"><Link to="/">Ride-My-Way</Link></li>
                            <div className="pull-right">
                                {/*These two below nav are reversed due to lack of improper css styles*/}
                                <li><a href="#"><span> Chrisso </span><img src={require('../images/default.png')} alt="user" /></a></li>
                                <li><a href="#"><i className="fa fa-bell badge" data-badge="5" aria-hidden="true"></i></a></li>
                            </div>
                        </ul>
                    </nav>
                </header>
            </div>
        )
    }
}

export default Navbar
