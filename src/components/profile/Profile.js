import React from 'react';
import Navbar from '../layouts/Navbar';
import SideNav from '../layouts/SideNav';
import { firstName, lastName, roleId } from '../auth/Authinfo';

function PassengerProfile() {

    return (

        <React.Fragment>
            <Navbar />
            <SideNav />
            <div className="main">
                <div class="profile_edit">
                    <div className="profile_header">
                        <h4>Edit Profile</h4>
                        <p>Complete your profile</p>
                    </div>
                    <div className="profile_form">
                        <form>
                            <div className="form-group">
                                <input type="text"
                                    className="form-control"
                                    placeholder="First Name"
                                />
                            </div>
                            <div className="form-group">
                                <input type="text"
                                    className="form-control"
                                    placeholder="Last Name"
                                />
                            </div>
                            <div className="form-group">
                                <input type="email"
                                    className="form-control"
                                    placeholder="Email"
                                />
                            </div>
                            <div className="form-group">
                                <input type="text"
                                    className="form-control"
                                    placeholder="County"
                                />
                            </div>
                            <div className="form-group">
                                <input type="text"
                                    className="form-control"
                                    placeholder="City"
                                />
                            </div>
                            <div className="form-group">
                                <input type="text"
                                    className="form-control"
                                    placeholder="Phone Number"
                                />
                            </div>
                            <button type="submit">Update info</button>
                        </form>
                    </div>
                </div>
                <div className="profile_info">
                    <div className="profile_image">
                        <img src={require('../images/profile.jpg')}
                            alt="user"
                        />
                    </div>
                    <div className="profile_body">
                        {roleId() == 1 ? < h6 > Passenger</h6> : < h6 >Driver</h6>}
                        <h4>{firstName()} {lastName()}</h4>
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
