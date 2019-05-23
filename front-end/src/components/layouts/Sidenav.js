import React, { Component } from 'react'

export class Sidenav extends Component {
    render() {
        return (
            <div className="sidebar">
                <button>FIND DRIVER</button>
                <a href="#home"><i className="fa fa-fw fa-home"></i>Dashbord</a>
                <a href="#services"><i className="fa fa-fw fa-wrench"></i> Settings</a>
            </div>

        )
    }
}

export default Sidenav
