import React, { Component } from 'react'
import Navbar from '../layouts/Navbar'
import SideNav from '../layouts/SideNav'

function OfferedRides() {
    return (
        <div>
            <Navbar />
            <SideNav />
            <div className="main">
                <div class="table">
                    <div class="heading_content">
                        <button>Back</button>
                        <center><h4>Offered Rides</h4></center>
                        <div class="search">
                            <label>Search: </label>
                            <input type="text" />
                        </div>
                    </div>
                    <table>
                        <tr>
                            <th>Date</th>
                            <th>From</th>
                            <th>Destination</th>
                            <th>Price (Tsh)</th>
                        </tr>
                        <tr>
                            <td>20/11/2018</td>
                            <td>Posta</td>
                            <td>Tegeta</td>
                            <td>4000</td>
                        </tr>
                        <tr>
                            <td>13/05/2015</td>
                            <td>POSTA</td>
                            <td>Bagamoyo</td>
                            <td>3000</td>
                        </tr>
                        <tr>
                            <td>20/02/2016</td>
                            <td>POSTA</td>
                            <td>TEGETA</td>
                            <td>3000</td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>

    )

}

export default OfferedRides
