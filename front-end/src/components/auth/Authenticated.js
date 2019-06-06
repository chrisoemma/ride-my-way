import React, { Component } from 'react';
import { getJwt } from './Jwt';
import { withRouter } from 'react-router-dom';

class Authenticated extends Component {

    constructor(props) {
        super(props);
        this.state = {
            user: undefined
        }
    }

    componentDidMount() {
        const jwt = getJwt();
        if (!jwt) {
            this.props.history.push('/');
        }
    }

    render() {
        return (
            <React.Fragment>
                {this.props.children}
            </React.Fragment>
        );
    }
}

export default withRouter(Authenticated)
