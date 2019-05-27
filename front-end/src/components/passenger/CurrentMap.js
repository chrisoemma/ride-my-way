import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class CurrentMap extends Component {

    render() {
        return (
            <div style={{ height: '100vh', width: '100%' }}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: 'AIzaSyCDoWXY6XalboEVGKUQ7U0ML93t4m1PryQ' }}
                    center={{ lat: -6.774587, lng: 39.241197 }}
                    defaultZoom={8}
                >
                    <AnyReactComponent
                        lat={59.955413}
                        lng={30.337844}
                        text="My Marker"
                    />
                </GoogleMapReact>
            </div>
        )
    }
}

export default CurrentMap
