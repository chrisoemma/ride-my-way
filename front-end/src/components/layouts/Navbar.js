import React, { Component } from 'react'

export class Navbar extends Component {
    render() {
        return (
            <div className="navbar">
                <header>
                    <nav>
                        <ul>
                            <li className="brand"><a href="#">Ride-My-way</a></li>
                            <div className="pull-right">
                                <li><a href="#">Chrisostom <img src="" /></a></li>
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
