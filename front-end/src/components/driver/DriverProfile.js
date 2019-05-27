import React from 'react';
import Navbar from '../layouts/Navbar';
import SideNav from '../layouts/SideNav';

function DriverProfile() {

    return (
        <React.Fragment>
            <Navbar />
            <SideNav />
            <div class="main"></div>
        </React.Fragment>
    )
}

export default DriverProfile;
