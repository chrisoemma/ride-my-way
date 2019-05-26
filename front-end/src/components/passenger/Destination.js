import React, { Component } from 'react'

function Destination() {
    return (
        <div style={componentStyle}>
            <form className="destination">
                <label>Destination</label>
                <input type="text" placeholder="location" />
                <button type="submit">Find</button>
            </form>
        </div>
    )
}

const componentStyle = {
    top: '20%',
    position: 'absolute',
    right: '10px',
    width: '600px',
}

export default Destination
