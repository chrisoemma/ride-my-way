import React from 'react';
import Navbar from '../layouts/Navbar';
import SideNav from '../layouts/SideNav';

function PassengerProfile() {

    return (

        <React.Fragment>
            <Navbar />
            <SideNav />
            <div class="main">
                <div class="profile_info">
                    <div class="profile_image">
                        <img src={require('../images/profile.jpg')} alt="user" />
                    </div>
                    <div class="profile_body">
                        <h6>Passenger</h6>
                        <h4>Chrisostom Kaweza</h4>
                        <p>Lorem ipsum lorem ipsum
                         loerm Lorem ipsum lorem ipsum loerm Lorem ipsum lorem ipsum loerm</p>
                        <br />
                        <button>update</button>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default PassengerProfile;
