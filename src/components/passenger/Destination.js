import React from 'react';
import axios from 'axios';
import { getJwt } from '../auth/Authinfo';
import { withRouter } from 'react-router-dom';


class Destination extends React.Component {

    constructor() {
        super();
        this.state = {
            destination: ""
        }
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(e) {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        });
    }

    submit(e) {
        const jwt = getJwt();
        e.preventDefault();
        axios.post('/rides', {destination: this.state.destination}, { headers: { Authorization: `Bearer ${jwt}` } }
        ).then(res => {
            this.props.history.push('/all_rides');
        }
        );
    }

    render() {
        return (

            <div style={componentStyle}>
                <form className="destination" onSubmit={e => this.submit(e)}>
                    <label>Destination</label>
                    <input
                        name="destination"
                        value={this.state.destination}
                        type="text"
                        placeholder="location"
                        onChange={this.handleChange}
                    />
                    <button type="submit">Find</button>
                </form>
            </div>
        );
    }
}

const componentStyle = {
    top: '20%',
    position: 'absolute',
    right: '10px',
    width: '600px',
}

export default withRouter(Destination);
