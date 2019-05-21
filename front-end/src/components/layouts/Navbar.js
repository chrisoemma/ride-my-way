import React, { Component } from 'react'

export class Navbar extends Component {
    render() {
        return (
            <div className="navbar">
                <header>
                    <nav>
                        <ul>
                            <div className="brand">
                                <li><a href="/">Ride-My-way</a></li>
                            </div>
                            <li><a href="#">Notication</a></li>
                            <li><a>Logo</a></li>
                        </ul>
                    </nav>
                </header>
            </div>
        )
    }
}

export default Navbar
