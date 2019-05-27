import React, { Component } from 'react'
import DriverSideNav from '../layouts/DriverSideNav'
import PassengerSideNav from '../layouts/PassengerSideNav'

class SideNav extends Component {
    constructor() {
        super()
        this.state = {
            isOpen: false,
            isDriver: false
        }
        this.navDropDown = this.navDropDown.bind(this)
    }

    navDropDown() {
        this.setState(prev => {
            return {
                isOpen: !prev.isOpen
            }
        })
    }

    render() {
        return (
            <div>
                {this.state.isDriver ?
                    <DriverSideNav navDropDown={this.navDropDown} isOpen={this.state.isOpen} /> :
                    <PassengerSideNav navDropDown={this.navDropDown} isOpen={this.state.isOpen} />}
            </div>
        )
    }
}

export default SideNav



