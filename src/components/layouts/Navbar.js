import React from 'react';
import { Link } from 'react-router-dom';
import { lastName } from '../auth/Authinfo';

function Navbar() {

    return (

        <div className="navbar">
            <header>
                <nav>
                    <ul>
                        <li className="brand"><Link to="/">Ride-My-Way</Link></li>
                        <div className="pull-right">
                            {/*These two below nav are reversed due to lack of improper css styles*/}
                            <li><Link to="/"> {lastName().toUpperCase()} <img src={require('../images/default.png')} alt="user" /></Link></li>
                            <li><Link to="/"><i className="fa fa-bell badge" data-badge="5" aria-hidden="true"></i></Link></li>
                        </div>
                    </ul>
                </nav>
            </header>
        </div>
    )
}

export default Navbar
