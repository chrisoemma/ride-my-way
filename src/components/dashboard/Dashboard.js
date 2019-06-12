import React from 'react'
import Navbar from '../layouts/Navbar'
import SideNav from '../layouts/SideNav'

function Dashboard() {

    return (

        <React.Fragment>
            <Navbar />
            <SideNav />
            <div class="main">
                <div className="dashboard">
                    <div className="cards">
                        <div className="card-header">
                            <div className="card_icon blue">
                                <center><i className="fa fa-fw fa-car"></i></center>
                            </div>
                            <div className="card-text">
                                <p>Total Rides</p>
                                <h4>200</h4>
                            </div>
                        </div>

                    </div>
                    <div className="cards">
                        <div className="card-header">
                            <div className="card_icon green">
                                <center><i className="fa fa-fw fa-check"></i></center>
                            </div>
                            <div className="card-text">
                                <p>Accepted rides</p>
                                <h4>150</h4>
                            </div>
                        </div>
                    </div>
                    <div className="cards">
                        <div className="card-header">
                            <div className="card_icon orange">
                                <center><i className="fa fa-fw fa-car"></i></center>
                            </div>
                            <div className="card-text">
                                <p>Most visited</p>
                                <h4>Magomeni</h4>
                            </div>
                        </div>
                    </div>
                    <div className="cards">
                        <div className="card-header">
                            <div className="card_icon red">
                                <center><i className="fa fa-fw fa-ban"></i></center>
                            </div>
                            <div className="card-text">
                                <p>Rejected Rides</p>
                                <h4>200</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Dashboard
