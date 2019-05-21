import React, { Component } from 'react'

export class Navbar extends Component {
    render() {
        return (
            <div className="navbar">
                <header>
                    <nav>
                        <ul>
                            <div className="brand">
                                <li>Ride-My-way</li>
                            </div>
                            <li>Notication</li>
                            <li>Logo</li>
                        </ul>
                    </nav>
                </header>
            </div>
        )
    }
}

export default Navbar
